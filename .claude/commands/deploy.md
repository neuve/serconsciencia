---
description: Publica el sitio en Netlify (build + deploy a producción)
---

Publicá el sitio en Netlify ejecutando el script del proyecto.

1. Mostrá `git status --short` para que el usuario vea qué cambios se van a publicar.
2. Ejecutá el deploy con Bash (no PowerShell, para no perder la salida en vivo):

   - Producción: `powershell -ExecutionPolicy Bypass -File scripts/deploy.ps1 -Message "<mensaje>"`
   - Preview (si el usuario pidió prueba o pasó "preview" como argumento): agregá `-Preview`

   Usá como `<mensaje>` el argumento que haya pasado el usuario ($ARGUMENTS); si no pasó nada, generá un mensaje corto en español describiendo los cambios del `git status`.

3. Si el build o el deploy falla, mostrá el error y no reintentes a ciegas: diagnosticá primero.
4. Al terminar, informá la URL del deploy que devolvió Netlify y el panel: https://app.netlify.com/projects/karensilva

Notas:
- El script commitea los cambios pendientes antes de compilar. Si el usuario no quiere commit, agregá `-SkipGit`.
- La primera vez puede pedir login de Netlify en el navegador.
