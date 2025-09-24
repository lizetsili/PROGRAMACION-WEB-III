function Invertir(palabra){
    let invertido="";
    for(let i=palabra.length-1;i>=0;i--){
        invertido=invertido+palabra[i]
    }
    return invertido
}
let x=Invertir("JHONNY FELIPEZ ANDRADE");
console.log(x);