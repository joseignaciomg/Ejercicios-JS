// REVISAR

// ordenas de mayor a menor, el mayor es el primero, y luego con slice sacas los 3 primeros. 
function tresmayores(arr){
    arr.sort((a,b) => b-a).slice(0,3);
}

//  ordenas de menor a mayor, y luego con slice sacas un nuevo array con los 3 ultimos argumentos del array.   
function tresmayores(arr){
    arr.sort((a,b) => a-b).slice(arr.lenght - 3,arr.lenght);
}