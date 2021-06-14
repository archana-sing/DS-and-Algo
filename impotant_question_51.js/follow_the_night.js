let count = 0;
function find_moves(board, r, c, k) {
  if (r > 9 || r < 0 || c < 0 || c > 9) {
    return;
  }
  if (k === 0 && board[r][c] === 1) {
    return;
  }
  if (k === 0) {
    board[r][c] = 1;
    count++;
    return;
  } else {
    find_moves(board, r + 2, c - 1, k - 1);
    find_moves(board, r + 2, c + 1, k - 1);
    find_moves(board, r - 2, c - 1, k - 1);
    find_moves(board, r - 2, c + 1, k - 1);
    find_moves(board, r + 1, c + 2, k - 1);
    find_moves(board, r - 1, c + 2, k - 1);
    find_moves(board, r + 1, c - 2, k - 1);
    find_moves(board, r - 1, c - 2, k - 1);
  }
}

function runProgram(input) {
  let [r, c, k] = input.trim().split(" ").map(Number);
  let chessboard = new Array(10);
  for (let i = 0; i < 10; i++) {
    chessboard[i] = new Array(10).fill(0);
  }
  find_moves(chessboard, r - 1, c - 1, k);
  console.log(count);
}
if (process.env.USERNAME === "Archana") {
  runProgram(`4 7 6`);
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
