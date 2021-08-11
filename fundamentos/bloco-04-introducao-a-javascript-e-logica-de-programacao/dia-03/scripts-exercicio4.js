let n = 5

if (n > 1) {
    let space = n/2
    for (let linha = 1 ; linha <= (n/2)+1 ; linha += 1) {
        let ast = ''
        if (linha === 1) {
        for (let espaco = 1; espaco <= n/2; espaco += 1 ) {
            ast += ' '  
        }     
        for (let coluna = 1; coluna <= 1 ; coluna +=1) {
            ast +='*' 
        }
        for (let espaco = 1; espaco <= n/2; espaco += 1 ) {
            ast += ' '
        }         
        console.log(ast)
        }
        if (linha > 1) {
        for (let espaco = 1; espaco <= space - 1; espaco += 1 ) {
            ast += ' '      
        }     
        for (let coluna = 1; coluna <= cont ; coluna +=1) {
            ast +='*' 
        }
        for (let espaco = 1; espaco <= space - 1; espaco += 1 ) {
            ast += ' '
        }         
        console.log(ast)
        }
}