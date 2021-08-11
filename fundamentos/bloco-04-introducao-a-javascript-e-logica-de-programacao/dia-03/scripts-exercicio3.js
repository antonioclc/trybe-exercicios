let n = 10

if (n > 1) {
    for (let linha = 1 ; linha <= n ; linha += 1) {
        let ast = ''
        for (let espaco = 1; espaco <= n - linha; espaco += 1 ) {
            ast += ' '
        }     
        for (let coluna = 1; coluna <= linha; coluna +=1) 
            ast +='*' 
        console.log(ast)
    }
}