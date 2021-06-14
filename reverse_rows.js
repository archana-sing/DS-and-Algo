function runProgram(input) {
    input = input.trim().split("\n")
    let matrix = []
    for(let i = 1 ; i < input.length ; i++){
        matrix[i-1] = input[i].trim().split(" ").map(Number);
    }

    for(let i = 0 ; i < matrix.length ; i++){
        
        for(let j = matrix[0].length-1 , k = 0 ; j > matrix[0].length / 2 , k <  matrix[0].length / 2; j-- , k++){
            let temp = matrix[i][k]
            matrix[i][k] = matrix[i][j]
            matrix[i][j] = temp
        }
    }
    for(let i = 0 ; i < matrix.length ; i++){
        console.log(matrix[i].join(" "))
    }
 
}  
if (process.env.USERNAME === "Archana") {
    runProgram(`4
    1 2 3 4
    1 2 3 4
    1 2 3 4
    1 2 3 4`);
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