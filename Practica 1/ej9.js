const miPromesa =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Han pasado lso 3 segundo :)");
    },3000);  
});
miPromesa.then((menaje)=>{
    console.log(menaje);
});
