// are used to perform arithmetic on numbers - 
console.log("------ asignment operators ------");
console.log(1+1); 
console.log(1-1);
console.log(1*1);
console.log(2/2);
console.log(5%4);
console.log(10**2); // power 

// asignment operators 
console.log("------ asignment operators ------");
let x,y;
x = y = 10;
console.log("x = ",x,"y = ",y);
console.log(x+=x);
console.log(y-=x);

console.log("------ comparison operators ------");
x = 0; 
// y = 10; // to run 1st cond.
console.log(x!=false?"x is 0":`x is ${x}`);  // false evaluates to 0 
console.log(y>=10?"y is 10":`y is ${y}`);
console.log(y<=10?"y is less than 10":`y is ${y}`);

console.log("------ logical operators ------");
// and && - checks both side 
x = 1;
y = 1;
console.log(x && y?"x and y both have same value":"both have distinct values");

// not ! - turns ture in false and false in ture 

x = true;
console.log(!x?`1st ${x}`:`2nd ${x}`); 
