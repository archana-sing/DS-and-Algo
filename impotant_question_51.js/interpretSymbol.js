function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "@") {
      n *= 10;
    } else if (arr[i] === "!") {
      n += 2;
    } else if (arr[i] === "%") {
      n -= 5;
    } else if (arr[i] === "^") {
      n = n ** 2;
    } else {
      n += 37;
    }
  }
  console.log(n);
}
// @ - Multiply by 10

// ! - Add 2 to the value

// % - Subtract 5 from the value

// ^ - square the value (raise the power by two)

// $ - Add 37 to the value
if (process.env.USERNAME === "Archana") {
  runProgram(`2
    ^@!@`);
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
