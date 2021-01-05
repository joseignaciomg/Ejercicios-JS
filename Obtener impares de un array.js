function impares(Array){
    for (let index = 0; index < Array.length; index++) {
    if(Array[index]%2 !== 0){
        console.log(Array[index]);
    }
    }
}
console.log(impares(Array))