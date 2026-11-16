# Flujo 3. Clave, condiciones y cierre

**Responsable:** Eduardo Jaque (developer 3)

## Pantallas

| Pantalla | Archivo | Paso |
|---|---|---|
| P5 Crea tu clave | `p5-clave.html` | Paso 4 de 5 |
| P6 Acepta las condiciones | `p6-condiciones.html` | Paso 5 de 5 |
| P7 Revisa tus datos | `p7-revision.html` | Revisión |
| P8 ¡Listo! Tu cuenta quedó creada | `p8-confirmacion.html` | Confirmación |

## Qué debe cumplir

- Recibe al usuario desde `../flujo2-contacto-verificacion/p4-verificar-correo.html`.
- Usa la base compartida (`../compartido/`). Lo propio del flujo va en `css/flujo3.css` y `js/flujo3.js`.
- **P5.** Clave y repetición de la clave, con opción para mostrar u ocultar. Los requisitos se escriben en lenguaje simple y se marcan a medida que se cumplen (RU07). **La clave nunca se guarda**, ni siquiera en sessionStorage. Resuelve el problema 6 del caso original.
- **P6.** Un solo consentimiento obligatorio, marcado con "(obligatorio)" y con un resumen en lenguaje simple, más uno opcional separado. Si falta el obligatorio, se explica por qué es necesario (RU04, RE01). Resuelve los problemas 8 y 9.
- **P7.** Resumen por bloque con "Editar", que vuelve al paso correspondiente sin perder datos. Nada queda definitivo hasta tocar "Crear mi cuenta" (RF06, RE03).
- **P8.** Confirmación explícita con nombre y correo, los beneficios de la cuenta (que se sacaron del formulario, problema 7) e "Ir a comprar". Al terminar se borran los datos de prueba (RF07, RE04).
- No se envía nada a ningún servidor.

## Requisitos del informe que demuestra

RF06, RF07, RF08, RU03, RU04, RU07, RA01–RA05, RE01, RE03, RE04
