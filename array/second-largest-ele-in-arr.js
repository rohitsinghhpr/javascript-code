// Brute, Better, Optimal

{
    /*
    approach-1 
    ----------
     sort the array 
     2nd largest ele = arr[n-2]; // if there is no duplicate
   */
    let arr = [5, 56, 7, 4, 78, 34, 6, 65, 76];

    let sorted_arr = arr.sort((a, b) => a - b);
    console.log("sorted array", sorted_arr)
    let second_largest_ele = sorted_arr[arr.length - 2];
    console.log(second_largest_ele);
}

{
    /*
     better approach
     ---------------

     largest ele = 1, then find largest 
     second_largest = -1 then find arr[i] > second_largest && arr[i] != largest 

    */

    let arr = [5, 56, 7, 4, 78, 34, 6, 65, 76];
    let largest = 1;
    let second_largest = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    console.log("largest", largest);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > second_largest && arr[i] != largest) {
            second_largest = arr[i];
        }
    }

    console.log("second_largest", second_largest);

}

{
    let arr = [5, 56, 7, 4, 78, 34, 6, 65, 76];
    let largest = 1;
    let second_largest = -1;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>largest){
            largest = arr[i];
        }
        if(arr[i]>second_largest && arr[i] != largest){
            second_largest = arr[i];
        }
    }

    console.log("largest", largest);
    console.log("second_largest", second_largest);

}