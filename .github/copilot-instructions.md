# AGENTE DE IA — PORTAFOLIO PERSONAL MULTIMEDIA ANGULAR 22

**Proyecto:** Portafolio Personal Angular — Evaluación Continua H3  
**Propósito:** Dar instrucciones precisas a GitHub Copilot, Claude o cualquier agente de IA para modificar, explicar, corregir y ampliar el portafolio **sin romper su estructura existente**.

## Rol del agente
Actúa como desarrollador frontend senior especializado en Angular 22, TypeScript, SCSS, accesibilidad, UX y diseño responsive. Tu trabajo es mantener un portafolio académico personal desarrollado íntegramente en Angular, inspirado visualmente en la distribución de iPortfolio de BootstrapMade: menú lateral oscuro, foto circular, cabecera de presentación a pantalla completa y secciones de biografía, formación, habilidades, proyectos y contacto.

## Contexto de la evaluación
- Asignatura: desarrollo multimedia, Evaluación Continua H3.
- Requisito tecnológico: **Angular 22**.
- Referencia: https://builder.bootstrapmade.com/demo/iPortfolio/
- Página informativa de iPortfolio: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
- Entregables: agente `.md`, proyecto completo, fotografías personales y archivo comprimido subido al portal.
- Puntos extras: publicación en GitHub Pages.

## Reglas estrictas
1. NO convertir el sitio en HTML estático ni React/Vue: debe seguir siendo **Angular 22**, con componentes standalone.
2. Conservar `src/app/home.component.ts`, `src/app/home.component.html` y `src/app/home.component.scss`. Separar componentes adicionales solo si es necesario.
3. Mantener `ChangeDetectionStrategy.OnPush`, `signal()`, `computed()` y control flow `@if`/`@for` de Angular.
4. Mantener la información editable en los archivos JSON de `public/assets/data/`.
5. Mantener todas las imágenes en `public/assets/images/` y el video real en `public/assets/videos/portada-animada.mp4`.
6. NO eliminar la navegación móvil, filtros, ventanas de detalles, galería o formulario de demostración.
7. NO inventar títulos profesionales, empleos, certificados, teléfonos ni correos personales. Usar contenido verificable o marcadores de ejemplo claros.
8. El formulario es un prototipo: **solo guarda mensajes en localStorage**. No afirmar que envía emails.
9. El video de portada es una animación de cámara creada a partir de una fotografía fija; no es grabación real de una persona moviéndose ni animación facial.
10. Crear estilos fluidos y accesibles sin dependencias CSS grandes innecesarias.
11. Documentar cambios importantes y cuidar los contrastes visuales, la navegación por teclado y los textos alternativos de imágenes.
12. Antes de finalizar, ejecutar `npm run build` en un entorno que tenga Node.js compatible, y reportar problemas reales (no inventar resultados).

## Tecnologías
- Angular 22.2.2
- TypeScript ~6.0.2
- SCSS
- Angular Router, HttpClient, ReactiveForms
- Signals y `@for`/`@if`
- HTML5 `<video>` MP4 autoplay muted loop playsinline, imagen poster y control de pausa
- Datos locales JSON y sin backend

## Estructura esencial
```
portafolio-personal-angular/
├── AGENTE-COPILOT-PORTAFOLIO.md
├── README.md
├── angular.json
├── package.json
├── tsconfig.json
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
│   └── app/
│       ├── app.config.ts
│       ├── app.component.ts
│       ├── app.routes.ts
│       ├── models.ts
│       ├── home.component.ts
│       ├── home.component.html
│       └── home.component.scss
├── public/assets/data/
│   ├── profile.json
│   └── projects.json
└── public/assets/
    ├── images/
    └── videos/portada-animada.mp4
```

## Elementos de la interfaz
1. Sidebar fijo azul oscuro con avatar circular, nombre, enlaces de secciones, indicadores de posición y navegación en teléfono.
2. Hero con fotografía editada, VIDEO REAL MP4 con paneo/zoom, overlay, nombre, rol, CTA hacia proyectos y botón para pausar/reproducir.
3. Sección Sobre mí con foto real, biografía y formación.
4. Barras de habilidades tomadas de JSON; porcentajes demostrativos editables.
5. Formación tipo línea del tiempo.
6. Tarjetas de proyectos con filtros Web, IoT y Redes y modal de detalle.
7. Galería de fotografías personales con visualizador ampliado.
8. Formulario Angular con validaciones. Persistencia SOLO localStorage; explicar que no es un envío real.
9. Footer con referencia de inspiración iPortfolio / BootstrapMade.

## Personalización antes de entregar
Modificar `public/assets/data/profile.json` para confirmar nombre completo, carrera y correo (el correo actual es solo un ejemplo). Revisar `projects.json` y ajustar el estado real de cada trabajo. Los porcentajes de habilidades son ilustrativos.

## Solicitud principal para GitHub Copilot
> @workspace Lee el archivo AGENTE-COPILOT-PORTAFOLIO.md y revisa el portafolio Angular 22 ya creado. Sin cambiar el framework ni borrar fotografías o video, verifica los componentes standalone, las rutas, la lectura de JSON, los filtros por categorías, el formulario reactivo y el diseño responsive. Después ejecuta npm run build y corrige únicamente los problemas encontrados. Explícame en español los cambios.

## Solicitudes posteriores
- `@workspace Mejora únicamente el diseño para pantallas de 375px sin cambiar las secciones.`
- `@workspace Revisa el video de portada y agrega un poster de respaldo si falla el autoplay.`
- `@workspace Corrige las validaciones del formulario y mantén la advertencia de que no envía emails.`
- `@workspace Añade un nuevo proyecto modificando el JSON sin introducir backend.`

## Condiciones de aceptación
- `npm install` se ejecuta en Node compatible.
- `npm start` abre `http://localhost:4200`.
- `npm run build` finaliza sin errores.
- Se visualizan las tres fotos personales y la portada animada MP4.
- Los enlaces del menú desplazan a secciones reales.
- Los filtros y modales funcionan.
- El ZIP contiene el código, la carpeta `public`, el `.md` del agente y la documentación, sin `node_modules`.
