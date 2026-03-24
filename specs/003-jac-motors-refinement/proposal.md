# Requisitos de Redesign Premium: Oficina Jac Motors (003)

## 1. Contexto e Problema
O usuário reprovou a versão atual da LP por dois motivos principais:
1. **Bug visual:** O botão CTA principal (envolto pelo `PulseRing.tsx`) pisca de forma irregular, cresce desproporcionalmente e some da tela — causando uma experiência amadora.
2. **Design genérico:** A página perdeu completamente a identidade "Dark Tech Premium" do template original (Mecânica Índia). A paleta atual usa um Amber (#f59e0b) genérico sem personalidade, os cards são visuais mas faltam detalhes refinados, e as imagens de fundo são de baixa qualidade.

## 2. Objetivos do Redesign
- **Corrigir o PulseRing** para que o efeito de pulso seja suave, contido e não quebre o layout.
- **Elevar a paleta de cores** de Amber genérico para uma paleta automotiva premium: Vermelho Carmesim escuro + detalhes dourados como acentos.
- **Refinar cada seção** com micro-detalhes visuais: gradientes multi-camada, bordas sutis, glow effects controlados, tipografia com hierarquia forte.
- **Gerar novas imagens** com prompts AI detalhados focados em "oficina automotiva premium dark" com qualidade HD.
- **Melhorar os Bento Cards** com ícones decorativos maiores, linhas diagonais decorativas, e hover effects mais ricos.
- **Polir a TrustSection** com depoimentos visualmente mais impactantes (ícone de aspas estilizado, borda accent lateral).
- **Refinar o SocialProofStrip** com animação shimmer mais sutil e cores coerentes com a nova paleta.

## 3. User Stories
- **US-01:** Como visitante da LP, quero ver uma página que transmite autoridade técnica e premium desde o primeiro segundo, com cores ricas e impressões de alta qualidade.
- **US-02:** Como lead, quero clicar no botão de agendamento sem que ele esteja bugado ou inacessível.
- **US-03:** Como cliente da agência, quero que a LP da Jac Motors tenha a mesma qualidade visual (ou superior) à da Mecânica Índia.

## 4. Critérios de Aceite
- [ ] O PulseRing não vaza do container do botão, não some e não cresce além de 20% do tamanho original.
- [ ] A paleta principal mudou de Amber para Carmesim/Vermelho Premium com acentos dourados sutis.
- [ ] Todas as seções (Hero, Services, Trust, SocialProof, Map, Footer) possuem detalhes visuais refinados (gradientes, bordas, glows).
- [ ] As imagens de Hero e Trust foram regeneradas em alta qualidade com prompt específico para oficina automotiva dark premium.
- [ ] O build passa sem erros (`npm run lint && npm run build`).
