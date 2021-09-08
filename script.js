/*     array[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
             2  3  4  5  6  7  8  9  10 11 12  */
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
/* Rolagem atual */
rollOfDice = 0 

function randomNumber(){
    const dado1 = Math.round(Math.random() * (6 - 1) + 1)
    const dado2 = Math.round(Math.random() * (6 - 1) + 1)
    return dado1 + dado2
}
for(let i = 0; i < 1000; i ++){
    rollOfDice = randomNumber()
    count[rollOfDice - 2] += 1
}

const lista = document.querySelector('ul')
rollOfDice = 0
for(let i = 2; i <= 12; i ++){
    const itemLista = document.createElement('li')
    const itemTexto = document.createElement('h2')
    const minhaBarra = document.createElement('div')
    itemTexto.innerHTML = i + ': ' + count[rollOfDice]
    const larguraDaBarra = count[rollOfDice]
    minhaBarra.style.width = `${larguraDaBarra}px`
    rollOfDice += 1
    minhaBarra.style.border = '1px solid red'
    itemLista.appendChild(itemTexto)
    itemLista.appendChild(minhaBarra)
    lista.appendChild(itemLista)
}

