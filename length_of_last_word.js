var lengthOfLastWord = function(s) {
    if(s === ""){
        return 0
    }
    let str = s.trim().split(" ")
    if(str.length === 1){
        return str[0].length
    }
   // console.log(str)
    let word = str[str.length -1]
    return word.length
};
console.log(lengthOfLastWord("Hello World"))