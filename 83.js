// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var q1 = [... new Set(head)]
    return q1;
    
const uniqueArr = arr.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
};

var deleteDuplicates = function(head) {
    let cur=head
    while(cur && cur.next){
        if(cur.val==cur.next.val){
            cur.next=cur.next.next
        }else{
            cur=cur.next
        }
    }
    return head
};

deleteDuplicates([1,1,2,3,3])