# Portfolio - Pablo Maitini

Portfolio personal desarrollado con React + TypeScript + Vite para presentar perfil profesional, experiencia, proyectos y contacto.

## Sitio en producción

- https://pablo-maitini.vercel.app

## Tecnologías principales

- React 19
- TypeScript
- Vite
- Tailwind CSS
- i18next (ES/EN)
- Swiper
- EmailJS
- Vercel Speed Insights

## Funcionalidades

- Landing inicial para selección de idioma (español / inglés)
- Secciones: Hero, About, Experience, Projects, Contact
- Tema claro/oscuro
- Carruseles de imágenes en proyectos
- Formulario de contacto con EmailJS
- SEO base (meta tags, Open Graph, sitemap y robots)

## Instalación y ejecución local

```bash
pnpm install
pnpm dev
```

## Scripts disponibles

- `pnpm dev`: inicia el entorno de desarrollo
- `pnpm build`: genera build de producción
- `pnpm preview`: previsualiza la build
- `pnpm lint`: ejecuta ESLint

## Variables de entorno

Para el formulario de contacto, crear un archivo `.env` con:

```env
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Deploy

El proyecto está desplegado en Vercel y configurado para métricas de rendimiento con Speed Insights.
