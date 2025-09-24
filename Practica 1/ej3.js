function ImparPar(n) {
    const a = [];
    const b = []; 

    for (let k = 0; k < n.length; k++) {
        if (n[k] % 2 === 0) {
            a.push(n[k]);
        } else {
            b.push(n[k]);
        }
    }

    return `Pares:[${a}], Impares: [${b}]`;
}

let n = ImparPar([1, 3, 5, 6, 7, 4, 43]);
console.log(n); 
