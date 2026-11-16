# Caso original: registro actual de Falabella.com

Esta carpeta guarda la evidencia del problema. Son capturas del formulario de registro de `falabella.com/falabella-cl/myaccount/registration` tomadas el 15 de noviembre de 2026 en vista de celular (375 × 812 px), con los problemas de interacción que el prototipo busca resolver marcados en rojo.

No se copió el código, los estilos ni las imágenes del sitio. Las capturas se usan solo como material de análisis académico para la asignatura Interacción Humano Computador.

## Capturas

| Archivo | Qué muestra |
|---|---|
| `capturas/01_registro_inicio.jpg` | Encabezado y primeros campos (correo, nombre, apellidos, documento y celular) |
| `capturas/02_registro_clave_beneficios.jpg` | Contraseña con sus requisitos y bloque de beneficios |
| `capturas/03_registro_consentimientos.jpg` | Consentimientos y botón "Regístrate" |
| `problemas_marcados/*_marcado.png` | Las mismas capturas con los problemas numerados. Los recuadros marcan un elemento puntual y las barras al costado izquierdo marcan una sección completa |

## Problemas detectados y cómo los aborda el prototipo

| N.º | Problema observado | Barrera del informe | Cómo lo resuelve el prototipo | Flujo |
|---|---|---|---|---|
| 1 | El título mezcla "inicia sesión" y "regístrate", y el texto habla de cuentas de Sodimac y Tottus. Quien llega a crear una cuenta no sabe si está en el lugar correcto | B01, B06 | Bienvenida con un solo objetivo ("Crea tu cuenta en 5 pasos"), indicando qué se necesita y cuánto toma | 1 |
| 2 | Todos los campos aparecen en una sola pantalla larga | B02 | Una tarea por pantalla, en 5 pasos con indicador de avance | 1, 2 y 3 |
| 3 | El ejemplo del campo está en gris claro dentro del mismo campo y desaparece al escribir. Los campos son solo una línea inferior y cuesta reconocerlos como campos | B05, B07, B10 | Etiqueta visible sobre el campo, ejemplo permanente bajo la etiqueta y campo con borde completo | 1, 2 y 3 |
| 4 | "Tipo de documento" con RUT no muestra el formato esperado | B10 | El RUT llega precargado desde el QR del asesor, con ejemplo y validación amable | 1 |
| 5 | La única ayuda del celular es "Comienza con 9.", en letra muy pequeña | B05, B10 | Ejemplo "9 1234 5678" en tamaño legible, con mensaje que explica cómo corregir | 2 |
| 6 | Los requisitos de la contraseña están en letra pequeña y usan símbolos técnicos ("Sin usar '\¡¿"…") | B04, B06 | Lista de requisitos en lenguaje simple que se marca a medida que se cumplen | 3 |
| 7 | El bloque de beneficios queda en medio del formulario e interrumpe la tarea | B02 | Se elimina del flujo de registro. Los beneficios se muestran después de crear la cuenta | 3 |
| 8 | Hay tres consentimientos con texto legal largo y no se distingue cuál es obligatorio | B08, B11 | Un consentimiento obligatorio marcado con "(obligatorio)", con resumen en lenguaje simple, y los opcionales separados | 3 |
| 9 | El botón "Regístrate" aparece deshabilitado y no explica por qué | B07, B09 | Botón principal siempre visible. Si falta algo, se explica qué falta y cómo completarlo | 1, 2 y 3 |

Además, el registro actual no indica avance, no explica para qué se pide cada dato y no muestra una confirmación clara al terminar (B01, B11 y B12). El prototipo incorpora el indicador de pasos, la ayuda "¿Para qué lo pedimos?" y la pantalla final de confirmación.
