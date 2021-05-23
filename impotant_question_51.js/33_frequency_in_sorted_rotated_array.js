let arr = [1,3,3,3,3,3,3,3,3,3,4,5,6,7,7,8,9 ]
let low = 0 
let high = arr.length -1
let k = 3
let ans = -1
while(low <= high){
    let mid = low + Math.floor((high - low)/2);
    if(arr[mid] === k){
        ans = mid
        high = mid - 1
    }
    else if(arr[mid] > k){
        high = mid -1
    }
    else{
        low = mid + 1
    }
}
low = 0 
high = arr.length -1
let ans2 = -1

while(low <= high){
    let mid = low + Math.floor((high - low)/2);
    if(arr[mid] === k){
        ans2 = mid;
        low = mid+1
    }
    else if(arr[mid] < k){
        low = mid + 1
    }
    else{
        high = mid-1
    }
}
console.log(ans2 - ans +1)

// Expected Time Complexity

// O(log(N)) for each Query, N: Size of the input array
// Expected Space Complexity

// O(1), for each Query