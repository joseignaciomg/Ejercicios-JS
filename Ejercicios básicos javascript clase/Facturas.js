// Dada la siguiente información obten el año donde mas se facturo y devolver un array con la siguiente estructura [{year,sum(total)}] 

// var invoices=[ 
// {year:1999,number:1,total:1000} 
// {year:2000,number:1,total:100} 
// {year:2000,number:1,total:999} 
// ] 

var totals = invoices.reduce((acumulador,valorActual)=>{
    let year = valorActual.year; 
    let total = valorActual.total; 
    if (acumulador.hasOwnProperty(year)){ 
        acumulador[year]=acumulador[year]+total;
    }
    else{
        acumulador[year]=total;
    }
return acumulador;
},{},Object.entries(totals).reduce((a,b)=>{
    a.push({year:b[0],total:b[1]})
    return a;
},[]))
console.log(totals)
// {1999:1000, 2000:1099}

// El método hasOwnProperty() - devuelve un booleano indicando si el objeto tiene la propiedad especificada.
// Object.entries() - Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.