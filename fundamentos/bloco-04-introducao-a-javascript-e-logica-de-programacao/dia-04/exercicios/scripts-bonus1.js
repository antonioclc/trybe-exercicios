const num = {
    'I': 1,
    'V': 5, 
    'X': 10, 
    'L': 50,  
    'C': 100, 
    'D': 500, 
    'M': 1000, 
    }
  
function convertNumber (stringNumber) {
    stringNumber = stringNumber.split('')
    for (let index = 0; index < stringNumber.length; index += 1) {
        for (let index2 in num) {
            if (stringNumber[index] === index2) {
                stringNumber[index] = num[index2]
            }
        }
    }
    let number = stringNumber[stringNumber.length-1]
    for (let index = 0; index < stringNumber.length - 1; index += 1) {
        if (stringNumber[index] < stringNumber[index + 1]) {
            number = Math.abs(number - stringNumber[index])
        } else {
            number = number + stringNumber[index]
        }
    }
    console.log(number)
}

let teste = 'XXIV'
convertNumber (teste)