function Vocales(n){
    const vocales = { a:0, e:0, i:0, o:0, u:0 };

    for (let j=0; j<n.length; j++){
        let m = n[j]; 
        if(m === "a" || m === "A"){
            vocales.a += 1;
        } else if (m === "e" || m === "E"){
            vocales.e += 1;
        } else if (m === "i" || m === "I"){
            vocales.i += 1;
        } else if (m === "o" || m === "O"){
            vocales.o += 1;
        } else if (m === "u" || m === "U"){
            vocales.u += 1;
        }
    }

    return `a=${vocales.a}, e=${vocales.e}, i=${vocales.i}, o=${vocales.o}, u=${vocales.u}`;   
};

let n = Vocales("euforia");
console.log(n); 


