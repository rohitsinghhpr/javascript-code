// min and max in array
let arr1 = [33,5,65,656,455,5546,545];
// min
function findMinEle(arr){
    if(arr.length == 0){
        return 'array is empty';
    }
    let min = arr[0];
    console.log(`intial min = ${min}`);
    for(let i=1;i<arr.length;i++){
       if(arr[i]<min){
        // min need to update
        min = arr[i];
       }
    }
    return min;
}
function findMaxEle(arr){
    if(arr.length == 0){
        return 'array is empty';
    }
    let max = arr[0];
    console.log(`intial max = ${max}`);
    for(let i=1;i<arr.length;i++){
       if(arr[i]>max){
        // max need to update
        max = arr[i];
       }
    }
    return max;
}
console.log("min value of array = ",findMinEle(arr1));
console.log("max value of array = ",findMaxEle(arr1));

console.log("min value of array = ",findMinEle([]));
console.log("max value of array = ",findMaxEle([]));