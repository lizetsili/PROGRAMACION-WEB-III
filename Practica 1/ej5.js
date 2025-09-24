function esPalindromo(cadena) {
    let inicio = 0;
    let fin = cadena.length - 1;

    while (inicio < fin) {
        if (cadena[inicio] !== cadena[fin]) {
            return false; 
        }
        inicio++;
        fin--;
    }

    return true; 
}

let h=esPalindromo("oruro");
console.log(h);
let l=esPalindromo("Cochabamba");
console.log(l);  
