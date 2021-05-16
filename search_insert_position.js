var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length -1;
    let mid = 0
    while(low <= high){
        mid = low + Math.floor((high - low)/2)
        if(nums[mid] == target){
            return mid
        }
        else if(nums[mid] > target){
            high = mid - 1
        }
        else{
           low = mid + 1
        }
    }
    if(nums[mid] > target){
        return mid
    }
    else{
        return mid + 1
    }
};
let nums = [1,3,5,6], target = 5;
console.log(searchInsert(nums,target))