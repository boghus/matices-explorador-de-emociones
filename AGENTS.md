# AGENTS.md

## Propósito del proyecto

**Matices** es una aplicación web interactiva para explorar, identificar y comprender emociones mediante una rueda radial de navegación libre.

La experiencia debe ayudar a una persona a reconocer lo que siente sin obligarla a encontrar una etiqueta cada vez más específica. La rueda es un mapa para explorar, no un flujo paso a paso ni un árbol de navegación obligatorio.

## Stack tecnológico

- React
- TypeScript
- Vite
- Tailwind CSS

Usa las versiones y convenciones que ya estén definidas en `package.json` y en la configuración del proyecto. No actualices dependencias ni cambies versiones principales sin una razón concreta y sin explicar el impacto.

## Principios de producto y UX

1. **Exploración libre:** se puede seleccionar cualquier emoción visible, sin tener que pasar antes por sus emociones superiores.
2. **Profundidad opcional:** la persona puede detenerse en una emoción general o explorar matices más específicos. Nunca fuerces llegar al último nivel.
3. **Selección múltiple:** permite seleccionar emociones de diferentes niveles o ramas cuando la experiencia lo requiera.
4. **Orientación espacial:** conserva la rueda radial como elemento central. Los niveles deben entenderse visualmente como anillos concéntricos.
5. **Navegación reversible:** debe ser sencillo volver a la vista general, cambiar de rama o quitar una selección.
6. **Tono amable:** la interfaz debe sentirse tranquila, accesible y sin juicios. Evita lenguaje que diagnostique, etiquete clínicamente o indique qué debería sentir la persona.
7. **Diseño Soft & Calm:** prioriza colores suaves, contraste suficiente, jerarquía clara, espacios generosos y animaciones discretas. Evita saturación visual.

## Fuente y precisión del catálogo emocional

La referencia inicial del proyecto es el artículo de Alberto Barbero:

https://www.albarbero.com/2021/07/la-rueda-de-las-emociones.html

La referencia describe tres niveles: 6 emociones principales, 36 de segundo nivel y 72 de tercer nivel. Sin embargo, existe una diferencia entre parte del texto del artículo y las etiquetas visibles en la imagen.

**Reglas obligatorias para los agentes:**

- No inventes, completes ni deduzcas nombres de emociones para rellenar el catálogo.
- No sustituyas la rueda de referencia por la rueda de Plutchik ni por otro modelo.
- No presentes etiquetas provisionales como si fueran datos verificados.
- Mantén el catálogo separado de los componentes visuales.
- Si no se puede verificar una etiqueta o su relación jerárquica, documenta la duda y solicita validación antes de incorporarla como definitiva.
- Conserva la fuente y, cuando sea posible, registra el nivel y la relación padre-hijo de cada término.

## Arquitectura y organización

Mantén una separación clara entre datos, lógica de interacción y presentación. Como referencia, se puede usar esta estructura (adáptala si el proyecto ya tiene otra organización coherente):

```text
src/
├── app/
│   └── App.tsx
├── components/
│   ├── emotion-wheel/
│   │   ├── EmotionWheel.tsx
│   │   ├── EmotionSector.tsx
│   │   └── EmotionSelection.tsx
│   └── layout/
├── data/
│   └── emotions.ts
├── hooks/
│   └── useEmotionSelection.ts
├── types/
│   └── emotion.ts
├── styles/
│   └── index.css
└── main.tsx
```

- Define tipos explícitos para las emociones y sus relaciones.
- Evita duplicar el catálogo dentro de componentes.
- Mantén los componentes pequeños y con responsabilidades claras.
- Separa los cálculos geométricos de la rueda de la lógica de selección.
- Prefiere funciones puras para cálculos y transformaciones que no requieran estado.
- No introduzcas una librería de estado global si React resuelve adecuadamente el caso.

## Estándares de implementación

- Usa TypeScript en modo estricto y evita `any`. Si un tipo no se conoce, modela el dato correctamente en lugar de silenciar el error.
- Prefiere componentes funcionales y hooks de React.
- Usa nombres descriptivos y consistentes en inglés para código, tipos, variables y archivos; el contenido visible para las personas usuarias debe estar en español.
- Mantén el código legible y simple. Evita abstracciones prematuras y dependencias innecesarias.
- No dupliques lógica ni estilos.
- Usa clases de Tailwind para estilos de componentes y conserva estilos globales en el archivo de estilos correspondiente.
- No manipules el DOM directamente cuando React pueda gestionar la interacción.
- No agregues datos personales, analítica, almacenamiento remoto ni servicios externos sin una necesidad explícita y aprobación.
- No agregues funcionalidades clínicas, recomendaciones terapéuticas ni diagnósticos.

## Accesibilidad

- Toda emoción seleccionable debe poder operarse con teclado.
- Usa elementos semánticos y controles con nombre accesible.
- No comuniques diferencias únicamente mediante color.
- Mantén contraste legible y estados visibles de foco, selección y deshabilitado.
- Respeta `prefers-reduced-motion`.
- En pantallas pequeñas, la rueda debe seguir siendo usable; no dependas exclusivamente de hover.

## Calidad y pruebas

- Añade o actualiza pruebas cuando cambies lógica de selección, relaciones entre emociones o cálculos geométricos.
- Comprueba los casos de selección múltiple, selección en distintos niveles, deselección y navegación de regreso.
- Antes de cerrar un cambio, ejecuta los scripts disponibles para lint, pruebas y build. Si alguno no existe, indícalo; no afirmes que pasó.
- No ignores errores de TypeScript ni desactives reglas de lint para ocultar problemas.
- Si no puedes ejecutar una validación, explica qué quedó pendiente.

## Forma de trabajar

1. Inspecciona el código y la configuración existentes antes de modificar archivos.
2. Identifica el alcance mínimo que resuelve la tarea.
3. Respeta las decisiones de producto y arquitectura documentadas aquí.
4. Evita cambios no relacionados con la solicitud.
5. No hagas commits, pushes, despliegues ni cambios destructivos salvo que se soliciten explícitamente.
6. Si una decisión afecta la experiencia o contradice estas reglas, explica las alternativas antes de implementarla.
7. Al terminar, resume qué cambió, qué validaciones ejecutaste y qué queda pendiente.

## Criterio principal

Matices no busca que la persona encuentre la palabra «perfecta» para describir lo que siente. Busca ofrecer un espacio claro y flexible para explorar emociones a su propio ritmo.
