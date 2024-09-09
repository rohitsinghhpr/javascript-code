// rest operator
function sum(name,...args){
    let sum = 0;
    for(let i=0;i<args.length;i++){
       sum += args[i];
    }
    console.log(`name = ${name}`);
    return sum;
 }
 console.log(sum("Rohit",10,20,30));
 
 // - sepread operator
 
 let arr1 = [10,20,30];
 let arr2 = arr1;
 arr1.push(40);
 console.log(arr1);
 console.log(arr2);
 
 console.log("after the sperad operator");
 
 arr1 = [1,2,3];
 arr2 = [...arr1];
 arr1.push(4);
 console.log(arr1);
 console.log(arr2);