// Design a stack that supports push, pop, top, and retrieving the minimum element in constant O(1) time.

// Note : You need to implement these functions on the stack :
//  push(x) — Push element x into the stack. pop() — Removes the element from top of the stack. 
//  top() — Get the top element. 
// getMin() — Retrieve the minimum element in the stack in O(1) time


// push(3)
// push(5)
// push(1)
// getMin()
// pop()
// getMin()

// Expected Time Complexity

// O(1), for each operation
// Expected Space Complexity

// O(1), Constant extra space

// Stack S;
// X; // Element to be pushed

// M; // Minimum of stack.

// TOP; // Top of stack

// PUSH(X):

// if( S is empty ){
  
//   push(X);
//   M = X;
// }

// else{

//    TOP++;

//    if(X >= M ){
//    S[TOP] = X;
//    }

//    else{
//      S[TOP] = 2X - M;
//      M = X;
//    }
     
// }

// POP():

// if( S[TOP] >= M )
//    TOP--;

// else{
//    M = 2M - S[TOP];
//    TOP--;
//  }

let stack = [];
let m , top = 0;
function push(val){
    if(stack.length == 0){
        stack.push(val)
        m = val
    }
    else{
        top++
        if(val >= m){
            stack.push(val)
        }
        else{
            stack.push(2*val - m);
            m = val
        }
    }
}
function getMin(){
   console.log(m)
}
function pop(){
    if(stack[stack.length -1] >= m){
        stack.pop();
        top--
    }
    else{
        m = 2*m - stack[stack.length -1];
        top--
    }
}
push(3)
push(5)
push(1)
getMin()
pop()
getMin()

// push(3), S = { 3 }, M = 3.

// push(5), 5 > 3, hence push 5, S = { 3, 5 }, M = 3.

// push(1), 1 < 5, hence push 2*1 - 3, S = { 3, 5, -1 }, M = 1.

// getMin(), M = 1.

// pop(), top of stack = -1 and M = 1, 1 > -1 => something unusual, hence pop -1, S = { 3, 5 }, M = 2*1 - (-1) => M = 3.

// getMin(), M = 3.