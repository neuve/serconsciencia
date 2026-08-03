// Testimonios reales de la clienta. Copiados literal desde el prototipo
// `prototype/design_handoff_karen_silva/design/Karen Silva Sitio.dc.html`.
// Fuente: `testimoniosFull` (líneas ~822-834) + `testimonios` del home (líneas ~1110-1114).
// No editar, acortar ni inventar testimonios nuevos.
//
// Correcciones aplicadas respecto al prototipo (ver detalle en cada comentario inline):
// 1. El testimonio de Roxane tenía una comilla de apertura `"` que nunca se cerraba — se cerró
//    al final de la cita.
// 2. El testimonio de "Nantzy - Psicoterapeuta" sólo existía en el array `testimonios` del home
//    (no en `testimoniosFull`); se agregó aquí para no perder ese contenido.
// 3. Se agregó el campo `destacado` para marcar los testimonios que el home mostraba en su
//    extracto (Laura, Pamela, Nantzy), y así poder derivarlo desde este único array.

export type TestimonioCategoria = 'alumnos' | 'sesiones' | 'animal';

export interface Testimonio {
  quote: string;
  name: string;
  service: string;
  cat: TestimonioCategoria;
  destacado?: boolean;
}

export const testimoniosFull: Testimonio[] = [
  {
    quote: '"Mi experiencia en los diferentes cursos con esta gran maestra han sido de mucho aprendizaje y autosanación, feliz de que esté en mi camino espiritual, cerrando este año con el curso arcangelical que es realmente mágico, sanador, con herramientas claras para ayudarme y acompañar a otros en terapia. Agradecida por tu energía Karen, gracias por tanto."',
    name: 'Pamela — psicóloga',
    service: 'Talleres y Cursos',
    cat: 'alumnos',
    destacado: true,
  },
  {
    quote: '"El encontrar los distintos cursos de Karen ha tenido un impacto transformador en mi vida. Sus enseñanzas, sabiduría, conocimiento y cariño han trascendido más allá de \'las clases\', impulsando una búsqueda de crecer tanto intelectual como espiritualmente. Su dedicación, pasión y empatía forman siempre un ambiente de aprendizaje enriquecedor que me ha permitido descubrir mis fortalezas y superar mis debilidades, al mismo tiempo que formar una red linda con compañeros de otros lugares. He desarrollado una mayor confianza en mí misma y una visión más amplia del mundo y estoy muy agradecida por la oportunidad y el honor de haberla encontrado en mi camino."',
    name: 'Ana María — Odontóloga',
    service: 'Talleres y Cursos',
    cat: 'alumnos',
  },
  {
    quote: '"Hace ya más de un año comencé con la primera formación de péndulo arcangelical, y si bien lo mío son los ángeles, no pude dejar de seguirte en cada formación o taller del péndulo que fuera. No solo por la información recibida, sino por la energía de amor que le pones a todo. Me enseñaste a ir más profundo cada día, y hoy puedo decir que mi conexión con los ángeles es maravillosa. Incorporé el péndulo para todo, en mi día a día y en mis terapias, te seguiré siempre junto a la hermosa comunidad que formaste. Gracias, gracias, gracias."',
    name: 'Carola — terapeuta angelical',
    service: 'Talleres y Cursos',
    cat: 'alumnos',
  },
  {
    quote: '"Participar de los cursos o talleres impartidos por mi profesora Karencita, han sido maravillosas experiencias de transformación, de energía lumínica, de toma de consciencia, de amor y apoyo en el incremento de mi fe en lo intangible, en lo Divino. Realizar formaciones con la maestra Karen, es una experiencia donde te sientes acompañado en todo momento, disfrutas de su sabiduría, amor, simpleza, humildad, orientación constante, alegría y compromiso con lo que entrega. Si te decides a participar de sus cursos, contarás con una acompañante de LUZ."',
    name: 'Marlene Morales Cartagena',
    service: 'Talleres y Cursos',
    cat: 'alumnos',
  },
  {
    quote: '"Las formaciones de Karen son Transformadoras. Cada una de sus clases te permite incorporar conocimientos, herramientas, meditaciones y procesos de cambio, siempre acompañada y sostenida por una energía que empapa tu vida de una forma sutil y amorosa.\nKaren es muy cercana, cálida y profesional. Se ha formado una linda comunidad, que se apoya en cada momento.\nAgradezco profundamente cada clase, formación y espacio que he compartido con ella a lo largo de los años.\nEs una de esas personas que son una luz que iluminan procesos de crecimiento y te acompañan para que también puedas brillar con tu luz."',
    name: 'Tami B.',
    service: 'Talleres y Cursos',
    cat: 'alumnos',
  },
  {
    quote: '"Mi sesión con Karen me ha ayudado más allá de lo que pensaba. Poder acceder a mis registros akáshicos y preguntar me ha desbloqueado cuando no sé por dónde ir, me ha dado rutas para continuar. Lo he recomendado a personas queridas y sin duda seguiría recomendándola."',
    name: 'Perla Vázquez',
    service: 'Registros akáshicos',
    cat: 'sesiones',
  },
  {
    quote: '"Llegué con Karen sintiéndome escéptica y muy estancada a nivel profesional. Las sesiones con Karen me ayudaron a transformar mi vida de una forma que nunca imaginé. Hoy me siento mucho más conectada conmigo misma y ahora tengo ligereza. Lo único que pienso es que ojalá la hubiera encontrado antes. Cada sesión me trae una sensación de mayor conexión conmigo misma. La recomiendo de todo corazón a cualquier persona que busque un acompañamiento profundo lleno de sabiduría."',
    name: 'N.R',
    service: 'Sesiones',
    cat: 'sesiones',
  },
  {
    quote: '"Las sesiones de Registros Akashicos han venido a darle mucha claridad y certeza a mi proceso personal, me brindan una Luz que me ayuda a complementar las sesiones de terapia o sanación. Karen es una persona muy comprometida con su trabajo y es un excelente canal."',
    name: 'Gerardo — psicoterapeuta',
    service: 'Registros akáshicos',
    cat: 'sesiones',
  },
  {
    quote: '"Conocí a Karen y su servicio de lectura de Archivos Akáshicos por recomendación de mi hijo, quien ya había trabajado con ella y estaba muy satisfecho con los resultados. Desde mi primera sesión con Karen quedé impresionada por su capacidad para llegar a aspectos muy profundos de mi vida. Eran temas que yo intuía, pero que no lograba identificar con claridad ni sabía cómo transformar de manera positiva. Karen no solo me ha ayudado a comprender esas situaciones, sino también a desbloquear energías y patrones con una precisión y eficacia sorprendentes. Cada una de nuestras sesiones ha sido sumamente interesante, reveladora y enriquecedora. Karen va directo al origen de lo que necesita ser trabajado, lo que hace que el proceso sea claro, profundo y realmente transformador. Por todo ello, recomiendo ampliamente a Karen y sus servicios a cualquier persona que desee generar cambios profundos y duraderos en su vida, con resultados auténticos y significativos."',
    name: 'Maru',
    service: 'Registros akáshicos',
    cat: 'sesiones',
  },
  {
    quote: '"Llegué a las sesiones con Karen en un momento muy difícil, atravesando múltiples duelos. Su apoyo fue, y sigue siendo, un refugio lleno de calidez, cuidado y profunda presencia. Con ella encontré un espacio íntimo y seguro donde pude soltar y sentir en mis propios tiempos. Su forma de acompañar me permitió comprender los duelos desde un lugar completamente diferente, conectar con una sabiduría que no entendía tan bien y con los seres que nos acompañan."',
    name: 'Laura',
    service: 'Sesiones',
    cat: 'sesiones',
    destacado: true,
  },
  {
    quote: '"Es muy sensible y delicada a la hora de abordar tus experiencias, a la vez honesta y clara para comunicar cómo están las situaciones y qué se puede equilibrar en cada una de ellas.\nKaren construye un espacio de confianza amable y seguro en el que me siento cómoda para compartir lo que siento, intuyo, opino y/o me duele, por lo que posibilita el acceso a sanar mis memorias. Realiza un acompañamiento cuidadoso lleno de honestidad; agradezco la escucha y generosidad que entrega en cada sesión. Recomiendo su trabajo ampliamente. Es excelente."',
    name: 'Yolanda',
    service: 'Terapias individuales',
    cat: 'sesiones',
  },
  {
    quote: '"Estaba en búsqueda de un espacio más transpersonal y espiritual para poder seguir trabajando de una manera aún más profunda y considero que he avanzado a niveles inimaginables y necesarios dentro de mi proceso integral. Karen me ha acompañado con paciencia, cercanía y fuerza.\nSi estás dudando en iniciar o continuar con tu proceso, yo te diría que necesitas conectar y profundizar de una manera más sutil y profunda de aquello que no logras ver pero que sabes que existe, que no dudes en acompañarte de Karen porque puedes sorprenderte del proceso."',
    name: 'Maggie',
    service: 'Canalización y TRE',
    cat: 'sesiones',
  },
  // Nota: en el prototipo la cita abría con `"` pero nunca se cerraba. Se agregó la comilla
  // de cierre tras "gatita." para dejar la cita bien formada, sin alterar el texto.
  {
    quote: '"Fue una experiencia profundamente\nconmovedora. Me\nsorprendieron la precisión, el humor y la honestidad de las respuestas . Siento que fue un diálogo terapéutico tanto para mí,  como por la claridad que gané. Me hizo ganar confianza para mis próximos pasos, sabiendo con más detalles qué tipo de apoyo me dan. El trabajo de comunicación que hizo Karen me ayudó a encontrar más paz interna y nutrir mi relación espiritual y cotidiana con mi perrita y gatita."',
    name: 'Roxane — cineasta',
    service: 'Comunicación animal',
    cat: 'animal',
  },
  {
    quote: '"Desde nuestra sesión las cosas dieron un giro muy inesperado: comenzó a comer mejor, se mueve muchísimo y hasta corre y hace travesuras de nuevo. Platicar contigo me ayudó mucho a entenderla y a entenderme, tengo una mejor conexión con ella y siento que eso la ha hecho sanar y también a mí me ha hecho más fuerte."',
    name: 'Andrea — estudiante',
    service: 'Comunicación animal',
    cat: 'animal',
  },
  {
    quote: '"La comunicación de Karen con mis 3 gatitas fue una experiencia profundamente amorosa que me dio muchísima paz.\nSentí que se abrió un puente real de entendimiento con mis mininas: pude explicarles por qué me iba a filmar, lo que ese proceso significaba para mí y, al mismo tiempo, comprender cómo ellas lo estaban viviendo. Más que una conversación, fue una conexión muy profunda que nos permitió atravesar esa etapa juntitas desde mucho amor. Me fui tranquila a mi viaje. Ese espacio de comunicación para mí fue un regalo inmenso (:"',
    name: 'Paula',
    service: 'Comunicación animal',
    cat: 'animal',
  },
  // Agregado desde el array `testimonios` del home (línea ~1113), donde no tenía equivalente
  // en `testimoniosFull`. Texto literal, sin editar.
  {
    quote: '"Las sesiones con Karen me han ayudado a profundizar en mi desarrollo personal. A entender desde otras perspectivas emociones, pensamientos y situaciones que si bien he trabajado en terapia seguían presentes. Sin duda cada sesión ha ensanchado mi visión de mí, de mis experiencias, del mundo y me ha acompañado en momentos de duda e incertidumbre de una manera amorosa y para tener otras perspectivas. Muchas gracias Karen."',
    name: 'Nantzy - Psicoterapeuta',
    service: 'Sesiones',
    // El home del prototipo no traía `cat`; se asignó en la migración. Era
    // 'alumnos', pero el texto habla de sesiones individuales (y su propio
    // `service` es 'Sesiones'), así que caía en la pestaña equivocada.
    cat: 'sesiones',
    destacado: true,
  },
];
