function checkDup(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                return [i,j];
            }
        }
    }
    return false
}
const result = checkDup([2,14,18,22,22]);
console.log(result)