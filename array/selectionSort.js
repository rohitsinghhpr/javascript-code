function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let smallest = i;
        for(let j=1+i;j<arr.length;j++){
            if(arr[smallest]>arr[j]){
                smallest = j;
            }
        }
        let temp = arr[smallest];
        arr[smallest] = arr[i];
        arr[i] = temp; 
    }
    return arr;
}
console.log(selectionSort([9,8,7,6,5,4,3,2,1]));
console.log(selectionSort([55,88,24234,6546,856,54,756,645,6756,6546]));