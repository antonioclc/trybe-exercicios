function maxRepeat (array) {
    let name = array[0]
    for (let index = 1; index < array.length; index += 1) {
        if (name.length < array[index].length) {
            name = array[index]
        }
    }
    console.log(name)
}

let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
maxRepeat (teste)