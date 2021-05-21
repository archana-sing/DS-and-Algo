let arr = [2,5,7,7,8,5,4,4,3,9];
for(let i = 0 ; i < arr.length-1 ; i++){//8
    for(let j = 0  ; j < arr.length - i - 1 ; j++){
        if(arr[j] > arr[j+1]){
            [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
        }
    }
}
console.log(arr)
// The time complexity will be O(N^2) as there are two nested loops.