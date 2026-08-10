# Publica el sitio en Netlify (proyecto: karensilva)
# Uso:  npm run deploy
#       powershell -ExecutionPolicy Bypass -File scripts\deploy.ps1
# Opciones:
#       -Preview   -> sube un deploy de prueba (URL temporal) en vez de produccion
#       -SkipGit   -> no hace commit de los cambios pendientes

param(
  [switch]$Preview,
  [switch]$SkipGit,
  [string]$Message = "Actualizar sitio"
)

$ErrorActionPreference = "Stop"
$SiteId = "ac088b60-46da-4032-8e55-ae08e093857b"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "==> Proyecto: $root" -ForegroundColor Cyan

# 1. Guardar cambios en git (historial local)
if (-not $SkipGit) {
  $pendientes = git status --porcelain
  if ($pendientes) {
    Write-Host "==> Commiteando cambios pendientes..." -ForegroundColor Cyan
    git add -A
    git commit -m $Message
  } else {
    Write-Host "==> Sin cambios pendientes en git." -ForegroundColor DarkGray
  }
}

# 2. Build
Write-Host "==> Compilando (astro build)..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { throw "El build fallo. Revisa los errores de arriba." }

# 3. Verificar sesion de Netlify
Write-Host "==> Verificando sesion de Netlify..." -ForegroundColor Cyan
npx --yes netlify-cli@latest status | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "No hay sesion activa. Se abrira el navegador para iniciar sesion." -ForegroundColor Yellow
  npx --yes netlify-cli@latest login
  if ($LASTEXITCODE -ne 0) { throw "No se pudo iniciar sesion en Netlify." }
}

# 4. Deploy
$cliArgs = @("deploy", "--dir", "dist", "--site", $SiteId, "--message", $Message)
if (-not $Preview) {
  $cliArgs += "--prod"
  Write-Host "==> Subiendo a PRODUCCION (karensilva.netlify.app)..." -ForegroundColor Cyan
} else {
  Write-Host "==> Subiendo DEPLOY DE PRUEBA a Netlify..." -ForegroundColor Cyan
}

npx --yes netlify-cli@latest @cliArgs
if ($LASTEXITCODE -ne 0) { throw "El deploy fallo." }

Write-Host ""
Write-Host "Listo. Sitio: https://karensilva.netlify.app" -ForegroundColor Green
Write-Host "Panel: https://app.netlify.com/projects/karensilva" -ForegroundColor Green
