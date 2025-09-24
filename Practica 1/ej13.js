function sumar5(numero) {
return new Promise((resolve) => {
    resolve(numero + 5);
});
}
function multiplicar2(numero) {
    return new Promise((resolve) => {
        resolve(numero * 2);
    });
}
function restar3(numero) {
    return new Promise((resolve) => {
        resolve(numero - 3);
    });
}
function procesarNumeroConThen(numeroInicial) {
    return sumar5(numeroInicial).then(resultado1 => {
        console.log('Después de sumar 5:', resultado1);
        return multiplicar2(resultado1).then(resultado2 => {
            console.log('Después de multiplicar por 2:', resultado2);
            return restar3(resultado2).then(resultadoFinal => {
                console.log('Después de restar 3:', resultadoFinal);
                return resultadoFinal
            });
        });
}).catch(error => {
    console.error('Error:', error);
});
}
procesarNumeroConThen(10)
.then(resultado => {
    console.log('Proceso completado:', resultado);
});
//async
function sumar5(numero) {
    return new Promise((resolve) => {
    resolve(numero + 5);
});
}
function multiplicar2(numero) {
    return new Promise((resolve) => {
    resolve(numero * 2);
});
}
function restar3(numero) {
    return new Promise((resolve) => {
    resolve(numero - 3);
});
}
async function procesarNumeroConAwait(numeroInicial) {
    try {
        const resultado1 = await sumar5(numeroInicial);
        console.log('Después de sumar 5:', resultado1);
        const resultado2 = await multiplicar2(resultado1);
        console.log('Después de multiplicar por 2:', resultado2);
        const resultadoFinal = await restar3(resultado2);
        console.log('Después de restar 3:', resultadoFinal);
        return resultadoFinal;
} catch (error) {
    console.error('Error en el proceso:', error);
    throw error;
}
}
procesarNumeroConAwait(10)
.then(resultado => {
    console.log('Proceso completado. Resultado:', resultado);
});
