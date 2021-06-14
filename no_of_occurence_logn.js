function lower_bound(arr , l , h , k){
    let answer = -1;
    while(l <= h){
        let mid = l + Math.floor((h-l)/2)
        if(arr[mid] >= k){
            answer = mid
            h = mid - 1
            
        }else {
            l = mid + 1
        }
    }
    return answer
}
function upper_bound(arr , l , h , k){
    let answer = -1;
    while(l <= h){
        let mid = l + Math.floor((h-l)/2)
        if(arr[mid] <= k){
            answer = mid
           l = mid + 1
            
        }else {
            h = mid - 1
        }
    }
    return answer
}
function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let l = lower_bound(arr, 0, arr.length - 1, k);
  let u = upper_bound(arr, 0, arr.length - 1, k);
  console.log(u - l + 1);
}
if (process.env.USERNAME === "Archana") {
  runProgram(`6 3
    2 3 3 3 6 9`);
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
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
