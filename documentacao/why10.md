
# Justificativa dos Cenários Prioritários

A seleção desses cenários como **Prioridade Alta / Criticidade Alta** foi baseada no que realmente sustenta o funcionamento da aplicação. O foco está no fluxo essencial: carregar os dados, permitir que o usuário adicione produtos ao carrinho, manipule quantidades e finalize uma compra com segurança.

## Por que esses casos são prioritários?

### 1. Garantem que o usuário consiga iniciar o fluxo
Se a Home não carrega corretamente (S001), o usuário não acessa nada. É o primeiro ponto de contato e qualquer erro nessa etapa bloqueia toda a experiência.

### 2. Permitem acessar o carrinho
Abrir o carrinho pelo header (S002A) faz parte da navegação básica. Se essa ação falha, não existe como continuar a jornada de compra.

### 3. Protegem o núcleo da funcionalidade
Adicionar produtos, atualizar contadores e validar a exibição (S003) são ações centrais. Sem isso funcionando, o carrinho deixa de cumprir a função principal.

### 4. Mantêm consistência e integridade dos itens
Cenários como remover itens ao zerar a quantidade (S004B), aumentar quantidade (S006) e diminuir sem remover (S007) garantem que o carrinho se comporte de forma previsível e confiável.

### 5. Asseguram o fechamento da compra
Finalizar a compra (S009) é o objetivo do usuário. Qualquer problema aqui frustra todo o processo anterior. Esse é o cenário que mais afeta conversão.

### 6. Impedem excesso ou comportamento anormal
Bloquear limite máximo (S011) previne entradas inválidas ou abusos. Isso é vital para evitar dados quebrados ou comportamentos inesperados no backend.

### 7. Garantem valores corretos e confiáveis
Cálculo e arredondamento (S015) evitam erros financeiros e inconsistências visuais. Um total errado faz o usuário abandonar o carrinho de imediato.

### 8. Protegem a aplicação contra falhas externas
O cenário de falha da API (S017) garante que a interface continue funcional mesmo quando o backend não responde. Isso evita que a aplicação pare por completo.

---

Esses casos formam a base mínima para garantir que o carrinho funcione, que a compra seja concluída e que a experiência do usuário não seja interrompida. Sem eles, todo o restante perde valor.

📁 [BDD dos 10 cenários prioritários](/documentacao/10casos.md)

[⚠️ Entenda tambem a criticidade de outros itens](/documentacao/whyall.md) 



