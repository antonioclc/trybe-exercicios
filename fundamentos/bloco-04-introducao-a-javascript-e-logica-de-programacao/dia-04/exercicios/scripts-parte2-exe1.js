function verificaPalindrome (string) {
    string = string.split('')
    let string2 = string
    string = string.join()
    string2 = string2.reverse()
    string2 = string2.join()

    if (string === string2) {
        console.log('true')
    } else {
        console.log('false')

    }
}
