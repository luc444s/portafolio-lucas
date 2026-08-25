# portafolio-lucas

Portafolio personal de **Sihuen Lucas** — desarrollador de software full-stack.

Construido con **React + Vite + TypeScript** sobre [`@systutor/shell`](https://github.com/luc444s/systutor-shell), con theming en runtime vía [`@systutor/themes`](https://github.com/luc444s/systutor-themes).

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- Zustand (tema global)
- `@systutor/shell` / `@systutor/themes` (workspace local en `vendor/`)

## Características

- Hero con terminal estilo macOS/tmux que ejecuta `neofetch` con reveal animado; el tema de la terminal sigue el tema global en vivo.
- Secciones: Proyectos (con captura ampliable en modal), Stack, Experience.
- Captura de `SYSTUTOR GASES INDUSTRIALES` con modal fullscreen.
- SEO básico: meta, Open Graph, Twitter Card, JSON-LD (`Person`), `robots.txt` y `sitemap.xml`.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build   # tsc --noEmit + vite build -> dist/
```

## Deploy

Docker (multi-stage, sirve `dist/` con nginx):

```bash
docker build -t portafolio .
docker run -d --name portafolio -p 80:80 portafolio
```

También desplegable en **Dokploy** o cualquier host estático (Netlify/Vercel) usando la carpeta `dist/`.

## SEO

Los metadatos apuntan a `https://lucas.systutor.com/`. Ajustar `canonical`, `og:url` y `twitter` en `index.html` si cambia el dominio.

## Licencia

MIT — ver [`LICENSE`](LICENSE).
