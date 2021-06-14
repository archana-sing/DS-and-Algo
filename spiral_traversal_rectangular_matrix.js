function runProgram(input) {
   input = input.trim().split("\n")
   for(let i = 1 ; i < input.length ; i++){
       let [r,c] = input[i].trim().split(" ").map(Number);
       let mat = []
       for(let j = 0 ; j < r ; j++){
        mat[j] = input[++i].trim().split(" ").map(Number);
       }
       let str = ""
       let start_row = 0 , start_col = 0;
       while(start_col < r && start_row < c){
           for(let i = start_row ; i >= 0 ; i--){
            str +=  mat[i][start_col] + " "
           }
           start_col++
           for(let j = start_col ; j < c ; j++){
               str += mat[start_row][j]
           }
           start_row++
          
       }
   }
}  
if (process.env.USERNAME === "Archana") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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