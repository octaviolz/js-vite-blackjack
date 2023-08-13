import _ from "underscore"; 

/**
 * eta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {array} regresa un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    
    return deck;
}
