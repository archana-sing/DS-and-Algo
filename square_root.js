function find_root(n){
    let l = 1, h = n,ans = -1
    while(l <= h){
        let mid = ((l + h)/2)
        mid =String(mid)
        mid = mid.split(".")
        let m = +mid[0]
        //console.log(m)
        //console.log(mid)
        if( m * m === n){
           
            return m
        }
        else if(m * m < n){
            ans = m
            l = m + 1
        }
        else{
            h = m - 1
        }
    }
    
    return ans
}
function runProgram(input) {
   input = input.trim().split("\n") 
    for(let i =1 ; i < input.length ; i++){
        let num = +input[i];
        let s = find_root(num)
        console.log(s)
    }
}  
if (process.env.USERNAME === "Archana") {
    runProgram(`2
    4
    8`);
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