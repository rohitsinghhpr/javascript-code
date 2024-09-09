(function immediatley_ivoked(){
   console.log("this is immediatley ivoked function");
})();

// function statment

function a(){
 console.log("the way of creating function is know as function statment");
}
a(); // a called 

// function expression (search usecase of it)

let b = function (){
   return "putting function into varible is called function expression";
}
b(); // b called

// function statment vs function expression -> hosting  (search)

// function declaration -> function declaration and statement both are the same thing

// anonymous function (search usecase of it)

// named function 

// differenc between the argument and parameter

// first class function 

// arrow function (search usecase of it)

// higher order function -> a function which take another function as argument called HOF.

function x(){
   console.log("i'x");
}

function y(fun){
   fun();
}

// here x is a callback function.
// and y is a higher order function.