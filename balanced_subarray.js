function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 2; i < input.length; i += 2) {
    let arr = input[i].trim().split(" ").map(Number);
    let count = 0, max_lngth = 0;
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        let sub_arr = [];
        for (let m = j; m <= k; m++) {
          sub_arr.push(arr[m]);
        }
        let obj = {};
        for (let m = 0; m < sub_arr.length; m++) {
          if (obj[sub_arr[m]]) {
            obj[sub_arr[m]]++;
          } else {
            obj[sub_arr[m]] = 1;
          }
        }
        //console.log(sub_arr , j , k)
        if (obj["1"] === obj["0"] && max_lngth < sub_arr.length) {
         max_lngth = sub_arr.length
        }
      }
    }
    console.log(max_lngth);
  }
}
if (process.env.USERNAME === "Archana") {
  runProgram(`1
    5
    1 0 0 1 0`);
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
