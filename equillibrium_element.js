function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  let sum = arr.reduce((a, e) => a + e);
  let n = Math.floor(arr.length / 2);
  let left_sum = 0;
  for (let i = 0; i < n; i++) {
    left_sum += arr[i];
  }
  // console.log(left_sum)
  let index = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    sum -= arr[i];
    if (sum === left_sum) {
      //console.log(i)
      index = i + 1;
    }
  }
  if (arr.length % 2 === 0) {
    console.log(-1);
  } else {
    console.log(index);
  }
}
if (process.env.USERNAME === "Archana") {
  runProgram(`5
    3 3 5 5 1`);
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
