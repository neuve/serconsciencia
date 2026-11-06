#!/usr/bin/env node
// Avisa a Bing (y a los demás buscadores de IndexNow) de las URLs que cambiaron en un despliegue.
//
//   node bin/indexnow.mjs /servicios/rosas/ /servicios/akashicos/   # las páginas de la fila del registro
//   node bin/indexnow.mjs --todas                                   # todo el sitemap de dist/
//
// Se corre DESPUÉS de `npx wrangler deploy`. Antes de mandar nada comprueba que el sitio publicado
// sirve la llave: si no la sirve, IndexNow rechaza el aviso o lo ignora sin decir nada.
// La llave no es un secreto: el protocolo exige publicarla en la raíz del sitio.

import { readFileSync, readdirSync } from 'node:fs';

const HOST = 'karensilva.mx';
const ORIGEN = `https://${HOST}`;

const llaves = readdirSync('public').filter((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (llaves.length !== 1) {
  console.error(`Esperaba exactamente una llave en public/, hay ${llaves.length}.`);
  process.exit(1);
}
const key = llaves[0].replace(/\.txt$/, '');
const keyLocation = `${ORIGEN}/${key}.txt`;

const args = process.argv.slice(2);
let urls;
if (args.includes('--todas')) {
  const xml = readFileSync('dist/sitemap-0.xml', 'utf8');
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
} else {
  urls = args.map((p) => new URL(p, ORIGEN).href);
}
if (urls.length === 0) {
  console.error('No hay URLs que avisar. Pasa rutas o --todas.');
  process.exit(1);
}
const ajenas = urls.filter((u) => new URL(u).host !== HOST);
if (ajenas.length) {
  console.error(`URLs de otro dominio: ${ajenas.join(', ')}`);
  process.exit(1);
}

const publicada = await fetch(keyLocation, { cache: 'no-store' });
const texto = publicada.ok ? (await publicada.text()).trim() : '';
if (texto !== key) {
  console.error(`${keyLocation} respondió ${publicada.status} y no contiene la llave. ¿Ya se desplegó?`);
  process.exit(1);
}

const r = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key, keyLocation, urlList: urls }),
});
// 200 = recibido; 202 = recibido, llave aún sin validar. Cualquier otra cosa es un fallo.
console.log(`IndexNow respondió ${r.status} para ${urls.length} URL(s):`);
for (const u of urls) console.log(`  ${u}`);
if (r.status !== 200 && r.status !== 202) {
  console.error(await r.text());
  process.exit(1);
}
