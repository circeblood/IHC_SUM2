/* Validaciones reutilizables. Los mensajes explican cómo corregir, sin culpar al usuario. */

const Validaciones = {
  obligatorio(nombreCampo) {
    return valor => (valor ? null : `Falta completar ${nombreCampo}.`);
  },

  /** RUT chileno con dígito verificador (módulo 11). Acepta con o sin puntos. */
  rut(valor) {
    if (!valor) return 'Falta tu RUT. Lo encuentras en tu carnet de identidad.';
    const limpio = valor.replace(/\./g, '').replace(/\s/g, '').toUpperCase();
    const partes = limpio.match(/^(\d{7,8})-?([\dK])$/);
    if (!partes) return 'Revisa tu RUT. Escríbelo con guion antes del último dígito, por ejemplo 12345678-5.';
    const [, cuerpo, dv] = partes;
    let suma = 0, mult = 2;
    for (let i = cuerpo.length - 1; i >= 0; i--) {
      suma += Number(cuerpo[i]) * mult;
      mult = mult === 7 ? 2 : mult + 1;
    }
    const resto = 11 - (suma % 11);
    const esperado = resto === 11 ? '0' : resto === 10 ? 'K' : String(resto);
    return dv === esperado ? null : 'Ese RUT no parece correcto. Revisa los números y el dígito después del guion.';
  },

  nombre(nombreCampo) {
    return valor => {
      if (!valor) return `Falta completar ${nombreCampo}.`;
      if (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]{2,}$/.test(valor)) return `Revisa ${nombreCampo}: usa solo letras.`;
      return null;
    };
  },

  formatearRut(valor) {
    const limpio = valor.replace(/[^\dkK]/g, '').toUpperCase();
    if (limpio.length < 2) return valor;
    const cuerpo = limpio.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${cuerpo}-${limpio.slice(-1)}`;
  },
};
