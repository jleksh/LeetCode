/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
//create sentinel node
    let sentinel = new ListNode();
    sentinel.next = head;
    
//2pointers first&second
    let first = sentinel;
    let second = sentinel;
    //keep the second pointer at n gap
    for (let i=0; i<n; i++){
        second = second.next;
    }
//move pointers till last node
    while(second.next != null){
        first=first.next;
        second=second.next;
    }
        first.next = first.next.next;
    return sentinel.next;
}
