// what is the falsy value

// to check falsy value using the !! 
// to check falsy value using the Boolean

// 1. 0

console.log("0 ->",0); // 0
console.log("!0 ->",!0); // true
console.log("!!0 ->",!!0); // false
console.log("Boolean(0) ->",Boolean(0));

// 2. undefined

console.log("undefined ->",undefined); // undefined
console.log("!undefined ->",!undefined); // true
console.log("!!undefined ->",!!undefined); // false
console.log("Boolean(undefined) ->",Boolean(undefined)); // false

// 3. null

console.log("null ->",null); // undefined
console.log("!null ->",!null); // true
console.log("!!null ->",!!null); // false
console.log("Boolean(null) ->",Boolean(null)); // false

// 4. false

console.log("false ->",false); // false
console.log("!false ->",!false); // true
console.log("!!false ->",!!false); // false
console.log("Boolean(false) ->",Boolean(false)); // false

// 5. NaN

console.log("NaN ->",NaN); // NaN
console.log("!NaN ->",!NaN); // true
console.log("!!NaN ->",!!NaN); // false
console.log("Boolean(NaN) ->",Boolean(NaN)); // false
