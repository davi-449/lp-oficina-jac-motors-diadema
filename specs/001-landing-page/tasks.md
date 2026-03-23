# Tarefas de Implementação Técnica e Estrita (Vibe Apply Checklist)

Siga estas tarefas rigidamente em sequência durante a execução (/vibe-apply). **Nenhuma etapa de qualidade deve ser contornada.**

- [ ] **1. Fundação do Repositório & Ferramental Core**
  - [ ] Criar repositório GitHub `lp-mecanica-india-diadema` e clonar localmente.
  - [ ] Bootstrapping: Inicializar Vite + React 19 + TypeScript no diretório do projeto.
  - [ ] Compilador CSS: Instalar e confirmar Tailwind CSS v4 via `@tailwindcss/vite` (sem PostCSS legado).
  - [ ] Motion Library: Instalar `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
  - [ ] Alias Resolution: Configurar `@/*` no `tsconfig.app.json` e `vite.config.ts`.

- [ ] **2. Assets & Typography Optimization**
  - [ ] Gerar imagem hero cinematográfica via `generate_image` (oficina com iluminação dourada/âmbar).
  - [ ] Gerar imagem de mecânico profissional/trust via `generate_image`.
  - [ ] Copiar assets gerados para `src/assets/`.
  - [ ] Configurar Google Fonts (Inter) com preconnect no `index.html`.
  - [ ] Configurar Global Theme no CSS com tokens de cor da paleta "Industrial Luxe" (`@theme`).

- [ ] **3. Implementação dos Componentes Micro-Interativos**
  - [ ] `cn`: Utilitário de merge de classes (`clsx` + `tailwind-merge`).
  - [ ] `Button`: Componente escalável com variantes (Primary âmbar, Outline, Ghost), Glow effect e Hover states magnéticos via Framer Motion.
  - [ ] `PulseRing`: Envoltório animado com anéis de radar pulsantes em cor âmbar/dourado (`scale`, `opacity`).
  - [ ] `MouseFollowCard`: Card Bento com `useRef` + `onMouseMove` para highlight radial gradient seguindo o pointer.

- [ ] **4. Montagem das Macro-Seções**
  - [ ] `HeroSection`: Imagem cinematográfica + overlay gradient + badge pulsante "Aberto 24h" + headline emocional + CTA `<PulseRing />` dourado.
  - [ ] `SocialProofStrip`: Faixa horizontal âmbar com "★★★★★ 5.0 no Google" e micro-animação shimmer.
  - [ ] `ServicesBentoBox`: Grid assimétrico com 4 serviços em `<MouseFollowCard />`, ícones Lucide em containers estilizados.
  - [ ] `TrustSection`: Layout split (narrativa + imagem de autoridade), bloco de depoimento serifado, animações `whileInView`.
  - [ ] `MapSection`: Google Maps com filtros CSS dark + info-cards de localização e horário.
  - [ ] `FloatingWhatsApp`: Botão fixo z-50 com glow verde, `animate-ping`, link `wa.me/5511933180986` com UTM.
  - [ ] `Footer`: Minimalista (Logo + Copyright).
  - [ ] `App.tsx`: Montar todas as seções em sequência com wrapper global dark.

- [ ] **5. Performance & DX Validation**
  - [ ] Rodar `npm run build` e confirmar 0 erros TypeScript e bundle otimizado.
  - [ ] Validar responsividade em 320px, 768px e 1920px (containers `max-w-7xl`).
  - [ ] Verificar que todas as animações Framer Motion passam em strict TS (`as const` nos transition types).

- [ ] **6. SEO & Fechamento**
  - [ ] Atualizar `<title>`, meta description, `og:image`, `og:title`, `og:description` no `index.html`.
  - [ ] Inserir Schema.org `LocalBusiness` markup no `<head>`.
  - [ ] Commit final e `git push` para o repositório remoto.
  - [ ] Validar deploy no Netlify (Framework: Vite, Build: `npm run build`, Output: `dist`).
