//Enter code here
let count = 0
function is_safe(mat , r , c , n){
    //console.log(mat)
    for (let i = 0; i < r; i++){
        if (mat[i][c] === 'Q') {
                return 0;
        }
    }
    for(let i = r , j  = c ; i >= 0 && j >= 0 ; i-- , j--){
        if(mat[i][j] === "Q"){
            return 0
        }
    }
    for(let i = r , j  = c ; i >= 0 && j < n ; i-- , j++){
        //console.log(j)
        if(mat[i][j] === "Q"){
            return 0
        }
    }
    return 1
}
function n_Queens(matrix , r , n){
    if(r === n){
        //count++
        console.log(matrix)
        return
    }
    for(let i = 0 ; i < n ; i++){
        if(is_safe(matrix , r , i , n)){
            matrix[r][i] = "Q"
            n_Queens(matrix , r+1 , n)
            matrix[r][i] = 0
        }
    }

}
function runProgram(input){
    // write code here
    input = +input
    let chessboard = []
    for(let i = 0 ; i < input ; i++){
        chessboard.push([])
        for(let j = 0 ; j < input ; j++){
            chessboard[i][j] = 0
        }
    } 
    n_Queens(chessboard , row = 0 , input)
    //console.log(chessboard)
   }
  if(process.env.USERNAME === "Archana"){
      runProgram(`4`);
  }
  else{
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
          read += input;
      });
      process.stdin.on("end", function () {
          read = read.replace(/\n$/,"")
      runProgram(read);
      });
      process.on("SIGINT", function () {
          read = read.replace(/\n$/,"")
          runProgram(read);
          process.exit(0);
      }); 
  }   
 
 