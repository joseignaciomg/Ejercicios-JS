// 1. Given a list of positive numbers [3, 5, 7, 1, 6], return the largest number in the list.

numeros = [3, 5, 7, 1, 6];

function numeromasalto(array){
    var x = array[0];
    for (let index = 0; index < array.length; index++) {
        const mayor = array[index];
        if (numeromasaltodelarray>x) {
            x = mayor;            
        }        
    }
return x;
}