function sumar5(numero) {
    return new Promise((resolve, reject) => {
        if (typeof numero !== "number") {
            reject("El valor debe ser un número");
        } else {
            resolve(numero + 5);
        }
    });
}
function sumar5ConCallback(numero, callback) {
    sumar5(numero)
        .then(resultado => callback(null, resultado))  // éxito
        .catch(error => callback(error, null));        // error
}

// Uso del callback
sumar5ConCallback(10, (error, resultado) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Resultado:", resultado); // Resultado: 15
    }
});

