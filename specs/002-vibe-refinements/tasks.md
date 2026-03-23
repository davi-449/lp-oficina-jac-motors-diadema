# Tasks - Mecânica Índia Vibe Refinements (Skill-Driven)

## Fase 1: Setup Shadcn & Foundation
- [ ] Inicializar Shadcn (`npx shadcn@latest init`) com estilo dark/zinc e atualizar `tsconfig.json` paths se necessário.
- [ ] Adicionar componentes core: `npx shadcn@latest add accordion sheet carousel hover-card badge progress`.
- [ ] Sincronizar variáveis CSS do Shadcn com o tema atual (`index.css`).

## Fase 2: Navegação & Estrutura (Shadcn)
- [ ] Construir `<StickyNavbar />` usando `<Sheet>` para a gaveta mobile.
- [ ] Criar `<FAQSection />` usando `<Accordion>` do Shadcn na base da Landing Page.

## Fase 3: Design & Hero (Stitch + Components)
- [ ] (Stitch) Obter ou gerar o novo design via Stitch para a `<HeroSection />` com Parallax e UI Premium.
- [ ] Extrair o código do Stitch usando a skill `react-components` e aplicá-lo em `src/components/sections/HeroSection.tsx`.
- [ ] Substituir estrelas estáticas no `<SocialProofStrip />` por um `<Progress value={100} />` simulando rating 5.0 animado.

## Fase 4: Mobile-First (Shadcn Carousels)
- [ ] Refatorar `<ServicesBentoBox />` no viewport mobile para usar `<Carousel>` do Shadcn preservando o visual desktop.
- [ ] Refatorar depoimento na `<TrustSection />` para um `<Carousel>` de 3 opiniões com Autoplay plugin.
- [ ] Adicionar `<HoverCard>` contextual nos links e botões do Hero/WhatsApp.

## Fase 5: Integração Final & QA
- [ ] Revisar compatibilidade do Tailwind v4 com os utilitários do Shadcn gerados (ex: `cn()` utility).
- [ ] Adicionar SVG do Ping (Radar) no `<MapSection />`.
- [ ] Validar lint, types (`npm run build`) e scroll em 60fps.
- [ ] Push na main.
