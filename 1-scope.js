// global scope 
var x = 10
let y = 100;
const z = 1000;
console.log("global scope -> x ->", x);
console.log("global scope -> y ->", y);
console.log("global scope -> z ->", z);

// block scope
{
   var xB = 20 // accessiable outside the block 
   let yB = 200; // not accessiable outside the block
   const zB = 2000; // not accessiable outside the block
   console.log("block scope -> xB ->", xB);
   console.log("block scope -> yB ->", yB);
   console.log("block scope -> zB ->", zB);
}

// accessing var outside the block 
console.log("block scope (outside) -> xB ->", xB);

// shadowing 
{
   x = -10;
   y = -100;
   console.log("shadowing -> x ->", x);
   console.log("shadowing -> y ->", y);
}
console.log("shadowing -> x ->", x);
console.log("shadowing -> y ->", y);

var a = 1;
let b = 2;
console.log(a);
console.log(b);
{
   console.log("{");
   var a = 1.1;
   let b = 2.1;
   console.log(a);
   console.log(b);
   console.log("}");
}
console.log(a);
console.log(b);

// lyxical

num = 10;
printNum(num);
function printNum(n){
   console.log(n);
}
var num;