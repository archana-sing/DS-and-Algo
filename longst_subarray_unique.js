function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 2; i < input.length; i += 2) {
    let arr = input[i].trim().split(" ").map(Number);
    //console.log(arr)
    let obj = {};

    let j = 0;
    (k = 1), (max_length = 0);
    obj[arr[j]] = 1;
    while (k < arr.length) {
      //console.log(arr[k])
      if (obj[arr[k]]) {
        max_length = Math.max(max_length, k - j);
        // console.log(max_length , "**************" , j , k)
        j++;
      } else {
        obj[arr[k]] = 1;
      }
      if (k === arr.length - 1) {
        max_length = Math.max(max_length, k - j + 1);
      }
      k++;
    }
    //console.log(obj)
    console.log(max_length);
  }
}
if (process.env.USERNAME === "Archana") {
  runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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
