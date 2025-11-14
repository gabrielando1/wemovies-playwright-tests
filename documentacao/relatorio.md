
### 📌 Planejamento Inicial

O desafio consistiu em analisar e testar um e-commerce simplificado no prazo reduzido de **48 horas**, o que exigiu foco total e uma leitura rápida do fluxo da plataforma. A partir do protótipo no Figma e da aplicação funcionando, foi necessário entender a jornada do usuário, identificar os pontos críticos e transformar esse entendimento em documentação clara.

O trabalho envolveu duas partes principais:  
1. **Especificar 10 cenários de teste prioritários**, com critérios de aceitação definidos.  
2. **Implementar testes E2E automatizados em Playwright**, escolhendo os 3 cenários mais críticos para o fluxo.

O prazo apertado adicionou um peso real ao desafio, já que foi preciso equilibrar análise, escrita, automação e organização sem comprometer a qualidade. Mesmo assim, o resultado final reflete um processo estruturado, cobrindo o fluxo essencial da aplicação e garantindo uma avaliação sólida do comportamento do sistema.

Antes de iniciar a implementação, foram realizados três passos fundamentais:


## 1. 📖Estudo do fluxo no Figma
O primeiro passo foi olhar o Figma e seguir o caminho do usuário como alguém normal navegaria: entrar na Home, ver os filmes, abrir o carrinho, adicionar coisas, remover, finalizar compra.  
O Figma mostrou:
- quais telas existiam  
- quais botões realmente importavam  
- quais passos faziam parte do fluxo principal  


Só de olhar o protótipo já dava pra ver onde estavam os pontos críticos.

## 2. 🖥️Smoke test na aplicação
Depois veio o smoke test, que basicamente foi interegir com tudo.  
Isso ajudou a descobrir:
- o que funcionava   
- onde o fluxo travava  
- quais ações eram obrigatórias para proceguir até o fim da compra  

Esse teste rápido mostrou o que precisava virar caso de teste formal.

## 3.  🔍Identificação do que realmente importa
Juntando Figma + smoke test, ficou claro que os casos essenciais eram:
- carregar a Home  
- adicionar itens  
- manipular quantidades  
- remover itens  
- finalizar compra  
- lidar com falhas da API  

Isso tudo sustenta o funcionamento real da plataforma, então virou prioridade.

## 📝 Escrita dos cenários
Com o fluxo claro, foi hora de transformar tudo em BDD.  
Cada cenário foi escrito definindo:
- **Given** (estado inicial)  
- **When** (ação do usuário)  
- **Then** (resultado esperado)  

Só traduzir o fluxo real para um formato testável.

---

### 🕒 Tempo Investido por Etapa

| Etapa | Tempo estimado |
|------|----------------|
| Análise do Figma e do app | ~1h |
| Smoke Test | ~1h |
| Definir os testes| ~20min |
| Escrita dos Casos de Teste BDD | ~50min |
| Configuração inicial do projeto (Playwright + TypeScript) | ~30min |
| Implementação dos 3 cenários E2E | ~2h30 |
| Criação dos helpers reutilizáveis | ~1h |
| Revisão, ajustes e refatorações | ~40min |
| Documentação final + organização do repositório | ~1h40|


**Tempo total aproximado:** **9h30**
***Obs.: Horário de trabalho das 17h as 22h após meu expediente***

---

### 🧠 Decisões Técnicas Importantes

- Uso de **helpers** para evitar repetição de lógica e manter testes curtos e descritivos.  
- Separação clara entre coleta de dados (ex.: `getProductData`) e ações (ex.: `clickPlus`, `clickMinus`).  
- Uso de **seleções aleatórias controladas** para permitir testes dinâmicos sem comprometer a confiabilidade.  
- Escolha de validar **subtotais e total final calculando por conta própria**, garantindo que o teste não dependa apenas do valor exibido.

---

### ✔ Resultado Final e Conclusão

O desafio foi concluído dentro do prazo proposto.  
As entregas atendem aos requisitos solicitados:

- 10 cenários documentados com critérios de aceitação  
- 3 cenários automatizados usando TypeScript + Playwright  
- Projeto organizado, com boa separação de responsabilidades  
- README completo e estruturado  

O conjunto final demonstra:

- Cobertura adequada do fluxo principal do usuário  
- Uso de boas práticas de automação  
- Clareza no material entregue  
- Estrutura escalável para inclusão de novos cenários futuramente  


![Bug da API 500](/documentacao/falhaAPI.png)

***Obs.: Ao testar se haveria alguma tratativa para a falha da Api foi descobertoque não há, a página so quebra estragando a experiencia do usuário.*** 

O desafio foi concluído com sucesso, entregando documentação consistente e testes automatizados robustos e legíveis.

[🏠Volte ao inicio](/README.md)