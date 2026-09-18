---
description: Publica el sitio en Cloudflare Workers (build + deploy a producción)
---

Publica el sitio en Cloudflare Workers.

1. Muestra `git status --short` para que el usuario vea qué cambios se van a publicar.
2. Construye: `npm run build`. Si falla, muestra el error y no reintentes a ciegas: diagnostica primero.
3. Publica: `npx wrangler deploy`. La configuración vive en `wrangler.jsonc` (Worker `karensilva`,
   assets desde `./dist`, con `karensilva.mx` y `www.karensilva.mx` como custom domains).
4. **Verifica midiendo, no confiando.** No hay check-run que espere por ti: compara lo publicado
   contra `dist/` página por página, y usa siempre un control positivo —por ejemplo, que una ruta
   inventada devuelva 404—. Sin control, un cero o un vacío se leen igual que «todo bien».

URLs del sitio:

- `https://karensilva.mx` — canónica
- `https://www.karensilva.mx` — redirige con 301 al apex
- `https://karensilva.tomin.workers.dev` — el Worker directo, útil cuando el dominio no sirve

Notas:

- Este comando **no** commitea por ti. Si quieres que el commit quede antes de publicar, hazlo tú.
- `/servicios/` devuelve 404 y está bien: `dist/servicios/` sólo tiene subrutas, no un `index.html`.
- Nada de DNS, dominios ni certificados se toca desde aquí; eso es de Patricio (§13.e del CLAUDE.md).
