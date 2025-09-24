function sumar5Callback(numero, callback) {
    if (typeof numero !== "number") {
        callback("El valor debe ser un número", null);
    } else {
        callback(null, numero + 5);
    }
}
sumar5Callback(10, (error, resultado) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Resultado:", resultado);
    }
});
function sumar5Promesa(numero) {
    return new Promise((resolve, reject) => {
        sumar5Callback(numero, (error, resultado) => {
            if (error) {
                reject(error);
            } else {
                resolve(resultado);
            }
        });
    });
}

sumar5Promesa(18)
    .then(resultado => console.log("Resultado:", resultado)) 
    .catch(error => console.error("Error:", error));
