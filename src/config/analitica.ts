// Único lugar de configuración de la analítica. Son identificadores públicos
// (viajan en el HTML), no secretos.
//
// Cloudflare Web Analytics NO se configura aquí: el sitio está dado de alta con
// «Automatic setup» y Cloudflare inyecta su beacon en el borde (medido por S0
// Lokinet el 2026-10-14). Un snippet manual contaría doble.
//
// Un medidor sin identificador NO se inyecta: déjalo en cadena vacía hasta que
// exista el valor real. Nunca pongas uno inventado ni de ejemplo.
export const analitica = {
  // Google Analytics 4 → Administrar → Flujos de datos → «ID de medición» (G-XXXXXXXXXX).
  ga4MeasurementId: 'G-WH48HV57HY',
};

// En `astro dev` no se mide nada, salvo que se fuerce: PUBLIC_ANALITICA_FORZAR=1 astro dev
export const medirEnDev = import.meta.env.PUBLIC_ANALITICA_FORZAR === '1';
