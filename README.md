## Testes Automatizados E2E - WeMovies
Autor: Gabriel Ando Takenaka 
Desafio técnico – Automação E2E com Playwright & TypeScript

Este conjunto de testes automatizados utiliza Playwright para validar funcionalidades essenciais do fluxo de compras.
Cada automação cobre um cenário independente, garantindo que a experiência do usuário no carrinho e no processo de finalização esteja funcionando corretamente.

Os testes fazem uso de funções auxiliares (helpers) para manter o código organizado, reutilizável e mais fácil de manter.

## Estrutura dos testes

1. ## S003 – Adicionar itens e validar exibição

## Objetivo:
Verificar se a adição de produtos ao carrinho funciona corretamente e se a interface é atualizada da forma esperada.

## Principais validações:

Seleção de 3 produtos aleatórios.

Adição de quantidades diferentes (1, 2 e 3 unidades).

Verificação da alteração visual do botão (cor e quantidade).

Abertura do carrinho e validação dos itens exibidos.

Conferência de nome, preço e quantidade de cada item.

## Helpers usados:

gerarTresUnicos

getProductData

getCartBasicInfo

2. ## S008 – Remoção manual e esvaziamento completo

## Objetivo:
Garantir que o usuário consegue remover itens manualmente ou diminuir quantidades até que o produto seja removido do carrinho.

## Principais validações:

Seleção de 3 produtos aleatórios.

Adição de quantidades diferentes (2, 3 e 4 unidades).

Ações de diminuir quantidade com atualização do carrinho.

Remoção manual ao zerar a quantidade.

Remoção automática usando o botão de lixeira.

Validação de nomes, quantidades e valores após cada ação.

## Helpers usados:

gerarTresUnicos

getProductData

getCartBasicInfo

clickMinus

clickPlus

clickTrash

3. ## S009 – Finalizar fluxo de compra

## Objetivo:
Simular um fluxo completo de compra, garantindo que todos os cálculos e etapas até a finalização funcionem corretamente.

## Principais validações:

Seleção de produtos e quantidades totalmente aleatórias.

Cálculo próprio de subtotais e total final.

Comparação com os valores exibidos na interface.

Finalização do pedido.

Verificação da tela de compra concluída.

Teste do botão “Voltar” para retornar ao início.

## Helpers usados:

gerarEscolhaDeterminada

gerarEscolhaRandom

getProductData

getCartInfo

## Helpers

## Os helpers ficam na pasta /helpers/ e foram criados para:

evitar repetição de lógica

deixar o teste mais legível

facilitar manutenção futura

## Arquivos utilizados:

cartAddHelpers.ts

cartHelpers.ts

cartFlowHelpers.ts

## Pré-requisitos

Node.js instalado

Playwright instalado

Projeto configurado com TypeScript

## Para instalar o Playwright:

npx playwright install

## Como executar os testes

## Executar todos os testes:

npm run test:e2e
npx playwright test


## Executar apenas um dos cenários:

npx playwright test S003
npx playwright test S008
npx playwright test S009

## Debug  

npx playwright test --debug

## Corrigindo possíveis erros no Windows

## Caso o PowerShell bloqueie scripts ou comandos relacionados ao Playwright, execute:

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

Esse comando libera permissões temporárias apenas para o processo atual, evitando problemas sem alterar configurações permanentes do sistema.