let contSquare = document.getElementById('mainContainer');
let formGioco = document.getElementById('formGioco');
let buttonFOrm = document.getElementById('buttonElement');

let numSquare = 100;

buttonFOrm.addEventListener('click', () =>{
    numSquare = formGioco.value
    console.log(numSquare)
});
console.log(numSquare)

// // creo il contenitore
// let container = document.createElement('div');
// container.classList.add('container');
// // attraverso il ciclo gli appendo tutti gli square
// for (let i = 1; i <= numSquare; i++) {
//     container.innerHTML += `<div class="square">${i}</div>`;
// }
// // quando il container è completo lo appendo al main
// contSquare.append(container)


// contSquare.addEventListener('click', (event) =>{
//     // rintraccio l'elemento e lo manipolo
//     let element = event.target.classList
//     if(element.value === 'square'){
//         element.add('clicked')
//     }else{
//         element.remove('clicked')
//     }
//     // stampo in console il numero che è stato cliccato
//     console.log(event.target.textContent)
// });

    