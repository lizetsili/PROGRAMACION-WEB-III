const encadenamientoPromesa = new Promise((resolve,reject)=>{
if(true){
    resolve(87);
}else{
    reject(4+2);
}
});
encadenamientoPromesa.then(resultado=>{
    console.log("Promesa 1: ",resultado);
    return resultado*9;
}).then(resultado=>{
    console.log("Promesa 2: ",resultado);
    return resultado/4;
}).then(resultado=>{
    console.log("Promesa 3: ",resultado);
    return resultado*0;
}).catch(error=>{
    console.log("Error de la promesa");
}).finally("Promesa encadenadea terminada :)");
