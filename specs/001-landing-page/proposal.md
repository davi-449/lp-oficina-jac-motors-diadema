# Master Spec: Landing Page Automecânica India (Ultra-Premium)

## 1. Visão Geral (Overview & Business Goal)
Construir uma Landing Page de altíssima conversão e padrão estético *Ultra-Premium* para a **Automecânica India**, oficina 24 horas localizada em Canhema, Diadema-SP. O objetivo é gerar um ativo digital que transmita **autoridade técnica, profissionalismo visceral e urgência controlada**, capturando leads de emergência (carro na mão de madrugada) e manutenção preventiva com o menor atrito existente (WhatsApp one-tap). A avaliação 5.0 no Google será explorada como prova social irrefutável.

## 2. Dados da Empresa (Client Brief)
- **Nome Fantasia:** Automecânica India
- **Endereço:** R. Treze de Maio, 367 - Canhema, Diadema - SP, 09930-060
- **Telefone/WhatsApp:** (11) 93318-0986
- **Horário:** Aberto 24 horas (7 dias por semana, incluindo feriados)
- **Avaliação Google:** ⭐ 5.0 (Nota máxima)
- **Repositório GitHub:** `lp-mecanica-india-diadema`

## 3. Requisitos Técnicos e Arquitetônicos (Tech Stack)
- **Framework Core:** React 19 + Vite (HMR instantâneo, Rollup-powered build).
- **Estilização e Design System:** Tailwind CSS v4 via `@tailwindcss/vite` (diretivas nativas, sem PostCSS legados) + Radix UI (primitivos Headless para WAI-ARIA compliance).
- **Motor de Animação:** Framer Motion (animações aceleradas por GPU — `transform` e `opacity` offloading para compositing thread, mantendo 60fps constantes sem repaints caros).
- **Otimização de Assets:** Imagens em WebP/PNG otimizadas com `loading="lazy"` abaixo da dobra e `rel="preload"` no LCP Hero Asset. Estratégia de `srcset` responsivo para evitar download de imagens oversized em mobile.
- **Tipografia:** Inter (Google Fonts) com subsetting latino rigoroso e `font-display: swap` para mitigar FOIT.
- **Utilitários:** `clsx`, `tailwind-merge` (merge inteligente de classes sem conflitos), `lucide-react` (ícones SVG tree-shakable).

## 4. Especificações Funcionais (User Stories & UX)
- **US01 (Conversão Zero-Atrito):** Como motorista com o carro quebrado de madrugada, preciso de um botão WhatsApp pulsante e imediatamente visível em menos de 1 segundo, com mensagem pré-preenchida rastreável via UTM.
- **US02 (Proof of Authority via Design):** Como cliente exigente pesquisando no Google, quero um design dark cinematográfico com imagens profissionais, reforçando que "se a aparência é premium, o serviço também é".
- **US03 (Social Proof Imediata):** Como visitante indeciso, quero ver a nota 5.0 do Google com destaque visual e depoimentos reais posicionados estrategicamente para eliminar objeções.
- **US04 (Zero CLS Navigation):** Como usuário mobile, não posso experimentar layout shifts enquanto assets carregam (uso rígido de `aspect-ratio` e skeletons em containers de imagem).

## 5. Métricas de Aceite (Core Web Vitals & Auditoria)
- **Performance:** Lighthouse Score ≥ 95, LCP < 2.5s, TBT < 200ms, CLS < 0.1.
- **Acessibilidade:** Contraste WCAG 2.1 AA em toda a paleta Dark Mode.
- **SEO Master:** OpenGraph Tags completas (`og:image`, `og:title`, `og:description`), Meta description de alta retenção, Schema.org `LocalBusiness` markup no `<head>`.
