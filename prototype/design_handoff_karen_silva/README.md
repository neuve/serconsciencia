# Handoff: Sitio web Karen Silva — Terapias y Talleres

## Overview
Sitio público de una practicante de terapias energéticas y comunicación animal (Karen Silva, México).
Objetivo: presentar su propuesta, explicar cada servicio con profundidad, mostrar testimonios reales
y llevar al usuario a agendar una sesión o inscribirse a un taller (contacto por WhatsApp/email).

Es un sitio de **una sola página con navegación por estado** (no hay rutas todavía). **13 pantallas en total**:

Seis vistas principales:
1. `inicio` — Inicio
2. `sobre` — Sobre mí
3. `terapias` — Terapias (índice de las 6 terapias)
4. `animal` — Comunicación animal y Doula del alma animal
5. `taller` — Talleres
6. `testimonios` — Testimonios

Y siete detalles de servicio, todos renderizados por la misma plantilla `servicio` (param `svc`):

| `svc` | Nombre | Entrada desde |
|---|---|---|
| `canal` | Canalización y TRE | Inicio (tarjeta 1) · Terapias |
| `akashicos` | Lectura de registros akáshicos | Terapias (Próximamente) |
| `rosas` | Sanación cuántica con Rosas | Inicio (secundaria) · Terapias |
| `ankh` | Limpieza con Cruz Ankh | Inicio (secundaria) · Terapias |
| `angelical` | Canalización angelical | Terapias (Próximamente) |
| `especiales` | Sesiones especiales | Inicio (tarjeta 3) · Terapias |
| `doula` | Doula del alma animal | Comunicación animal |

## About the Design Files
Los archivos en `design/` son **referencias de diseño hechas en HTML** — prototipos que muestran la
apariencia y el comportamiento deseados. **No son código de producción para copiar tal cual.**

La tarea es **recrear estos diseños en el entorno del codebase destino** (Next.js/React, Astro, Vue,
etc.) usando sus patrones, componentes y librerías establecidas. Si todavía no existe un codebase,
elegir el framework más apropiado — recomendación: **Next.js (App Router) + Tailwind**, porque el sitio
es mayormente contenido estático con navegación entre 7 vistas y se beneficia de rutas reales y SEO.

Notas de implementación importantes:
- Reemplazar la navegación por estado (`state.page`) por **rutas reales** (`/`, `/sobre`, `/terapias`,
  `/comunicacion-animal`, `/talleres`, `/testimonios`, `/servicios/[slug]`). El diseño usa estado sólo
  porque el prototipo es un archivo único.
- El prototipo usa estilos inline por restricción de la herramienta de prototipado. En producción usar
  el sistema de estilos del codebase (Tailwind / CSS modules) con los tokens listados abajo.
- Los textos en el prototipo son **contenido real proporcionado por la clienta** (testimonios,
  descripciones de servicios). Deben conservarse literalmente; los precios y fechas de taller están
  marcados como "por confirmar".

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografía, escalas, radios y animaciones son finales. Debe
recrearse pixel-perfect en desktop. El prototipo **no tiene breakpoints móviles implementados** — el
desarrollador debe derivar el layout móvil (ver "Responsive" abajo).

## Design Tokens

### Color
| Token | Hex | Uso |
|---|---|---|
| Arena / fondo base | `#F5E8D8` | fondo de casi todas las secciones |
| Crema nav | `rgba(244,242,237,.82)` | fondo del nav (con `backdrop-filter: blur(14px)`) |
| Crema sólido | `#F4F2ED` | texto sobre fondos oscuros, superficies claras |
| Blanco | `#FFFFFF` | tarjetas |
| Arena media | `#F2D6A1` | bandas destacadas (FAQ, cajas de contenido) |
| Verde salvia | `#5C7A70` | color de marca: logotipo, eyebrows, acentos |
| Verde salvia claro | `#92ADA4` | fondo de tarjeta de servicio sin foto |
| Azul cielo | `#B3D9E0` | **color de todos los botones primarios** |
| Azul texto sobre CTA | `#2a3b44` | texto dentro de botones azules |
| Cian acento | `#4DC3D6` | bordes de iconos, placeholder de inputs |
| Ámbar acento | `#F1A805` | puntos/dots decorativos dentro de botones y listas |
| Tinta | `#1c2530` | color de texto por defecto (body) |
| Tinta media | `#3c4657` | items de navegación |
| Gris cálido | `#a19a8c` | notas secundarias, texto mono pequeño |
| Borde hairline | `rgba(51,58,53,.07)` — `rgba(51,58,53,.08)` | bordes de nav y tarjetas |
| Sombra tarjeta | `0 20px 60px rgba(51,58,53,.06)` | tarjetas grandes |

Tonos de tarjeta de terapia (`tone`): `#3f5449` (verde profundo), `#5C7A70`, `#92ADA4`.

Máximo 2 fondos por vista: `#F5E8D8` y `#F2D6A1` (más secciones oscuras puntuales con overlay
`radial-gradient(60% 80% at 80% 20%, …)` sobre fotografía).

### Tipografía
- **Display / títulos**: `'Cormorant Garamond', serif` — pesos 400/500/600, con variantes itálicas.
  Se usa la itálica para la **segunda mitad del título** (p. ej. "reconectando con la *consciencia del amor*").
- **UI / cuerpo**: `'Instrument Sans', system-ui, sans-serif` — 400/500/600.
- **Mono (datos, notas, precios)**: `ui-monospace, Menlo, monospace`.

Escala:
| Rol | Valor |
|---|---|
| H1 hero | `clamp(52px, 7.2vw, 104px)`, Cormorant, `line-height: .96` |
| H2 sección | `clamp(40px, 5vw, 64px)`, Cormorant, `line-height: 1` |
| H3 tarjeta | 25–32px Cormorant |
| Eyebrow | 12px, `letter-spacing: .22em`, uppercase, weight 600, color `#5C7A70` |
| Nav item | 12px, `letter-spacing: .14em`, uppercase, weight 500 |
| Botón | 11–12px, `letter-spacing: .16em`, uppercase, weight 600 |
| Cuerpo | 15–17px, `line-height: 1.65` |
| Nota / mono | 12–14px |

### Espaciado
- Padding vertical de sección: `clamp(40px,7vh,90px)` (compacta) → `clamp(80px,11vh,140px)` (amplia).
- **Padding horizontal de sección: `0`.** El sitio es **full-bleed**: cajas, imágenes y secciones van
  de borde a borde de la ventana, sin contenedor centrado con ancho máximo. Los contenedores internos
  usan `width: 100%`.
- Excepción: el nav sí tiene padding lateral `clamp(20px,5vw,64px)`.
- Gap de grid: 22–24px. Padding interno de tarjeta: 28–38px.

### Radios
`6px` tarjetas de servicio · `8px`/`10px` cajas de contenido · `16px` bloque split grande ·
`40px`/`44px` botones (pill) · `50%` dots decorativos.

### Animaciones
```css
@keyframes kFloat { from { opacity:0; transform:translateY(26px) } to { opacity:1; transform:none } }
@keyframes kZoom  { from { transform:scale(1.06) } to { transform:scale(1) } }
@keyframes kFade  { from { opacity:0 } to { opacity:1 } }
@keyframes kPulse { 0%,100% { transform:scale(1); opacity:.9 } 50% { transform:scale(1.35); opacity:.4 } }
```
- Entrada del hero: `kFloat .8s both` con delays escalonados (`.12s`, `.22s`, `.32s`).
- Fondos fotográficos: `kZoom` lento al entrar.
- **Parallax en scroll**: las imágenes de tarjeta se dibujan a `height:124%; top:-12%` y se traslada
  `translateY(offset)` donde `offset = clamp(-40, 40, (centroDelPadre - vh/2) * 0.12)`, calculado en un
  `requestAnimationFrame` sobre un listener `scroll` pasivo. Ver `componentDidMount` del prototipo.
- `html { scroll-behavior: smooth }`.

## Screens / Views

Todas las vistas comparten **Nav fijo** y **Footer**, y todas empiezan con `padding-top: 84px`
para librar el nav.

### Nav (global)
`position: fixed; top/left/right: 0; z-index: 50`, flex space-between, `padding: 22px clamp(20px,5vw,64px)`,
fondo `rgba(244,242,237,.82)` + `backdrop-filter: blur(14px)`, borde inferior hairline.
- Izquierda: logo `assets/logo-verde.png` 38×38 `object-fit: contain` + wordmark "Karen *Silva*"
  (Cormorant 25px/600, `#5C7A70`, "Silva" en itálica).
- Derecha: Inicio · Sobre mí · Terapias · Comunicación animal · Talleres · Testimonios, `gap: clamp(14px,2.4vw,38px)`.
- CTA "Agendar cita": pill `#B3D9E0`, texto `#2a3b44` 11px uppercase 600, `padding: 12px 22px`,
  con dot ámbar 6px a la derecha. Navega a Terapias.

### 1. Inicio (`page: 'inicio'`) — `screenshots/01-inicio.png`
- **Hero** (variante B, la elegida): `min-height: 100vh`, imagen de fondo a sangre completa
  (`assets/mandala.jpg`) con `kZoom`, contenido alineado abajo (`align-items: flex-end`).
  Eyebrow "KAREN SILVA · TERAPIAS Y TALLERES" en crema, H1 en dos líneas con la segunda en itálica.
  Bajada a la derecha: "Acompaño a humanos y animales en sus procesos de sanación."
  Dos CTAs: "Comienza tu camino" (pill azul + dot ámbar) y un botón fantasma "Talleres" en `#5C7A70`.
- **Servicios**: fondo `#F5E8D8`, grid de 3 tarjetas `repeat(3,1fr)` gap 22px, cada una `height: 480px`,
  radio 6px, foto a sangre con parallax + overlay para legibilidad, título Cormorant en crema abajo.
  Tarjetas: Canalización y TRE (`abuelo.avif`), Comunicación animal (`karen-caballo.jpg`),
  Terapias (fondo sólido `#92ADA4`).
- **Servicios secundarios**: grid `repeat(2,1fr)` gap 22px, `margin-top: 22px`, tarjetas horizontales
  `padding: 30px 34px`, radio 6px, flex space-between con flecha/dot a la derecha.
- **Lead magnet**: bloque con input de email (placeholder en `#4DC3D6`) + submit.
- **Testimonios (extracto)** y **FAQ** (fondo `#F2D6A1`, acordeón).

### 2. Sobre mí (`page: 'sobre'`) — `screenshots/02-sobre-mi.png`
Retrato (`assets/karen-retrato.jpg`) en split a media página, biografía, formación y un bloque de
"filosofía": grid `.95fr 1.05fr`, fondo blanco, borde hairline, radio 16px, sombra `0 20px 60px rgba(51,58,53,.06)`,
`overflow: hidden`, mitades a igual altura (`align-items: stretch`).

### 3. Terapias (`page: 'terapias'`) — `screenshots/03-terapias.png`
Índice de las seis terapias. Encabezado centrado: eyebrow "TERAPIAS Y SESIONES" en `#4DC3D6`,
H2 "Elige tu *camino*." (última palabra en itálica y en ámbar `#F1A805`), bajada de dos líneas:
"Cada sesión es una puerta distinta hacia la claridad y la sanación. Explora cada una y elige la que
resuene con tu momento."

Debajo, grid de 2 columnas gap 22px con una tarjeta por terapia, cada una con **su propio color de
fondo** (`tone`), eyebrow ámbar en uppercase 12px, título Cormorant 32px en blanco, resumen 14px y
flecha "→" Cormorant 34px a la derecha. Toda la tarjeta es un `<button>` que abre el detalle.

Datos (array `terapiasList`, en este orden):
| Nombre | Tag / eyebrow | Resumen | `tone` | `svc` |
|---|---|---|---|---|
| Canalización y TRE | Sesión individual | Limpieza e investigación profunda de tus registros akashicos | `#3f5449` | `canal` |
| Limpieza con Cruz Ankh | Trabajo asincrónico | Limpieza minuciosa de ataques y energías mal calificadas. | `#5C7A70` | `ankh` |
| Sanación cuántica con Rosas | Sesión individual | Una técnica psico-espiritual profunda para abrir el corazón. | `#3f5449` | `rosas` |
| Especiales | Sesiones a medida | Sesiones especiales fuera del catálogo regular — consulta disponibilidad. | `#92ADA4` | `especiales` |
| Lectura de registros akáshicos | Sesión individual — **Próximamente** | Accede a la sabiduría de tu alma sobre tu momento presente. | `#92ADA4` | `akashicos` |
| Canalización angelical | Sesión individual — **Próximamente** | Guía y mensajes claros a través de la conexión con tus ángeles. | `#92ADA4` | `angelical` |

Las dos marcadas "Próximamente" deben poder ocultarse o marcarse desde el CMS sin tocar código.

### 4. Comunicación animal y Doula del alma animal (`page: 'animal'`) — `screenshots/04-comunicacion-animal.png`
Vista dedicada al trabajo con animales, con dos ofertas: **comunicación animal** (el cuerpo de la vista)
y **Doula del alma animal** (banda que enlaza al detalle).
- Caja de introducción: fondo `#F2D6A1`, radio 10px, `padding: 38px 34px`, eyebrow "COMUNICACIÓN ANIMAL"
  (12px, `.22em`, uppercase, 600, `#5C7A70`).
- Fotografía de animales reales: `gato-cama.jpg`, `gato-manta.jpg`, `caballo-cafe-blanco.jpg`.
- **Banda Doula**: `<button>` de ancho completo, fondo `#3f5449`, radio 12px, `padding: 36px 38px`,
  flex con `gap: 26px`. Título Cormorant 500 28px blanco: "Acompañamiento para animales en proceso de
  muerte"; subtítulo en itálica 15px `rgba(244,242,237,.8)`: "Doula del alma animal."; flecha "→"
  Cormorant 34px con `margin-left: auto`. Abre `svc: 'doula'`.
- Sección oscura sobre fotografía con overlay radial y chips informativos; bloque final
  "TE PUEDE INTERESAR" (eyebrow ámbar `#F1A805E5`) con una tarjeta translúcida
  (`rgba(244,242,237,.06)`, borde `rgba(244,242,237,.16)`) que enlaza a "Canalización y registros
  akáshicos".

### 5. Talleres (`page: 'taller'`) — `screenshots/05-talleres.png`
- Hero oscuro sobre fotografía con overlay `radial-gradient(60% 80% at 80% 20%, …)`, chips informativos
  (`rgba(244,242,237,.08)` + borde `rgba(244,242,237,.16)`, pill 40px, 13px, `#F5E8D8`).
- **Facilitadora + Inversión**: grid `1fr 1fr` gap 24px, alturas iguales. El precio se muestra en
  Cormorant `clamp(40px,5vw,64px)` con el símbolo `$` y la cifra en mono 20px.
  Copy: "Incluye manual digital y físico".
- **FAQ del taller** + CTA final con nota: "fechas, precio y temario reales — por confirmar con Karen".

### 6. Testimonios (`page: 'testimonios'`) — `screenshots/06-testimonios.png`
Encabezado centrado ("Cómo cambian los *relatos*." con la última palabra en itálica) y bajada.
Tres grupos filtrados por categoría desde un único array:
- **Alumnos** — cursos y talleres (3)
- **Sesiones** — registros akáshicos y terapias (6)
- **Animal** — comunicación animal (2)

Cada testimonio es una tarjeta blanca con la cita, el nombre y el servicio. El texto es literal y
autorizado; **no editar, no acortar, no inventar testimonios nuevos**.

### 7–13. Detalle de servicio (`page: 'servicio'`, param `svc`)
Una sola plantilla reutilizable alimentada por el objeto `services`, con **siete entradas**. En
producción: `/servicios/[slug]`, contenido en CMS o archivo de datos.

Estructura de la plantilla (bloques opcionales según los campos presentes):
1. **Hero centrado**: eyebrow "TERAPIA · {eyebrow}" en ámbar `#F1A805` (12px, `.2em`, uppercase, 600),
   H1 Cormorant `clamp(40px,5vw,64px)` en `#5C7A70`, `frase` como bajada 17px centrada
   (máx. ~3 líneas), y CTA pill `#B3D9E0` "AGENDAR UNA CITA" con dot ámbar.
2. **Imagen a sangre**: `img` con `object-position` = `imgPos` cuando está definido.
3. **`extra`** o **`sobre`**: `titulo` + `desc` — párrafo largo explicativo del método.
4. **`paraQuien`**: lista "Para quién es" con dots ámbar 7px (`flex: none; margin-top: 8px`),
   `gap: 16px`, `list-style: none`.
5. **`noEs`** + **`noEsNota`**: bloque "Para quién no es" (en `canal`, la nota es
   "Esto no es una terapia psicológica.").
6. **`transf`**: pasos numerados `01`, `02`, `03` con `titulo` y `desc`.
7. **`detalles`**: pares `label`/`val` — Duración, Frecuencia, Modalidad.
8. **`notaExtra`** (sólo `doula`): explica que la sesión se estructura en dos partes (envío previo de
   fotos, motivo y preguntas; luego el encuentro).
9. **`pack`** (sólo `especiales`): bloque "especial 333" — "Un camino de tres sesiones", con `desc`,
   items y `nota` ("Escríbeme para conocer la inversión del pack").
10. **`rel`**: tarjeta "Te puede interesar" con `nombre`, `desc` y `key` del servicio relacionado
    (handler `relOpen`).

Contenido y screenshot de cada servicio:

| # | `svc` | Nombre | Eyebrow | Imagen | Duración | Modalidad | Relacionado | Screenshot |
|---|---|---|---|---|---|---|---|---|
| 7 | `canal` | Canalización y TRE | Sesión individual | `tre.jpg` | 90 min | Online · CDMX | `akashicos` | `07-servicio-canalizacion-tre.png` |
| 8 | `akashicos` | Lectura de registros akáshicos | Sesión individual | — | 90 min | Online · CDMX | `canal` | `08-servicio-registros-akashicos.png` |
| 9 | `rosas` | Sanación cuántica con Rosas | Sesión individual | `guadalupe.jpg` | ~1 h 30 min | Online · CDMX | `ankh` | `09-servicio-sanacion-rosas.png` |
| 10 | `ankh` | Limpieza con Cruz Ankh | Trabajo asincrónico | `ankh-rostros.webp` (`center 45%`) | ~40 min | Asincrónico · online | `rosas` | `10-servicio-cruz-ankh.png` |
| 11 | `angelical` | Canalización angelical | Sesión individual | — | ~60 min | Online · CDMX | `canal` | `11-servicio-canalizacion-angelical.png` |
| 12 | `especiales` | Sesiones especiales | Sesiones a medida | `especiales-shell.jpg` (`66% 8%`) | A convenir | Online · CDMX | `canal` | `12-servicio-especiales.png` |
| 13 | `doula` | Doula del alma animal | Acompañamiento especial | `gato-manta.jpg` (`60% 50%`) | ~45 min por sesión | Online (seguimiento por WhatsApp o videollamada) | `canal` | `13-servicio-doula-alma-animal.png` |

Notas de contenido:
- `rosas` acredita la técnica: canalizada por **Elda Salvador (México)**, asistida por la Madre Cósmica
  (representada por la Virgen de Guadalupe). Esta atribución debe conservarse.
- `akashicos` y `angelical` no tienen imagen todavía — el hero debe degradar limpiamente sin foto.
- Los textos de `paraQuien`, `noEs` y `transf` son literales de la clienta; ver el prototipo para el
  contenido completo de cada servicio.

## Interactions & Behavior
- **Navegación**: cada botón de nav/footer/tarjeta llama `go(page)` → `setState({page})` +
  `window.scrollTo({top:0, behavior:'instant'})`. En producción: `<Link>` / router push, con scroll al top.
- **Detalle de servicio**: `openService(key)` fija `svc` y navega a `servicio`.
- **Tarjetas de servicio**: son `<button>` completos (toda la tarjeta es clickeable), `text-align: left`.
- **Acordeón FAQ**: abre/cierra un item a la vez.
- **Lead magnet**: input de email + submit. **No hay backend definido** — el desarrollador debe
  conectarlo (Mailchimp/Resend/etc.) y añadir validación de email y estados de carga/éxito/error.
- **Parallax**: ver Animaciones. Debe registrarse y desregistrarse con el ciclo de vida del componente
  y respetar `prefers-reduced-motion` (recomendación: desactivarlo).
- **Hover**: los botones pill oscurecen ligeramente y los dots ámbar pueden usar `kPulse`. El prototipo
  no define todos los hovers — aplicar una transición consistente `150ms ease` de `opacity`/`background`.

## State Management
Estado del prototipo:
```js
{ page: 'inicio', hv: 'B', lead: false, svc: 'canal' }
```
- `page` → **reemplazar por la ruta**.
- `hv` → selector de variante de hero usado durante el diseño. **Descartar; la variante final es `B`.**
- `lead` → estado del formulario de lead magnet.
- `svc` → **reemplazar por el parámetro de ruta** `[slug]`. Valores: `canal`, `akashicos`, `rosas`,
  `ankh`, `angelical`, `especiales`, `doula`.

Datos que deben salir a un archivo de datos o CMS: `services` (objeto por slug) y `testimoniosFull`
(array con `quote`, `name`, `service`, `cat`). Sin fetching remoto en el diseño actual.

## Responsive behavior
No implementado en el prototipo (diseñado a ~1440px). Guía para móvil:
- Nav → menú hamburguesa a pantalla completa; conservar logo + CTA "Agendar cita".
- Grids `repeat(3,1fr)` y `repeat(2,1fr)` → una columna; tarjetas de 480px → ~320px de alto.
- Splits `1fr 1fr` y `.95fr 1.05fr` → apilados, imagen primero.
- H1 `clamp()` ya escala; verificar que no baje de 40px.
- Mantener el criterio full-bleed; si el texto queda pegado al borde en móvil, añadir padding lateral
  de 20px **solo al texto**, no a las imágenes ni a los fondos.

## Assets
Todas en `design/assets/` (fotografías reales de la clienta, ya con derechos de uso):

| Archivo | Uso |
|---|---|
| `logo-verde.png` / `logo-verde.svg` | logo del nav (usar el SVG en producción) |
| `logo-flama.png` | variante de logo |
| `mandala.jpg` | fondo del hero (variante B, la final) |
| `karen-retrato.jpg` | retrato para Sobre mí |
| `karen-caballo.jpg` | tarjeta de Comunicación animal |
| `abuelo.avif` | tarjeta de Canalización y TRE |
| `tre.jpg` | imagen del detalle del servicio Canalización y TRE |
| `gato-cama.jpg`, `gato-manta.jpg`, `caballo-cafe-blanco.jpg` | Comunicación animal |
| `ankh-cruz.webp`, `ankh-cruz3.webp`, `ankh-rostros.webp`, `isis-ankh.jpg`, `karnak-ankh.jpg`, `karnak-estatua.jpg` | servicios/talleres de temática egipcia |
| `bosque.jpg`, `fondo.jpg`, `rosa.jpg`, `guadalupe.jpg`, `especiales-shell.jpg`, `nomin.jpg`, `nomindd.jpeg` | fondos y secciones secundarias |

Fuentes vía Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```
En producción, autohospedar (`next/font` o `@font-face`) para evitar el salto de layout.

## Files
```
design_handoff_karen_silva/
├── README.md                        ← este documento
├── design/
│   ├── Karen Silva Sitio.dc.html    ← el prototipo completo (referencia de diseño)
│   ├── support.js                   ← runtime del prototipo, NO portar
│   └── assets/                      ← todas las imágenes y logos
└── screenshots/            ← 13 pantallas
    ├── 01-inicio.png
    ├── 02-sobre-mi.png
    ├── 03-terapias.png
    ├── 04-comunicacion-animal.png
    ├── 05-talleres.png
    ├── 06-testimonios.png
    ├── 07-servicio-canalizacion-tre.png
    ├── 08-servicio-registros-akashicos.png
    ├── 09-servicio-sanacion-rosas.png
    ├── 10-servicio-cruz-ankh.png
    ├── 11-servicio-canalizacion-angelical.png
    ├── 12-servicio-especiales.png
    └── 13-servicio-doula-alma-animal.png
```
Abrir `design/Karen Silva Sitio.dc.html` directamente en el navegador para ver e interactuar con el
diseño completo. Los screenshots cubren **las 13 pantallas** y muestran la parte superior de cada una; para el resto de
cada página, navegar en el prototipo.

## Open questions for the client
- Precio y fechas reales de los talleres (marcados "por confirmar").
- Destino del formulario de lead magnet y qué recurso se entrega.
- Número de WhatsApp / email de contacto definitivos.
- ¿Se requiere versión en inglés?
