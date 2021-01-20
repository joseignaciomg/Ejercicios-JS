function (a){
    return a + 100;
}

// es igual que lo siguiente

a => a + 100;

// ---------------------------------------------------------

// ej Función tradicional 
const materials = ['Hydrogen','Helium','Lithium','Beryllium'];
console.log(materials.map(material => material.length));

// ---------------------------------------------------------

// ej Función tradicional (sin argumentos)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

() => a + b + 100;

// ---------------------------------------------------------

// Función tradicional con nombre
function bob (a){
    return a + 100;
  }
  
  // Función flecha
  let bob = a => a + 100;

// -------------------------------------------------------

  // Función tradicional sin nombre y con parámetros
function (a, b){
    let chuck = 42;
    return a + b + chuck;
  }
  
  // Función flecha
  (a, b) => {
    let chuck = 42;
    return a + b + chuck;
  }