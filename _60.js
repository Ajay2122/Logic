// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {string}
//  */
// var getPermutation = function(n, k) {
//     let nums = [];
//     let result = "";

//     let fact = [1];
//     for (let i = 1; i <= n; i++) {
//         nums.push(i)
//         fact.push(fact[i - 1] * i);
//     }

//     k--; // Convert to 0-based index

//     for (let i = n - 1; i >= 0; i--) {
//         let index = Math.floor(k / fact[i]);
//         result += nums.splice(index, 1);
//         k %= fact[i];
//     }

//     return result;
// };