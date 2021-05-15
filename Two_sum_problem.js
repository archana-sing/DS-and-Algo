let arr = [ 3, 5, 9, 2, 8, 10, 11 ];//sorting required
let sum = 17;
let i = 0; 
let j = arr.length -1;
while(i < j){
    if(arr[i] + arr[j] === sum){
        console.log(arr[i] , arr[j]);
        break;
    }
    else if(arr[i] + arr[j] < sum){
        i++
    }
    else{
        j--
    }
}
