// find min and max in given arrary.
let A =  [3, 2, 1, 56, 10000, 167];

/*
 min saying are you > i if yes update min else do nothing. 
*/

function getMinMax(arr,n){
    //code here
    let min = arr[0];
    let max = arr[0];
    if(n==1){
        return [min,max]
    }
    for(let i=1;i<n;i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(min>arr[i]){
            min = arr[i];
        }
    }
    return [min,max];
}