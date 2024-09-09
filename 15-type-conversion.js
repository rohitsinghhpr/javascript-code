// type conversion

// global method Number() - converts val in num

// str to num

let num = Number("55");
console.log(typeof num);
console.log(num.constructor);
console.log(num instanceof Number);

// num to str

let str = String("123");
for(const v of str){
    console.log(v);
}

console.log('age'.constructor);

// automatic type conversion

// When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

console.log("5"+3); // 3 converted to str
console.log(3+"5"); // 3 converted to str 
console.log("5"-3); // 5 converted to 5 (number)

// -- number 

// what if 5 + undefined

console.log(5 + undefined); // NaN
console.log(5 + null); // 5
console.log(5 + NaN);
console.log(5 + false);
console.log(5 + true);

// ---

// Type coercion is the process of converting value from one type to another,
//(such as string to number, object to boolean, and so on).

// Implicit coercion - 

console.log(1+"2"); //12 
// returned because 1 is converted to '1' implicitly.

console.log(true+false); // 1
// because true converted to 1 and false converted to 0.

// Explicit conversion -

// Explicit conversion is done by calling a method or using an operator to convert a type.

console.log(+"1"+ +"2"); // 3
console.log(parseInt('1') + parseInt('2')); // 3

// other thing 

console.log("0 || 1 ->",0 || 1);
console.log("0 && 1  ->",0 && 1 );
console.log("false == '0' ->",false == '0');
console.log("4 < 5 < 6  ->",4 < 5 < 6 );
console.log("6 > 5 > 4  ->",6 > 5 > 4 );
console.log("typeof 10  ->",typeof 10 );
console.log("typeof typeof 10  ->",typeof typeof 10 );

/*
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
*/

// https://www.w3schools.com/js/js_type_conversion.asp -- just go throug of it 