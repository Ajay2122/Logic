/**
 * @param {number} n
 * @return {string}
 */

// The problem is about generating the "Count and Say" sequence. Starting from "1", each term is formed by reading the previous term out loud — counting consecutive digits and then saying the digit.
// For example:

// "1" is read as "one 1" → "11"
// "11" is read as "two 1s" → "21"
// "21" is read as "one 2, then one 1" → "1211"
// So the idea is to repeatedly process the previous term to generate the next one 🔁.


var countAndSay = function(n) {
    if(n == 1) {
        return "1"
    }
    
};
var countAndSay = function(n) {
    if (n === 1) return '1';
    
    return countAndSay(n-1)
        .match(/1+|2+|3+/g)
        .reduce((acc, nums) => acc += `${nums.length}${nums[0]}`, '')

};
