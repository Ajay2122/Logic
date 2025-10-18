// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    const q1 = Math.sqrt(x)
    const q2 = Math.floor(q1)
    return q2
    console.log(q2);
    
};

mySqrt(6)