var numeros = [1,2,2,1];
function duplicados(array){
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
    if (newArray.indexOf(array[index]) === -1){ //si en el nuevo array no está, lo añades
        newArray.push(array[index])
        }
    }
return newArray;
}