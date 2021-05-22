// Time Complexity:

// O(Nlog(N)), where N is the size of the array A.

// Nlog(N) is required to sort the array A.
// Space Complexity:

// O(1), No extra space required.

let arr = [3,5,6,1];
arr.sort((a,b) => b-a)

console.log(arr)
console.log(arr.reduce((a,e) => a + e))

//time-compleity = O(nlogn)