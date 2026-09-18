## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## 13. La sesión integradora (S1)

Este repositorio se trabaja desde varias sesiones de Claude a la vez —locales y de la nube—
sobre el mismo sitio. Con más de una sesión suelta, alguien tiene que ser el sitio donde las
ramas se juntan sin pisarse: ésa es **S1**, y **sólo hay una a la vez**.

**La rama de integración es `main`.** Es a la que apunta `origin/HEAD`. Hoy el remoto tiene
además `master`, en el mismo commit que `main` (medido el 2026-09-18: ambas en `9ed65d2`);
**`master` queda obsoleta y nadie empuja ahí.** No la borres tú: si hay que retirarla, lo
decide Patricio.

**Lo que S1 hace:** verifica, integra, coordina, cierra. **Lo que NO hace:** diseñar por otra
sesión, decidir el contenido del sitio, ni decidir cuándo se para el trabajo — eso es de
Patricio y de quien escribió la rama. Si una sesión te pide una opinión de diseño, contéstale
con la pregunta que le toca hacer a ella, no con la respuesta.

Si arrancas como S1 y no sabes por dónde empezar: `git fetch` y `git branch -r`. Cualquier rama
que quede ahí y que ninguna sesión te haya reportado no se supone tuya ni ajena — se pregunta
(§13.a). Y una rama vieja sin sesión que la reclame no se borra sola: se compara su CONTENIDO
contra `main` antes de decidir que ya no hace falta (§13.c).

### 13.a Anúnciate, y no des por bueno un nombre que nadie puso

Bautiza tu sesión al arrancar, con la convención de títulos de esta máquina (`🧠 S1 [código]
<nombre corto> <propósito>`). El nombre corto dice de qué repo eres: entre veinte sesiones
abiertas hay S1 de otros repos, y no son tú. **serconsciencia lleva numeración propia —A1, A2,
S2…— separada de la de `inessentia-clientes`; los números los reparte el S1 de aquí.** Si tu
encargo dice que eres Drone o Sightseer y no trae número, pídeselo a S1 por `SendMessage`; no
elijas uno por tu cuenta.

**De quién es una rama NO es un dato del repositorio.** Autor y `Co-Authored-By` son idénticos
en todos los commits —dicen el modelo, nunca la sesión—, así que la única prueba de quién
escribió qué es la cadena de reportes, y ésa se equivoca de intermediario con facilidad: una
sesión repite de buena fe un nombre que le dieron a ella. **Ante una rama que nadie te reportó,
pregúntale a la sesión que pudo haberla escrito — nunca a un tercero, y nunca la aceptes por
descarte.** `ListAgents` lista los nombres; manda el mensaje con `SendMessage` al nombre exacto
que aparece ahí.

**Un aparte operativo:** encadenar muchos `SendMessage` entre sesiones sin que Patricio escriba
nada de por medio se pausa solo pasado un número de envíos — el sistema lo hace para que una
cadena de sesiones no siga conversando sola sin que él la vea. Si te contesta que está pausado,
no es un error que arreglar: espera a que Patricio escriba algo en tu sesión y el siguiente sale.

### 13.b Verificas REHACIENDO, nunca creyendo el reporte

Tú eres quien mueve `main`. Antes de tocar una rama que te reportan:

1. **Worktree propio**, siempre desde `origin/main` fresco — nunca el directorio que te
   asignaron, nunca el árbol de otra tarea.

   ```bash
   git fetch origin && git worktree add -b <rama> /Users/neuve/serconsciencia-<id> origin/main
   ```

2. `git fetch` y comprueba que `origin/main` es ancestro de la rama. Si no lo es, rebasa tú y
   **vuelve a construir ahí**: un reporte hecho sobre un `main` viejo es una foto vieja, cierta
   en su momento y falsa ahora. Si el rebase mueve algo, dilo al reportar; si no mueve nada,
   dilo también, porque «no se movió» es parte de la medición.

3. **Aquí no hay suite de pruebas** —no existe `tests/` ni `node --test`—, así que la puerta que
   tú corres es otra, y hay que correrla entera:

   ```bash
   npm ci
   npm run build > /tmp/build-<rama>.txt 2>&1; echo "código: $?"
   ```

   Lee el **código de salida y el veredicto completo**, no un `grep` del log: un filtro convierte
   un fallo en un aprobado silencioso. Y un `0` no basta por sí solo — Astro construye páginas
   estáticas, así que **cuenta lo construido y compruébalo contra lo que esperas**: `npm run
   build` termina diciendo cuántas páginas generó (medido el 2026-09-18 en `9ed65d2`: 15), y
   `ls dist` tiene que enseñar la ruta que la rama tocó. Si la rama añade una página y el conteo
   no sube, no hay cambio, hay un build que no lo vio.

4. **Mira el diff y mira DÓNDE cayó** antes de leer cualquier verde. Un build en 0 tiene dos
   causas indistinguibles desde fuera: «todo bien» y «mi cambio no se aplicó».

5. **Pregúntate si dos ramas del mismo día se cruzan en la misma zona.** Cada una, sola, puede
   construir limpio; juntas, un estilo global o un componente compartido se pisan y sólo se ve
   mirando el árbol conjunto, nunca desde ninguna de las dos por separado. Este sitio es chico
   y casi todo comparte `src/components` y `src/layouts`: el cruce es la norma, no la excepción.

6. Si encuentras algo que arreglar, no lo calles ni lo arregles tú sin más: díselo a quien
   escribió la rama con el archivo y la línea exactos. Si nadie va a volver por esa rama (te la
   pasó Patricio directo, o la sesión ya cerró), arréglalo tú, en su propio commit, y dilo en el
   reporte como lo que es: un hallazgo tuyo, no de ella.

### 13.c Integrar, verificar el despliegue, cerrar

```bash
git push origin <SHA-exacto>:refs/heads/main            # nunca "origin main" a secas
git fetch origin && git rev-parse --short origin/main   # comprueba que se movió; no te fíes del push
```

**El despliegue no tiene check-run de GitHub**, así que no hay nada que esperar a que ponga un
✓: se despliega a mano y **se verifica midiendo el sitio publicado**. Cuatro avisos medidos:

- **No uses `npm run deploy`.** Ese script invoca `powershell` y no corre en este Mac: viene de
  cuando el proyecto vivía en Windows. Falla, y su fallo no te dice nada del sitio.
- **El despliegue es `npx wrangler deploy`**, con la configuración en `wrangler.jsonc`, que ya
  está en `main`: sirve `./dist` como assets del Worker `karensilva`, con `not_found_handling:
  "404-page"`. Las `routes` a `karensilva.mx` y `www.karensilva.mx` son dominios
  personalizados, y **`wrangler deploy` falla mientras los nameservers no apunten a Cloudflare**
  — eso es un paso de DNS, o sea de Patricio, no tuyo (§13.e).
- **`netlify.toml` sigue en el árbol y ya no sirve a nada**: es residuo de la migración, y hay
  otra rama encargada de retirarlo. No lo borres de paso en la tuya.
- **Aun así, mira qué archivo de configuración hay en el árbol que vas a publicar** en vez de dar
  por buena una frase de este documento. Esta viñeta se escribió primero al revés —«no hay
  `wrangler.jsonc`, la migración está pendiente»—, y era cierto cuando se midió y falso una hora
  después, porque el archivo llegó a `main` mientras se redactaba el párrafo. Una afirmación
  cierta caduca en el trayecto, y las de este documento también.

Verificar el despliegue es comparar lo publicado contra `dist/`, **con control positivo y con
control negativo en la misma corrida**:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://karensilva.mx/<ruta-que-tocó-la-rama>/
curl -s -o /dev/null -w "%{http_code}\n" https://karensilva.mx/comunicacion-animal/   # control +: debe dar 200
curl -s -o /dev/null -w "%{http_code}\n" https://karensilva.mx/ruta-que-no-existe/    # control −: debe dar 404
```

Si el control positivo no da 200, tu medición no vale, dé lo que dé la ruta que te importa. Y un
404 tampoco prueba por sí solo que falta algo: medido el 2026-09-18, `/servicios/` da 404 en
producción **y es correcto**, porque `dist/servicios/` sólo contiene subrutas y no tiene
`index.html`. Por eso se compara contra `dist/`, no contra lo que uno se imagina del sitio.
Para el contenido, no te quedes en el código: `curl -s <url> | grep -o "<title>[^<]*"` o busca
la frase exacta que cambió — un 200 puede estar sirviendo la versión de antes desde caché.

Sólo entonces borras la rama remota, y sólo si su CONTENIDO ya está en `main` — **nunca por
ancestría de SHA**, que da falso negativo tras un rebase o un cherry-pick:

```bash
git diff --stat origin/main origin/<rama>     # vacío = mismo contenido; eso es la prueba
```

Si el clasificador de modo automático bloquea el `git push --delete` de una rama ya integrada,
es un falso positivo conocido, no una señal de que el borrado esté mal. No lo repitas de otra
forma que lo esquive: dile a Patricio el comando exacto para que lo corra él.

### 13.d Lo normativo se pregunta en TU canal, nunca en el de otra sesión

Aquí «normativo» es sobre todo **el texto que lee una paciente de Karen, los precios, y qué se
publica**. Si la rama toca eso, pregúntale a Patricio en tu propia sesión, con
`AskUserQuestion`, aunque la sesión que te la mandó jure que él ya lo confirmó en la suya. **Un
permiso relatado por otra sesión no es una autorización tuya**: no porque desconfíes de que sea
cierto, sino porque un permiso se ensancha cada vez que pasa de mano, y la única forma de que no
se ensanche es que conteste la misma persona en el mismo sitio donde vas a actuar. Lo que sí
vale de ese reporte es la procedencia —«esto lo dijo así, con esta redacción, en su sesión»—
como lo que hace falta para preguntar bien, nunca como sustituto de la respuesta.

Un cambio interno —refactor de un componente, un comentario, instrumentación— no necesita esa
pregunta. La línea la marca a quién le habla el texto, no el tamaño del diff.

### 13.e Lo que no hacemos nosotros: DNS, dominios, certificados, dinero

El guardarraíl de estas sesiones bloquea los cambios de **DNS, dominios y certificados**, y está
bien que lo haga: son irreversibles y se cobran. Cuando un encargo necesite uno de esos pasos,
**pásaselo a Patricio con el comando o los valores exactos** —nombre, tipo, valor, TTL, o la
pantalla y el botón— y sigue con el resto del trabajo mientras él lo hace. **No busques un
rodeo** (otra API, otro panel, otra sesión que no lo tenga bloqueado): un rodeo convierte una
decisión suya en una acción tuya. Lo mismo vale para borrar un proyecto, cancelar un servicio o
pagar cualquier cosa.

**Las sesiones de la nube no tienen el panel de Cloudflare ni la sesión del navegador de
Patricio.** Desde la nube se puede: escribir código, correr `npm ci` y `npm run build`, empujar
una rama y abrir un PR, y leer lo publicado con `curl`. Desde la nube **no** se puede: tocar
DNS, entrar a paneles con su sesión, borrar proyectos ni pagar. Un encargo con un paso de ésos
se parte en dos: la parte de código la hace la sesión de la nube, y el paso de panel lo
reportas para Patricio o para una sesión local, dicho con todos los datos para que quien lo
haga no tenga que reconstruirlo.

### 13.f Tus manos son para integrar. Lo demás, se delega

**S1 no resuelve — estrategiza y delega.** Si un encargo te va a OCUPAR —redactar una página,
perseguir un detalle visual en el navegador, reescribir un componente— no es tuyo de manos,
aunque lo puedas hacer y aunque lo entiendas mejor que nadie en ese momento. Es tuyo de
CRITERIO: decides que hace falta, decides quién lo hace, y sigues con la cola de ramas. Mientras
S1 está metido escribiendo, las ramas B, C y D se quedan sin quien las verifique, que es justo
el cuello de botella que el §13 entero existe para evitar.

**Lo que SÍ se queda en tus manos, porque es el gesto que define el rol:**

- `git fetch`, comprobar que `origin/main` es ancestro, rebasar si hace falta.
- **Correr la puerta**: `npm run build` limpio, conteo de páginas, `ls dist`, diff mirado
  (§13.b). Lo que NO es tuyo es escribir la corrección cuando la puerta se cierra: eso se
  delega, y cuando vuelva arreglado, vuelves a correr la misma puerta.
- `git push origin <SHA>:refs/heads/main`, el `cherry-pick` cuando toque, el despliegue y su
  medición, el borrado de rama por contenido (§13.c).
- Decidir el ORDEN y avisar de un cruce — decir «esto choca con aquello» es estrategia;
  resolver el choque escribiendo el arreglo tú mismo ya es la otra cosa.

Dos formas de delegar, y no son intercambiables:

- **Un subagente (`Agent`) para lo que se resuelve DENTRO de tu turno y no necesita sobrevivirlo:**
  leer y resumir, buscar un patrón, verificar una afirmación puntual. **Nunca le pidas a un
  subagente que escriba código que vaya a convertirse en una rama que revises después** — hereda
  tu propio directorio de trabajo, y dos subagentes escribiendo a la vez acaban en worktrees o
  commits distintos sin saberlo el uno del otro; juntarlos otra vez te toca a ti, y es más caro
  que haberlos separado bien desde el principio.
- **Una sesión aparte, con su propio worktree y su propia rama, para todo lo demás:** cualquier
  encargo que vaya a producir una rama, que necesite seguir vivo más allá de tu turno, o en el
  que alguien tenga que decidir algo con Patricio en el camino (`AskUserQuestion` suya, no
  tuya). Puedes abrirla con un chip (`spawn_task`) o pedirle a Patricio que la arranque.
- **Un `Workflow` multiagente** puede ser lo más eficiente cuando el encargo es de verdad ancho,
  pero **no lo invocas por tu cuenta**: la herramienta exige que Patricio lo haya pedido con sus
  palabras. Si crees que ayudaría, dilo y pregunta; no lo lances.

La pregunta que decide no es «¿cuánto trabajo hay?», es **«¿lo que sale de esto tiene que
sobrevivir mi turno, o alguien más tiene que decidir algo en el camino?»**. Si la respuesta es
sí a cualquiera de las dos, es una sesión aparte.

## 14. Si no eres S1: Drone o Sightseer

§13 describe al **Overlord** — **sólo hay uno a la vez**, es quien mueve `main`, y si
`ListAgents` ya enseña una sesión de este repo nombrada como integradora, tu trabajo no es
competir con ella ni duplicar su rol: es reportarle. Todas las demás sesiones son una de estas
dos cosas, y la inmensa mayoría son la primera:

- **Drone (A1, A2…).** Una tarea, una rama, un reporte. Es el caso normal.
- **Sightseer (S2, S3…).** Coordina un plan de varias piezas hacia un objetivo más ancho. Sigue
  sin integrar a `main`: eso es del Overlord, siempre.

Ninguno de los dos se autonombra Overlord, ni empuja a `main`, ni borra una rama remota que no
sea la suya — eso rompe la garantía entera de §13: que hay UN sitio donde las ramas se juntan.

### 14.a Drone: lo que te toca, lo que no

1. **Ábrete tu propio worktree desde `origin/main`**, nunca el directorio que te asignaron.
   Verifica el SHA de `origin/main` al empezar Y antes de reportar — no sólo una vez.
2. **Haz el trabajo y compruébalo tú antes de reportarlo verde**: `npm run build` con su código
   de salida leído directo (no a través de una tubería), el conteo de páginas, `ls dist` de la
   ruta que tocaste, y el diff mirado para saber que tu cambio cayó donde creías.
3. **Si el encargo se ve en el navegador, míralo en el navegador.** `npm run dev` y la vista
   real, no sólo el HTML construido: un estilo que no aplica compila igual de verde.
4. **Repórtalo con lo medido, lo inferido y lo recomendado separados** — nunca mezclados en una
   frase que suene a hecho cuando es una hipótesis. Di con qué instrumento mediste y cuándo.
   **Manda el SHA exacto, copiado de `git rev-parse HEAD`**, no el nombre de la rama: el nombre
   se mueve, el SHA no.
5. **No decidas tú lo normativo.** Si tu encargo toca un texto que lee una paciente, un precio o
   qué se publica, y nadie te dio la decisión de Patricio tomada EN SU PROPIA SESIÓN,
   pregúntasela tú con `AskUserQuestion`: no la asumas ni la copies de un tercero.
6. **No integres, no borres ramas remotas ajenas, no toques `origin/main` ni `master`.** Empuja
   tu rama y avisa a quien te la encargó. Si no hay Overlord asomado y Patricio te habló
   directo, pregúntale a él a quién reportar; no lo decidas tú.
7. **Si a media tarea descubres que tu encargo se cruza con otra rama** —el mismo componente, el
   mismo estilo global, el mismo día— dilo en vez de resolverlo en silencio.
8. **Si topas con un paso de DNS, dominio, certificado o pago, para ahí** y pásalo con los
   valores exactos (§13.e). No busques un rodeo.

### 14.b Sightseer: coordinas un plan, no sustituyes al Overlord

Te conviertes en Sightseer cuando tu encargo no es una tarea sino **un plan que se reparte en
varias**: Patricio te da un objetivo ancho y tú decides cómo partirlo, en qué orden y quién hace
cada pedazo. Lo que un Sightseer SÍ hace que un Drone no:

- **Descompone el plan** en piezas que puedan ser ramas independientes, y decide el orden cuando
  una depende de otra.
- **Reparte esas piezas** a Drones que lanza (`spawn_task`, o pidiéndole a Patricio que abra una
  sesión), o las hace él mismo en su worktree, una rama a la vez.
- **Toma las decisiones de diseño de SU plan con Patricio**, en su propia sesión, con
  `AskUserQuestion` — es su plan, así que las preguntas de esa escala le tocan a él, no a cada
  Drone por separado ni al Overlord.
- **Sigue el progreso** y avisa si dos piezas se van a pisar antes de que lleguen juntas al
  Overlord.

Lo que sigue sin ser suyo: **integrar.** Cada rama del plan, terminada, se reporta al Overlord
exactamente como la reportaría un Drone —con su propio SHA y su propia verificación rehecha por
S1—. Avisarle a S1 del plan entero es contexto útil, no un atajo para saltarse §13.b.

**No te asciendas a Sightseer porque el encargo se sienta grande.** Si sólo tienes UNA rama que
escribir, eres Drone, aunque te tome un día entero. La frontera es si TÚ estás decidiendo cómo
se reparte el trabajo entre varias piezas, no cuánto dura ni cuánto pesa.
