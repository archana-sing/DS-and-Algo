function reverse_linked_list(head){
    let current = head;
    let after = null;
    let prev = null;
    while(current){
        after = current.next;
        current.next = prev;
        prev = current;
        current = after
    }
    return before
}