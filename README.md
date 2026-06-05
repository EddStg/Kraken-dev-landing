# Kraken Dev Landing

Landing page estática para Kraken Dev con Tailwind CSS compilado localmente.

## Archivos principales

- `index.html`: página principal con SEO, Open Graph y JSON-LD.
- `src/main.js`: componentes reutilizables y navegación activa.
- `src/styles.css`: entrada de Tailwind y estilos complementarios.
- `dist/styles.css`: CSS compilado para producción.
- `tailwind.config.js`: configuración de Tailwind.
- `robots.txt` y `sitemap.xml`: indexación.
- `netlify.toml`, `vercel.json` y `_headers`: configuración de despliegue y headers.

## Despliegue

En Vercel, Netlify o Cloudflare Pages, usa esta carpeta como raíz del sitio.

Comando de build:

```bash
npm run build
```

Directorio de publicación:

```bash
.
```

Si el dominio final cambia y deja de ser `https://krakendev.netlify.app/`, actualiza estas referencias:

- `index.html`: `canonical`, `og:url`, `og:image`, `twitter:image` y JSON-LD.
- `robots.txt`: URL del sitemap.
- `sitemap.xml`: URL principal.
