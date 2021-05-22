let a = 56 , b = 98;

function gcd(a, b)
{
    // Everything divides 0
    if (a == 0)
    return b;
    if (b == 0)
    return a;
 
    // base case
    if (a == b)
        return a;
 
    // a is greater
    if (a > b)
        return gcd(a-b, b);
    return gcd(a, b-a);
}
function rec(a , b){
    if(b == 0){
        return a
    }
    else{
        return rec(b , a%b)
    }
}
console.log(rec(a,b))
console.log(gcd(a,b))

// Expected Time Complexity

// O(log(MAX(N,M)))
// Expected Space Complexity

// O(1), i.e., constant space complexity.