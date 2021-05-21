let n = 5;
// Let us take number 'NUM' and we want to check whether it's 0th bit is ON or OFF    
//     bit = 2 ^ 0 (0th bit)
//     if  NUM & bit == 1 means 0th bit is ON else 0th bit is OFF

let str = ""
for(let i = 31 ; i >= 0 ; i--){
    if(n & (1 << i)){
        str += "1"
    }
    else{
        str += "0"
    }
}
console.log(str)
// let str = ""
// while(n >= 1){
    
//     str += n % 2;
//     n = Math.floor(n/2);
//     // console.log(n)

// }
// console.log(str)