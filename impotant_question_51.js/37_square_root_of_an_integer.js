let n = 151
function find_square_root(n){
    if(n === 0 || n === 1){
        return n
    }
    let l = 1 , h = n/2 , ans;
    while(l <= h){
        let mid = l + Math.floor((h - l)/2);
        //console.log(mid)
        if(mid * mid === n){
            return mid
        }
        if(mid * mid  < n){
            l = mid +1
            ans = mid
        }
        else{
            h = mid-1
        }
    }
    return ans
}
console.log(find_square_root(n))