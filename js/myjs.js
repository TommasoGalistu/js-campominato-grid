let contSquare = document.getElementById('mainContainer');
let formGioco = document.getElementById('formGioco');
let buttonFOrm = document.getElementById('buttonElement');
let contInput = document.querySelector('.contInput')
var tuttaLaRoot = document.documentElement;

let numSquare;

// al click spariranno gli input e apparirà il gioco
buttonFOrm.addEventListener('click', () =>{
    // selezione default
    numSquare = formGioco.value !== 'select' ? formGioco.value : 100;
    // rendo invisibile il form e inizia il gioco
    contInput.classList.add('invisible')

    // imposto variabile per cambiare dimensioni al css
    let numRighe;
    switch (numSquare){
        case '100':
            numRighe = 10;
            break
        case '81':
            numRighe = 9;
            break
        case '49':
            numRighe = 7;
            break
    }

    // cambio le dimensioni css in base alla scelta del giocatore
    tuttaLaRoot.style.setProperty('--numeroSquare', numRighe)

    // creo la struttura a griglia del gioco
    // creo il contenitore
    let container = document.createElement('div');
    container.classList.add('container');

    // attraverso il ciclo gli appendo tutti gli square
    for (let i = 1; i <= numSquare; i++) {
        container.innerHTML += `<div class="square">${i}</div>`;
    }
    // quando il container è completo lo appendo al main
    contSquare.append(container)
});





contSquare.addEventListener('click', (event) =>{
    // rintraccio l'elemento e lo manipolo
    let element = event.target.classList
    if(element.value === 'square'){
        element.add('clicked')
    }else{
        element.remove('clicked')
    }
    // stampo in console il numero che è stato cliccato
    console.log(event.target.textContent)
});

    