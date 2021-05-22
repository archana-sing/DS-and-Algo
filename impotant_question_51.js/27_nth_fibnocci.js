let n = 9
let dp = []
// function fibonacci(n){
  
//    let a = 0, b = 1, c;
//    if( n == 1 )
//    return a;
//    if( n == 2)
//    return b; 
//     for(let i = 3; i <= n; i++){
//       c = a + b;
//       a = b;
//       b = c;
//     }
    

       
//     return c;
// }

//time-complexity : O(2 ^ n)

function memo_f(n){
   if(n == 1){
      return 0
   }
   if(n == 2){
      return 1
   }
   if(dp[n]){
      return dp[n]
   }
   dp[n] = memo_f(n-1) + memo_f(n-2)
   return dp[n]

}
console.log((memo_f(n)))
//0,1,1,2,3,5,8,13,21...........