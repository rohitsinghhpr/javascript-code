// move all 0 to end of an array
function pushZerosToEnd(arr) {
    let temp = new Array();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            temp.push(arr[i]);
        }
    }
    for(let i=0;i<temp.length;i++){
        arr[i] = temp[i];
    }
    for(let i=0;i<(arr.length-temp.length);i++){
        arr[temp.length+i] = 0;
    }
    return arr;
}
const result = pushZerosToEnd([1, 2, 0,3,0, 4, 5, 0, 6, 7]);
console.log(result);

/*
 optimal solutions - 2 pointer
 if(arr[i].nextIsZero) swape with next.next
*/
function pushZerosToEnd2(arr){
    let j = -1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]==0){
            j = i;
            break;
        }
    }
    for(let i=j+1;i<arr.length;i++){
        if(arr[i]!=0){
            let temp = arr[i];
            arr[j] = arr[i];
            arr[i] = temp;
            j++;
        }
    }
    return arr;
}

console.log(pushZerosToEnd2([1, 2, 0,3,0, 4, 5, 0, 6, 7]));