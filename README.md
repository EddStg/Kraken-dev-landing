# Kraken Dev Landing

Landing page estática para Kraken Dev con Tailwind CSS compilado localmente y una base SEO orientada a servicios de desarrollo web en México.

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

## Después de publicar

1. Verifica el dominio en Google Search Console.
2. Envía `https://krakendev.netlify.app/sitemap.xml`.
3. Inspecciona la URL principal y solicita su indexación.
4. Conecta un dominio propio cuando sea posible y actualiza todas las URLs canónicas.
