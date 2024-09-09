function reversArr(arr){
    let n = arr.length/2;
    for(let i=0,N = arr.length-1;i<n;i++,N--){
        let temp = arr[i];
        arr[i] = arr[N];
        arr[N] = temp;
    }
    return arr;
}
console.log(reversArr([1,2,3,4,5]));
console.log(reversArr([1,2,3,4,5,6,7,8,9]));
console.log(reversArr([5,6,7,8,9,10,11]));