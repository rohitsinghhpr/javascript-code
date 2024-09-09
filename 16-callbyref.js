let obj = {
    name:"rohit",
    last:"singh",
    age:23
}

function callByRef(object,value){
    object.name = value;
    return;
}

console.log(obj);
callByRef(obj,"mohit");
console.log(obj);
