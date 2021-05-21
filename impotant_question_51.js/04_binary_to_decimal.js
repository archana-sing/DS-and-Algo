let str = "000000000000000000000000001110010"
str = str.split("").reverse().join("")
let n = 0 ;
for(let i = 0 ; i < 32 ; i++){
    if(str[i] === "0"){
        //console.log(i)
        continue
    }
    else{
        n += 1 * (2 ** i)
    }
}
console.log(n)
