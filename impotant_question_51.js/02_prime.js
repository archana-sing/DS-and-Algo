let n = 1
if(n <= 1){
    console.log(false);
}
else{
    let flag = true
    for(let i = 2 ; i * i <= n ; i++){
        if( n % i === 0){
            flag = false
            break;
        }
    }
    console.log(flag)
}


//time-complexity : O(sqrt(n))