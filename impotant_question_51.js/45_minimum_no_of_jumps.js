let a = [2,3,1,1,4];
let dp = new Array(a.length);
dp[0] = 0;
for(let i = 1 ; i < dp.length ; i++){
    dp[i] = Infinity
}
for(let i = 0 ; i < a.length ; i++){
    for(let j = i + 1 ; j <= a[i] + i && j < a.length ; j++){
        dp[j] = Math.min(1 + dp[i] , dp[j])
    }
}
console.log(dp)
console.log(dp[dp.length-1])