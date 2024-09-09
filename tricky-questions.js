
// JavaScript Interview Questions — Data Types
// https://levelup.gitconnected.com/javascript-interview-questions-data-types-94baf528374b

//What is the difference between Implicit and Explicit Coercion?
console.log(1 + '2'); // we will get 12
console.log(true+false); // 1+0 will get 1 
console.log(3*'2'); // will print 6 because '2' is converted to 2

function WhatReturn(n){
   return Boolean(n);
}
console.log("with 0",WhatReturn(0)); // false
console.log("with 1",WhatReturn(1)); // true

const x = new Number(5);
console.log(x);

function what(){
   return 4<5<6;
}
console.log(what());

console.log(typeof(typeof(10)));
