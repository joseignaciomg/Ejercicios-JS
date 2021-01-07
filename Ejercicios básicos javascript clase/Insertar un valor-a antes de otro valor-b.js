function foo(arr,value,before){
    let index = arr.indexOf(before);
    if (index === -1){
        arr.push(value)        
    }
    else{
        arr.splice(index,0,value)
    }
return arr;
}

compra = ["leche", "azucar", "miel"];
x = "avellanas";
console.log(foo(compra,x,"azucar"))