# nayko.dev

Source for **[nayko.dev](https://nayko.dev)**, the personal site of **Alexis Sanchis** (`n4yk0`),
fullstack software engineer, web and mobile.

A single bilingual page (English / French): selected work, experience, stack, how I work
with agents and contact, plus a short legal notice.

## Stack

- **Next.js 15** (App Router) and **React 19**, every page statically generated
- **TypeScript**, **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`)
- **next-themes** for light and dark, following the system preference by default
- Geist Sans for text, Geist Serif for page and section titles, Geist Mono for code, self-hosted from
  the `geist` package
- **Vitest** for unit tests, **ESLint 9** (flat config)

## Running locally

```bash
pnpm install
pnpm dev          # http://localhost:3001
```

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build && pnpm start
```

`next build` fails on type and lint errors.

## Internationalisation

Every route lives under `app/[lang]/`; the locale list and negotiation are in `lib/i18n.ts`,
and `middleware.ts` redirects `/` to the visitor's language. All copy is in
`dictionaries/en.json` and `dictionaries/fr.json`. The `Dictionary` type is inferred from the
English file, and `dictionaries/dictionaries.test.ts` fails if the French file drifts from its
structure.

Dictionary strings may contain `[label](href)` links, rendered by `components/rich-text.tsx`.

## Security and SEO

- Security headers (CSP, HSTS, nosniff, frame denial, Referrer-Policy, Permissions-Policy, COOP)
  are defined in `lib/security-headers.ts` and applied in `next.config.ts`. The CSP allows
  `'unsafe-inline'` because Next.js inlines its RSC payload; a nonce-based policy would force
  dynamic rendering.
- `/.well-known/security.txt` (RFC 9116) is generated at build time and expires 364 days later,
  so it needs a deploy at least once a year.
- Canonical and hreflang links, the sitemap, robots.txt, a per-language Open Graph image and a
  schema.org `Person` are built from `lib/seo.ts` and `lib/structured-data.ts`.
- No cookies, analytics or third-party requests.

## Structure

```
app/[lang]/page.tsx              home page and its metadata
app/[lang]/legal/page.tsx        legal notice
app/[lang]/layout.tsx            shell, fonts, theme provider
app/[lang]/opengraph-image.tsx   Open Graph image
app/.well-known/security.txt/    security.txt route
app/sitemap.ts, app/robots.ts
components/sections/             one component per page section
dictionaries/                    all copy, one file per locale
lib/                             site constants, i18n, SEO, security helpers and their tests
middleware.ts                    locale redirect
```

## Contact

[n4yk0@proton.me](mailto:n4yk0@proton.me) · [GitHub](https://github.com/n4yk0) · [LinkedIn](https://www.linkedin.com/in/alexis-sanchis-617301129/)
