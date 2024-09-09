// [1,2,3,4,5,6,7,8];

/*
 starts travesing form the second ele 
 check 2nd ele >= its previous ele // arr[i-1]
*/

function checkSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {

        } else {
            return false
        }
    }
    return true;
}
console.log(checkSorted([1, 2, 3, 4, 5, 6, 7, 8]));