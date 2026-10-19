/* =============================================================================
   clientes.js  -  AQUI se agregan los clientes (uno por bloque)
   -----------------------------------------------------------------------------
   Cada cliente tiene un "codigo" (la palabra de la izquierda). El codigo va en
   minusculas, sin espacios ni acentos: letras, numeros, guion o guion bajo.
   Los enlaces de cada cliente usan ese codigo:
       https://TU-USUARIO.github.io/avisos/?c=CODIGO              (aviso de pago)
       https://TU-USUARIO.github.io/avisos/suspendido.html?c=CODIGO   (suspendido)

   Para agregar un cliente: copia un bloque completo, cambia el codigo y los
   datos. Respeta las comas, las comillas y las llaves { }.
   Lo que dejes vacio ('') simplemente no se muestra.
   Puedes generar el bloque con generador.html (sin escribir nada a mano).

   OJO: GitHub Pages gratis exige repositorio publico, asi que TODO lo que
   pongas aqui es visible para cualquiera. Pon solo lo que ya muestras al
   cliente en el aviso (nombre, telefono, datos para pagar).
   ============================================================================= */
window.CLIENTES = {

    // ---- EJEMPLO 1: borralo o cambialo por un cliente real ----
    amanecer-network: {
    empresa: 'AMANECER-NETWORK',
    telefono: '9673778647',
    pais: '52',
    whatsapp: true,
    color: '#0d5c46',
    mensajeAviso: '',
    mensajeSuspendido: '',
    pago: {
        banco: 'BanCoppel',
        titular: 'Juan Enrique Pérez Gómez',
        cuenta: '137130103150115297',
        puntos: 'Nichteel crucero hermita, tienda Diego Gomez santiz. Muro'
        }
    },

    // ---- EJEMPLO 2: sin datos de pago, otro color y mensaje propio ----
    ejemplo2: {
        empresa: 'WiFi Comunitario Demo',
        telefono: '5559876543',
        pais: '52',
        whatsapp: false,
        color: '#1f5fa8',
        mensajeAviso: 'Tu mensualidad esta vencida. Paga esta semana para no perder el servicio.',
        mensajeSuspendido: '',
        pago: {}
    }

};
