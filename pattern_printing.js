function runProgram(input) {
    input = +input;
    let star = input-1 , space = 0
    for(let i = 0 ; i < input ; i++){
        let str = "*";
        for(let j = 1 ; j <= star ; j++){
            str += "_*"
        }
        for(let j = 1 ; j <= space ; j++){
            str += "__"
        }
        console.log(str.trim())
        space++ ; star-- ;
    }  
   

}  
if (process.env.USERNAME === "Archana") {
    runProgram(`5`);
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
    });    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }