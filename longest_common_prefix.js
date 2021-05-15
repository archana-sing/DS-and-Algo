var longestCommonPrefix = function(strs) {
    if(strs.length == 1){
        return strs[0]
    }
    else if(strs[0] === ""){
        return ""
    }
    strs.sort();
    //console.log(strs)
    let i = 0 , prefix = "";
    while(strs[0][i] === strs[strs.length -1][i] && i !== strs[0].length){
        prefix += strs[0][i]
        i++
    }
    //console.log(prefix)
    return prefix
};

let strs = ["flower","flow","flight"]
console.log(longestCommonPrefix(strs))