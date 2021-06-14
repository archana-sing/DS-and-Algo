function runProgram(input) {
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let max_length = 0, required_sum = 0
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length ; j++){
            let subarray = [];
            for(let k = i ; k <=j ; k++){
                subarray.push(arr[k])
            }
            let sum = 0
            if(subarray.length > 0){
                sum = subarray.reduce((a,e)=> a+e)
            }
            
            if(subarray.length > max_length && sum % k !== 0){
                max_length = subarray.length
                required_sum++
            }
        }
    }
    console.log(required_sum)
}  
if (process.env.USERNAME === "Archana") {
    runProgram(`4 3
    2 3 4 6`);
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