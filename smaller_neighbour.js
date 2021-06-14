function runProgram(input) {
    input = input.trim().split("\n")
    let arr = input[1].trim().split(" ").map(Number);
    let stack = [], answer_arr = []
    for(let i = 0 ; i < arr.length ; i++){
        if(stack.length === 0){
            answer_arr.push(-1)
        }
        else if(stack.length > 0 && arr[i] > stack[stack.length -1]){
            //console.log(stack[stack.length -1])
            answer_arr.push(stack[stack.length -1])
        }
        else if(stack.length > 0 && arr[i] <= stack[stack.length -1]){
            while(stack.length > 0 && arr[i] <= stack[stack.length -1]){
                stack.pop()
            }
            //console.log(stack)
            if(stack.length === 0){
                answer_arr.push(-1)
            }
            else{
                answer_arr.push(stack[stack.length-1])
            }
        }
        stack.push(arr[i])
    }
    console.log(answer_arr.join(" "))
   // -1 -1 -1 -1 4 24 24 -1
}  
if (process.env.USERNAME === "Archana") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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