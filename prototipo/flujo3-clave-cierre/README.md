# Flujo 3. Clave, condiciones y cierre

Responsable: Eduardo Jaque

Este flujo recibe al cliente después de confirmar su celular (P4) y lo lleva hasta la cuenta creada, en cuatro pantallas.

| Pantalla | Archivo | Paso |
|---|---|---|
| P5 Crea tu clave | `p5-clave.html` | 4 de 5 |
| P6 Acepta las condiciones | `p6-condiciones.html` | 5 de 5 |
| P7 Revisa tus datos | `p7-revision.html` | Revisión |
| P8 ¡Listo! Tu cuenta quedó creada | `p8-confirmacion.html` | Confirmación |

## Qué hace cada pantalla

En P5 el cliente crea su clave y la escribe dos veces, con un botón para verla u ocultarla. Los requisitos están escritos en lenguaje simple y se van marcando a medida que se cumplen, lo que resuelve el problema 6 del caso original. La clave nunca se guarda, ni siquiera en `sessionStorage`, y el código solo registra que fue creada.

En P6 hay un solo consentimiento obligatorio, marcado como tal y con un resumen simple, y uno opcional separado para recibir ofertas. Si el cliente intenta seguir sin aceptar el obligatorio, la pantalla le explica por qué es necesario, con lo que se resuelven los problemas 8 y 9.

En P7 el cliente revisa sus datos por bloques, incluido el celular confirmado, el correo si lo dio y el canal elegido para las boletas. Cada bloque tiene "Editar", que vuelve al paso correspondiente sin perder lo escrito, y nada queda definitivo hasta tocar "Crear mi cuenta".

En P8 se confirma que la cuenta quedó creada, con el nombre del cliente, el celular con el que va a entrar y el canal por donde le llegarán las boletas. Aquí aparecen también los beneficios de la cuenta, que en el registro actual interrumpían el formulario (problema 7). Al tocar "Ir a comprar" se borran los datos de prueba.

Las pantallas usan la base compartida (`../compartido/`), y lo propio del flujo está en `css/flujo3.css` y `js/flujo3.js`. No se envía nada a ningún servidor.

## Requisitos del informe que demuestra

RF06, RF07, RF08, RU03, RU04, RU07, RA01 a RA05, RE01, RE03 y RE04.
