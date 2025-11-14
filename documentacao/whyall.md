# Justificativa da Separação por Prioridade

A divisão dos casos de teste em Alta, Média e Baixa prioridade não foi aleatória. Ela segue a lógica básica de sobrevivência da aplicação: o que quebra o fluxo principal vem primeiro, o que irrita o usuário vem depois e o que só incomoda levemente fica por último.

---

## 🔥 Prioridade Alta / Criticidade Alta
Esses cenários estão aqui porque, se um deles falhar, o usuário não consegue comprar absolutamente nada.  
Sem compra, não tem conversão. Sem conversão, o sistema serve de decoração digital.

Inclui:
- Carregamento inicial  
- Abrir o carrinho  
- Adicionar itens  
- Manipular quantidades  
- Remover automaticamente  
- Finalizar compra  
- Calcular valores corretamente  
- Impedir ultrapassar limites  
- Segurar a interface quando a API resolve tirar férias  

Se qualquer um desses quebrar, o fluxo central morre. Por isso essa galera fica no topo.

---

## ⚠️ Prioridade Média / Criticidade Média
Aqui entram os cenários que não matam o fluxo principal, mas deixam a experiência meio torta.  
É aquele tipo de problema que não impede a compra, só faz o usuário questionar a sanidade da interface.

Inclui:
- Carrinho vazio em diferentes telas  
- Recarregar páginas sem perder estado  
- Remover itens manualmente  
- Persistência entre sessões  
- Ajuste em telas menores  

Esses erros enchem o saco, mas não explodem a jornada principal.

---

## 🟡 Prioridade Baixa / Criticidade Baixa
Esses cenários moram na categoria “bom ter”, mas se falharem, nada essencial quebra.  
É o tipo de coisa que o usuário percebe, mas ainda consegue completar a compra sem terapia.

Inclui:
- Voltar para Home pelo logo  
- Voltar após compra concluída  
- Estoque limitado  
- Prevenção de valores absurdos  
- API somente leitura  
- Verificar se a API está apenas respondendo  

Eles são importantes, claro, mas não são parte do coração do fluxo. São mais sobre robustez, boas práticas e evitar que alguém faça bobagem propositalmente.

---

## Resumo da lógica
- **Alta**: garante que a compra aconteça.  
- **Média**: garante que a compra não vire uma experiência ridícula.  
- **Baixa**: garante que ninguém faça besteira, mas não impede a compra caso aconteça.

No fim, a prioridade foi definida pelo mesmo critério que qualquer pessoa sensata usaria:  
**"priorize sempre o fluxo de compra e a experiência do cliente"**.

---

### Casos de Teste – Organizados por Criticidade

### 🔥 Prioridade Alta / Criticidade Alta
- S001 – Carregamento inicial  
- S002A – Abrir carrinho pelo header  
- S003 – Adicionar itens e validar exibição  
- S004B – Remoção automática ao zerar  
- S006 – Incrementar item  
- S007 – Diminuir item sem remover  
- S009 – Finalizar compra  
- S011 – Bloquear limite máximo  
- S015 – Cálculo de preços com arredondamento  
- S017 – Comportamento quando a API falha  

---

### ⚠️ Prioridade Média / Criticidade Média
- S004A – Carrinho vazio na Home  
- S005A – Exibir carrinho vazio  
- S005B – Recarregar carrinho vazio  
- S008A – Esvaziar carrinho diminuindo itens  
- S008B – Remover item pela lixeira  
- S014 – Persistência do carrinho entre sessões  
- S018 – Layout responsivo  

---

### 🟡 Prioridade Baixa / Criticidade Baixa
- S002B – Voltar Home pelo logo  
- S010 – Voltar para Home após compra  
- S016 – Limite baseado em estoque  
- S019 – Prevenção de valores inválidos  
- S012 – Disponibilidade do serviço  
- S013 – Integridade da API (somente leitura)  


[📖 Entenda todos os casos de testes](/documentacao/allcasos.md) 

[🏠Volte ao inicio](/README.md)