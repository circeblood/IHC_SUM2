/* Flujo 1: inicio en tienda e identificación del cliente (P0, P1 y P2).
   Responsable: Francisco Godoy. */

const Flujo1 = (() => {
  const SIGUIENTE_FLUJO = '../flujo2-contacto-verificacion/p3-contacto.html';

  // Dibuja un QR decorativo (no escaneable): marcas de esquina y módulos fijos.
  function dibujarQrSimulado() {
    const g = document.getElementById('qr-modulos');
    const ns = 'http://www.w3.org/2000/svg';
    const cuadro = (x, y, w = 1, h = 1) => {
      const r = document.createElementNS(ns, 'rect');
      r.setAttribute('x', x); r.setAttribute('y', y);
      r.setAttribute('width', w); r.setAttribute('height', h);
      g.appendChild(r);
    };
    const esquina = (x, y) => {
      cuadro(x, y, 7, 1); cuadro(x, y + 6, 7, 1); cuadro(x, y, 1, 7); cuadro(x + 6, y, 1, 7);
      cuadro(x + 2, y + 2, 3, 3);
    };
    esquina(0, 0); esquina(14, 0); esquina(0, 14);
    let semilla = 7;
    for (let y = 0; y < 21; y++) {
      for (let x = 0; x < 21; x++) {
        const enEsquina = (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12);
        semilla = (semilla * 31 + 17) % 97;
        if (!enEsquina && semilla % 3 === 0) cuadro(x, y);
      }
    }
  }

  function pantallaAsesor() {
    App.iniciar();
    App.borrar(); // cada atención parte con una sesión de prueba limpia
    const form = document.getElementById('form-buscar');
    const input = document.getElementById('rut-cliente');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!App.validar([{ input, validar: Validaciones.rut }])) return;
      // En el prototipo todo RUT válido se trata como "sin cuenta" para mostrar el caso de estudio.
      App.guardar({ rut: Validaciones.formatearRut(input.value), origen: 'qr-tienda' });
      form.hidden = true;
      resultado.hidden = false;
      dibujarQrSimulado();
      document.getElementById('simular-escaneo').focus();
    });

    document.getElementById('nueva-busqueda').addEventListener('click', () => {
      resultado.hidden = true;
      form.hidden = false;
      document.getElementById('qr-modulos').innerHTML = '';
      input.focus();
    });
  }

  function pantallaDatosPersonales() {
    App.iniciar({ paso: 1 });
    const datos = App.leer();
    const rut = document.getElementById('rut');
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');

    // El RUT llega precargado si el cliente vino desde el QR del asesor.
    rut.value = datos.rut || '';
    nombre.value = datos.nombre || '';
    apellidos.value = datos.apellidos || '';

    rut.addEventListener('blur', () => {
      if (!Validaciones.rut(rut.value)) rut.value = Validaciones.formatearRut(rut.value);
    });

    document.getElementById('form-datos').addEventListener('submit', e => {
      e.preventDefault();
      const ok = App.validar([
        { input: rut, validar: Validaciones.rut },
        { input: nombre, validar: Validaciones.nombre('tu nombre') },
        { input: apellidos, validar: Validaciones.nombre('tus apellidos') },
      ]);
      if (!ok) return;
      App.guardar({
        rut: Validaciones.formatearRut(rut.value),
        nombre: nombre.value.trim(),
        apellidos: apellidos.value.trim(),
        pasoCompletado: 1,
      });
      window.location.href = SIGUIENTE_FLUJO;
    });
  }

  return { pantallaAsesor, pantallaDatosPersonales };
})();
