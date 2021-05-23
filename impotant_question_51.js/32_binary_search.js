let arr = [1, 3, 4, 7] , k = 2;
let low = 0 ;
let high = arr.length -1;
let flag = false
while(low <= high){
    let mid = low + Math.floor((high - low)/2);
    if(arr[mid] === k){
        console.log(mid)
        flag = true
        break
    }
    else if(arr[mid] > k){
        high = mid -1
    }
    else{
        low = mid + 1
    }
}
if(flag === false){
    console.log(-1)
}

// Expected Time Complexity

// O(logN), where N is the length of the array
// Expected Space Complexity

// O(1), constant space solution