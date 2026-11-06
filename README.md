# Matices

Aplicación interactiva para explorar, identificar y comprender emociones mediante una rueda radial de navegación libre y múltiples niveles de profundidad.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4

## Requisitos

- Node.js 20.19+ o 22.12+
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

## Validación

```bash
npm run typecheck
npm run build
```

## Estado del MVP

La primera entrega implementa una rueda radial interactiva con selección múltiple de las seis etiquetas principales visibles en la imagen de referencia.

**El catálogo completo aún no está validado.** Las etiquetas iniciales se mantienen marcadas como pendientes de validación y no se inventan emociones de segundo o tercer nivel. La siguiente etapa es transcribir y verificar el catálogo completo contra la fuente original.

## Principios de experiencia

- La rueda funciona como un mapa de exploración, no como un árbol de navegación obligatorio.
- Se puede seleccionar una emoción directamente.
- Se pueden seleccionar varias emociones.
- La persona puede detenerse cuando quiera.
- La interfaz no diagnostica ni juzga.

## Fuente de referencia

[La rueda de las emociones — Alberto Barbero](https://www.albarbero.com/2021/07/la-rueda-de-las-emociones.html)
