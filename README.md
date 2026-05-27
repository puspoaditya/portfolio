# Aditya Puspo — Portfolio (Next.js 14)

Full-stack portfolio site for a solo developer targeting local service businesses
(barbershops, salons, cleaners, electricians, landscapers, mobile mechanics, plumbers).

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (dark theme, gradient accents)
- Static portfolio detail pages (`/portfolio/[slug]`)
- API route `/api/lead` (optional lead capture; primary CTAs are WhatsApp + email)

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit content
- Profile / contact: `lib/config.ts`
- Portfolio projects: `lib/portfolio.ts`
