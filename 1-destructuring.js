// array destructuring using [] on the left side 
let alph = ['a', 'b', 'c', 'd', 'e'];
let [a1, b1, c1, d1, e1] = alph;
console.log(a1); // a
console.log(b1); // b
console.log(c1); // c
console.log(d1); // d
console.log(e1); // e

// object destructuring using {} on the left side
let person = {
   naam: "Rohit", age: 23, city: "Hapur"
}
let { naam, age, city } = person;
console.log(naam);
console.log(age);
console.log(city);

// --> usecase 

// 2. function parameter handling 

// 2.1 object
(function myFun({ naam, age, city }) {
   console.log(naam);
   console.log(age);
   console.log(city);
})(person);

// 2.2 array
(function myFun([a1, b1, c1, d1, e1]){
   console.log(a1); 
   console.log(b1); 
   console.log(c1); 
   console.log(d1); 
   console.log(e1); 
})(alph);

// 3. Swapping variable values

let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b); // 10 5

// 

let arr2 = [1,2,3,4,5,6,7,8,9,10];

let [x,y,z,...xyz] = arr2;

console.log(x);
console.log(y);
console.log(z);
console.log(xyz);

// array destruc 

//  creating a function that return an array
function state(a,b){
   return [a,b];
 }
 let[aa,bb] = state(55,44);
 console.log(aa); // output 55;
 console.log(bb); // output 44