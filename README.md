# Forest Hills FC platform

One Next.js application for Forest Hills Football Club: the public website, the
online shop and the admin portal, built in stages.

## Stack

- Next.js 16 (App Router, Cache Components), React 19, TypeScript (strict)
- Tailwind CSS 4, with the design tokens in `app/globals.css`
- Fonts: Barlow Condensed (display) and Inter (body), self-hosted via `next/font`
- Supabase (database, auth, storage) arrives in Stage 3. It will use its own
  Supabase project and never the FHCC database.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # route types + tsc
npm run lint
npm run build
```

## Structure

```
app/
  layout.tsx          root HTML, fonts, metadata
  (site)/             public website (header, footer, pages)
components/
  ui/                 design-system primitives (ButtonLink, SectionHeading)
  site/               site chrome (header, mobile nav, footer, crest)
  home/               homepage sections
lib/
  content/            verified club content (temporary source, see below)
  navigation.ts       site navigation
public/
  brand/ sponsors/ shop/   genuine assets taken from fhfc.co.za
```

## Content rules

All club information comes from the club's current website (audited
23 Nov 2026). Nothing is invented: no trophies, fixtures, players or sponsors
that the club has not published. `lib/content/` is a temporary source and will
be replaced by the database and admin portal in later stages.

Assets still needed from the club: a vector crest, real match and team
photography, social media links, full-colour sponsor logos and fixtures.

## Stages

1. Discovery and planning (done)
2. Design system and homepage (this branch)
3. Public pages and Supabase foundation
4. Shop catalogue, variants, inventory and cart
5. Checkout, payments (server-side verification) and orders
6. Admin portal with roles: super admin, website admin, shop admin, order manager
7. Testing and refinement
