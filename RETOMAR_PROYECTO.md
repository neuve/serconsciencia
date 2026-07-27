# Prompt para retomar el proyecto Karen Silva

Copia y pega esto al inicio de una nueva sesión:

---

Estoy retomando el proyecto del sitio web de Karen Silva (terapias energéticas, comunicación animal y talleres). El proyecto vive en `C:\Users\mimul\Documents\karensilva website`.

## Contexto del proyecto

Es la migración de un prototipo de diseño en HTML con estilos inline (`prototype/design_handoff_karen_silva/`, incluye README con specs completas, 13 screenshots y assets) a un sitio en **Astro con CSS puro basado en design tokens** (sin Tailwind, sin frameworks de UI). El sitio tiene 14 rutas: `/`, `/sobre`, `/terapias`, `/comunicacion-animal`, `/talleres`, `/testimonios`, `/servicios/[slug]` (7 servicios vía `getStaticPaths`), y `/design-system` (página interna de referencia visual, no enlazada públicamente).

## Estado actual (todo esto ya está hecho)

- **Design system**: `src/styles/tokens.css` (colores, tipografía, espaciado, radios) + `src/styles/global.css` (reset, keyframes, utilidades `.bleed`/`.gutter`). Referencia visual en `/design-system`.
- **Regla de sangrado**: un único token `--gutter` reemplaza los ~5 valores inconsistentes del prototipo original. Regla: fondos/imágenes van full-bleed real sin radio/borde en los extremos (`.bleed`); cualquier elemento con `border-radius`/`border`/`box-shadow` vive dentro de `.gutter`. Esto corrigió el bug de sangrado del prototipo original (bordes/radios que tocaban el borde de la ventana).
- **Logo**: corregido. El `logo-verde.svg` original estaba roto (SVG vacío, sin `href` en sus `<image>`). Ahora se usa `src/assets/logo-flama.png` vía `astro:assets` (`<Image>`), optimizado a WebP, con dimensiones explícitas (38×38 en nav, 44×44 en footer — el bug original era que el footer no tenía dimensiones y el logo se renderizaba a 832×850px).
- **Navegación**: "Inicio" se quitó de la barra y del menú móvil; el logo (en nav y footer) es clicable a `/` con `aria-current="page"` cuando corresponde.
- **Contenido**: `src/data/*.ts` — 7 servicios, 12 testimonios (11 originales + uno rescatado que solo vivía en el extracto del home; se corrigió una comilla sin cerrar), 6 terapias, FAQ, taller. Todo texto literal de la clienta.
- **Componentes**: `src/components/` — Nav, Footer, Button, Eyebrow, SectionHeader, ServiceCard, TherapyCard, TestimonialCard, Faq, LeadMagnet (sin backend aún), ParallaxImage.
- **Home**: la tercera tarjeta de servicios ahora dice "Especiales" (antes decía "Terapias" con fondo plano) y usa la foto `bosque.jpg`, enlaza a `/servicios/especiales`.
- Build limpio (`npm run build`), responsive verificado a 1440px y 375px (nav con hamburguesa bajo 880px), sin overflow horizontal ni elementos con borde/radio tocando el viewport en ninguna página.

## Cómo se construyó (por si hay que repetir el patrón)

Se usó orquestación multiagente: Sonnet para construcción en paralelo (datos, componentes, páginas grupo 1 y 2), Opus para supervisión/auditoría con permiso de editar directamente, y verificación final en el navegador integrado vía JS (auditoría de sangrado con `getComputedStyle`/`getBoundingClientRect`, no captura de pantalla — el screenshot del Browser pane tiene un bug de escalado en este entorno, hay que verificar con JS en vez de confiar en las imágenes).

## Notas del entorno

- Node.js no estaba instalado al inicio; se instaló vía `winget install --id OpenJS.NodeJS.LTS`. En Bash, si `npm`/`node` no están en el PATH, usar `export PATH="/c/Program Files/nodejs:$PATH"`.
- `.claude/launch.json` ya existe configurado para levantar el dev server con el Browser pane (`preview_start` con `name: "karen-silva-dev"`).

## Pendiente / próximo paso

Estábamos a punto de empezar una **revisión página por página** con el usuario (aún no arrancó formalmente). Además, quedan del handoff original (no técnico, del lado de la clienta): precio y fechas reales del taller, backend del lead magnet (hoy solo simula el envío), número de WhatsApp definitivo (se usa `525532407194` del prototipo).

Voy a [describe aquí lo que quieres revisar o hacer ahora].
