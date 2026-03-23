# 002 Vibe Refinements - Skill-Driven (Mecânica Índia)

## Resumo Arquitetural
Refinamento da Landing Page integrando **Shadcn UI** (para componentes estruturais acessíveis), **Stitch Loop** (para telas/blocks gerados via GenUI) e **Framer Motion** (para micro-interações). A stack passa a usar `npx shadcn@latest` nativamente.

## 1. Instalação e Configuração Core
- **Shadcn Init:** Rodar `npx shadcn@latest init` no diretório raiz do projeto. Selecionar New York, Zinc/Neutral, CSS Variables true.
- **Instalação de Primitivas:** `npx shadcn@latest add accordion sheet carousel hover-card badge separator progress`.
- **Theme Sync:** O arquivo `components.json` e as variáveis em `index.css` devem se alinhar ao dark theme atual (bg-surface-0).

## 2. Navegação & Estrutura (`shadcn-ui`)
- **Sticky Navbar:** Criar `<Header />` usando `<Sheet>` do Shadcn para o menu mobile.
- **FAQ Accordion:** Substituir implementações manuais pelo `<Accordion type="single" collapsible>` focado na experiência mobile-first e acessibilidade de teclado.

## 3. Design & Layout (`stitch-loop` & Tailwind V4)
- **Hero Parallax Stitch:** Utilizar a skill `stitch-loop` para gerar o visual do novo `<HeroSection />`, pedindo ao Stitch a inclusão de gradientes de borracha/asfalto e um badge interativo. Integrar via `react-components`.
- **SocialProof Progress:** Utilizar o `<Progress />` animado de 0 a 100% acoplado a um texto "5.0".

## 4. Mobile & Interação (`shadcn-ui`)
- **Swipeable Services:** Trocar o CSS Grid no mobile pelo `<Carousel>` do Shadcn. `<CarouselContent>` contendo os `<MouseFollowCard>` como `<CarouselItem>`.
- **Trust Quotes Carrossel:** Similar aos serviços, usar `<Carousel opts={{ loop: true }}>` e Autoplay plugin para o depoimento.
- **WhatsApp HoverContext:** Envolver o CTA do mapa ou do hero num `<HoverCard>`, mostrando "Atendimento Rápido em Diadema" como popover nativo.

## 5. Micro-interações Custom
- O `<PulseRing>` será substituído por um SVG de Tachômetro animado, ou mantido dentro da Nova GenUI do Stitch.
- **Radar Ping:** `<MapSection />` ganhando anéis de pulso (`animate-ping` customizado).

---

Ao executar `/vibe-apply`, o Agente TEM QUE usar os comandos do Shadcn CLI listados e seguir o skill guide para Stitch Component extraction.
