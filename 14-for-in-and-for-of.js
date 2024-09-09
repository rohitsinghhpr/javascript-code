// loops 

// for in - iterateable obj porps;
// for of - iterateable obj value

for (const key in {
    name:"rohit",
    last:"singh",
    age:21,
    sub:"bca"
}) {
    console.log(key);
}

for(const i in ['a','b','c','d','e']){
    console.log(i);
}

let obj = {
    name:"rohit",
    last:"singh",
    age:21,
    sub:"bca"
}

let arr = ['a','b','c','d','e'];

for(const k in obj){
    console.log(obj[k]);
}

for(const i in arr){
    console.log(arr[i]);
}

// string 
let str = 'rohit'
for(let c in str){
    console.log(str[c]);
}

console.log("for of");

let arr2 = ['a','b','c','d','e'];
for(const k of arr2){
    console.log(k);
}