// let rand = Math.floor(Math.random() * 51) + 1;
// console.log(rand)

let arr = [10,22,9,33,21,50,41,60,80]

let dp = new Array(arr.length).fill(1);

for(let i = 0; i < arr.length ; i++){
    let j = 0;
    while(j < i){
        if(arr[j] < arr[i] && dp[i] < dp[j] + 1){
            dp[i] = dp[j] + 1
        }
        console.log(dp)
        j++
    }
}
console.log(Math.max(...dp))

//time-complexity : O( n** 2)
//space-complexity : O(n)
// dp 
// i = 0 , j = 0
// i = 1 , j = 0

