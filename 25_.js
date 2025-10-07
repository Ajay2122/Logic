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

//  console.log([1.2,4,54,7].sort((a,b)=> b-a));
 
// [1.2,4,54,7].forEach((val) => {
//     console.log(val);
// })

