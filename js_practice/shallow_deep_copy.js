
// shallow copy 

// let original = { name: "Rohit", age: 24 };
// let shallowCopy = { ...original };
// console.log("Original", original);
// console.log("Shallow Copy", shallowCopy);
// shallowCopy.age = 25;
// console.log("Original", original);
// console.log("Shallow Copy", shallowCopy);
// original.name = "Singh";
// console.log("Original", original);
// console.log("Shallow Copy", shallowCopy);

// note:- primitive values dosen't effect.
// object gets effected.

// let original = {
//     student:{
//         name:"Rohit",
//         age:24
//     },
//     room:{
//         no:5,
//     }
// }
// let shallowCopy = {...original};
// console.log("Original", original);
// console.log("Shallow Copy", shallowCopy);
// shallowCopy.room.no = 10;
// console.log("Original", original);
// console.log("Shallow Copy", shallowCopy);
// original.student.name = "Sumit";
// console.log("Original", original);
// console.log("Shallow Copy", shallowCopy);

// deep copy ------------------------------------------------

let original = {
    name:"Rohit", 
    college:{
       name:"IMIT",
       course:"BCA"
    }
}
let deepCopy = JSON.parse(JSON.stringify(original));
console.log("Original",original);
console.log("Deep",deepCopy);
deepCopy.college.name = "CCSU";
console.log("Original",original);
console.log("Deep",deepCopy);
original.college.course = "BBA";
console.log("Original",original);
console.log("Deep",deepCopy);

