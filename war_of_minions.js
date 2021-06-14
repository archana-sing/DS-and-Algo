function runProgram(input) {
  input = input.trim().split("\n");
  let str = input[1].trim().split("");
  let stack = [];
  for (let i = 0; i < str.length - 1; i++) {
    if (stack.length === 0) {
      stack.push(str[i]);
   
      continue
    } else {
      if (stack[stack.length - 1] === str[i]) {
        console.log(stack ,"%%%%%%%%%%%%%")
        stack.pop()
        str.splice(i-1, 2);
      }
      else{
          stack.push(str[i])
      }
    }
    
    console.log(stack)
  }
  if (str.length > 0) {
    console.log(str.join(""));
  } else {
    console.log(-1);
  }
}
if (process.env.USERNAME === "Archana") {
  runProgram(`12
  abbabaadcbbc`);
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
