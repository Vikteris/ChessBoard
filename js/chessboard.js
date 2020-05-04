"use strict"

function renderBoard( size ) {
    
    let HTML = '';
    const DOMboard = document.querySelector('.board');

    // validacija
    
    if ( !isFinite(size) ) {
        return console.error('Klaida: Reikalingas normalus skaičius.');
    }
    if ( size <= 0 ) {
        return console.error('Klaida: Reikalingas teigiamas skaičius.');
    }
    if ( size % 1 !== 0 ) {
        return console.error('Klaida: Reikalingas sveikas skaičius(be kablelio).');
    }


    // Logika
    for ( let r=0; r<size; r++ ) {
        let cellsHTML = ``;

        for (let c = 0; c<size; c++) {
            let color = '';
            // if( r % 2 === 0 ) {
            //     if (c % 2 === 0 ) {
            //         color = 'black';
            //     } else {
            //         color = 'white';         <-----vienas iš variantu!!
            //     }
            // } else {
            //     if ( c % 2 === 0) {
            //         color = 'white';;
            //     } else {
            //         color = 'black';
            //     }
            // }
            
            if ( (r+c) % 2 === 0) {
                color= 'black';
            } else {
                color ='white';
            }
            cellsHTML += `<div class="cell ${color}" style="width: ${100 / size}%"></div>`;
        }
      

        HTML += `<div class="row" style="height:${100 / size}%">
                    ${cellsHTML}
                </div>`;
    }

    DOMboard.innerHTML = HTML;

    return;
}

renderBoard( 8 );