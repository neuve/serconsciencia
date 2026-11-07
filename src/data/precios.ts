// Precios publicados de los servicios. Decididos por Patricio el 2026-11-06; Rosas corregido por Karen el 2026-11-07.
//
// Única fuente: ninguna página escribe una cifra a mano. `services.ts` enlaza
// cada servicio con una llave de aquí (`precio`), y comunicacion-animal.astro
// lee `precios.animal` directo, porque esa página no sale de `services.ts`.
// Comunicación animal y Doula del alma animal comparten precio (la doula va
// incluida), por eso una sola entrada `animal` para las dos.
//
// Las cifras son enteros sin separador; el formato (coma de miles) lo pone
// `lineasInversion`, para que una coma olvidada no pueda cambiar un precio.

export interface Precio {
  mxn: number;
  clp?: number;
  usd?: number;
}

export const precios = {
  canal: { mxn: 1000, clp: 45000, usd: 60 },
  animal: { mxn: 800, clp: 35000, usd: 50 },
  ankh: { mxn: 888, clp: 35000, usd: 45 },
  rosas: { mxn: 800, clp: 40000, usd: 50 },
  especial333: { mxn: 2366, clp: 123000, usd: 133 },
} satisfies Record<string, Precio>;

export type PrecioKey = keyof typeof precios;

// Una vez por página, junto al precio. Sólo tiene sentido cuando el precio
// trae más de una moneda: con sólo pesos, hablar de Chile y dólares confunde.
export const notaMonedas = 'México paga en pesos, Chile en pesos chilenos y los demás países en dólares.';

export function tieneVariasMonedas(p: Precio): boolean {
  return p.clp !== undefined || p.usd !== undefined;
}

// 1000 → "1,000". Sin depender del locale de Node ni del navegador.
export function conMiles(n: number): string {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Una línea por moneda, en el orden MXN · CLP · USD. Quien pinta decide si
// las apila (<br />) o las junta con " · ".
export function lineasInversion(p: Precio): string[] {
  const lineas = [`$${conMiles(p.mxn)} MXN`];
  if (p.clp !== undefined) lineas.push(`$${conMiles(p.clp)} CLP`);
  if (p.usd !== undefined) lineas.push(`USD ${conMiles(p.usd)}`);
  return lineas;
}
