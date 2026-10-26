# Memorizador OS10

Aplicación React + Vite para estudiar 103 preguntas en 20 categorías mediante cuatro pasos de memorización y tres modalidades de examen. El progreso se guarda en el navegador.

## Desarrollo

Node.js 24 y npm (validados con 24.19.0 y 11.9.0):

```sh
npm ci
npm run dev
npm run build
npm run lint
npm test
npm run test:browser
```

Las pruebas de navegador usan Chromium instalado en `/usr/bin/chromium` si existe. Puede elegirse otro binario con `PLAYWRIGHT_CHROMIUM_EXECUTABLE`; en otros entornos se puede instalar el navegador de Playwright con `npx playwright install chromium`. Los tests levantan su propio servidor en el puerto 5174 y no necesitan conexión a Google Fonts.

## Revisión legislativa

Corte: **26 de octubre de 2026**. El [informe de auditoría](docs/auditoria-2026-10-26.md) incluye las 103 preguntas originales, clasificación, correcciones, fundamentos y límites. Las [fuentes oficiales y extractos](docs/fuentes/manifest.json) identifican la versión consultada; las normas de vigencia futura se distinguen del régimen aplicable al corte. Los fundamentos se consultan desde cada tarjeta sin avanzar ni calificar.

## Progreso y mantenimiento del banco

Las categorías y preguntas tienen IDs permanentes escritos en `src/temario.js`. No deben renombrarse por corregir una respuesta, ni calcularse a partir de su posición. `src/legacy-ids.js` conserva la correspondencia de los índices de la versión original y no debe regenerarse al reorganizar el banco.

`os10-srs` permanece como copia intacta de los datos originales. La aplicación migra a `os10-srs-v2` sin alterar las fechas ni los intervalos de repaso. Los datos inválidos o de versiones desconocidas no se sobrescriben; se avisa cuando solo puede trabajarse en memoria. Véanse las pruebas de migración y el informe para detalles, incluidos los límites de volver a la aplicación antigua.

Al editar contenido, actualiza el registro de auditoría y sus fuentes; los tests detectan diferencias con el banco. Las correcciones de texto nunca deben reiniciar una agenda.
