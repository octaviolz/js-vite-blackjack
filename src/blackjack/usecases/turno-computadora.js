import { pedirCarta, valorCarta, crearCartaHTML } from "./";
// import { crearCartaHTML } from "./crear-carta-html";

/**
 *  turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita pata ganar
 * @param {Array<string>} deck
 * @param {HTMLElement} divCartasComputadora html para mostrar las cartas
 * @param {HTMLElement} puntosHTML html para mostrar los puntos
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

if (!puntosMinimos) throw new Error( 'Puntos minimos es necesario');
if (!puntosHTML) throw new Error( 'Puntos HTML es necesario');

let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
      
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

