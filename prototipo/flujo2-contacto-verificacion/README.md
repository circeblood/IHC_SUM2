# Flujo 2. Contacto, canal y verificación del celular

Responsable: Carolina Vallejos

Este flujo va entre los datos personales (P2) y la clave (P5), y tiene dos pantallas.

| Pantalla | Archivo | Paso |
|---|---|---|
| P3 ¿Cómo te contactamos? | `p3-contacto.html` | 2 de 5 |
| P4 Confirma tu celular | `p4-verificar-celular.html` | 3 de 5 |

## Por qué el celular y no el correo

Las proto-personas del informe, Rosa y Juan, casi no usan el correo electrónico, pero sí usan WhatsApp y mensajes de texto todos los días (barrera B13). Si la cuenta dependiera de confirmar un correo, muchos se quedarían detenidos justo en ese paso, así que el celular pasa a ser el dato principal y el correo queda como opcional.

## Qué hace cada pantalla

En P3 el cliente escribe su celular, con el +56 9 ya puesto y un ejemplo a la vista. Después responde si tiene correo electrónico y, si dice que sí, puede escribirlo como dato opcional que se confirmará más adelante sin frenar el registro. Luego elige cómo recibir sus boletas y avisos, por WhatsApp o por correo, y si no tiene correo solo aparece WhatsApp. Al elegir WhatsApp tiene que marcar su autorización, y la pantalla le recuerda que los mensajes llegan desde la cuenta oficial y que nunca se le pedirá la clave por ese medio.

En P4 el prototipo simula el envío de un código de seis números por SMS. Al tocar el campo aparece la sugerencia que mostraría el teclado del teléfono, y con "Usar" el código se completa solo. El campo lleva `autocomplete="one-time-code"`, que es lo que permite que en un teléfono real funcione esa sugerencia. Si el código no coincide, el mensaje explica qué revisar, a los 60 segundos aparece "Reenviar código" y con "Cambiar mi celular" se vuelve a P3 sin perder lo escrito.

Las dos pantallas usan la base compartida (`../compartido/`) para el indicador de pasos, el botón "Escuchar", "Volver" y las validaciones. Lo propio del flujo está en `css/flujo2.css` y `js/flujo2.js`. No se envía nada a ningún servidor ni se mandan SMS reales.

## Requisitos del informe que demuestra

RF04, RF05, RF08, RF09, RF10, RU01 a RU05, RA01 a RA04, RE01 a RE03 y RE05. También resuelve los problemas 3 y 5 del caso original.
