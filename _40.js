// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]


function combinationSum2(candidates, target) {

    candidates.sort((a, b) => a - b); // 🔢 Sort to group duplicates
    const result = [];

    function backtrack(index, target, current) {
        if (target === 0) {
            result.push([...current]); 
            // ✅ Valid combination
            console.log(result.push([...current]), ".....");
            
            return;
        }
        if (target < 0 || index >= candidates.length) return; // ❌ Prune

        // ✅ Include current
        current.push(candidates[index]);
        backtrack(index + 1, target - candidates[index], current);
        current.pop(); // 🔙 Backtrack

        // ❌ Exclude and skip duplicates
        let next = index + 1;
        while (next < candidates.length && candidates[next] === candidates[index]) next++;
        backtrack(next, target, current);
    }

    backtrack(0, target, []);
    return result;
}

const ans = combinationSum2([10,1,2,7,6,1,5],8)
console.log(ans);


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b); // sort to handle duplicates easily
  const result = [];

  function backtrack(start, current, remain) {
    if (remain === 0) {
      result.push([...current]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // Skip duplicates on the same recursive level
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      const num = candidates[i];
      if (num > remain) break; // prune (no need to continue)

      current.push(num);
      // Move to next index (i + 1) — cannot reuse same element
      backtrack(i + 1, current, remain - num);
      current.pop(); // backtrack
    }
  }

  backtrack(0, [], target);
  return result;
};

// 