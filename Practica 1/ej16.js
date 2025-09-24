function sumar(n) {
    return new Promise(resolve => {
        resolve(n + 12);
    });
}

function multi9(n) {
    return new Promise(resolve => {
        resolve(n * 9);
    });
}
sumar(7)
    .then(resultado1 => {
        console.log("Después de sumar 12:", resultado1);
        return multi9(resultado1);
    })
    .then(resultadoFinal => {
        console.log("Después de multiplicar por 9: ", resultadoFinal);
    })
    .catch(error => console.error("Error:", error));
