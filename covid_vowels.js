function runProgram(input) {
  input = input.trim();
  let count_str = 0;
  let obj = {};
  for (let i in input) {
    if (
      input[i] === "a" ||
      input[i] === "e" ||
      input[i] === "i" ||
      input[i] === "o" ||
      input[i] === "u"
    ) {
      if (obj[input[i]]) {
        obj[input[i]]++;
      } else {
        obj[input[i]] = 1;
      }
    }
  }
  let count = 0;
  for (let key in obj) {
    count++;
  }
  console.log(obj);
  for (let i = 0; i < input.length; i++) {
    for (j = 0; j < input.length; j++) {
      let str = "";
      for (let k = i; k <= j; k++) {
        str += input[k];
      }
      let obj1 = {};
      for (let k = 0; k < str.length; k++) {
        if (
          str[k] === "a" ||
          str[k] === "e" ||
          str[k] === "i" ||
          str[k] === "o" ||
          str[k] === "u"
        ) {
          if (obj1[str[k]]) {
            obj1[str[k]]++;
          } else {
            obj1[str[k]] = 1;
          }
        }
      }
      //console.log(obj1)
      let count1 = 0;
      for (let key in obj1) {
        count1++;
      }
      if (count === count1) {
        console.log(str,obj1);
        count_str++;
      }
    }
  }
  console.log(count_str);
}
if (process.env.USERNAME === "Archana") {
  runProgram(`huaoiehlouulkgj`);
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
