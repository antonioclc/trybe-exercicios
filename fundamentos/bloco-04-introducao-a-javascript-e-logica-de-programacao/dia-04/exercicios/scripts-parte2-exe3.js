function indexMinNumber (array) {
    let minInd = 0
    for (let index = 1; index < array.length; index += 1) {
        if (array[minInd] > array[index]) {
            minInd = index
        }
    }
    console.log(minInd)
}

let teste = [2, 4, 6, 7, 10, 0, -3];
indexMaxNumber (teste)