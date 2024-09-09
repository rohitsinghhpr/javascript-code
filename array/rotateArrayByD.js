// [1,2,3,4,5];
// [2,3,4,5,1]

function rotateArrayBy1(arr){
    let temp = arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i-1] = arr[i];
    }
    arr[arr.length-1] = temp;
    return arr;
}
console.log(rotateArrayBy1([1,2,3,4,5]));
/*
Input:
N = 7
Arr[] = {1, 2, 3, 4, 5, 6, 7}
D = 2
Output: 3 4 5 6 7 1 2
Explanation: 
Rotate by 1: [2, 3, 4, 5, 6, 7, 1]
Rotate by 2: [3, 4, 5, 6, 7, 1, 2]
*/
function rotateArrayByD(arr,n,d){
    // need to store ele before d in temp[]
    let temp = new Array;
    for(let i=0;i<d;i++){
         temp[i] = arr[i];
    }
    // shifting 
    for(let i=d;i<n;i++){
        arr[i-d] = arr[i];
    }
    // inserting temp 
    for(let j=0;j<d;j++){
        arr[n-d+j] = temp[j];
    }
    return arr;
}
let result = rotateArrayByD([1, 2, 3, 4, 5, 6, 7],7,3);
console.log(result);
