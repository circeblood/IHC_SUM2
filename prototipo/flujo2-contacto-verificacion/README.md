# Flujo 2. Contacto y verificación del correo

**Responsable:** Carolina Vallejos (developer 2)

## Pantallas

| Pantalla | Archivo | Paso |
|---|---|---|
| P3 Cómo te contactamos | `p3-contacto.html` | Paso 2 de 5 |
| P4 Confirma tu correo | `p4-verificar-correo.html` | Paso 3 de 5 |

## Qué debe cumplir

- Recibe al usuario desde `../flujo1-inicio-identificacion/p2-datos-personales.html` y lo entrega a `../flujo3-clave-cierre/p5-clave.html`.
- Usa la base compartida (`../compartido/css/base.css`, `../compartido/js/app.js` y `../compartido/js/validaciones.js`). Lo propio del flujo va en `css/flujo2.css` y `js/flujo2.js`.
- **P3.** Pide correo y celular, cada uno con etiqueta visible, la marca "(obligatorio)" y un ejemplo permanente. El celular muestra el prefijo +56 9 fijo. Los errores explican cómo corregir (RF04, RU04, RU05). Resuelve los problemas 3 y 5 del caso original.
- **P4.** Simula el envío de un código de 6 números al correo y lo muestra en una "bandeja de prueba". Si el código no coincide, lo explica sin culpar al usuario. A los 60 segundos ofrece "¿No te llegó? Reenviar código" y permite "Cambiar correo" volviendo a P3 sin perder datos (RF05, RE01, RE03).
- Ambas pantallas tienen indicador de pasos, botón "Escuchar", "Volver" y ayuda "¿Para qué…?".
- No se envía nada a ningún servidor. Los datos de prueba se guardan con `App.guardar()`.

## Requisitos del informe que demuestra

RF04, RF05, RF08, RU01–RU05, RA01–RA04, RE01–RE03
