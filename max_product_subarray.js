var maxProduct = function(arr) {
    
    let max_so_far = arr[0] , max_end = arr[0] , min_end = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        let temp = max_end;
        max_end = Math.max(arr[i] , Math.max(arr[i] * max_end , arr[i] * min_end))
        //console.log(max_end)
        min_end = Math.min(arr[i] , Math.min(arr[i] * temp , arr[i] * min_end))
        //console.log(min_end)
        max_so_far = Math.max(max_so_far , max_end);
    }
    return max_so_far
};
let nums = [2,3,-2,4]
console.log(maxProduct(nums))