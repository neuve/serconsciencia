// Índice de terapias para la vista "Terapias". Copiado literal desde el prototipo
// `prototype/design_handoff_karen_silva/design/Karen Silva Sitio.dc.html` (array `terapiasList`,
// líneas ~1090-1097), en el mismo orden.
//
// Se agrega el campo `proximamente`, derivado del tag "— Próximamente" que traían
// `akashicos` y `angelical`, para poder ocultarlas desde el CMS sin tocar código (ver README,
// sección "Terapias").

export interface Terapia {
  nombre: string;
  tag: string;
  resumen: string;
  tone: string;
  svc: string;
  proximamente: boolean;
}

export const terapias: Terapia[] = [
  {
    nombre: 'Canalización y TRE',
    tag: 'Sesión individual',
    resumen: 'Limpieza e investigación profunda de tus registros akashicos',
    tone: '#3f5449',
    svc: 'canal',
    proximamente: false,
  },
  {
    nombre: 'Limpieza con Cruz Ankh',
    tag: 'Trabajo asincrónico',
    resumen: 'Limpieza minuciosa de ataques y energías mal calificadas.',
    tone: '#5C7A70',
    svc: 'ankh',
    proximamente: false,
  },
  {
    nombre: 'Sanación cuántica con Rosas',
    tag: 'Sesión individual',
    resumen: 'Una técnica psico-espiritual profunda para abrir el corazón.',
    tone: '#92ADA4',
    svc: 'rosas',
    proximamente: false,
  },
  {
    nombre: 'Especiales',
    tag: 'Sesiones a medida',
    resumen: 'Sesiones especiales fuera del catálogo regular — consulta disponibilidad.',
    tone: '#92ADA4',
    svc: 'especiales',
    proximamente: false,
  },
  {
    nombre: 'Lectura de registros akáshicos',
    tag: 'Sesión individual — Próximamente',
    resumen: 'Accede a la sabiduría de tu alma sobre tu momento presente.',
    tone: '#aecabb',
    svc: 'akashicos',
    proximamente: true,
  },
  {
    nombre: 'Canalización angelical',
    tag: 'Sesión individual — Próximamente',
    resumen: 'Guía y mensajes claros a través de la conexión con tus ángeles.',
    tone: '#aecabb',
    svc: 'angelical',
    proximamente: true,
  },
];
