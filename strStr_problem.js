var strStr = function(haystack, needle) {
    if(needle === ""){
        return 0
    }
    let index = -1
    for(let i = 0 ; i < haystack.length ; i++){
        if(haystack[i] === needle[0]){
            let j , k ;
            for(j = i+1 , k = 1 ; j < haystack.length && k < needle.length ; j++ , k++){
                if(haystack[j] == needle[k]){
                    continue;
                }
                else{
                    break;
                }
            }
            if(k == needle.length){
                
                index = i
                break;
            }
        }
    }
    return index
};
console.log(strStr("hello" , "ll"))