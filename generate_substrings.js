function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 2; i < input.length; i += 2) {
    let str = input[i].trim();

    for (let m in str) {
      for (let j in str) {
        let s = "";
        for (let k = m; k <= j; k++) {
          s += str[k];
        }
        if (s !== "") {
          console.log(s);
        }
      }
    }
  }
}
if (process.env.USERNAME === "Archana") {
  runProgram(`1
    4 
    aman`);
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
