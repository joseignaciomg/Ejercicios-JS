arr=[34,45,78] 
val=45

function foo(arr,val){
    var x = arr.indexOf(val);
    arr.splice(x,1);
    return arr;
}

// .indexOf(valorBusqueda[, indiceDesde])
// El método indexOf()devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Devuelve un array que contiene los elementos eliminados. Si sólo se ha eliminado un elemento, devuelve un array con un solo elemento. Si no se ha eliminado ningún elemento, devuelve un array vacío.