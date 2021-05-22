function detect_loop(head){
    let slow= head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
}

// Time Complexity:

// O(n) for each operation, where n is the length of the linked list.
// Space Complexity:

// O(1), no extra space is required.

function remove_cycle(head){
    let slow = head;
    let fast = head;
    do{
        slow = slow.next;
        fast = fast.next.next;
    }while(slow !== fast)
    fast = head
    while(slow.next != fast.next){
        slow = slow.next;
        fast = fats.next
    }
    slow.next = null;
}