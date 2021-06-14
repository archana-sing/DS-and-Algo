//Enter code here
//time- complexity : O(n)
//space-complexity : O(n)
function precedence(a){
    if(a === "+" || a === "-"){
        return 1
    }
    else if(a === "*" || a === "/"){
        return 2
    }
    else if(a === "^"){
        return 3
    }
    else{
        return -1
    }
}

function runProgram(input){
    // write code here
    let res = "" , stack = [];
    for(let i = 0 ; i < input.length ; i++){
        if(input[i] >= "a" && input[i] <= "z"){
            res += input[i]
        }
        else if(input[i] === "("){
            stack.push(input[i])
        }
        else if(input[i] === ")"){
            while(stack.length > 0 && stack[stack.length - 1] !== "("){
                res += stack.pop()
            }
            stack.pop()
        }
        else{
            while(stack.length > 0 && precedence(stack[stack.length - 1]) >= precedence(input[i])){
                res += stack.pop();
            }
            stack.push(input[i])
            //console.log(stack)
        }
    } 
    while(stack.length !== 0){
        res += stack.pop();
    }
    console.log(res)
    // ab+c-def-*g/+hij/*+
   }
  if(process.env.USERNAME === "Archana"){
      runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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
 
 