let contSquare = document.querySelector('.container');

let numSquare = 100;

for (let i = 1; i <= numSquare; i++) {
    contSquare.innerHTML += `<div class="square">${i}</div>`;
}

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

    