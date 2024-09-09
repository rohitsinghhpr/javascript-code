// using var 

console.log(x); // undefined 

x = 0.5;
console.log(x); // 0.5

var x = 5;

console.log("x->",x);

x = 10;

console.log("x->",x);

// -- more concepth 

var y;

console.log(y==undefined); // true
console.log(y===undefined); // true

console.log(y==null); // true - but why 

function whatIfTriedToAccessVarFromOutOfTheFun(){
    var c = 66;
    console.log("c in the fucntion",c);
 }
 console.log("c out of the fucntion",c);

// using let keyword 

// y = 10;
// console.log("y",y); 

let y = 100
console.log("let y = ",y);

y = 10;
console.log("y = ",y);

function whatIfTriedToAccessLetFromOutOfTheFun(){
    let c = 66;
    console.log("c in the fucntion",c);
 }
 console.log("c out of the fucntion",c);

// using the const keyword 

const z = 1000;
console.log(z);