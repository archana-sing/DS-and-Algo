let board = new Array(4);
for(let i = 0 ; i < 4 ; i++){
    board[i] = new Array(4).fill(0);
}
//console.log(board)
let n = board.length
let r = 0
 function is_safe(board , r ,col){
     for(let i = 0 ; i < r ; i++){
         if(board[i][col] === "Q"){
            return false
         }
     }
     for(let i = r , j = col ; i >= 0 && j >= 0 ; i-- , j--){
         if(board[i][j] === "Q"){
             return false
         }
     }
     for(let i = r , j = 0 ; i >= 0 && j < col ; i-- , j++){
         if(board[i][j] == "Q"){
             return false
         }
     }
     return true
 }
function n_queens(board , n , r){
    if(r == n){
        return board
    }
    for(let col = 0 ; col < n ; col++){
       if( is_safe(board , r , col)){
           board[r][col] = "Q"
           if(n_queens(board , n , r+1)){
               return true
           }
           board[r][col] = 0
       }
    }
    return false
}
console.log(n_queens(board , n , r))
