// Implement a Queue using 2 stacks s1 and s2 .
//  A Query Q is of 2 Types 
//  (i) 1 x (a query of this type means pushing 'x' into the queue)
// (ii) 2 (a query of this type means to pop element from queue and print the poped element)
// 5
// 1 2 
// 1 3 
// 2 
// 1 4 
// 2
// Expected Time Complexity

// O(1) for push() and O(N) for pop() or O(N) for push() and O(1) for pop()
// Expected Space Complexity

// O(N), auxilliary space required for to store data in stacks.

// Stack S1, S2;
// TOP1, TOP2;

// enqueue( X ){
  
//    TOP1++;
//    S1[TOP1] = X;
// }

// dequeue(){

//   if(S2 is empty ){
//      while( S1 is not empty ){
//       TOP2++;
//       S2[TOP2] = S1[TOP1];
//       TOP1--;
//    }  
// }

// X = S2[TOP2];
// TOP2--;

// }
let top1 = -1 , top2 = -1 , stack1 = [] , stack2 = [];
function enqueue(x){
   stack1.push(x)
}
function dequeue(){
    if(stack2.length === 0){
       while(stack1.length != 0){
           let a = stack1.pop();
           stack2.push(a)
        }
    }
   
       let x = stack2.pop()
        console.log(x)
    
}
enqueue(2) 
enqueue(3)
dequeue()
enqueue(4)
//dequeue()
console.log(stack2,stack1)
