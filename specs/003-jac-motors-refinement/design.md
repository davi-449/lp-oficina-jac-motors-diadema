# Design System: Jac Motors Refinement Premium

## 1. Visual Theme & Atmosfera
- **Mood:** "Midnight Garage" — Atmosfera de oficina técnica premium num turno noturno. Escura, técnica, com destaques de vermelho carmesim que remetem a equipamentos de alta performance.
- **Filosofia:** Minimalismo high-contrast com micro-detalhes que revelam sofisticação (bordas 1px, glows sutis, gradientes multi-camada).

## 2. Paleta de Cores (Mudança Completa)

| Token | Cor Atual (Genérica) | Nova Cor (Premium) | Papel Funcional |
|---|---|---|---|
| `--color-primary` | `#f59e0b` (Amber) | `#dc2626` (Vermelho Carmesim Intenso) | CTAs, destaques de título, ícones ativos |
| `--color-primary-hover` | `#d97706` (Amber escuro) | `#b91c1c` (Carmesim Profundo) | Hover states de botões e links |
| `--color-accent-trust` | `#22c55e` (Verde) | `#22c55e` (Verde — mantido) | Botão WhatsApp/CTA principal, badge "aberto" |
| `--color-accent-star` | `#facc15` (Amarelo) | `#f59e0b` (Dourado Quente) | Estrelas de avaliação, detalhes premium |
| `--color-surface-0` | `#0a0a0a` | `#080808` (Preto Absoluto) | Fundo principal — mais profundo |
| `--color-surface-1` | `#171717` | `#111111` (Carvão Noturno) | Cards e containers |
| `--color-surface-2` | `#262626` | `#1a1a1a` (Grafite) | Elementos secundários |

### Gradientes Decorativos
- **Hero headline gradient:** `from-primary via-red-400 to-amber-400` (vermelho fluindo para dourado — automotivo premium)
- **Card hover glow:** `radial-gradient(... rgba(220,38,38,.06) ...)` (carmesim sutil no MouseFollowCard)
- **Background overlays:** 4 camadas de gradiente (`from-black/90 via-black/60 via-transparent to-black`)

## 3. Tipografia
- **Família:** `Inter` (mantido — excelente para interfaces técnicas)
- **Headlines (h1):** `font-extrabold`, `tracking-tight`, `leading-[1.05]` — mais apertado para impacto
- **Body:** `font-light`, `text-zinc-400`, `leading-relaxed` — contraste máximo com os títulos
- **Depoimentos:** `font-serif italic` (mantido, elegante)
- **Labels/Badges:** `tracking-widest uppercase text-xs` — militar/técnico

## 4. Componentes (Mudanças Específicas)

### PulseRing.tsx — CORREÇÃO CRÍTICA
**Problema:** `scale: 1.5` e `scale: 1.8` escalam o ring absoluto MUITO além do container, causando o "piscar gigante e sumir".
**Solução:**
- Adicionar `overflow-hidden` ao wrapper `div` principal
- Reduzir `scale` de `1.5/1.8` para `1.15/1.25` (pulso sutil, não explosivo)
- Mudar `opacity` initial de `0.8/0.5` para `0.4/0.25` (mais suave)
- Aumentar `duration` de `1.5s` para `2s` (ritmo calmo e premium)

### Button.tsx — REFINAMENTO
- Adicionar `text-sm tracking-wider uppercase font-bold` ao estilo base (letras técnicas)
- Reduzir padding de `px-8 py-4` para `px-7 py-3.5` (mais compacto e clean)
- A variante `primary` passa a usar `bg-primary text-white` (texto branco sobre vermelho)

### MouseFollowCard.tsx — POLISH
- Mudar a cor do radial-gradient de `rgba(245,158,11,.08)` (amber) para `rgba(220,38,38,.06)` (carmesim)
- Adicionar `hover:border-white/10` ao card para revelar bordas no hover

### HeroSection.tsx — ELEVATION
- Gradiente do texto do h1: `from-primary via-red-400 to-amber-400` (substituir `from-primary to-amber-300`)
- Overlay do background: usar 4 camadas de gradiente para profundidade cinematográfica
- Badge "Aberto Agora": adicionar `shadow-lg shadow-accent-trust/20` para glow verde sutil

### ServicesBentoBox.tsx — RICHNESS
- Card principal (col-span-2): gradiente `from-surface-1 to-red-950/15` (carmesim sutil ao invés de amber)
- Adicionar uma linha decorativa `h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent` entre o título da seção e os cards
- Ícones: aumentar para `w-10 h-10` nos cards maiores

### TrustSection.tsx — TESTIMONIALS PREMIUM
- Adicionar borda lateral colorida (`border-l-2 border-primary`) nos cards de depoimento
- Ícone de aspas decorativo (`"`) em `text-primary/20 text-6xl` no fundo de cada card
- Aumentar contraste da imagem com gradiente overlay mais rico

### SocialProofStrip.tsx — COHERENCE
- Mudar de `primary/10` para usar `red-950/30` nos gradientes (coerência com nova paleta)

## 5. Imagens (AI Generation)

### Hero Background (`hero_bg.png`)
**Prompt sugerido:** "Professional automotive mechanic workshop at night, dark moody lighting, red accent lights, CVT transmission parts on workbench, cinematic photography, 8K quality, dramatic shadows, clean organized garage, premium atmosphere, ultra realistic"

### Trust/About Image (`mechanic_trust.png`)
**Prompt sugerido:** "Professional automotive mechanic in dark uniform working on car engine under dramatic red workshop lighting, close-up, depth of field, premium quality portrait, dark background, confident expression, cinematic color grading"

## 6. Layout Principles
- **Grid 8pt:** Todos os espaçamentos seguem múltiplos de 8px
- **Max-width:** Container `max-w-7xl` (mantido)
- **Seções:** `py-24` padrão (mantido)
- **Cards:** `rounded-3xl` com `border-white/5` (mantido — orgânico e premium)
