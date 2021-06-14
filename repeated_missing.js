function runProgram(input) {
    input = input.split("\n");
    for (let i = 2; i < input.length; i += 2) {
      let arr = input[i].trim().split(" ").map(Number);
      arr.sort((a, b) => a - b);
      let prev = arr[0];
      let repeatedNum;
      for (let j = 1; j < length; j++) {
        if (arr[j] === prev) repeatedNum = arr[j];
        prev = arr[j];
      }
      let givenSum = arr.reduce((a, b) => a + b);
      //console.log(givenSum)
      let actualSum = (length * (length + 1)) / 2;
      //console.log(actualSum)
      let missingNum = actualSum - givenSum;
      console.log(missingNum + repeatedNum, repeatedNum);
    }
  }
if (process.env.USERNAME === "Archana") {
  runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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
