import _ from 'underscore';


/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck tiene que ser un arreglo de string
 * @returns {string} retorna la carta de deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}