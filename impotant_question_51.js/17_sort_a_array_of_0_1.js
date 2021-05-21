// Sort an Array of 0s, 1s, or 2s

// Given an array A[] consisting 0s, 1s and 2s. The task is to write a function 
// that sorts the given array. 
// The functions should put all 0s first, then all 1s and all 2s in last.

let s = [0, 1, 2, 0, 1, 2]
let x = 0, y = 0 ,z = 0;
for(let i = 0 ; i < s.length ; i++){
    if(s[i] === 0){
        x++
    }
    else if(s[i] === 1){
        y++
    }
    else{
        z++
    }
}
console.log(x,y,z)
let i = 0
while(x > 0){
    s[i] = 0
    i++
    x--
}
// for(let j = x ; j > 0 ; j--){
//     s[i++] = 0
// }
for(let j = x ; j > 0 ; j--){
    s[i++] = 1
}
for(let j = x ; j > 0 ; j--){
    s[i++] = 2
}

console.log(s)