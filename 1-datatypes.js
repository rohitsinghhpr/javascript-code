// data types - dynamic types  
let data = 1; 
console.log("data -> (int) - ",data);
data = 1.2 
console.log("data -> (float) - ",data);
data = "this is data" 
console.log("data -> (string) - ",data);
data = true; 
console.log("data -> (boolean) - ",data);
data = null; 
console.log("data -> (null) - ",data);
data = undefined; 
console.log("data -> (undefined) - ",data);

// idexed based - array
// creating array using array literal
let arr = [1,2,3,4,5];
console.log(arr);
// creating array using the new keyword 
let new_arr = new Array(5);
// adding element 
new_arr[0] = "apple";
new_arr[1] = "banana";
new_arr[2] = "cherry";
new_arr[3] = "date";
new_arr[4] = "egg";
console.log(new_arr);
// how to recognize an Array
console.log(typeof arr); // object 
console.log(typeof new_arr); // object
// The typeof operator returns object because a JavaScript array is an object.
// solution-1
console.log(Array.isArray(arr)); // ture
console.log(Array.isArray(new_arr)); // ture
// solution-2
console.log(arr instanceof Array); // ture
console.log(new_arr instanceof Array); // ture

// key collection 
// Key:- A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.
let set_a = new Set([1,1,1,2,2,2,3,3,3]);
console.log(set_a);
set_a.forEach((e)=>{
   console.log(e);
});
// Map :- A map hold a key:value pair
let map_a = new Map([
   ['hindi',43],['english',49],['math',66]
])
console.log(map_a);
console.log(typeof set_a); // object
console.log(set_a instanceof Set); // true

// symbol
let x = Symbol("hello");
let y = Symbol("hello");
console.log(x==y);
console.log(x===y);
console.log(`the x description = ${x.description}`);
console.log(`the y description = ${y.description}`);

let sys1 = Symbol("Rohit");
let sys2 = Symbol("Rohit");

if(sys1 == sys2){
   console.log("sys1 == sys2");
}
else{
   console.log("they are not sys1 == sys2");
}

if(sys1 === sys2){
   console.log("sys1 === sys2");
}
else{
   console.log("the value and type not same");
}