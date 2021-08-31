const testingScope = escopo => {
    if (escopo === true) {
        const ifScope = ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(true);
