/*
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
*/
function addToArrayForm(num,k){
    let sum = 0;
    for(let i=0;i<num.length;i++){
        sum = sum + num[num.length-1-i] * 10**i;
    }
    // sum = [...String(sum+k)]
    // for(let i=0;i<sum.length;i++){
    //     sum[i] = Number(sum[i]);
    // }
    return sum;
}
console.log(addToArrayForm([1,2,0,0],34));
// console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3],516));