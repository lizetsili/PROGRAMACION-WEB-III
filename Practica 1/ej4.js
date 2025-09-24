function n(x){
    let m = x[0];   // mayor
    let men = x[0]; // menor

    for (let i = 1; i < x.length; i++){
        if(x[i] > m){
            m = x[i];
        }
        if(x[i] < men){
            men = x[i];
        }
    }

    return `El mayor es: ${m} y el menor es: ${men}`;
};

const res = n([1, 2, 3, 7, 5, 8, 54, 6, 8, 0]);
console.log(res); // El mayor es: 54 y el menor es: 0
