# Product — Matices

> Documento de definición de producto. Describe el propósito, alcance y comportamiento esperado de Matices. Las decisiones técnicas se documentan en `AGENTS.md` y en la documentación de arquitectura.

## 1. Resumen

**Matices** es una aplicación web interactiva para explorar, identificar y comprender emociones mediante una rueda radial de navegación libre y múltiples niveles de profundidad.

La aplicación ofrece un espacio visual y amable para que una persona pueda reconocer lo que siente, explorar palabras relacionadas y detenerse cuando encuentre una descripción que le resulte útil.

Matices no pretende determinar qué siente una persona ni encontrar una etiqueta emocional «correcta». La persona usuaria conserva el control de la exploración y de las palabras que decide seleccionar.

## 2. Problema que buscamos resolver

A veces una persona puede reconocer una emoción general —por ejemplo, tristeza o miedo—, pero no identificar con facilidad un matiz más específico. En otras ocasiones puede reconocer directamente una emoción concreta sin necesitar recorrer categorías más generales.

Una navegación estrictamente jerárquica puede convertirse en una barrera: obliga a seguir una ruta predeterminada y transmite la idea de que siempre hay que profundizar.

Matices busca reducir esa fricción mediante una representación radial que permita explorar libremente, cambiar de dirección y detenerse en cualquier nivel.

## 3. Principios del producto

1. **La persona decide:** la aplicación no interpreta ni corrige lo que siente.
2. **Exploración libre:** cualquier emoción disponible puede seleccionarse sin recorrer obligatoriamente sus niveles superiores.
3. **Profundidad opcional:** no existe obligación de llegar al nivel más específico.
4. **Selección múltiple:** se pueden conservar varias emociones, incluso si pertenecen a ramas o niveles distintos.
5. **Exploración reversible:** se puede cambiar de emoción, quitar selecciones o volver a la vista general sin perder el control.
6. **Claridad antes que cantidad:** mostrar opciones comprensibles sin saturar la experiencia.
7. **Sin juicios:** todas las emociones se presentan con un lenguaje neutral, respetuoso y no patologizante.

## 4. Público y contexto de uso

La aplicación está dirigida a personas que desean explorar o poner en palabras lo que sienten.

No se presupone que la persona conozca vocabulario emocional, tenga una emoción claramente identificada o quiera completar toda la rueda. La experiencia debe ser útil tanto para quien llega con una idea general como para quien reconoce un matiz específico desde el inicio.

## 5. Experiencia principal

### 5.1 La rueda radial

La rueda es el elemento central de la experiencia y funciona como un **mapa de exploración**, no como un árbol de navegación obligatorio.

- Representa los niveles mediante anillos concéntricos.
- Mantiene una vista general que permite comprender la organización del catálogo.
- Permite interactuar con emociones de distintos niveles.
- Hace perceptibles las relaciones entre emociones sin convertirlas en pasos obligatorios.
- Debe adaptarse a pantallas móviles y de escritorio.

### 5.2 Explorar una emoción

La persona puede seleccionar una emoción visible en cualquiera de los niveles.

La selección puede mostrar sus matices relacionados y ayudar a explorar el contexto de esa emoción, pero no debe bloquear el acceso al resto de la rueda ni exigir una secuencia determinada.

### 5.3 Seleccionar varias emociones

La persona puede seleccionar más de una emoción. La interfaz debe distinguir claramente las selecciones activas y ofrecer una forma sencilla de quitarlas.

No se debe asumir que las emociones seleccionadas son excluyentes ni que existe una única emoción principal.

### 5.4 Detenerse o reiniciar

La persona puede terminar la exploración con una emoción general, con un matiz específico o con varias selecciones. También puede limpiar la selección y comenzar de nuevo.

No se debe presentar la exploración incompleta como un error.

## 6. Alcance del MVP

La primera versión debe concentrarse en una experiencia de exploración clara y funcional.

### Incluido

- Aplicación web responsive.
- Rueda radial con los niveles del catálogo validado.
- Exploración libre entre niveles y ramas.
- Selección y deselección de emociones.
- Selección múltiple.
- Indicador visible de las emociones seleccionadas.
- Acción para limpiar o reiniciar la selección.
- Estados visuales claros para foco, selección y navegación.
- Interacción accesible mediante teclado.
- Catálogo de emociones separado de los componentes de interfaz.

### Fuera del alcance inicial

- Diagnósticos, evaluaciones o puntuaciones psicológicas.
- Recomendaciones terapéuticas o sustitución de atención profesional.
- Interpretar automáticamente el estado emocional de una persona.
- Registro de cuentas, perfiles o historial personal.
- Almacenamiento en la nube o sincronización entre dispositivos.
- Funcionalidades sociales o compartir públicamente las emociones.
- Inteligencia artificial que infiera emociones a partir de texto, voz o imágenes.
- Gamificación, rachas o métricas de uso que presionen a completar la rueda.

Cualquier ampliación de este alcance debe discutirse antes de implementarse.

## 7. Catálogo emocional y fuente

La referencia inicial es el artículo **[La rueda de las emociones — Alberto Barbero](https://www.albarbero.com/2021/07/la-rueda-de-las-emociones.html)**.

La referencia describe tres niveles: 6 emociones principales, 36 emociones de segundo nivel y 72 de tercer nivel.

Hay una discrepancia entre parte del texto del artículo y las etiquetas que se observan en la imagen de la rueda. Por ello, los nombres y relaciones exactos del catálogo todavía deben transcribirse y verificarse contra la fuente visual antes de considerarse definitivos.

Reglas para el producto:

- No inventar ni completar etiquetas ausentes.
- No reemplazar la referencia por la rueda de Plutchik ni por otro modelo.
- No presentar datos provisionales como definitivos.
- Mantener trazabilidad de la fuente y de las relaciones entre niveles.
- Si una etiqueta o relación no puede verificarse, dejarla pendiente de validación.

La validación del catálogo es un requisito previo para publicar la rueda como una representación fiel de la fuente.

## 8. Requisitos de experiencia y accesibilidad

- La rueda debe ser comprensible sin depender exclusivamente del color.
- Cada emoción interactiva debe tener un nombre accesible.
- Los elementos seleccionables deben poder operarse con teclado.
- El foco debe ser visible y seguir un orden lógico.
- La selección debe comunicarse visualmente y mediante tecnología asistiva.
- La interfaz debe funcionar sin hover, especialmente en dispositivos táctiles.
- Las animaciones deben ser discretas y respetar la preferencia de movimiento reducido del sistema.
- El diseño debe mantener una estética **Soft & Calm**, con jerarquía clara, espacios generosos y contraste suficiente.

## 9. Criterios de aceptación del MVP

El MVP se considera funcionalmente completo cuando:

1. La rueda presenta únicamente etiquetas y relaciones del catálogo verificadas.
2. Se puede seleccionar una emoción de cualquier nivel sin seleccionar antes su emoción superior.
3. Se puede seleccionar más de una emoción.
4. Las selecciones activas se distinguen claramente.
5. Se puede quitar una emoción seleccionada sin afectar las demás.
6. Se puede limpiar toda la selección.
7. La persona puede detenerse en cualquier nivel sin mensajes que indiquen que falta completar la exploración.
8. Se puede volver a la vista general y cambiar de rama.
9. La interacción principal funciona con teclado y en pantallas táctiles.
10. La experiencia es usable en móvil y escritorio.
11. La interfaz no formula diagnósticos ni afirma saber qué siente la persona.

## 10. Decisiones abiertas

Estas decisiones no deben resolverse mediante suposiciones del agente:

- Transcripción y validación completa de las etiquetas de los tres niveles.
- Comportamiento visual exacto al seleccionar una emoción: destacar su rama, mostrar matices relacionados o combinar ambos recursos.
- Si habrá una explicación breve para cada emoción o únicamente su nombre en el MVP.
- Si la selección tendrá algún resultado de cierre además de mostrar las emociones elegidas.

Cuando una tarea dependa de una de estas decisiones, el agente debe señalar la duda y proponer alternativas antes de implementar un comportamiento que condicione la experiencia.

## 11. Relación con otros documentos

- `AGENTS.md`: instrucciones y criterios de trabajo para agentes de desarrollo.
- `README.md`: presentación breve del proyecto y cómo comenzar.
- `docs/EMOTION-CATALOG.md` (propuesto): catálogo verificado y trazabilidad de sus etiquetas.
- `docs/UX-GUIDELINES.md` (propuesto): especificaciones de interacción y diseño.
- `docs/ARCHITECTURE.md` (propuesto): estructura y decisiones técnicas.

---

**Principio rector:** Matices no busca que la persona encuentre la palabra «perfecta» para describir lo que siente. Busca ofrecer un espacio claro y flexible para explorar emociones a su propio ritmo.
