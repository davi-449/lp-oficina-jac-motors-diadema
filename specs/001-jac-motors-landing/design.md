# Design & Architecture: Oficina Jac Motors

## 1. Identidade Visual (Design System)
Baseado no template "Dark Technical" automotivo (focado em autoridade e mecânica de precisão).
- **Core Scheme:** Dark Mode (Zinc-950, Slate-900).
- **Primary/Accent Color:** Vermelho Automotivo (`rose-600` ou `red-600`) para remeter a marcas como JAC Motors, ou um tom técnico (Orange/Amber) para destaque nos Calls to Action (CTAs).
- **Typography:** Display arrojada (impacto) e tipografia Sans-Serif geométrica para leitura clara.

## 2. Componentização da Interface
A interface utilizará React / Vite / Tailwind e os seguintes componentes:
- `Navbar.tsx`: Navegação sticky com link direto para agendamento (WhatsApp).
- `HeroSection.tsx`: Background hero dinâmico/impactante focado em transmissão automática e carros, Call to action principal.
- `ServicesBentoBox.tsx`: Grades de Bento Cards listando as especializações: Câmbio CVT, Motor Lifan, Revisão de Freios e ABS.
- `TrustSection.tsx / About`: Sobre a experiência com modelos importados, reforçando a autoridade.
- `TestimonialsSection.tsx`: Feedbacks reais em cards interativos com efeito hover.
- `FAQSection.tsx`: Dúvidas sobre manutenções de marcas chinesas e orçamentos.
- `LocationSection / MapSection.tsx`: Incorporando a geolocalização exata da R. Buenos Aíres, 73.

## 3. Infraestrutura & Integrações
- **Stitch MCP:** Não se aplica (design manual guiado pelos componentes existentes).
- **Supabase MCP:** O site será, primariamente, estático ("Landing Page"). Não há necessidade de persistência de banco de dados no lançamento inicial, porém o boilerplate está pronto para integração futura.
- O WhatsApp do cliente (`11994084135`) atuará como a "engine" de conversão (leads).
