let s1 = "naman is good ji";
let s2 = "aannm gdoo si";
if(s1.split("").sort().join("") === s2.split("").sort().join("")){
    console.log(s1.split("").sort(),s2.split("").sort())
    console.log("yes")
}
else{
    console.log("no")
}

//time-complexity : O(nlogn)
//space-complexity : O(1)