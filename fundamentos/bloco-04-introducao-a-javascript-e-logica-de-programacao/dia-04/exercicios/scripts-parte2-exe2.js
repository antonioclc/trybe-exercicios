function indexMaxNumber (array) {
    let maxInd = 0
    for (let index = 1; index < array.length; index += 1) {
        if (array[maxInd] < array[index]) {
            maxInd = index
        }
    }
    console.log(maxInd)
}

let teste = [2, 3, 6, 7, 10, 1];
indexMaxNumber (teste)