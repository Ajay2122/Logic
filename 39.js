// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target) {
//   if (target == 1 && Array.isArray(candidates) == [1]) {
//     return [1];
//   } else {
//     return [0];
//   }
// };

var combinationSum = function(candidates, target) {
    const res = [];

    function makeCombination(idx, comb, total) {
        if (total === target) {
            res.push([...comb]);
            return;
        }

        if (total > target || idx >= candidates.length) {
            return;
        }

        comb.push(candidates[idx]);
        makeCombination(idx, comb, total + candidates[idx]);
        comb.pop();
        makeCombination(idx + 1, comb, total);
    }

    makeCombination(0, [], 0);
    return res;    
};

const ans = combinationSum([0], 1);
console.log(ans);

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(arr, target) {
    let result = [];
    let backtrack = (sum, path, start) => {
        if(sum === 0) result.push([...path]);
        if(sum <= 0) return;

        for(let i = start; i < arr.length; i++){
            path.push(arr[i]);
            backtrack(sum - arr[i], path, i);
            path.pop();
        }
    }
    backtrack(target, [], 0);  
    return result;
};
