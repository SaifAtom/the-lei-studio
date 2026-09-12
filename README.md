# The Lei Studio — Website

Single-page website for **The Lei Studio**, a nail salon in Tunis. Built with React and Vite.

## Scripts

```bash
npm install     # install dependencies
npm run dev     # start dev server
npm run build   # production build in dist/
npm run preview # preview the production build
```

## Structure

- `src/data/content.js` — all texts, prices, contact numbers and the map embed URL. Edit here to update content.
- `src/components/` — page sections (Hero, About, Services, Prices, Infos, Contact, Footer, floating WhatsApp/phone buttons).
- `public/logo.jpeg`, `public/images/` — logo and gallery photos, served as static files.
- `src/index.css` — design tokens (colors taken from the logo), layout, and animations.

## Fonts

Loaded from Google Fonts: Pinyon Script (logo-style script), Cormorant Garamond (headings), Montserrat (body and labels).

## Deployment (GitHub Pages)

The site is published at <https://saifatom.github.io/the-lei-studio/>.

- `vite.config.js` sets `base: '/the-lei-studio/'` so asset URLs include the repository name. Change it if the repository is renamed or a custom domain is used (`base: '/'`).
- `.github/workflows/deploy.yml` builds the site and deploys `dist/` on every push to `main`.
- In the repository settings, under **Pages**, set **Source** to **GitHub Actions** (not "Deploy from a branch").
