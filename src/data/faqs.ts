// Preguntas frecuentes. Copiadas literal desde el prototipo
// `prototype/design_handoff_karen_silva/design/Karen Silva Sitio.dc.html`:
// `faqs` del home (líneas ~1115-1121) y `tallerFaq` del taller (líneas ~1154-1157).

export interface Faq {
  q: string;
  a: string;
}

export const faqsHome: Faq[] = [
  {
    q: '¿Qué son los registros akáshicos?',
    a: 'Son el registro energético de la información de tu alma, de tus experiencias de vida, pasada, presente y futura. Al abrirlos podemos trabajar sobre el origen del bloqueo sobre tu momento presente para ordenar y sanar lo que hoy te limita.',
  },
  {
    q: '¿La armonización es lo mismo que una limpieza?',
    a: 'No exactamente. La limpieza retira interferencias y energías densas; la armonización reequilibra tu energía después. Muchas veces se acompañan en la misma sesión.',
  },
  {
    q: 'Tengo muchos temas y no sé por dónde empezar.',
    a: 'Está bien llegar así. En la primera sesión ordenamos juntos lo que traes y elegimos un punto de partida claro.',
  },
  {
    q: 'Me siento estancado o confundido y necesito guía.',
    a: 'Es justo donde este trabajo ayuda: clarificamos qué está detenido, qué lección hay disponible y qué paso concreto sigue. Comprender el propósito mayor de tu experiencia actual.',
  },
  {
    q: 'Me pasan cosas raras y no entiendo por qué.',
    a: 'La clave de esto es estar abiertos y receptivos para comprender la parte que nos toca sobre nuestro proceso de vida.',
  },
];

export const faqsTaller: Faq[] = [
  {
    q: '¿Necesito experiencia previa?',
    a: 'No. El taller está pensado para empezar desde cero, a tu ritmo.',
  },
  {
    q: '¿Necesito mi propio péndulo?',
    a: 'Es ideal tenerlo. Te comparto recomendaciones al inscribirte; también podemos trabajar con uno improvisado.',
  },
];
