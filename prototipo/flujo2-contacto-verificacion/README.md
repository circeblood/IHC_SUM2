# Flujo 2. Contacto, canal y verificación del celular

**Responsable:** Carolina Vallejos (developer 2)

## Pantallas

| Pantalla | Archivo | Paso |
|---|---|---|
| P3 Cómo te contactamos | `p3-contacto.html` | Paso 2 de 5 |
| P4 Confirma tu celular | `p4-verificar-celular.html` | Paso 3 de 5 |

## Por qué el celular y no el correo

Las proto-personas del informe (Rosa y Juan) casi no usan el correo electrónico, pero sí usan WhatsApp y mensajes de texto todos los días (barrera B13). Si la cuenta dependiera de confirmar un correo, el registro se detendría justo en ese paso. Por eso el celular es el dato principal y el correo es opcional.

## Qué debe cumplir

- Recibe al usuario desde `../flujo1-inicio-identificacion/p2-datos-personales.html` y lo entrega a `../flujo3-clave-cierre/p5-clave.html`.
- Usa la base compartida (`../compartido/css/base.css`, `../compartido/js/app.js` y `../compartido/js/validaciones.js`). Lo propio del flujo va en `css/flujo2.css` y `js/flujo2.js`.
- **P3**
  - Celular obligatorio, con el prefijo +56 9 fijo y un ejemplo (RF09, RU05).
  - Pregunta "¿Tienes correo electrónico?". Si responde que sí, pide el correo como **opcional**, que se confirmará después sin bloquear la creación de la cuenta (RF09).
  - Pregunta cómo recibir boletas y avisos, por WhatsApp o por correo. Sin correo, solo se ofrece WhatsApp (RF10).
  - WhatsApp exige una casilla de consentimiento explícito y muestra el aviso de seguridad: cuenta oficial verificada y "nunca te pediremos tu clave por WhatsApp" (RE05).
  - Resuelve los problemas 3 y 5 del caso original.
- **P4**
  - Simula el envío de un código de 6 números por SMS al celular.
  - Al tocar el campo aparece la sugerencia que haría el teclado del teléfono ("Desde Mensajes … Usar"). El campo lleva `autocomplete="one-time-code"` para que en un teléfono real funcione la sugerencia (RF05).
  - Si el código no coincide, lo explica sin culpar. A los 60 segundos ofrece "Reenviar código" y permite "Cambiar mi celular" sin perder datos (RE01, RE03).
- Ambas pantallas tienen indicador de pasos, botón "Escuchar", "Volver" y ayuda "¿Para qué…?".
- No se envía nada a ningún servidor ni se envían SMS reales. Los datos de prueba se guardan con `App.guardar()`.

## Requisitos del informe que demuestra

RF04, RF05, RF08, RF09, RF10, RU01–RU05, RA01–RA04, RE01–RE03, RE05
