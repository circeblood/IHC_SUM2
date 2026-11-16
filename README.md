# IHC_SUM2: Asistente de Registro Guiado Accesible

Evaluación sumativa de la Unidad 2 de **Interacción Humano Computador**

**Equipo:** Francisco Godoy, Carolina Vallejos y Eduardo Jaque
**Profesora:** Yenny Alexandra Méndez
**Entrega:** 17 de noviembre de 2026

> **Prototipo académico.** Este repositorio no pertenece a Falabella ni está relacionado con la empresa. El prototipo no envía datos a ningún servidor y está pensado para usarse solo con datos de ejemplo.

## El caso

Durante la venta guiada en tienda, el asesor ingresa el RUT del cliente en un iPad y muchas veces descubre que no tiene cuenta en Falabella.com. El formulario de registro actual concentra todos los campos en una sola pantalla, usa términos técnicos y no explica sus errores, por lo que los clientes con baja alfabetización digital, y en especial las personas mayores, terminan dependiendo del asesor para crear su cuenta.

Nuestra propuesta es un **asistente de registro guiado**:

- El asesor muestra un QR desde el iPad.
- El cliente termina el registro en su propio celular, en 5 pasos breves, con una tarea por pantalla.
- El celular es el dato principal y se confirma con un código por SMS que el propio teléfono sugiere sobre el teclado. El correo es opcional y no detiene el registro.
- El cliente elige si recibe sus boletas y avisos de compra por WhatsApp o por correo, para que quien no usa correo electrónico igual pueda crear su cuenta y seguir en contacto con la tienda.
- Cada pantalla trae ejemplos, ayuda, lectura en voz alta y mensajes de error que explican cómo corregir.

## Estructura del repositorio

```
caso_original/     evidencia del registro actual: capturas y problemas marcados
prototipo/         prototipo navegable en HTML, CSS y JavaScript
  index.html                       inicio y mapa de pantallas
  compartido/                      estilos y funciones comunes a los tres flujos
  flujo1-inicio-identificacion/    P0 a P2 (Francisco)
  flujo2-contacto-verificacion/    P3 y P4 (Carolina)
  flujo3-clave-cierre/             P5 a P8 (Eduardo)
```

## Distribución del trabajo por flujos

| Flujo | Pantallas | Responsable | Qué resuelve del caso original |
|---|---|---|---|
| Base compartida | Estilos, indicador de pasos, botón "Escuchar", validación y aviso académico | Francisco Godoy | Consistencia entre pantallas (problemas 2, 3 y 9) |
| 1. Inicio e identificación | P0 vista del asesor con QR, P1 bienvenida, P2 datos personales | Francisco Godoy | Problemas 1, 2, 3 y 4 |
| 2. Contacto, canal y verificación | P3 celular, correo opcional y canal (WhatsApp o correo), P4 confirmación del celular con código por SMS | Carolina Vallejos | Problemas 3 y 5, clientes que no usan correo |
| 3. Clave y cierre | P5 clave, P6 condiciones, P7 revisión, P8 confirmación | Eduardo Jaque | Problemas 6, 7, 8 y 9, confirmación final |

Cada carpeta de flujo tiene un `README.md` con lo que debe cumplir y los requisitos del informe que demuestra. Los problemas numerados están en [`caso_original/README.md`](caso_original/README.md).

## Cómo ver el prototipo

- **En línea:** se publica con GitHub Pages desde la rama `main`. El enlace se agrega aquí una vez activado.
- **En local:** descargar el repositorio y abrir `prototipo/index.html` en el navegador. No necesita instalación.

Para verlo como en un celular, usar las herramientas de desarrollo del navegador con una vista de 375 px de ancho.

## Precauciones del prototipo

Como el prototipo rediseña el registro de una empresa real, tomamos estas precauciones para que no se confunda con el sitio original:

- No usa el logo, los colores, los textos legales ni el código de Falabella. Todo se construyó desde cero.
- Cada pantalla muestra el banner de la sumativa con los integrantes del equipo y la nota "Prototipo de uso local" al pie.
- Ningún formulario envía datos. Todo se maneja en el navegador y los datos de prueba se guardan solo en `sessionStorage`, que se borra al terminar.
- La clave nunca se guarda, ni siquiera de forma temporal.
- No se envían SMS reales. El código de verificación es simulado y aparece como la sugerencia que haría el teclado del teléfono.
- Cuando el cliente elige WhatsApp, se pide su autorización explícita y se le avisa que nunca se le pedirá la clave por ese medio.
- Las páginas incluyen `noindex` para que no aparezcan en buscadores.

## Requisitos que demuestra

El prototipo implementa los requisitos del informe (RF01 a RF10, RU01 a RU07, RA01 a RA05 y RE01 a RE05). La relación entre cada requisito, la pantalla y la barrera que atiende está en la matriz de trazabilidad del informe.
