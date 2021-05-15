var isPalindrome = function(x) {
    
    let str_1 = String(x)
    let str = String(x).split("").reverse().join("");
    
    if(str === str_1){
         return true
    }
    else{
        return false
    }
};
console.log(isPalindrome(121))
console.log(isPalindrome(124))