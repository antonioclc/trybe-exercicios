let salario = 3000 
let aliqInss = 0
let aliqIr = 0
let parcIr = 0

if ( salario <=1556.94) {
    aliqInss = (0.08*salario)
    salario = salario - aliqInss
} 
else if (salario >= 1556.95 && salario <= 2594.92) {
    aliqInss = (0.09*salario)
    salario = salario - aliqInss
} 
else if (salario >= 2594.93 && salario <= 5189.82) {
    aliqInss = (0.11*salario) 
    salario = salario - aliqInss
}
else {
    aliqInss = 570.88
    salario = salario - aliqInss
}

if ( salario <=1903.98) {
    console.log('Salário líquido = R$' + salario)
} 
else if (salario >= 1903.99 && salario <= 2826.65) {
    aliqIr = (0.075*salario)
    parcIr = 142.80
    console.log('Salário líquido = R$' + ((parcIr - aliqIr) + salario))
} 
else if (salario >= 2826.66 && salario <= 3751.05) {
    aliqIr = (0.15*salario)
    parcIr = 354.80
    console.log('Salário líquido = R$' + ((parcIr - aliqIr) + salario))
} 
else if (salario >= 3751.06 && salario <= 4664.68) {
    aliqIr = (0.225*salario)
    parcIr = 636.13
    console.log('Salário líquido = R$' + ((parcIr - aliqIr) + salario))
} 
else {
    aliqIr = (0.275*salario)
    parcIr = 869.36
    console.log('Salário líquido = R$' + ((parcIr - aliqIr) + salario))
}

console.log('Resumo:')
console.log('Alíquota INSS - R$' + aliqInss)
console.log('Alíquota IR - R$' + aliqIr)
console.log('Parcela IR - R$' + parcIr)
console.log('Total a subtrair no salário bruto - R$' + (aliqIr - parcIr + aliqInss))

