// set - collection of  unique values 

let set1 = new Set();

set1.add('a');
set1.add('a');
set1.add('a');
set1.add('b');
set1.add('b');
set1.add('c');

// has() - return ture if value exits in set
console.log(set1.has("r")); // false 
console.log(set1.has("a")); // ture 

console.log(set1.values());
console.log(set1.size)

set1.forEach((s)=>{
    console.log(s);
})

console.log(typeof set1);
console.log(set1 instanceof Set);
