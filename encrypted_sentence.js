function runProgram(input) {
  input = input.trim().split("\n");
  for (let k = 2; k < input.length; k += 2) {
    let arr = input[k].trim().split(" ").map(Number);
    let a = [];
    let i = 0;
    j = arr.length - 1;
    while (i <= j) {
      if (i !== j) {
        a.push(arr[i], arr[j]);
        i++;
        j--;
      } else {
        a.push(arr[i]);
        i++;
        j--;
      }
    }
    console.log(a.join(" "));
  }
}
if (process.env.USERNAME === "Archana") {
  runProgram(`2
    5
    1 3 5 4 2
    6
    1 3 5 6 4 2`);
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
