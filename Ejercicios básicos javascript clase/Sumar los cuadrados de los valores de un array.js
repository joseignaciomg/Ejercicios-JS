var a = [1,2,3,4,5]
var b = a.map(function(x){
    return Math.pow(x,2);
})
console.log(b)

a.map(v=>v*v)

// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
// La función  Math.pow(base, exponente) devuelve la  base elevada al exponente.

Math.pow(4, 0.5);  // 2 (raíz cuadrada de 4)
Math.pow(8, 1/3);  // 2 (raíz cúbica de 8)