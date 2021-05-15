function kadane(arr){
    let max_so_far = 0;
    let max_end_here = 0;
    let start = 0 , end = 0;
    let beg = 0;
    for(let i = 0 ; i < arr.length ; i++){
        max_end_here += arr[i];
        if(max_end_here < 0){
            max_end_here = 0;
            beg = i + 1;
        }
        if(max_so_far < max_end_here){
            max_so_far = max_end_here;
            start = beg;
            end = i
        }
    }
    console.log(max_so_far)
    for(let i = start ; i <= end ; i++){
        console.log(arr[i])
    }
}
let nums = [-2,1,-3,4,-1,2,1,-5,4];

 kadane(nums)