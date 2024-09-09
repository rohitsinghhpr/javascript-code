// swapping without using third variable

/*
approach-1 (add and sub)
apporach-2 (bitwise xor)
*/

function swap(a,b){
    let x = a,y = b;
    console.log(x,y);
    x = x-y;
    y = x+y;
    x = y-x;
    console.log(x,y);
}
swap(5,10);

function swapXOR(a,b){
    let x = a, y =b;
    console.log(x,y);
    x = x^y;
    y = x^y;
    x = x^y;
    console.log(x,y);
}
swapXOR(2,4);