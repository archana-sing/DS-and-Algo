

let a = [10, 10, 10, 10] ,painters = 2;
let l = Math.max(...a)
let h = a.reduce((a,e) => a+e)
let answer = -1
while(l < h){
    let mid = l + Math.floor((h-l)/2);
    let total = 0 , p = 1;
    for(let i = 0 ; i < a.length ; i++){
        total += a[i];
        if(total > mid){
            total = a[i];
            p++
        }
    }
    if(p <= painters){
        answer = mid
        h = mid;
    }
    else{
        l = mid + 1
    }
}
console.log(answer)