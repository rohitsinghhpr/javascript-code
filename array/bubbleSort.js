function bubbleSort(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([9,8,7,6,5,4,3,2,1]));
console.log(bubbleSort([55,88,24234,6546,856,54,756,645,6756,6546]));