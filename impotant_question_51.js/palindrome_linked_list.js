const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let stack = [];
    let current = head;
    while(current){
        stack.push(current.data)
        current = current.next
    }
    current = head;
    while(current){
        if(current.data !== stack[stack.length - 1]){
            return false
        }
        current = current.next
        stack.pop()
    }
    return true
};