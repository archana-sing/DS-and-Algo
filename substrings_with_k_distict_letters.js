function runProgram(input) {
    input = input.trim().split("\n")
    let [n ,K] = input[0].trim().split(" ").map(Number);
    let s = input[1].trim()
    let final_count = 0
    for(let i = 0 ; i < s.length ; i++){
        for(let j = 0 ; j < s.length ; j++){
            let str = ""
            for(let k = i ; k <= j ; k++){
                str += s[k]
            }
            let obj = {} , count = 0
            if(str.length === K){
                for(let k = 0 ; k < str.length ; k++){
                    if(obj[str[k]]){
                        obj[str[k]]++
                    }
                    else{
                        obj[str[k]] = 1
                    }
                }
            }
            for(key in obj){
                count++
            }
            if(str.length === K && count === K){
                final_count++
            }
        }
    }
    console.log(final_count)
}  
if (process.env.USERNAME === "Archana") {
    runProgram(`4 2
    abcc`);
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