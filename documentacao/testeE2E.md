# Testes Automatizados E2E – WeMovies  
**Autor: Gabriel Ando Takenaka**  
Desafio técnico – Automação E2E com Playwright & TypeScript

Este conjunto de testes automatizados utiliza Playwright para validar funcionalidades essenciais do fluxo de compras do WeMovies.  
Cada automação cobre um cenário independente, garantindo que o carrinho e o processo de finalização estejam funcionando conforme o esperado.

Funções auxiliares (helpers) foram usadas para manter o código organizado, reutilizável e fácil de manter.

---

## 📁 Estrutura dos Cenários Automatizados

---

## 🛒 S003 – Adicionar itens e validar exibição

**🎯Objetivo**  
Garantir que a adição de produtos ao carrinho funciona corretamente e que a interface é atualizada como esperado.

**✅Principais validações**
- Seleção de 3 produtos aleatórios  
- Adição de quantidades diferentes (1, 2 e 3 unidades)  
- Alteração visual do botão (cor e quantidade)  
- Abertura do carrinho e validação dos itens exibidos  
- Conferência de nome, preço e quantidade  

**🗂️Helpers utilizados**
- `gerarTresUnicos`  
- `getProductData`  
- `getCartBasicInfo`  

---

## 🗑️ S008 – Remoção manual e esvaziamento completo

**🎯Objetivo**  
Garantir que o usuário consegue remover itens manualmente ou diminuir quantidades até remover o produto do carrinho.

**✅Principais validações**
- Seleção de 3 produtos aleatórios  
- Adição de quantidades diferentes (2, 3 e 4 unidades)  
- Diminuição de quantidade com atualização visual  
- Remoção manual ao zerar quantidade  
- Remoção usando o botão de lixeira  
- Validação de nomes, quantidades e valores após cada ação  

**🗂️Helpers utilizados**
- `gerarTresUnicos`  
- `getProductData`  
- `getCartBasicInfo`  
- `clickMinus`  
- `clickPlus`  
- `clickTrash`  

---

## 💳 S009 – Finalizar fluxo de compra

**🎯Objetivo**  
Simular um fluxo completo de compra do início ao fim.

**✅Principais validações**
- Seleção totalmente aleatória de produtos e quantidades  
- Cálculo próprio de subtotais e total final  
- Comparação com valores exibidos na interface  
- Finalização do pedido  
- Verificação da tela de confirmação  
- Teste do botão **Voltar**  

**🗂️Helpers utilizados**
- `gerarEscolhaDeterminada`  
- `gerarEscolhaRandom`  
- `getProductData`  
- `getCartInfo`  

---

## 🧩 Helpers

Os helpers estruturados em `/helpers/` foram criados para:

- evitar repetição de lógica  
- manter o código mais legível  
- facilitar manutenção futura  

**🗂️Arquivos**
- `cartAddHelpers.ts`  
- `cartHelpers.ts`  
- `cartFlowHelpers.ts`  

---

## 🛠 Pré-requisitos

- Node.js instalado  
- Playwright instalado  
- Projeto configurado com TypeScript  

## ⚙️Instalação do Playwright:

bash
npx playwright install

## ▶️ Execução dos testes

npm run test:e2e
npx playwright test

### ⏯️Executar um cenário específico

npx playwright test S003
npx playwright test S008
npx playwright test S009

## 🐞Debug

npx playwright test --debug

## 🪟 Correção de erros no Windows

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
- Esse comando libera permissões temporárias apenas para o processo atual.

[🏠Volte ao inicio](/README.md)