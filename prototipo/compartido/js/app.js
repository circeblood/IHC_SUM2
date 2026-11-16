// Base compartida del prototipo, no envia datos a ningun servidor

const App = (() => {
  const CLAVE_ESTADO = 'registroGuiadoDemo';
  const CAMPOS_PROHIBIDOS = ['clave', 'claveRepetida']; // nunca se guardan

  // Estado de prueba en sessionStorage
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

  // Agrega banner, encabezado y nota al pie
  function avisoAcademico() {
    const aviso = document.createElement('div');
    aviso.className = 'aviso-academico';
    aviso.setAttribute('role', 'note');
    aviso.innerHTML = '<strong>Sumativa N2</strong> F. Godoy / C. Vallejos / E. Jaque';
    document.body.prepend(aviso);

    // La vista del iPad no lleva este encabezado
    if (!document.body.classList.contains('vista-ipad')) {
      const encabezado = document.createElement('div');
      encabezado.className = 'encabezado-sitio';
      encabezado.textContent = 'Crea tu cuenta';
      aviso.after(encabezado);
    }

    const nota = document.createElement('p');
    nota.className = 'nota-prototipo';
    nota.textContent = 'Prototipo de uso local';
    document.querySelector('main')?.after(nota);
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

  // Lee en voz alta el bloque data-escuchar
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

  // Recibe reglas {input, validar} y deja el foco en el primer error
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

  // Se llama al cargar cada pantalla
  function iniciar({ paso } = {}) {
    avisoAcademico();
    progreso(paso);
    document.querySelectorAll('[data-volver]').forEach(b =>
      b.addEventListener('click', () => history.back()));
    document.querySelectorAll('[data-boton-escuchar]').forEach(b =>
      b.addEventListener('click', () => escuchar(b)));
    // Los formularios se manejan con JS y nunca se envian
    document.querySelectorAll('form').forEach(f => f.setAttribute('novalidate', ''));
  }

  return { leer, guardar, borrar, iniciar, validar, marcarError, limpiarError };
})();
