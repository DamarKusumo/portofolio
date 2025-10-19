This is a Next.js portfolio for Muhammad Damar Kusumo.

## Tech stack
- Next.js 15 (App Router) + React 19
- TypeScript + Tailwind CSS

## Scripts
- dev: Start development server
- build: Build for production
- start: Run production server
- lint: Run ESLint

## SEO configuration
The app includes SEO best practices:
- Global metadata (title template, description, Open Graph, Twitter)
- robots.txt and sitemap.xml
- JSON-LD for Person and WebSite

To ensure correct canonical URLs and social previews, set your public site URL in the environment:

- NEXT_PUBLIC_SITE_URL=https://your-domain.com

If hosted on Vercel, the app can fallback to Vercel-provided URL.