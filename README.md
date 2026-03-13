# APDWORLD

Nostalgic personal poster site built as a faux desktop OS with a Frutiger Aero style.

## Stack

- React + Vite
- Modern CSS (glassmorphism, gradients, backdrop blur)
- GitHub Pages deployment via `gh-pages`

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy To GitHub Pages

```bash
npm run deploy
```

The Vite `base` is set to `./` in `vite.config.js`, so this can be hosted from GitHub Pages without hardcoding a repository name.
