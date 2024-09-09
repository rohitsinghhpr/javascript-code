// x;
// console.log(x);

//x -> Uncaught ReferenceError: x is not defined

// x = 5;
// console.log(x);

// output 5

x = 100;
console.log(x);
printSomething();

var x = 10;
console.log(x);

function printSomething(){
   console.log("print something on console");
}

let abc = ()=>{
   console.log("abc of javascript");
}


abc();

// Note 

/*
x -> Uncaught ReferenceError: x is not defined
x=5;console.log(x); -> 5
*/
