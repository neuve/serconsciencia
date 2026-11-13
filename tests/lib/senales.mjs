// Copia del detector de señales de paja de ~/.claude/skills/revisar-textos/scripts/senales.mjs,
// tomada el 2026-11-13 (§18 del CLAUDE.md global). Va copiada y no importada porque S1 o una sesión
// de la nube pueden no tener ~/.claude. Si el original cambia, se actualiza a mano.
// Sólo se copiaron SENALES, senales() y textosDeLinea(); el resto del original es su interfaz de línea de comandos.

export const SENALES = [
  { nombre: "segunda frase", re: /[.!?…]\s+[¿¡«"]?[A-ZÁÉÍÓÚÑ]/ },
  { nombre: "paréntesis que enumera", re: /\([^)]*,[^)]*\)/ },
  { nombre: "garantía no pedida", re: /\b(no se borra|no se pierde|se guarda (sol[oa]|automáticamente)|no te preocupes|tranquil[oa]|siempre podrás|en cualquier momento)\b/i },
  { nombre: "anticipa consecuencias", re: /\b(hasta que|una vez que|en cuanto|si no lo haces|recuerda que|ten en cuenta|toma en cuenta|cuando se)\b/i },
  { nombre: "nombra la ventana", re: /\b(en esta (pantalla|ventana|sección|lista|página|vista)|aquí (verás|puedes ver|aparecen))\b/i },
  { nombre: "jerga interna", re: /\b(cron|drenador|webhook|D1|KV|R2|Worker|endpoint|payload|token|API|Stripe|FacturaGorila|payment_intent|invoice|draft|null|undefined)\b/ },
  { nombre: "clave con guion bajo", re: /\b[a-z]+_[a-z_]+\b/ },
  { nombre: "estado EN MAYÚSCULAS", re: /\b[A-ZÁÉÍÓÚÑ]{4,}(_[A-Z]+)*\b/ },
  { nombre: "más de 20 palabras", prueba: (t) => t.split(/\s+/).filter(Boolean).length > 20 },
];
export const senales = (t) => SENALES.filter((s) => (s.re ? s.re.test(t) : s.prueba(t))).map((s) => s.nombre);


export function textosDeLinea(l) {
  const out = [];
  // Texto entre etiquetas: lo que queda al quitar <…> y {…}.
  if (/<[a-zA-Z/]/.test(l)) {
    for (const trozo of l.replace(/\{[^}]*\}/g, "X").split(/<[^>]*>/)) {
      const t = trozo.trim();
      if (/[a-záéíóúñ]{2,}\s+[a-záéíóúñ]/i.test(t)) out.push(t);
    }
    for (const m of l.matchAll(/\b(aria-label|title|placeholder|alt)="([^"]+)"/g)) out.push(m[2]);
  } else {
    for (const m of l.matchAll(/(["'`])((?:\\.|(?!\1).)*)\1/g)) {
      const t = m[2].replace(/\$?\{[^}]*\}/g, "X").trim();
      if (/[a-záéíóúñ]{2,}\s+[a-záéíóúñ]{2,}/i.test(t) && !/^[\w./-]+$/.test(t)) out.push(t);
    }
  }
  return out;
}


// Comentarios que no llegan a una pantalla: se saltan líneas de // , # , /* … */ y <!-- … --> (también en varias líneas).
export function textosDeArchivo(contenido) {
  const out = [];
  let enBloque = null; // "*/" o "-->"
  contenido.split("\n").forEach((l, i) => {
    let c = l;
    if (enBloque) {
      const fin = c.indexOf(enBloque);
      if (fin < 0) return;
      c = c.slice(fin + enBloque.length);
      enBloque = null;
    }
    c = c.replace(/\/\*.*?\*\//g, "").replace(/<!--.*?-->/g, "");
    const abre = c.match(/\/\*|<!--/);
    if (abre) {
      enBloque = abre[0] === "/*" ? "*/" : "-->";
      c = c.slice(0, abre.index);
    }
    if (/^\s*\/\//.test(c) || !c.trim()) return;
    for (const texto of textosDeLinea(c)) out.push({ linea: i + 1, texto });
  });
  return out;
}
