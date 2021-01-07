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

// Comienzas creando una variable con el valor del primer elemento del array(x) y mediante el bucle for (que genera la variable mayor) usas if (y determinas que si la variable numeromasaltodelarray es mayor que x, es que x es igual al numeromasaltodelarray)  