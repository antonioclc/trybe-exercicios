let pecaxadrez = 'ReI'.toLowerCase()


switch (pecaxadrez) {
    case 'peao':
        console.log('em frente')
        break
    case 'bispo':
        console.log('diagonal')
        break   
    case 'cavalo':
        console.log('em "L"')
        break 
    case 'torre':
        console.log('vertical/horizontal')
        break  
    case 'rainha':
        console.log('todas as direções')
        break 
    case 'rei':
        console.log('todas as direções (1 casa)')
        break  
    default:
        console.log('nome incorreto')     
}