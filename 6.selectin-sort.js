// selection sort 

// use two pointer 

// 1st pointer points to current index in array
// 2nd pointer points to min value in array

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min_index = i;
        // j = i+1, for looking the min value in rest of the array from current index
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min_index]){
                min_index = j;
            }
        }
        // swapping, in case min_index has change, min_index !== i
        if(min_index !== i){ 
            let temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index]  = temp;
        }
    }
}

let data = [10,4,6,8,9,7,5,2,3,1,0];

console.log("before sorting -> ",data);

selectionSort(data);

console.log("after sorting -> ",data);

