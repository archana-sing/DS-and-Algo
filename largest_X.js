

function runProgram(input) {
 input = input.trim().split("\n");
 for(let i =2 ; i < input.length ; i += 2){
    let arr = input[i].trim().split(" ").map(Number).sort((a,b)=>a-b);
    //console.log(arr)
    let stack = []
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[j] < 0 ){
            
            let x = arr.shift()
            
            stack.push(x)
            j--
        }
        else{
            break;
        }
    }
    //console.log(arr)
    //console.log(stack)
    let max = 0
    for(let j = 0 ; j < arr.length ; j++){
        //console.log(arr[j] , stack[stack.length -1])
        if(arr[j] === -(stack[stack.length -1])){
            max = arr[j]
            stack.pop()
        }
        else if(arr[j] > -(stack[stack.length -1])){
            j--
            stack.pop()
        }
    }
    if(max === 0){
       console.log(-1)
    }
    else{
       console.log(max)
    }
    //console.log("%%%%%%%%%%%%%%%%%%%%%%%")
 }   
 
}  
if (process.env.USERNAME === "Archana") {
    runProgram(`2
    5
    2 1 -1 -2 3
    5
    -3 2 -4 4 -2`);
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