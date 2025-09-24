function elevarAlCuadrado(numero) {
    return new Promise((resolve) => {
        resolve(numero * numero);
    });
}

function sumar10(numero) {
    return new Promise((resolve) => {
        resolve(numero + 10);
    });
}

function dividirEntre2(numero) {
    return new Promise((resolve) => {
        resolve(numero / 2);
    });
}
async function procesarNumero(numeroInicial) {
    try {
        const cuadrado = await elevarAlCuadrado(numeroInicial);
        console.log('Después de elevar al cuadrado:', cuadrado);

        const suma = await sumar10(cuadrado);
        console.log('Después de sumar 10:', suma);

        const resultadoFinal = await dividirEntre2(suma);
        console.log('Después de dividir entre 2:', resultadoFinal);

        return resultadoFinal;
    } catch (error) {
        console.error('Error en el proceso:', error);
    }
}
procesarNumero(9).then(resultado => {
    console.log('Proceso completado. Resultado:', resultado);
});
