let arr = [[1, 50, 50] , [50, 50, 50] , [1, 50, 50]];
let dp = new Array(arr.length);
for(let i = 0 ; i < dp.length ; i++){
    dp[i] = new Array(3).fill(0)
}
console.log(dp)
dp[0][0] = arr[0][0];
dp[0][1] = arr[0][1];
dp[0][2] = arr[0][2];
console.log(dp)
for(let i = 1 ; i < arr.length ; i++){
    console.log(i)
    dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1] , dp[i - 1][2])
    dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}
console.log(Math.min(dp[arr.length-1][0] , Math.min(dp[arr.length-1][1] , dp[arr.length-1][2])))