function runProgram(input) {
    input = input.trim().split("\n")
    for(let i = 2 ; i < input.length ; i+= 2){
        let arr = input[i].trim().split(" ").map(Number).sort((a,b)=> a-b);
        //console.log(arr)
        let min_even = 100 , max_odd = 0
       for(let j = 0 ; j < arr.length ; j++){
           if(arr[j] < min_even && arr[j] % 2 == 0){
               min_even = arr[j]
           }
           if(arr[j] > max_odd && arr[j] % 2 == 1){
            max_odd = arr[j]
        }
       }
       //console.log(max_odd , min_even)
        console.log(max_odd - min_even)
    }
 
}  

// 7
// 7
// 9
// 9
// 9
// 9
// 9
// 9
// 7
// 7
if (process.env.USERNAME === "Archana") {
    runProgram(`10
    18
    26 21 20 24 28 28 25 24 25 24 24 21 28 26 23 28 27 26
    10
    27 23 22 29 24 22 27 25 23 27
    12
    26 21 28 22 20 25 21 28 23 29 25 23
    19
    21 23 21 24 28 24 27 22 27 24 29 20 26 29 26 23 27 26 28
    17
    22 23 24 28 29 23 22 20 22 22 26 24 20 27 23 25 29
    15
    20 22 25 25 21 21 22 22 26 29 29 23 24 26 20
    11
    29 29 25 21 25 20 29 21 25 20 22
    10
    25 24 24 27 20 27 29 21 21 28
    18
    21 26 28 28 23 20 27 26 24 27 24 23 20 24 26 27 27 25
    19
    26 28 29 28 28 21 24 26 29 22 21 27 28 25 24 27 22 21 27`);
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