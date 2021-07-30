let custo = 125
let venda = 250

if (custo > 0 && venda > 0) {
    console.log('Seu lucro foi de R$' + ((venda - (custo*1.2))*1000) + ' na venda de 1000 unidades')
} else {
    console.log('erro: valor menor que 0')
}