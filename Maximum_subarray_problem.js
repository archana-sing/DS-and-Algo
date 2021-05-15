var maxSubArray = function(nums) {
    
    let local_max = 0;
    let global_max = Math.max(...nums);
    for(let i = 0 ; i < nums.length ; i++){
        local_max = Math.max(nums[i] , nums[i] + local_max)
        if(local_max > global_max){
            global_max = local_max
        }
    }
    return global_max
};
let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))