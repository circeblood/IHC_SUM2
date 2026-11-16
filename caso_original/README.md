# Registro actual de Falabella.com (caso original)

Aquí está la evidencia del problema. Tomamos capturas del formulario de registro de `falabella.com/falabella-cl/myaccount/registration` el 15 de noviembre de 2026, en vista de celular (375 × 812 px), y marcamos en rojo los problemas de interacción que el prototipo busca resolver. No copiamos el código, los estilos ni las imágenes del sitio, y las capturas se usan solo como material de análisis para la asignatura.

La carpeta `capturas` tiene las tres imágenes originales, que muestran el encabezado con los primeros campos, la contraseña con el bloque de beneficios y los consentimientos con el botón "Regístrate". La carpeta `problemas_marcados` tiene las mismas imágenes con los problemas numerados, donde un recuadro marca un elemento puntual y una barra al costado izquierdo marca una sección completa.

## Problemas detectados

| N.º | Problema observado | Barrera | Cómo lo resuelve el prototipo | Flujo |
|---|---|---|---|---|
| 1 | El título mezcla "inicia sesión" y "regístrate" y habla de cuentas de Sodimac y Tottus, así que quien quiere crear una cuenta no sabe si está en el lugar correcto | B01, B06 | Una bienvenida con un solo objetivo, "Crea tu cuenta en 5 pasos", que dice qué se necesita y cuánto toma | 1 |
| 2 | Todos los campos están en una sola pantalla larga | B02 | Una tarea por pantalla, en cinco pasos con indicador de avance | 1, 2 y 3 |
| 3 | El ejemplo aparece en gris claro dentro del campo y desaparece al escribir, y los campos son solo una línea, por lo que cuesta reconocerlos | B05, B07, B10 | Etiqueta visible sobre el campo, ejemplo fijo bajo la etiqueta y campo con borde completo | 1, 2 y 3 |
| 4 | El campo de RUT no muestra el formato esperado | B10 | El RUT llega precargado desde el QR del asesor, con ejemplo y una validación que explica cómo corregir | 1 |
| 5 | La única ayuda del celular es "Comienza con 9.", en letra muy pequeña | B05, B10 | Un ejemplo legible y un mensaje que explica cómo corregir | 2 |
| 6 | Los requisitos de la contraseña están en letra pequeña y con símbolos técnicos | B04, B06 | Requisitos en lenguaje simple que se marcan a medida que se cumplen | 3 |
| 7 | Un bloque de beneficios interrumpe el formulario | B02 | Los beneficios se muestran recién al terminar, en la confirmación | 3 |
| 8 | Hay tres consentimientos con texto legal largo y no se sabe cuál es obligatorio | B08, B11 | Un consentimiento obligatorio con resumen simple y el opcional separado | 3 |
| 9 | El botón "Regístrate" aparece deshabilitado y no explica por qué | B07, B09 | El botón principal siempre está activo y, si falta algo, se explica qué es | 1, 2 y 3 |

El registro actual tampoco indica cuánto falta, no explica para qué se pide cada dato y no confirma con claridad que la cuenta quedó creada (B01, B11 y B12). Por eso el prototipo suma el indicador de pasos, la ayuda "¿Para qué lo pedimos?" y una pantalla final de confirmación.
