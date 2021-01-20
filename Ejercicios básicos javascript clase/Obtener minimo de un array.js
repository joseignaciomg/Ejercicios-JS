edad = [16, 34, 67, 4, 78, 45];

function min(edad){
    var x = edad [0];
    for (let index = 0; index < edad.length; index++) {
        var menor = edad[index];
        if (menor < x) {
            x = menor;
            
        }
    }
    return x;
}

console.log(min(edad))