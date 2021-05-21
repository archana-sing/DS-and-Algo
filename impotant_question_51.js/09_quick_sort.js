
// Quick sort is based on the divide-and-conquer method based on the idea of choosing one element as a pivot element 
// and partitioning the array around it such that:
//  Left side of pivot contains all the elements that are less than the pivot element 
//  Right side contains all elements greater than the pivot.


// One of the most important process of Quick Sort is partition

//     The goal of partition is to select a pivot and put it at it's correct location in a sorted array, 
//     and put all elements smaller than pivot on the left of it and larger on the right of it.
//     This is done in Linear time.

// Time Complexity:

// Average Case: O(N*LogN), N is the size of Array Worst Case: O(N*N)
// Space Complexity:

// O(N), where N is the size of array
function partition(arr , low , high){
    let pi = arr[high];
    let i = low-1;// Index of smaller element and indicates the right position of pivot found so far

    for(let j = low ; j <= high -1 ; j++){
        if(arr[j] > pi){
            i++;
            [arr[i] , arr[j]] = [arr[j] , arr[i]]
        }
    }
    [arr[i + 1] , arr[high]] = [arr[high] , arr[i + 1]]
    return i+1
}
function quick_sort(arr , low , high){
    if(low < high){
        let pivot = partition(arr , low , high);
        quick_sort(arr , low , pivot -1);
        quick_sort(arr , pivot + 1 , high)
    }
    return arr
}
let arr = [2, 6, 3, 0, 4, 1];
quick_sort(arr , 0 , arr.length-1)
console.log(arr)

