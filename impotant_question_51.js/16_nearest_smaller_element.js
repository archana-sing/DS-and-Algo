// Smaller neighbour element

// Given an array A having N positive integers. 
// Find the nearest smaller number for every element such that the 
// smaller element is on left side.

// Note - If any element doesn't have any smaller element that it to it's left, 
// print -1 for it.

// for( i from 0 to N-1 ){
  
//     while( S is not empty && S[TOP] > A[i] ){
    
//      pop the top element;
//          TOP--;
//    }
   
//     if( S is not empty )
    
//          NearestSmallerNeighbour[i] = S[TOP];
         
//     else
    
//          NearestSmallerNeighbour[i] = -1;
  
//     TOP++;
 
//     S[TOP] = A[i];

let a = [ 1, 4, 3, 5, 2 ] , stack =[] , b = [];

for(let i = 0 ; i < a.length ; i++){
    if(stack.length === 0){
        b.push(-1)
    }
    else if(stack.length >0 && stack[stack.length -1] <= a[i]){
        b.push(stack[stack.length -1])
    }
    else if(stack.length >0 && stack[stack.length -1] > a[i]){
        while(stack.length >0 && stack[stack.length -1] > a[i]){
            stack.pop()
        }
        if(stack.length === 0){
            b.push(-1)
        }
        else{
            b.push(stack[stack.length -1])
        }
    }
    stack.push(a[i])
}
console.log(b)

// Time Complexity:

// O(N).

// Each element of array A gets pushed and popped from the stack at most once.
// Space Complexity:

// O(N), At most N elements can be there inside the stack.