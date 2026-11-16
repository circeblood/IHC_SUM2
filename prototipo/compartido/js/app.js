/* Funciones compartidas del prototipo de registro guiado.
   Todo ocurre en el navegador: no se envían datos a ningún servidor y
   la información de prueba se guarda solo en sessionStorage. */

const App = (() => {
  const CLAVE_ESTADO = 'registroGuiadoDemo';
  const CAMPOS_PROHIBIDOS = ['clave', 'claveRepetida']; // nunca se guardan

  // ---------- estado de la sesión de prueba ----------
  function leer() {
    try { return JSON.parse(sessionStorage.getItem(CLAVE_ESTADO)) || {}; }
    catch { return {}; }
  }

  function guardar(datos) {
    const limpio = { ...leer(), ...datos };
    CAMPOS_PROHIBIDOS.forEach(c => delete limpio[c]);
    sessionStorage.setItem(CLAVE_ESTADO, JSON.stringify(limpio));
    return limpio;
  }

  function borrar() { sessionStorage.removeItem(CLAVE_ESTADO); }

  // ---------- estructura común de cada pantalla ----------
  function avisoAcademico() {
    const aviso = document.createElement('div');
    aviso.className = 'aviso-academico';
    aviso.setAttribute('role', 'note');
    aviso.innerHTML = '<strong>Prototipo académico IHC, Universidad Mayor.</strong> ' +
      'No es un sitio de Falabella. Usa solo datos de ejemplo.';
    document.body.prepend(aviso);
  }

  function progreso(paso, total = 5) {
    const cont = document.querySelector('[data-progreso]');
    if (!cont || !paso) return;
    const segmentos = Array.from({ length: total }, (_, i) => {
      const n = i + 1;
      const clase = n < paso ? 'hecho' : n === paso ? 'actual' : '';
      return `<span class="${clase}"></span>`;
    }).join('');
    cont.className = 'progreso';
    cont.innerHTML = `<p class="progreso-texto">Paso ${paso} de ${total}</p>
      <div class="progreso-barra" aria-hidden="true">${segmentos}</div>`;
  }

  // ---------- botón Escuchar (lectura en voz alta) ----------
  function escuchar(boton) {
    if (!('speechSynthesis' in window)) {
      boton.textContent = 'Audio no disponible en este navegador';
      return;
    }
    if (speechSynthesis.speaking) { speechSynthesis.cancel(); return; }
    const texto = document.querySelector('[data-escuchar]')?.innerText || document.querySelector('main').innerText;
    const voz = new SpeechSynthesisUtterance(texto);
    voz.lang = 'es-CL';
    voz.rate = 0.9;
    speechSynthesis.speak(voz);
  }

  // ---------- validación y mensajes ----------
  function marcarError(input, mensaje) {
    const caja = input.closest('.campo');
    const msg = caja.querySelector('.mensaje-error');
    msg.textContent = mensaje;
    input.setAttribute('aria-invalid', 'true');
    caja.classList.remove('ok');
  }

  function limpiarError(input) {
    input.removeAttribute('aria-invalid');
    input.closest('.campo').classList.add('ok');
  }

  /** Recorre las reglas {input, validar(valor) => mensaje|null}.
      Devuelve true si todo está correcto y lleva el foco al primer error. */
  function validar(reglas) {
    let primerError = null;
    for (const { input, validar } of reglas) {
      const mensaje = validar(input.value.trim());
      if (mensaje) { marcarError(input, mensaje); primerError ??= input; }
      else limpiarError(input);
    }
    if (primerError) primerError.focus();
    return !primerError;
  }

  // ---------- inicio de cada pantalla ----------
  function iniciar({ paso } = {}) {
    avisoAcademico();
    progreso(paso);
    document.querySelectorAll('[data-volver]').forEach(b =>
      b.addEventListener('click', () => history.back()));
    document.querySelectorAll('[data-boton-escuchar]').forEach(b =>
      b.addEventListener('click', () => escuchar(b)));
    // ningún formulario envía datos: se manejan con JavaScript en la misma página
    document.querySelectorAll('form').forEach(f => f.setAttribute('novalidate', ''));
  }

  return { leer, guardar, borrar, iniciar, validar, marcarError, limpiarError };
})();
