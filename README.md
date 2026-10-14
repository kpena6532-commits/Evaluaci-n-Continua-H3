# Portafolio Personal — Angular 22 · Evaluación H3

Sitio web multimedia de portafolio personal desarrollado con **Angular 22**, inspirado en la distribución visual de **iPortfolio (BootstrapMade)**. Se construyó una implementación Angular propia, en vez de pegar una plantilla HTML en `index.html`.

## Qué encontrarás

- Sidebar oscuro, avatar personal y menú navegable.
- Hero cinematográfico con video MP4 de una foto personal animada (zoom y paneo de cámara) y imagen de respaldo.
- Secciones de perfil, formación, habilidades, 4 proyectos académicos de ejemplo, galería real y contacto.
- Filtros de proyectos, modal de detalle, visor de fotos y responsive.
- Formulario Reactivo Angular con validaciones que almacena los mensajes **solo en el navegador** (localStorage). Sin backend.
- Agente para Copilot en `AGENTE-COPILOT-PORTAFOLIO.md`.
- Carpeta `.github/workflows/` preparada para GitHub Pages.

## Requisitos

- Node.js compatible con Angular 22: **22.22.3 o superior en la rama 22**, o **24.15.0 o superior en la rama 24**, o **26.0.0+**.
- npm (incluido con Node.js).
- VS Code recomendado.

> Si aparece `EBADENGINE` o el Angular CLI dice `requires a minimum Node.js version`, actualiza Node.js. Por ejemplo, Node 24.11.1 NO es suficiente para Angular 22.

## Cómo ejecutarlo en Windows (PowerShell)

1. Descomprime el ZIP y abre esta carpeta en VS Code.
2. Desde la raíz del proyecto (donde está `package.json`) ejecuta:

```powershell
node -v
npm install
npm start
```

3. Abre `http://localhost:4200/`.
4. Para validar compilación:

```powershell
npm run build
```

> En este entorno de creación no se pudo hacer `npm install` porque no hubo conexión al registro npm, por lo que no se afirma una compilación final validada. Verifícala en tu equipo.

## Cambiar tu información

- `public/assets/data/profile.json`: nombre, universidad, correo, descripción, skills y galería.
- `public/assets/data/projects.json`: proyectos, estados, descripciones y tecnologías.
- `public/assets/images/`: fotos y portadas de proyectos.
- `public/assets/videos/portada-animada.mp4`: video del hero.
- `src/app/home.component.scss`: colores, espacios, tipografía y diseño.
- `src/app/home.component.html`: secciones de la página.

El nombre corto configurado de inicio es «Alexis», editable. El correo `tu-correo@ejemplo.com` es **ficticio**. Los proyectos están rotulados como prácticas, propuestas o prototipos; valida su estado antes de presentar. Los porcentajes de habilidades son ilustrativos.

## El video

`portada-animada.mp4` dura aproximadamente 7 segundos, se reproduce en bucle automáticamente y **es un verdadero archivo MP4**. El movimiento consiste en una panorámica y zoom sobre una fotografía editada con IA; **no** representa movimiento real del cuerpo o rostro. Para una persona hablando o parpadeando sería necesario grabar video real o utilizar una herramienta dedicada de video IA. La fotografía de estudio `perfil-estudio.jpg` es una edición generada por IA a partir de una de las fotos del usuario. Las fotografías de la galería son versiones recortadas y ajustadas en contraste de las imágenes proporcionadas.

## Publicar en GitHub Pages (extra)

1. Crear un repositorio público en GitHub, por ejemplo `mi-portafolio-angular`.
2. Subir los archivos de este proyecto al repositorio (sin node_modules).
3. Configurar `Settings > Pages > Build and deployment > Source: GitHub Actions`.
4. Hacer push a la rama `main`. El workflow de `.github/workflows/deploy.yml` construye con Node 24 y publica el resultado con base-href del repositorio.
5. Abrir `https://TU_USUARIO.github.io/mi-portafolio-angular/` (ajusta el nombre del repo).

**Privacidad:** GitHub Pages publicado significa que tus fotos quedan disponibles públicamente. Confirma antes de subirlas.

## Derechos y créditos

- Diseño **inspirado** en la estructura de iPortfolio. Sitio de referencia: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/ . No se copiaron sus archivos ni se incluye la descarga del template oficial.
- Fotografías personales facilitadas para esta tarea; portada editada mediante IA. El proyecto no concede a terceros derechos sobre ellas.
- Código de este proyecto preparado para práctica académica.

Para la presentación y la entrega revisa `docs/GUIA-ENTREGA-H3.md`.
