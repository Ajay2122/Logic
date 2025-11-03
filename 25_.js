var revk = (head, k) => {
  if (k == 0 || head.length == 1) {
    return head;
  }
    const r  = [] 
    for(let i = 0 ; i < head.length;i += k ){
        var c = head.slice(i,i+k)
        r.push(...c.reverse())
    }
    return r
  };

const q = revk([1, 2, 3, 4, 6], 2);
console.log(q);

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
var reverseKGroup = function(head, k) {
    const res = new ListNode()
    let last = res
    let tmp = []

    while (head) {
        // loop k nodes and push to tmp array
        // don't forget to update the `head` variable
        for(let i=0; i<k; i++) {
            if (!head) break
            tmp.push(head)
            head = head.next
        }

        // if array has less than k nodes, leave them as it is and
        // attach only the first node, because they were already
        // in the correct order. Dont forget to store the last node
        // in the `last` variable
        if (tmp.length != k)  {
            last.next = tmp[0]
            last = tmp[tmp.length-1]
            break
        }

        // loop the `tmp` array and attach in reverse order
        // don't forget to update the `last` variable
        for(let i=0; i<k; i++) {
            const node = tmp.pop()
            last.next = node
            last = node
        }

        tmp = []
        
    }
    last.next=null

    return res.next
};

//  console.log([1.2,4,54,7].sort((a,b)=> b-a));
 
// [1.2,4,54,7].forEach((val) => {
//     console.log(val);
// })

