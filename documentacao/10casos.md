# Feature: Fluxo essencial de compra e manipulação do carrinho

## S001 – Carregamento inicial
Scenario: Exibir lista de filmes após loading  
**Given** que estou na Home (WeMovie)  
**When** a aplicação inicia o carregamento dos dados  
**Then** devo ver uma tela de loading  
**When** os dados retornam da API  
**Then** a tela de loading deve desaparecer  
**And** a lista de filmes deve ser exibida corretamente  
**And** nenhum componente deve falhar na renderização

## S002A – Abrir carrinho pelo header
Scenario: Navegar para o carrinho pelo ícone do header  
**Given** que estou na Home  
**When** clico no ícone do carrinho no header (Meu Carrinho) 
**Then** devo ser redirecionado para /cart  
**And** a página do Meu Carrinho deve carregar corretamente

## S003 – Adicionar itens e validar exibição
Scenario: Adicionar itens ao carrinho e validar detalhes  
**Given** que estou na Home  
**When** adiciono um produto (clicar Adicionar ao carrinho) 
**Then** o contador do carrinho deve mostrar 1
**And** o botão fica verde  
**When** adiciono o mesmo produto novamente  
**Then** o carrinho deve exibir esse produto com quantidade 2  
**When** adiciono um segundo produto diferente 
**Then** o carrinho deve apresentar 3 itens no total  
**And** o botão fica verde
**When** acesso /cart (Botão Meu Carrinho)
**Then** devo ver para cada item nome, preço unitário, quantidade e subtotal  
**And** o total geral deve estar correto  


## S004B – Remoção automática ao zerar
Scenario: Remover um item do carrinho quando a quantidade chega a zero  
**Given** que estou em /cart 
**And** tendo um item no carrinho com quantidade 1  
**When** clico no botão "-"  
**Then** a quantidade deve se tornar zero  
**And** o item deve ser removido automaticamente do carrinho  
**And** o total geral deve ser recalculado

## S006 – Incrementar item
Scenario: Aumentar a quantidade de um item no carrinho  
**Given** que estou em /cart 
**And** tenho um item no carrinho  
**When** clico no botão "+"  
**Then** a quantidade deve aumentar em 1  
**And** o subtotal deve ser atualizado  
**And** o total geral deve refletir o novo valor

## S007 – Diminuir item sem remover
Scenario: Diminuir a quantidade sem remover o item  
**Given** que estou em /cart 
**And** tenho um item com quantidade maior que 1  
**When** clico no botão "-"  
**Then** a quantidade deve diminuir em 1  
**And** o item deve permanecer no carrinho  
**And** os valores devem ser recalculados corretamente

## S009 – Finalizar compra
Scenario: Finalizar compra com sucesso  
**Given** que estou no /cart 
**And** tenho itens no carrinho  
**When** clico no botão "Finalizar Compra"  
**Then** devo ser redirecionado para /purchase-made  
**And** devo ver uma mensagem de confirmação de compra  
**And** exibi uma imagem especifica (rapaz de branco)
**And** exibi um botão de voltar 
**And** nenhum erro deve ser exibido

## S011 – Bloquear limite máximo
Scenario: Impedir que a quantidade ultrapasse o limite máximo permitido  
**Given** que estou em /cart 
**And** tenho um item no carrinho  
**And** o limite máximo permitido é conhecido (ex: 10)  
**When** clico no botão "+" até atingir o limite  
**Then** a quantidade deve parar no valor máximo  
**And** o botão "+" deve ficar desabilitado ou não reagir  
**And** nenhum valor acima do limite deve ser aceito, mesmo via DevTools

## S015 – Cálculo de preços com arredondamento
Scenario: Exibir subtotais e total com arredondamento correto  
**Given** que estou em Home 
**And** tenho itens com valores decimais no carrinho  
**When** acesso /cart  
**Then** cada subtotal deve apresentar arredondamento em duas casas decimais  
**And** o total final deve ser a soma dos subtotais com arredondamento coerente  
**And** não devem aparecer valores como 19.99999 ou 20.000001

## S017 – Comportamento quando a API falha
Scenario: Manter o fluxo quando a API falha  
**Given** que estou na Home  
**When** a API retorna erro (como 500, timeout ou resposta inválida)  
**Then** a aplicação deve exibir uma mensagem amigável ao usuário  
**And** a interface não deve quebrar  
**And** o layout deve permanecer visível  
**And** a aplicação deve impedir ações dependentes de dados ausentes


[🏠Volte ao inicio](/README.md)