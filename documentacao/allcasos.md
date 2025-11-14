# Explicação Resumida da Definição dos Casos de Teste

A definição dos casos veio de três passos:

## 1.🔍 Análise do Figma
Olhei o fluxo principal no Figma para entender como o usuário navega. Isso mostrou as telas essenciais e as ações obrigatórias do carrinho e da compra.

## 2.🖥️ Smoke test
Executei um smoke test para ver o que funcionava de cara. Isso revelou os pontos críticos: carregar a Home, adicionar itens, mexer no carrinho e finalizar compra.

## 3.📝 Escrita dos casos
Com o fluxo entendido, transformei cada ação importante em cenários BDD simples, cobrindo o começo, meio e fim da jornada.

O resultado foram os casos de teste que garantem que o usuário consiga usar o carrinho sem que a aplicação desmonte no processo.

[**🚩Confira tambem detalhes do passo a passo**](/documentacao/relatorio.md)

# Test Case Completo

### S001 – Carregamento inicial 🔥
Garante que a Home aparece como deveria, sem travar e sem sumir com a lista de filmes.

### S002A – Abrir carrinho pelo header 🔥
Confirma que o botão do carrinho realmente leva o usuário ao carrinho e não para Nárnia.

### S002B – Voltar Home pelo logo 🟡
Checa se clicar no logo devolve o usuário para a Home sem fazer a interface pirar.

### S003 – Adicionar itens e validar exibição 🔥
Testa se o carrinho aceita itens, soma quantidades e mostra tudo direito na tela.

### S004A – Carrinho vazio na Home ⚠️
Garante que o contador fica zerado quando não há nada no carrinho, sem criar ilusões.

### S004B – Remoção automática ao zerar 🔥
Certifica que o item desaparece quando chega a zero, sem ficar fantasma na lista.

### S005A – Exibir carrinho vazio ⚠️
Mostra a mensagem de “carrinho vazio” de forma normal quando não tem nada lá.

### S005B – Recarregar carrinho vazio ⚠️
Assegura que recarregar a página não quebra tudo quando o carrinho está vazio.

### S006 – Incrementar item 🔥
Valida que aumentar a quantidade funciona e atualiza subtotal e total.

### S007 – Diminuir item sem remover 🔥
Garante que diminuir quantidade acima de 1 funciona sem apagar o item antes da hora.

### S008A – Esvaziar carrinho diminuindo itens ⚠️
Confere se reduzir todos os itens manualmente limpa o carrinho de forma decente.

### S008B – Remover item pela lixeira ⚠️
Testa remoção direta pelo botão de excluir, para quem não tem paciência de clicar “–”.

### S009 – Finalizar compra 🔥
Checa se o fluxo final realmente funciona e leva à tela de compra concluída.

### S010 – Voltar para Home após compra 🟡
Verifica se o botão de voltar realmente volta e limpa o carrinho.

### S011 – Bloquear limite máximo 🔥
Impede quantidades absurdas (tipo 999), travando no limite permitido.

### S012 – Disponibilidade do serviço 🟡
Só verifica se a API responde e a página não morre.

### S013 – Integridade da API (somente leitura) 🟡
Garante que só GET funciona e ninguém sai deletando coisas sem querer.

### S014 – Persistência do carrinho entre sessões ⚠️
Confere se o carrinho não esquece os itens ao recarregar ou reabrir o navegador.

### S015 – Cálculo de preços com arredondamento 🔥
Evita mostrar totais de matemática alienígena, garantindo valores arredondados.

### S016 – Limite baseado em estoque 🟡
Certifica que ninguém consegue superar o estoque disponível.

### S017 – Comportamento quando a API falha 🔥
Garante que a interface não explode quando a API decide tirar folga.

### S018 – Layout responsivo ⚠️
Confere se a interface não vira um caos ao abrir em celular.

### S019 – Prevenção de valores inválidos 🟡
Evita quantidades negativas, insanidades numéricas e tentativas de hacker-de-garrancho.

[🔥⚠️🟡 Entenda sobre os Ícones de Criticidade](/documentacao/whyall.md)

[🏠Volte ao inicio](/README.md)