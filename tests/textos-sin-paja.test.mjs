// Guardiana de paja (§18 del CLAUDE.md global): se pone roja si entra al sitio un texto nuevo con señales de paja.
// Trinquete en un solo sentido: tests/textos-sin-paja.base.json congela los textos que ya tenían señal el
// 2026-11-13. Un texto con señal que no esté ahí es paja nueva; una entrada de la base que ya no aparece
// también falla, para que la base sólo se encoja (quien corta paja borra su renglón).
//
//   npm test                                             # la prueba
//   node tests/textos-sin-paja.test.mjs --congelar       # reescribe la base con lo que hay hoy (nunca corre solo)
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { senales, textosDeArchivo } from "./lib/senales.mjs";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = join(RAIZ, "tests", "textos-sin-paja.base.json");
const EXCEPTO = ["src/data/testimonios.ts", "src/styles/"]; // palabras de las clientas; estilos

function archivos(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) out.push(...archivos(p));
    else if (/\.(astro|ts|js|mjs)$/.test(n)) out.push(p);
  }
  return out;
}

function leerTextos() {
  const todos = [];
  for (const p of archivos(join(RAIZ, "src")).sort()) {
    const rel = relative(RAIZ, p).split("\\").join("/");
    if (EXCEPTO.some((e) => rel === e || (e.endsWith("/") && rel.startsWith(e)))) continue;
    for (const { linea, texto } of textosDeArchivo(readFileSync(p, "utf8"))) todos.push({ archivo: rel, linea, texto });
  }
  return todos;
}

const clave = (e) => `${e.archivo}\t${e.texto}`;

if (process.argv.includes("--congelar")) {
  const vistos = new Map();
  for (const t of leerTextos()) {
    const s = senales(t.texto);
    if (s.length && !vistos.has(clave(t))) vistos.set(clave(t), { archivo: t.archivo, texto: t.texto, senales: s });
  }
  const lista = [...vistos.values()];
  writeFileSync(BASE, JSON.stringify(lista, null, 2) + "\n");
  console.log(`base congelada: ${lista.length} textos con señal → ${relative(RAIZ, BASE)}`);
  process.exit(0);
}

test("controles positivos: el detector detecta y leyó el sitio", () => {
  const CONTROL = "Se guarda automáticamente (nombre, correo, teléfono). No se borra hasta que lo confirmes en esta pantalla.";
  assert.ok(senales(CONTROL).length >= 3, `CONTROL FALLIDO: la frase con paja conocida dio ${senales(CONTROL).length} señales (deben ser 3 o más); el detector no detecta`);
  const textos = leerTextos();
  assert.ok(textos.length >= 200, `CONTROL FALLIDO: sólo se leyeron ${textos.length} textos de src/ (deben ser 200 o más); la lectura no vale`);
  assert.ok(
    textos.some((t) => t.archivo === "src/components/Nav.astro" && t.texto === "Comunicación animal"),
    "CONTROL FALLIDO: no apareció «Comunicación animal» entre los textos de src/components/Nav.astro; la extracción no vale",
  );
});

test("ningún texto nuevo con señales de paja", () => {
  const base = JSON.parse(readFileSync(BASE, "utf8"));
  const congeladas = new Set(base.map(clave));
  const nuevos = [];
  for (const t of leerTextos()) {
    const s = senales(t.texto);
    if (!s.length) continue;
    if (!congeladas.has(clave(t))) nuevos.push(`${t.archivo}:${t.linea}  «${t.texto}»\n   → ${s.join(" · ")}`);
  }
  assert.equal(nuevos.length, 0, `Paja nueva (${nuevos.length}). Corta el texto, o consulta con Patricio antes de congelarlo:\n\n${nuevos.join("\n\n")}\n`);
});

test("la base no tiene renglones que ya no aparecen", () => {
  const base = JSON.parse(readFileSync(BASE, "utf8"));
  const vivas = new Set();
  for (const t of leerTextos()) if (senales(t.texto).length) vivas.add(clave(t));
  const muertas = base.filter((e) => !vivas.has(clave(e)));
  assert.equal(
    muertas.length,
    0,
    `Entradas de tests/textos-sin-paja.base.json que ya no existen o ya no tienen señal (${muertas.length}); bórralas de la base:\n${muertas.map((e) => `${e.archivo}  «${e.texto}»`).join("\n")}\n`,
  );
});
