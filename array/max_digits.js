/*
 2 digits 
 10*10 = 100
 largest = 100 - 1 == 99
 -----------------------
 smallest = 10 ki power - 1 
 2 - 1 = 1
 10 ki 1 = 10
*/

/*
 3 digits 
 10*10*10 = 1000
 largest = 1000 -1 = 999
 -----------------------
 3 - 1 = 2
 10 * 10 = 100
*/

/*
 4 digis 
 10*10*10*10 = 10000
 largest = 10000 - 1 = 9999
*/

function getMaxMinOfDigit(d){
    let largest = (10**d)-1;
    let smallest = 10**(d-1);
    return [largest,smallest];
}
let result = getMaxMinOfDigit(5);
console.log(result);

result = getMaxMinOfDigit(1);
console.log(result);

result = getMaxMinOfDigit(2);
console.log(result);