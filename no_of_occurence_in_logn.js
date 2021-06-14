function lowerBound(arr , l ,h , k){
    let a = -1
    while(l <= h){
        let mid = l + Math.floor((h -l) /2);
        if(arr[mid] >= k){
            a = mid
            h = mid - 1
        }
        else{
            l = mid + 1
        }
    }
    return a
}
function upperBound(arr , l ,h , k){
    let a = -1
    while(l <= h){
        let mid = l + Math.floor((h -l) /2);
        if(arr[mid] <= k){
            a = mid
            l = mid + 1
        }
        else{
            h = mid - 1
        }
    }
    return a
}

function runProgram(input) {
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number);
    let a = lowerBound(arr , 0 , arr.length-1 , k)
    let b = upperBound(arr , 0 , arr.length-1 , k)
    //console.log(a,b)
    console.log(b - a +1)
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
    });    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }