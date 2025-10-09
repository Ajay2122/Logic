// xample 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function (nums) {
//   var sub = [];

//   if (nums.length == 1) {
//     return [nums];
//   }
//   if (nums.length == 2) {
//     var a = nums;
//     return [[...a].reverse(), nums];
//   }
  
//     for (let i = 0; i < nums.length; i++) {

//         const n = nums.shift()
//         console.log(n,"1");
//         const perms = permute(nums);
//         console.log(perms,"2");
//         for(let parm of perms){
//             parm.push(n)
//             sub.push(parm)
//             console.log(sub.push(parm),"3");
            
//         }
//         nums.push(n)
        
//     }
//   return sub
// };


// var permute = function(nums) {
//     const result = [];
// 	// - Base case
//     if(nums.length === 1) {
// 	    // If there's just 1 element, we simply return a copy
// 		// of that array
//         return [[...nums]];
//     }
// 	// - Recursive case
// 	// We move through each number in `nums`
//     for(let i = 0; i < nums.length; i++) {
// 		// Remove the first element of `nums`
//         const n = nums.shift();
//         console.log(n,"1");
        
// 		// Now we have reduced the `nums` size to 
// 		// `nums.length - 1`, this will get us to the
// 		// base case eventually
//         const perms = permute(nums);
//         console.log(perms,"2");
        
// 		// Traverse through each of the permutations
// 		// returned by a recursive call
//         for(let perm of perms) {
// 		    // We add the number that we shifted earlier
// 			// to reduce the problem size to the back of
// 			// the permutation array
//             perm.push(n);
// 			// We add this permutation to the result array
//             result.push(perm);
//             console.log(result.push(perm),"3");
            
//         }
// 		// Finally, we add the number we shifted back
// 		// to the array
//         nums.push(n);
//     }
// 	// Return the result
//     return result;
// };

var permute = function(nums) {
  const result = [];

  // Base case
  if (nums.length === 1) return [[...nums]];

  // Recursive case
  for (let i = 0; i < nums.length; i++) {
    // Choose one number
    const n = nums[i];
    
    // Remaining numbers (excluding the chosen one)
    const remaining = nums.slice(0, i).concat(nums.slice(i + 1));
    
    // Generate all permutations of the remaining numbers
    const perms = permute(remaining);

    // Add the chosen number back into each permutation
    for (let perm of perms) {
      result.push([n, ...perm]);
    }
  }

  return result;
};

// Test


const ans = permute([1,2,3]);
console.log(ans);