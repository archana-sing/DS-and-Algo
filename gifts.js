function runProgram(input) {
    input = input.trim().split("\n")
    for(let i = 2 ; i < input.length ; i += 2){
        let arr = input[i].trim().split(" ").map(Number);
       
        let obj = {}
       for(let j = 0 ; j < arr.length ; j++){
           if(obj[arr[j]]){
            obj[arr[j]]++
           }
           else{
            obj[arr[j]] = 1
           }
       }

       for(let key in obj){
        max++
       }
console.log(max)
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
    });    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }