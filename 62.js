// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var uniquePaths = function(m, n) {
//     var q1 = (m-1)*
// };




var uniquePaths = function (m, n) 
{
    const arr = Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[j] = arr[j - 1] + arr[j];
        };
    };
    return arr.at(-1);
};
const ans  =  uniquePaths(3,7)
console.log(ans);