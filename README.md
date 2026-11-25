# Alerta Urbana — Guadalajara

Avance de un proyecto escolar en React para consultar el clima y registrar reportes ciudadanos de Guadalajara.

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

## Avance actual

- Interfaz adaptable con apartados de clima y pronóstico.
- Valores del clima en N/A: todavía no se conecta una API meteorológica.
- Botón Ver mapa con mapa interactivo de OpenStreetMap de la zona metropolitana.
- Formulario de reportes con validación y listado mediante componentes y .map().
- Los reportes iniciales son ejemplos, no alertas verificadas.
- Los nuevos reportes se conservan en el estado de React mientras la página está abierta; se pierden al recargar.
- Los reportes aún no están conectados a marcadores del mapa.

## Revisar y compilar

```bash
npm run lint
npm run build
```
