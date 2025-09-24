let arr=[65,8,4,2,5,4];
const [uno,dos]=arr;
console.log("Los Dos primeros: ",uno,dos);

const [ , , , , ...resto] = arr;
console.log("Los dos ultimos: ",resto); 
