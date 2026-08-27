# PRD — Ferrán Studio (portfolio landing)

## Problem statement original
Landing page de portfolio estática para un director de arte freelance (Ferrán Studio), sin backend ni base de datos, pensada para hosting gratuito tipo Cloudflare Pages. Diseño fiel a la captura de referencia adjunta: logo PNG propio, tipografías propias (Akrobat para UI, Academy Engraved para el título "Work" — el archivo no llegó; se usa stack serif de sistema Didot/Bodoni/Georgia y hay un bloque @font-face comentado en index.css listo para activarla), titular azul, grid masonry filtrable por categorías con contadores calculados, hover con título, página de detalle por proyecto, secciones About y Contact, footer con copyright, 20 proyectos en un único archivo de datos, placeholders de color sólido, accesibilidad (alt) y SEO (title/description/og/twitter por página), responsive.

## Decisiones del usuario
- Academy Engraved: sustituida por serif editorial de sistema; el usuario subirá el archivo después.
- Idioma de interfaz: inglés (Work / About / Contact).
- Email: artworks@javierferran.com. Los enlaces de redes sociales los rellenará el usuario (ahora href="#").

## Arquitectura
- React SPA (CRA + craco), react-router-dom (BrowserRouter), sin llamadas a backend.
- Datos: /app/frontend/src/data/projects.js (20 proyectos, contadores por categoría calculados con getCategoryCounts).
- Fuentes: /app/frontend/src/fonts/Dual-W00-500.ttf (peso 500, texto general) y Dual-W00-600.ttf (peso 600, títulos) vía @font-face en index.css. Sustituyen a Akrobat (2026-08-27).
- Tokens de diseño en :root de index.css (--color-accent: #1d46c8, --color-ink, --color-muted, --font-editorial).
- Animación: framer-motion (reveal enmascarado del titular, stagger del grid, reveals por scroll), lenis (scroll suave), marquee editorial CSS, parallax en imagen About.
- public/_redirects (/* /index.html 200) para SPA en Cloudflare Pages.
- Páginas: HomePage (/, secciones Work/About/Contact con anclas) y ProjectPage (/work/:slug) con meta por página vía usePageMeta.

## Implementado (2026-08-27)
- Header sticky con logo PNG y nav Work/About/Contact (scroll suave a secciones).
- Hero: titular azul en una línea (desktop) con reveal enmascarado, dos párrafos, link real a Creativepool.
- Work: título serif "Work", submenú ALL/ART DIRECTION/ARTWORKS/BRANDS/WEB/APPS con superíndices calculados (20/5/4/4/3/4), categoría activa subrayada, filtrado sin recarga.
- Grid masonry CSS columns (5/4/2/1 según viewport), hover: imagen a 20% opacidad + título centrado.
- Detalle de proyecto: galería completa + descripción + botón Back to Work.
- About: imagen con parallax + texto editorial en 3 capítulos numerados. Marquee editorial lento entre Work y About.
- Contact: email + 8 iconos lineales (LinkedIn, YouTube, Vimeo, Substack, Instagram, Facebook, Twitter, TikTok).
- Footer copyright. SEO/alt en todas las páginas e imágenes. Responsive verificado (1920px y 390px).

## Verificado
- Filtro Artworks muestra 4 tarjetas; detalle /work/eclipse-solar con título propio en <title>; hover muestra título; navegación por anclas; móvil OK.

## Backlog
- P0: usuario sustituye placeholders por imágenes reales y rellena hrefs de redes sociales; añadir og:image cuando haya imágenes reales.
- P1: subir Academy Engraved a /src/fonts/ y descomentar @font-face.
- P2: navegación prev/next entre proyectos; página 404 dedicada; sitemap.xml/robots.txt al tener dominio.
