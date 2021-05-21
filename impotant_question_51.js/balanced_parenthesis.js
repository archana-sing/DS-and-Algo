// for occurrences of any of the closing brackets ']', '}', '}' the immediate unbalanced opening bracket should be '[','{', or, '(' respectively. 
// Also opening brackets already balanced should not be taken into consideration.




// Stack based approach:

//     If any opening bracket ( '(', '{', '[' ) arrives, push it into the stack.
//     If any closing bracket ( ')', '}', ']' ) arrives, then check whether the closing bracket matches the top of stack or not. If it does, pop out the top of stack and continue analysing the string. If it doesn't then the string is not balanced.

// Note - After processing the entire string the stack becomes empty if the string is balanced.

let s = "[()]{}";
let stack = [];
let flag = true
for(let i = 0 ; i < s.length ; i++){
    if(s[i] === "(" || s[i] === "{" || s[i] === "["){
        stack.push(s[i])
    }
    if(stack.length === 0){
        flag = false;
        break;
    }
    else if(s[i] === ")" && stack.length !== 0){
        if(stack[stack.length -1] == "("){
            //console.log(stack[stack.length -1])
            stack.pop()
        }
        else{
            flag = false;
            break
        }
    }
    else if(s[i] === "}" && stack.length !== 0){
        if(stack[stack.length -1] == "{"){
            //console.log(stack[stack.length -1])
            stack.pop()
        }
        else{
            flag = false;
            break
        }
    }
    else if(s[i] === "]" && stack.length !== 0){
        if(stack[stack.length -1] == "["){
            //console.log(stack[stack.length -1])
            stack.pop()
        }
        else{
            flag = false;
            break
        }
    }
}

if(flag === false || stack.length !== 0){
    console.log("unbalanced")
}
else{
    console.log("balanced")
}
