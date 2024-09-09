let x; // undefined;
let y = null;

console.log(x);
console.log(y);

console.log(x==y); // true - because both null and undefined are equal in value.
console.log(x===y); // false - type of null is an object and type of undefined is undefined. 

console.log(typeof null);
console.log(typeof undefined);

console.log(null instanceof Object);
console.log(undefined instanceof Object);