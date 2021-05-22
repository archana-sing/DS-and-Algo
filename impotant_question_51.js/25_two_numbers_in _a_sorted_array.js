let arr = [2,7,11,15] , k = 9;
let i = 0;
let j = arr.length - 1;
while(i < j){
    if(arr[i] + arr[j] === k){
        console.log(arr[i] , arr[j])
        break;
    }
    else if(arr[i] + arr[j] < k){
        i++;
    }
    else{
        j--;
    }
}

// Time Complexity:

// The time complexity will be O(N), where N is the size of the array.
// Space Complexity:

// O(1), No extra space is required.