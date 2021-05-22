function palindrome_linked_list(head){
    let stack = [];
    let current = head;
    while(current){
        stack.push(current.val)
        current = current.next;
    }
    current = head;
    while(current){
        if(stack[stack.length -1] != current.val){
            return false
        }
        stack.pop();
        current = current.next;
    }
    return true
}