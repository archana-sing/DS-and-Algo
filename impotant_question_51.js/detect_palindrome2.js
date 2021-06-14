//Enter code here
//time - complexity : O(n)
//space -complexity : O(1)
function runProgram(input){
    // write code here
    input = input.trim().split("\n")
    for(let k = 2 ; k < input.length ; k += 2){
        let str = input[k].trim().split("").sort()
        //console.log(str.join(""))
        let new_str = "";
        for(let i = 0 ; i < str.length ; i++){
            if(str[i] === str[i+1]){
                i++;
                continue;
            }
            else{
                new_str += str[i]
            }
        }
        //console.log(new_str)
        if(str.length % 2 === 0 && new_str.length === 0){
            console.log("Possible!")
        }
        else if(str.length % 2 === 1 && new_str.length === 1){
            console.log("Possible!")
        }
        else{
            console.log("Not Possible!")
        }
    }
   }
  if(process.env.USERNAME === "Archana"){
      runProgram(`9
      4
      xcua
      91
      ytgiqplkyeyoldtusknlyimjhqsqtvmycgspbinexducwsuibkmllcfyuisqxdqqwllkwevygvhhivqebmhnjixypst
      34
      aqcfbubrbkoayidfstggxorggqmafuindi
      61
      lgmcgdknnhftkfdrffwxhnfaexptdrhpsxnsfjwldmjrvnbfohbminvmegmms
      24
      pyxhqjomgphbgsndtfucudpu
      99
      yxhtfboynmkokuitomvnyboqeeuugvwsnromgeruecxlkwkjdfdgknmkocttlkfvyvvawulldiapatqlktuwuicbpsrjybldwaq
      45
      lsekixfvobyfhanyiprtesyrtatqcgtdqhrfkldqjyqiy
      75
      ffvukrdbykljegdvaueqjhqhwtiwuxotnuhuodusrbpdvnlismvcopvbkcpuuqdkrntgxdkohlg
      7
      hibgteg`);
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
 
 