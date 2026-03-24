# Checklist de Implementação: 003 Jac Motors Refinement

## Fase 1 — Paleta & Design Tokens
- [ ] 1.1 Atualizar `index.css` com a nova paleta completa (Carmesim `#dc2626`, surfaces mais escuros, accent-star dourado `#f59e0b`).
- [ ] 1.2 Atualizar `MouseFollowCard.tsx` radial-gradient de amber para carmesim `rgba(220,38,38,.06)`.

## Fase 2 — Bugfix do Botão
- [ ] 2.1 Reescrever `PulseRing.tsx`: adicionar `overflow-hidden` no wrapper, reduzir scale para `1.15/1.25`, opacidade para `0.4/0.25`, duration para `2s`.
- [ ] 2.2 Ajustar `Button.tsx`: variante `primary` → `bg-primary text-white`, padding `px-7 py-3.5`, adicionar `tracking-wider uppercase`.

## Fase 3 — Seções Premium
- [ ] 3.1 `HeroSection.tsx`: atualizar gradiente do h1 para `from-primary via-red-400 to-amber-400`, overlay 4 camadas, badge com `shadow-lg`.
- [ ] 3.2 `ServicesBentoBox.tsx`: gradiente do card principal para `to-red-950/15`, linha decorativa, ícones maiores.
- [ ] 3.3 `TrustSection.tsx`: borda lateral `border-l-2 border-primary` nos depoimentos, ícone de aspas decorativo `text-primary/20`.
- [ ] 3.4 `SocialProofStrip.tsx`: gradientes coerentes com nova paleta (red-950).
- [ ] 3.5 `Footer` em `App.tsx`: ícone e texto com `text-primary` carmesim.

## Fase 4 — Imagens Premium
- [ ] 4.1 Gerar `hero_bg.png` via AI com prompt de oficina noturna premium (8K, luzes vermelhas, CVT).
- [ ] 4.2 Gerar `mechanic_trust.png` via AI com prompt de mecânico profissional premium (red lighting, cinematic).
- [ ] 4.3 Copiar as imagens geradas para `src/assets/` e verificar renderização.

## Fase 5 — Validação
- [ ] 5.1 Executar `npm run lint` — 0 erros.
- [ ] 5.2 Executar `npm run build` — 0 erros.
- [ ] 5.3 Commit e push para `origin/main`.
