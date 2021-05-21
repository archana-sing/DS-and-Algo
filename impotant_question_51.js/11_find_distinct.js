//The sum of first N natural numbers is given sum = N * (N + 1)/2
// In this question we are given an array A, of size N, having values between 1 to N-1, 
// such that all the numbers occur once except for one, which occurs twice. 
// A simple intuitive solution would be to find the sum of all the elements in the array, 
// and also to find the sum of first (N-1) natural numbers using the formula given in the hint. 
// The difference between the two sums, will be the element that is occuring twice.
let a = [1,2,3,3,4];
let sum = 0;
for(let i = 0 ; i < a.length ; i++){
    sum += a[i]
}
let n = a.length - 1
let s = (n *( n +1))/2;
console.log(sum - s)

//O(n)
//O(1)