function add_two_linked_list(l1 , l2){
    let new_head = new Listnode(0);
    let temp = new_head;
    let carry = 0 , rem = 0;
    while(l1||l2){
        let sum = 0;
        sum += carry
        if(l1){
            sum += l1.val;
            l1 = l1.next
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        carry = sum /10;
        rem = sum % 10;
        let node = new listNode(rem)
        temp.next = node
        temp = temp.next
    }
}

// Time Complexity:

// Time Complexity = O(N + M), where N and M are the lengths of the two linked list
// Space Complexity:

// Space Complexity = O(K), where K is the number of digits in the sum