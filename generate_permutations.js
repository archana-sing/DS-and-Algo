function generate_permutation(arr, per, visited) {
  if (per.length === arr.length) {
    console.log(per.join(" "));
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i] === true) {
      continue;
    }
    per.push(arr[i]);
    visited[i] = true;
    generate_permutation(arr, per, visited);
    per.pop();
    visited[i] = false;
  }
}
function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  let per = [],
    visited = [];
  generate_permutation(arr, per, visited);
}
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1
if (process.env.USERNAME === "Archana") {
  runProgram(`3
    1 2 3`);
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
