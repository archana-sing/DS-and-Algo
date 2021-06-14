function predicate(arr , mid , tower_count){
    tower_pos = arr[0] + mid;
    tower_count--;
    for(let i = 0 ; i < arr.length ; i++){
        let diff = Math.abs(tower_pos - arr[i])
        if(diff <= mid){
            continue
        }else{
            tower_pos = arr[i] + mid;
            tower_count--
        }
    }
    if(tower_count >= 0){
        return true
    }
    else{
        return false
    }
}
function find_minimum_range(arr , l , h , k){
    let answer = -1;
    while(l <= h){
        let mid = l + Math.floor((h - l) / 2);
        let flag = predicate(arr , mid , k)
        //console.log(mid)
        if(flag){
            answer = mid
            h = mid - 1
        }
        else{
            l = mid + 1
        }

    }
    return answer
}
function runProgram(input) {
    input = input.trim().split("\n")
    let [n , k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number).sort((a,b)=> a-b);
    let a = find_minimum_range(arr , 0 , arr[arr.length - 1] , k)
    console.log(a)
}  
if (process.env.USERNAME === "Archana") {
    runProgram(`2 1
    1 57`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
    });    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }