// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {

    if(k >= head.length){
       var k = k - 3
    }
    
    head.forEach(e => {
        console.log(e);
        
    });
    var q1 = head.slice(-k)
    console.log(q1);
    var q2 = head.slice(0,-k)
    console.log(q2);
    const q3 =  [...q1,...q2]
    return q3

};

const ans = rotateRight([1,2,3,4,5],2)
console.log(ans);

var rotateRight = function(head, k) {
    if (!head || !head.next) {
        return head;
    }
    
    // Step 1: Find the length and make it circular
    let size = 1;
    let curr = head;
    while (curr.next) {
        size++;
        curr = curr.next;
    }
    
    // Make it circular
    curr.next = head;
    
    // Step 2: Optimize k and find the new tail
    k = k % size;
    
    // Move (size - k) steps to find new tail
    for (let i = 0; i < size - k; i++) {
        head = head.next;
        curr = curr.next;
    }
    
    // Step 3: Break the circle
    curr.next = null;
    return head;
};