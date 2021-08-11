function arrayOfNumbers (vector) {
    let pairNumbers = []
    for (let index = 0; index < vector.length; index += 1) {
        for (let index2 = 0; index2 < vector[index].length; index2 += 1) {
            if (vector[index][index2] % 2 === 0) {
                pairNumbers.push(vector[index][index2])
            }
        }
    }
    console.log(pairNumbers)
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
arrayOfNumbers(vector)