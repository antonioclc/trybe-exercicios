function verificaFimPalavra (array) {
    let cont = 0
    let cont2 = 0
    
    for (let index of array) {
        cont2 = 0
        for (let index2 of array) {
            if (array[index] === array[index2]) {
                cont2 += 1
            }
            if (cont2 > cont) {
                cont = array[index]
            }
        }
    }
    console.log(cont)
}

let teste = [2, 3, 2, 5, 8, 2, 3,];
verificaFimPalavra (teste)