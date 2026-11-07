# Registro de cambios publicados de karensilva.mx

Una fila por cada despliegue a producción. Sirve para separar el antes y el después en Search
Console y GA4: 📊 SStats Karen Silva cruza estas fechas con sus lecturas.

**Quién la llena:** quien despliega, en el mismo momento y en un commit propio. La fila lleva la
versión del Worker que imprime `npx wrangler deploy` («Current Version ID») y las páginas cuyo HTML
cambió (`wrangler` las lista como «new or modified static assets»). Después de desplegar,
se avisa a Bing con `node bin/indexnow.mjs <esas rutas>`.

**Reglas** (lista SEO de Patricio, 2026-11-06):

- Un cambio grande, como una mudanza de URLs, de hospedaje o de títulos, se publica solo, con 28
  días de margen antes del siguiente.
- Antes de un cambio grande, SStats toma una línea base nueva en
  `~/.config/karensilva-stats/lineas-base/`.
- La fecha que cuenta es la del despliegue, no la del commit.

Horas en UTC. En CDMX son 6 horas menos.

| Despliegue (UTC) | Versión del Worker | Commits | Qué cambió | Páginas | ¿Cambio grande? |
|---|---|---|---|---|---|
| 2026-09-19 00:50 | `ce98033d` | `4f72b14` … `680eded` | Primera publicación en Cloudflare Workers. Antes estaba en Netlify. Logo nuevo, color de acción y favicon SVG. | Todas | Sí: mudanza de hospedaje |
| 2026-09-19 01:05 | `0eaceb20` | ninguno nuevo | Se volvió a desplegar sin commits nuevos. No se sabe qué cambió. | ? | ? |
| 2026-10-01 19:43 | `5b70b711` | `675fc8c` … `c477509` | Retiro de logos viejos y prototipo del nav móvil | `/preview/` | No |
| 2026-10-14 23:33 | `1a883f86` | `253b23a`, `8b99659` | GA4 con el evento `clic_whatsapp`, y el aviso de privacidad | Todas, más `/aviso-de-privacidad/` (nueva) | Sí: empieza la medición |
| 2026-10-15 00:18 | `c1e00f3d` | `00ac86b` | Estilo del enlace al aviso en el footer | Todas (el footer) | No |
| 2026-10-15 02:11 | `f0af96c8` | `3426fb0`, `9f6d14a` | Sitemap, `robots.txt`, canonical absoluto y `noindex` en design-system y `/preview/` | Todas (el `<head>`) | Sí: indexación |
| 2026-10-23 04:13 | `1229159e` | `585dff1` | Enlaces internos con barra final y `trailingSlash: 'always'` | Todas | Sí: URLs |
| 2026-10-23 05:56 | `f2c0dda9` | `1894d97` | `noindex` en el prototipo del nav móvil | `/preview/` | No |
| 2026-10-26 03:56 | `dbce2f82` | `2416de9` | 301 permanente de las rutas sin barra final a la versión con barra. Antes respondían con 307. | Todas las rutas sin barra | Sí: URLs |
| 2026-11-06 15:40 | `2e168e33` | `9d24bd9` | Duraciones: akáshicos de 60 a 90 minutos, y Rosas de «Aprox. 1 hora y media» a 60 minutos | `/servicios/akashicos/`, `/servicios/rosas/` | No |
| 2026-11-07 02:02 | `1be77bf5` | `0472f73` | Llave de IndexNow en la raíz. Primer aviso con `--todas`: 15 URLs, IndexNow respondió 202 | `/8355ff452871fec4993eced83904c8ef.txt` (nueva) | No |
| 2026-11-07 08:03 | `0ec16564` | `7a938fa`, `581b412`, `6fb5c6e` | Precios publicados (recuadro «Inversión» con MXN, CLP y USD) en canal, ankh, rosas, doula, comunicación animal y el pack, que ahora se llama «sanación integral». Rosas pasa a «Online y presencial en CDMX». Revisado por Karen. IndexNow: 202 para las 6 URLs | rosas, doula, especiales, comunicacion-animal, canal, ankh | Sí |

**De dónde salen los datos de las filas anteriores al 2026-11-06.** Las fechas y versiones son de
`npx wrangler deployments list` (leído el 2026-11-06; el control positivo es que la última versión
coincide con la que imprimió el despliegue de ese día). **Qué commit va en cada despliegue es una
inferencia**: se asignó el último commit anterior a la hora del despliegue. Un despliegue pudo
salir de un árbol con cambios sin comitear, y eso no queda en ningún registro. Desde el
2026-11-06 cada fila se anota al desplegar, sin inferir.

La línea base 2026-11-06 de SStats se tomó contra `2416de9`, antes de la fila del 2026-11-06.
Search Console seguía mostrando casi todas las URLs sin barra final, a 11 días del 301.

## Lecturas de SStats

Una cada 15 días. La hace 📊 SStats Karen Silva con `linea-base.mjs`, en ventanas de 28 días, y la
compara contra la anterior y contra las filas de arriba que caen en la ventana.

| Lectura | Fecha | Ventanas | Archivo | Notas |
|---|---|---|---|---|
| línea base | 2026-11-06 | GSC 2026-10-07 a 2026-11-03 · GA4 2026-10-09 a 2026-11-05 | `base-2026-11-06.json` | Tomada contra `2416de9`, antes de `9d24bd9` |
| lectura 1 | 2026-11-12 (programada) | GSC 2026-10-13 a 2026-11-09 · GA4 2026-10-15 a 2026-11-11 | `base-2026-11-12.json` | Toda la ventana es posterior al 301. `9d24bd9` cae dentro, así que es un cambio chico en la ventana, no un antes y después |

El recordatorio de la lectura no vive en ningún programador. Si la sesión de SStats se cerró, la
reactiva Patricio o 🧭 S0 Lokinet con esta tabla.
