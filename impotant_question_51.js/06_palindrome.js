let s = "madam"
let s2 = s.split("").reverse().join("")
if(s === s2){
    console.log("yes")
}
else{console.log("no")}
//time-complexity : O(nlogn)
//space-complexity : O(n)

let l = 0
let r = s.length -1;
let flag = true
while(l <= r){
    if(s[l] === s[r]){
        l++ , r--
        continue
    }
    else{
        flag = false;
        break
    }
}
console.log(flag)