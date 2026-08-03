// Contenido real de la clienta (Karen Silva). Copiado literal desde el prototipo
// `prototype/design_handoff_karen_silva/design/Karen Silva Sitio.dc.html` (objeto `services`, líneas ~839-1045).
// No editar, acortar ni "mejorar" la redacción de estos textos.

export interface ServiceStep {
  n: string;
  titulo: string;
  desc: string;
}

export interface ServiceDetalle {
  label: string;
  val: string;
}

export interface ServiceRelacionado {
  nombre: string;
  desc: string;
  key: string;
}

export interface ServiceTextoBloque {
  titulo: string;
  desc: string;
}

export interface ServicePack {
  eyebrow: string;
  titulo: string;
  desc: string;
  pasos: ServiceStep[];
  nota: string;
}

export interface ServiceNotaExtra {
  label: string;
  val: string;
}

export interface Service {
  eyebrow: string;
  img?: string;
  imgPos?: string;
  imgFit?: 'cover' | 'contain';
  nombre: string;
  frase: string;
  extra?: ServiceTextoBloque;
  sobre?: ServiceTextoBloque;
  paraQuien: string[];
  noEs: string;
  noEsNota?: string | null;
  transf: ServiceStep[];
  primeraTitulo: string;
  primeraBody: string[];
  detalles: ServiceDetalle[];
  pack?: ServicePack;
  notaExtra?: ServiceNotaExtra;
  rel: ServiceRelacionado;
}

export const services: Record<string, Service> = {
  canal: {
    eyebrow: 'Sesión individual',
    img: '/assets/tre.jpg',
    imgPos: '43% 35%',
    nombre: 'Canalización y TRE',
    extra: {
      titulo: 'Canalización y Terapia de Respuesta Espiritual',
      desc: 'A través de la canalización accedo a información de tu proceso presente y, junto con la Terapia de Respuesta Espiritual (TRE), identificamos y limpiamos los programas del alma —creencias, votos y bloqueos energéticos de esta u otras vidas— que te mantienen atrapado en un mismo patrón, para que puedas avanzar con más claridad y libertad.',
    },
    frase: 'Trabajo profundo y limpieza de los bloqueos que están impidiendo que logres tener más claridad y sabiduría sobre tu momento actual.',
    paraQuien: [
      'Necesitas tomar decisiones importantes: salud, economía, trabajo, vínculos, amor o estudios.',
      'Quieres clarificar y sanar tus vínculos más importantes.',
      'Estás cerrando un ciclo, proceso o relación y necesitas ordenar lo vivido.',
      'Buscas entender qué lección hay para ti en una situación (el "para qué me pasa").',
      'Para quienes deseen conectar y escuchar a su Yo superior, la parte más elevada y sagrada del alma conectada con la Fuente Divina.',
    ],
    noEs: 'Para quien no cree que hay propósitos mayores detrás de lo que nos ocurre; para quienes no desean salir del victimismo; para quienes no quieren asumir responsabilidad sobre sus procesos o esperan cambiar de la noche a la mañana.',
    noEsNota: 'Esto no es una terapia psicológica.',
    transf: [
      { n: '01', titulo: 'Una perspectiva diferente', desc: 'El tener mayor consciencia de lo que ocurre en este momento presente te permite salir de un estado de limitación en relación a la vivencia.' },
      { n: '02', titulo: 'Mayor paz y tranquilidad', desc: 'Un estado interno más sereno tras ordenar, soltar lo que pesa y tomar conciencia de lo ocurrido.\nEste trabajo también permite alinear tu energía en relación a tu propósito de vida.' },
      { n: '03', titulo: 'Claridad de lo que quieres', desc: 'Reconocer con nitidez, sabiduría y coherencia lo que necesitas y deseas para este momento de tu vida, elegir cómo quieres transitarlo.' },
    ],
    primeraTitulo: 'Un encuentro para resolver, ordenar y clarificar los bloqueos que hoy te dificultan vivir distinto.',
    primeraBody: [
      'Te explico cómo vamos a trabajar, conversamos sobre lo que te ocurre y te hago preguntas. Probablemente hablemos de la energía que transitas este año y revisaremos qué sientes como bloqueo en este periodo de tu vida.\nUna vez que definimos los objetivos de la sesión tu Yo superior (o supraconciencia) nos indica a través del péndulo cuales son los programas y bloqueos que se necesitan depurar. ',
      '',
    ],
    detalles: [
      { label: 'Duración', val: '90 minutos' },
      { label: 'Frecuencia', val: 'Sugerido esperar 21 días entre sesiones, sin embargo puedes tomarlas cuando lo necesites' },
      { label: 'Modalidad', val: 'Online y presencial en CDMX' },
    ],
    rel: { nombre: 'Lectura de registros akáshicos', desc: 'Accede a la sabiduría de tu alma sobre tu momento presente.', key: 'akashicos' },
  },
  akashicos: {
    eyebrow: 'Sesión individual',
    img: '/assets/cubo.jpg',
    imgPos: '50% 50%',
    nombre: 'Lectura de registros akáshicos',
    frase: 'Accede al registro energético de tu alma para ganar claridad y sabiduría sobre tu momento presente.',
    paraQuien: [
      'Necesitas tomar decisiones importantes en cualquier área de tu vida.',
      'Quieres entender qué lección hay detrás de una situación (el "para qué me pasa").',
      'Buscas clarificar y sanar tus vínculos más importantes.',
      'Estás cerrando un ciclo y necesitas ordenar lo vivido.',
      'Quieres empezar una etapa nueva con más dirección.',
    ],
    noEs: 'Para quien no cree que existan propósitos mayores detrás de lo que ocurre, o no desea asumir responsabilidad sobre sus procesos.',
    noEsNota: 'Esto no es una terapia psicológica.',
    transf: [
      { n: '01', titulo: 'Claridad sobre tu presente', desc: 'Comprendes con nitidez lo que hoy estás viviendo.' },
      { n: '02', titulo: 'Sabiduría para decidir', desc: 'Eliges desde un lugar más consciente e informado.' },
      { n: '03', titulo: 'Paz con tu proceso', desc: 'Sueltas la resistencia y ordenas lo que pesa.' },
    ],
    primeraTitulo: '',
    primeraBody: [],
    detalles: [
      { label: 'Duración', val: '90 minutos' },
      { label: 'Frecuencia', val: 'Cada 3 semanas' },
      { label: 'Modalidad', val: 'Online · CDMX' },
    ],
    rel: { nombre: 'Canalización y TRE', desc: 'Limpia los bloqueos que hoy te detienen.', key: 'canal' },
  },
  rosas: {
    eyebrow: 'Sesión individual',
    img: '/assets/guadalupe.jpg',
    imgPos: '50% 11%',
    extra: {
      titulo: 'Sanación cuántica con rosas',
      desc: 'Canalizado por Elda Salvador (México), esta técnica es asistida energéticamente por la Madre Cósmica, cuya representación es la Virgen de Guadalupe, María Guadalupe Tonantzin.\n\nDebido a la cualidad energética que portan las rosas, estas son capaces de poder trabajar desde aspectos profundos del mundo sutil para manifestar un proceso de transformación y por consecuencia de sanación.\n\nSe trabaja en todos los cuerpos que constituyen al ser humano y en todos sus tiempos (pasado, presente y futuro).',
    },
    nombre: 'Sanación cuántica con Rosas',
    frase: 'Técnica de sanación psico-espiritual profunda asistida por la \n Madre Cósmica y la medicina vibracional de las rosas.',
    paraQuien: [
      'Sientes afinidad con la energía de las rosas o la Madre Cósmica.',
      'Quieres realizar cambios profundos en tu vida.',
      'Buscas un sistema distinto de liberación de bloqueos y mayor conexión con el corazón.',
      'Deseas trabajar aspectos fundamentales: madre, padre, niño interno, ancestros, creencias, sombras y conexión con la divinidad.',
      'Quieres crear mayor conexión con la energía sutil y divina.',
    ],
    noEs: 'Para quienes buscan un acompañamiento terapéutico más mental o conductual. Quienes no tengan interés en conectarse con su espiritualidad.',
    noEsNota: 'Esto no es psicoterapia.',
    transf: [
      { n: '01', titulo: 'Transformación interna profunda', desc: 'Sanas temas vinculados al aprendizaje de tu alma, de esta u otras vidas.' },
      { n: '02', titulo: 'Mayor apertura del corazón', desc: 'Entras en un estado de más armonía, paz y expansión.' },
      { n: '03', titulo: 'Consciencia de tus patrones', desc: 'Entiendes con claridad los bloqueos internos que se repiten.' },
    ],
    primeraTitulo: 'Conversamos sobre tu interés en este trabajo y realizamos una primera sesión que es una armonización con rosas.',
    primeraBody: [
      '',
      'Para cada sesión es necesario que dispongas de las rosas que se te indican según el tipo de trabajo a realizar. La sesión será acostad@ o sentad@ dependiendo del trabajo a realizar.\nLa primera sesión de armonización es un requisito fundamental para cualquier tipo de proceso terapéutico con rosas que desees realizar.',
    ],
    detalles: [
      { label: 'Duración', val: 'Aprox. 1 hora y media' },
      { label: 'Frecuencia', val: 'Si deseas tomar sesiones con temas específicos debes tener en cuenta que podríamos necesitar más de un encuentro, deben espaciarse por una semana idealmente.\n\nTambién puedes tomarlo como un proceso terapéutico con encuentros semanales.' },
      { label: 'Modalidad', val: 'Online para armonizaciones · Presencial para procesos completos en CDMX' },
    ],
    rel: { nombre: 'Limpieza con Cruz Ankh', desc: 'Limpieza minuciosa de energías densas e interferencias.', key: 'ankh' },
  },
  doula: {
    eyebrow: 'Acompañamiento especial',
    img: '/assets/gato-manta.jpg',
    imgPos: '60% 50%',
    nombre: 'Doula del alma animal',
    frase: 'Acompañamiento para animales en proceso de muerte — presencia consciente para ti y tu compañero en su tránsito final.',
    paraQuien: [
      'Tu animal está atravesando una enfermedad terminal o un proceso de vejez avanzada.',
      'Necesitas apoyo para tomar decisiones sobre sus últimos días con mayor claridad y menos culpa.',
      'Quieres saber qué siente y qué necesita tu animal en este momento de su vida.',
      'Buscas acompañamiento emocional para ti durante el proceso de despedida.',
    ],
    noEs: 'No sustituye la atención veterinaria ni el manejo médico del dolor; es un acompañamiento energético y emocional en paralelo.',
    noEsNota: null,
    transf: [
      { n: '01', titulo: 'Presencia ', desc: 'Acompañas a tu animal con más calma, sabiendo que estás haciendo lo correcto.' },
      { n: '02', titulo: 'Comunicación clara', desc: 'Entiendes qué siente y qué necesita tu animal en su proceso final.' },
      { n: '03', titulo: 'Despedida consciente', desc: 'Un tránsito acompañado con respeto, presencia y amor de ambas partes.' },
    ],
    primeraTitulo: 'Un espacio para escuchar a tu animal y acompañarlo en sus últimos días de vida.',
    primeraBody: [
      'Este acompañamiento está dirigido para sostener el proceso de muerte de un animal, ya sea por vejez, enfermedad crónica o terminal, y para tener mayor claridad en caso de requerirse o proponerse una eutanasia de parte del veterinario.\nDurante este proceso trabajamos junto a ti y a quienes forman parte de su entorno para brindarle la mayor comodidad, contención y bienestar posibles, siempre respetando su voluntad y la manera en que tu animal desea transitar esta etapa.\n\nUno de los pilares de este acompañamiento es escuchar profundamente sus necesidades, honrando su proceso con respeto, compasión y dignidad. Al mismo tiempo, te acompaño para que puedas sostener este momento desde un lugar de amor, serenidad y consciencia, preparándote emocional y energéticamente para cuando llegue el instante de su partida.\n\nEn caso de ser necesario, realizamos una sesión de limpieza energética destinada a liberar bloqueos que puedan interferir en su bienestar o dificultar el cierre natural de este ciclo.\n\nMi compromiso es ofrecerte información, guía y contención durante todo el proceso, para que tanto tú como tu animal puedan vivir esta despedida de la manera más amorosa, consciente y en paz posible.',
      '',
    ],
    detalles: [
      { label: 'Duración por sesión', val: 'Aprox. 45 minutos' },
      { label: 'Frecuencia', val: 'Cada vez que sea necesario/seguimiento por whatsapp o video llamada durante el proceso' },
      { label: 'Modalidad', val: 'Online' },
    ],
    notaExtra: {
      label: '',
      val: 'Cada sesión se estructura en dos partes:\n\nEnvío de información. Me compartes fotos de tu animal, tu motivo de consulta y las preguntas que deseas hacerle. En esta parte coordinamos sobre tus objetivos de la sesión, la historia del animal y la situación actual que te lleva a querer saber cómo está y qué necesita de ti.\n\nEncuentro de devolución. Nos reunimos online para conversar sobre lo que tu animal respondió y resolver tus dudas; este encuentro puede ser grabado para que puedas volver a integrar la información y los detalles que en vivo se pueden ir.',
    },
    rel: { nombre: 'Talleres y cursos', desc: 'Un puente de corazón a corazón con tus compañeros de otras especies.', key: 'talleres' },
  },
  angelical: {
    eyebrow: 'Sesión individual',
    img: '/assets/arcangel-1.jpg',
    imgPos: '50% 30%',
    nombre: 'Canalización angelical',
    frase: 'Guía y mensajes claros a través de la conexión con tus ángeles, para acompañarte en tu momento presente.',
    paraQuien: [
      'Te sientes confundido y necesitas guía.',
      'Buscas orientación amorosa para tomar una decisión.',
      'Quieres sentir compañía y sostén espiritual.',
      'Necesitas claridad sobre un tema que te inquieta.',
      'Deseas reconectar con tu intuición y tu fe.',
    ],
    noEs: 'Para quien busca respuestas absolutas o predicciones cerradas; este trabajo abre guía y posibilidades, no destinos fijos.',
    noEsNota: '',
    transf: [
      { n: '01', titulo: 'Claridad y calma', desc: 'Recibes mensajes que ordenan lo que hoy te confunde.' },
      { n: '02', titulo: 'Sensación de acompañamiento', desc: 'Sientes el sostén de tu guía espiritual.' },
      { n: '03', titulo: 'Dirección para tu momento', desc: 'Reconoces el siguiente paso con más confianza.' },
    ],
    primeraTitulo: 'Un espacio para escuchar los mensajes que tus ángeles tienen para tu momento presente.',
    primeraBody: [
      'Conversamos sobre lo que te ocurre y aquello en lo que buscas guía. Luego realizo la lectura y te comparto los mensajes que surgen, resolviendo tus dudas.',
    ],
    detalles: [
      { label: 'Duración', val: 'Aprox. 60 minutos' },
      { label: 'Frecuencia', val: 'Cuando lo necesites' },
      { label: 'Modalidad', val: 'Online · CDMX' },
    ],
    rel: { nombre: 'Canalización y TRE', desc: 'Limpia los bloqueos que hoy te detienen.', key: 'canal' },
  },
  ankh: {
    eyebrow: 'Trabajo asincrónico',
    img: '/assets/ankh-rostros.webp',
    imgPos: 'center 45%',
    sobre: {
      titulo: 'Sobre la cruz de ankh',
      desc: 'La cruz de ankh es un símbolo egipcio milenario de vida, protección y equilibrio energético. En este trabajo la utilizo como herramienta para limpiar y sellar tu campo, devolviéndote fuerza vital y claridad. \nTécnica creada por José Dekovic, prestigioso radiestesista chileno. Se dedicó a la investigación de la cultura egipcia, enfocándose en la aplicación de la \ntecnología Ankh.\nGracias a su investigación hoy podemos contar una herramienta eficaz y altamente eficiente de detección y limpieza de energías discordantes.',
    },
    nombre: 'Limpieza con Cruz Ankh',
    frase: 'Trabajo minucioso de limpieza de todo tipo de ataques y energías mal calificadas: envidias, mal de ojo y trabajos energéticos dirigidos.',
    paraQuien: [
      'Sientes que algo impide que manifiestes la vida que anhelas.',
      'En tu círculo cercano aparecen envidias y celos constantes.',
      'Vives mal humor o pensamientos negativos recurrentes.',
      'Se te caen negocios o acuerdos a última hora.',
      'Sientes miedo o angustia sin explicación, o ves/sientes presencias.',
      'Aparece en ti, sin razón aparente la sensación de que no vale la pena vivir.',
      'Percibes un desvío constante de tu misión.',
    ],
    noEs: 'Para quien  responsabiliza a otros por todo lo que le pasa.\nQuién no quiere salir del estado de victimismo y reclamo.\n',
    noEsNota: '',
    transf: [
      { n: '01', titulo: 'Limpieza profunda de tu campo energético', desc: 'Sientes que se retira el peso  y la densidad que cargabas, para experimentar la vida con mayor liviandad.\n' },
      { n: '02', titulo: 'Armonización de tu campo energético', desc: 'Encuentras un punto de  equilibrio en tu flujo energético, promoviendo una sensación de orden y coherencia en tu sistema energético.' },
      { n: '03', titulo: 'Descanso y energía vital', desc: 'Regeneras y recuperas tu energía vital, creatividad y orientación en tu camino de vida, centrado en tu bienestar y poder personal.' },
    ],
    primeraTitulo: 'Un trabajo que se realiza de manera asincrónica, con diagnóstico, limpieza y conclusiones.',
    primeraBody: [
      'La Cruz de Ankh, o cruz de la vida, es una herramienta de sanación egipcia que ayuda a eliminar interferencias energéticas que afectan tu campo, tu salud, tu economía y tus relaciones.',
      'El diagnóstico, la limpieza, las conclusiones y las lecciones a aprender se te envían por WhatsApp en un documento una vez concluido el trabajo. Si es necesario una video llamada para aclarar dudas lo realizaremos.',
    ],
    detalles: [
      { label: 'Frecuencia', val: 'Según lo necesites' },
      { label: 'Modalidad', val: 'Asincrónico · online' },
    ],
    rel: { nombre: 'Sanación cuántica con Rosas', desc: 'Abre el corazón y transforma patrones de raíz.', key: 'rosas' },
  },
  especiales: {
    eyebrow: 'Sesiones a medida',
    img: '/assets/especiales-shell.jpg',
    imgPos: '66% 18%',
    nombre: 'Sesiones especiales',
    frase: 'Encuentros diseñados a tu medida para momentos que se salen del catálogo regular: proyectos, cierres de ciclo, cumpleaños o el acompañamiento de una pareja.',
    sobre: {
      titulo: 'Qué son las sesiones especiales',
      desc: 'No todas las búsquedas caben en una sesión estándar. Cuando lo que necesitas pide un enfoque propio, diseñamos juntos un espacio a la medida: elegimos las herramientas adecuadas (péndulo, registros akáshicos, sanación energética, rosas) según tu momento y tu intención. Escríbeme y lo conversamos antes de agendar.',
    },
    paraQuien: [
      'Estás por iniciar o cerrar un proyecto y buscas claridad y respaldo energético.',
      'Atraviesas un cierre de ciclo importante y quieres transitarlo con acompañamiento.',
      'Quieres regalar (o regalarte) una sesión distinta en un cumpleaños o fecha especial.',
      'Tú y tu pareja desean trabajar juntos un tema que les afecta como vínculo.',
      'Tienes una necesidad específica que no encaja en las sesiones del catálogo.',
      'Quieres potenciar un proyecto/empresa.',
      'Deseas prepararte para un examen, tesis, entrevista o evento importante.',
    ],
    noEs: 'Para quien busca una fórmula fija o resultados garantizados. Estas sesiones se construyen contigo y requieren tu apertura y participación.',
    noEsNota: '',
    transf: [
      { n: '01', titulo: 'Un espacio hecho a tu medida', desc: 'Trabajamos exactamente sobre lo que tú necesitas, sin moldes prestablecidos.' },
      { n: '02', titulo: 'Las herramientas adecuadas', desc: 'Combino las técnicas que mejor sirvan a tu momento y a tu intención.' },
      { n: '03', titulo: 'Claridad para avanzar', desc: 'Sales con una lectura de tu situación y pasos concretos para tu proceso.' },
    ],
    primeraTitulo: 'Antes de agendar conversamos para diseñar juntas el encuentro que necesitas.',
    primeraBody: [
      'Escríbeme contándome tu situación y lo que buscas. A partir de ahí definimos el enfoque, las herramientas y la duración de la sesión.',
      'Cada sesión especial es única, por eso los detalles de tiempo y modalidad los acordamos según tu caso.',
    ],
    detalles: [
      { label: 'Duración', val: 'A convenir' },
      { label: 'Frecuencia', val: 'Según tu necesidad' },
      { label: 'Modalidad', val: 'Online · CDMX' },
    ],
    pack: {
      eyebrow: 'especial 333',
      titulo: 'Un camino de tres sesiones',
      desc: 'Para quienes buscan un acompañamiento intensivo y profundo, este pack integra  encuentros pensados como un proceso continuo.  Las sesiones se realizarán con una semana de diferencia en cada encuentro.\n\nPuedes tomar esta metodología cada vez que necesites, puedes tener un motivo especial o sólo un deseo de reorganizar y depurar tu  campo energético.',
      pasos: [
        { n: '01', titulo: 'Primera sesión:  ANKH', desc: 'Depuramos de forma profunda tu estado energético actual.\nLiberamos los bloqueos para poder sembrar una nueva frecuencia energética' },
        { n: '02', titulo: 'Segunda sesión:\nCanalización y TRE', desc: 'Limpiamos bloqueos específicos y trabajamos a fondo el tema central que desees trabajar. Poniendo foco en la lección que estás transitando.' },
        { n: '03', titulo: 'Tercera sesión:\nSanación con Rosas', desc: 'Integramos la información recibida y armonizamos tus cuerpos para que el proceso se sienta sostenido en el tiempo.' },
      ],
      nota: 'Las tres sesiones se agendan con la frecuencia que mejor acompañe tu proceso. Escríbeme para conocer la inversión del pack.',
    },
    rel: { nombre: 'Canalización y TRE', desc: 'Limpia los bloqueos que hoy te detienen.', key: 'canal' },
  },
};

// Orden de la tabla de servicios del README (línea ~20-28).
export const serviceSlugs: (keyof typeof services)[] = [
  'canal',
  'akashicos',
  'rosas',
  'ankh',
  'angelical',
  'especiales',
  'doula',
];
