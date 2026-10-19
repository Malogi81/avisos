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
    ejemplo1: {
        empresa: 'Internet Rapido Demo',
        telefono: '5551234567',      // 10 digitos, con lada, sin espacios
        pais: '52',                  // codigo de pais (52 = Mexico)
        whatsapp: true,              // true = muestra boton de WhatsApp al mismo numero
        color: '#0d5c46',            // color principal (hexadecimal de 6 digitos)
        mensajeAviso: '',            // opcional: reemplaza el texto del aviso de pago
        mensajeSuspendido: '',       // opcional: reemplaza el texto de suspendido
        pago: {
            banco: 'Banco Ejemplo',
            titular: 'Nombre del Titular',
            cuenta: '012345678901234567',
            puntos: 'Oficina en Calle Principal 10, de lunes a sabado'
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
