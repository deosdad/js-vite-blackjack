/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} retorno imagen carta
 */
export const crearCartaHTML = (carta) => {

    if(!carta) throw new Error('La carta es un argumento necesario');

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}