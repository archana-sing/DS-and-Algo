// Time Complexity:

// O(2^n), where N is the size of string
// Space Complexity:

// O(N), Extra space required for call stack.

let input = "abc";
input = input.split("")
let output = []
function generate_subsequence(s , sub , index){
    
        console.log(sub.join(""))
      
        
        for(let i = index ; i < s.length ; i++){
            sub.push(s[i]);
            generate_subsequence(s , sub , i + 1)
            sub.pop()
        }
}
generate_subsequence(input ,output , i =0)