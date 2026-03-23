# Arquitetura de Design e UI/UX — Automecânica India (Ultra-Premium Spec)

## 1. Design System & Tokens (Tailwind v4)
Identidade visual própria para diferenciar completamente da Mecânica Japonês. Conceito visual: **"Industrial Luxe"** — fusão de acabamento industrial bruto com sofisticação dark premium. Paleta quente com tons âmbar/dourado como acento, evocando calor mecânico e confiança.

### 1.1. Core Palette
| Token             | Hex         | Uso                                          |
|-------------------|-------------|----------------------------------------------|
| Surface L0        | `#0a0a0a`   | Fundo absoluto (preto carbon)                |
| Surface L1        | `#171717`   | Cards, containers `backdrop-blur-xl`         |
| Surface L2        | `#262626`   | Borders sutis, separadores hover             |
| Primary Brand     | `#f59e0b`   | Âmbar/Dourado (CTA, destaques, urgência)     |
| Primary Hover     | `#d97706`   | CTA hover state                              |
| Accent Trust      | `#22c55e`   | Verde (status "Aberto 24h", confiança)       |
| Accent Star       | `#facc15`   | Amarelo estrela (5.0 Google Rating)          |
| WhatsApp          | `#25D366`   | Botão flutuante e CTA de emergência          |
| Text Primary      | `#fafafa`   | Headlines, texto principal                   |
| Text Secondary    | `#a3a3a3`   | Subtextos, descrições                        |

### 1.2. Tipografia
- **Display/Headlines:** Inter 800 (ExtraBold), `tracking-tight`, `leading-tight`.
- **Body:** Inter 300/400 (Light/Regular), `leading-relaxed`.
- **Accent/Quotes:** Serif stack (Georgia fallback) para depoimentos e cotações de credibilidade.

## 2. Estrutura de Interface Altamente Diferenciada

### 2.1. Hero Section — "Golden Hour Workshop"
- **Background:** Imagem cinematográfica gerada de oficina com iluminação âmbar/dourada quente (Golden Hour). Filtro overlay gradiente `from-[#0a0a0a]/85 via-[#0a0a0a]/50 to-[#0a0a0a]`.
- **Badge Pulsante:** Indicador `⚡ Aberto Agora • 24h • Diadema` com dot animado verde e fundo glassmorphism.
- **Headline:** Tipografia massiva focando na dor: "Precisa de um mecânico **agora**? Estamos prontos."
- **CTA Stack:** Botão primário envolvido pelo componente `<PulseRing />` com efeito radar dourado. Subtext com trust-triggers: "✓ Nota 5.0 no Google", "✓ Atendimento Imediato".

### 2.2. Social Proof Strip — "5 Estrelas Reais"
- **Inline Badge:** Faixa âmbar horizontal exibindo `★★★★★ 5.0 no Google | Avaliação Máxima` com micro-animação de shimmer/glow.
- **Posicionamento:** Logo abaixo do Hero, antes de qualquer outra seção, maximizando o efeito de Halo Cognitivo.

### 2.3. Services Bento Grid — "Força Bruta Organizada"
- Layout CSS Grid assimétrico (`grid-cols-1 md:grid-cols-3` com spans variados).
- Cada card usa o componente `<MouseFollowCard />` com radial gradient tracking no `onMouseMove`, iluminação de borda seguindo o ponteiro (efeito tátil Apple-like).
- **Cards de Serviço:** Socorro Express 24h, Manutenção Preventiva/Corretiva, Elétrica e Injeção Eletrônica, Atendimento a Domicílio.
- **Ícones:** `lucide-react` com containers circulares em `bg-primary/10` e `border-primary/20` para o card de destaque.

### 2.4. Trust Section — "O Mecânico que Você Confiaria à Família"
- Layout split horizontal: Texto narrativo (esquerda) + Imagem profissional de autoridade (direita) com `rounded-[2.5rem]` e glow decorativo atrás.
- Animação `whileInView` no Framer Motion com `opacity + x translation`.
- Bloco de depoimento estilizado com tipografia serifada itálica e barra accent.
- Copy: "Nota 5.0 sem pedir. Preço combinado é preço final. Transparência não é diferencial, é padrão."

### 2.5. Location & Map — "Dark Cartography"
- Google Maps embed com filtros CSS de inversão (`invert(90%) hue-rotate(180deg) grayscale(20%)`) para manter a estética dark sem API key customizada.
- Layout split: Info-cards (Endereço com ícone, Horário com ícone) na esquerda + Mapa dark estilizado à direita (`lg:grid-cols-12`).
- Link "Abrir GPS Agora" com ícone de seta.

### 2.6. Floating WhatsApp & Footer
- **FloatingWhatsApp:** Botão fixo `bottom-6 right-6 z-50` com `bg-whatsapp`, shadow glow verde, `animate-ping` no contorno, link para `wa.me/5511933180986` com mensagem UTM pré-preenchida.
- **Footer Minimalista:** Logo + Copyright, em `bg-[#050505]` com `border-t border-white/5`.

## 3. Rastreio & Telemetria
- UTM Variables na URL do WhatsApp (`?text=Olá, vim pela Landing Page...`).
- Estrutura preparada para injeção futura de Meta Pixel / Google Tag Manager via `<script>` lazy ou Partytown offloading.
