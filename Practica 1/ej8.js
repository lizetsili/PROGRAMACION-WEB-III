function Tiempo(callback) {
    setTimeout(callback, 2000);
}
function res() {
    console.log("Han pasado 2 segundos.");
}
Tiempo(res);
