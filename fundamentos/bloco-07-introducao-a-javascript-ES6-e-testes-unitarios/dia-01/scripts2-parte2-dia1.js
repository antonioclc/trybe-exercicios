const longestWord = (event) => {
    const eventSplit = event.split(' ')
    let biggestWord = ''
    for (let word of eventSplit) {
        if (word.length > biggestWord.length) {
            biggestWord = word
        }
    }
    return biggestWord
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'
