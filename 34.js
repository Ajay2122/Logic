// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// var searchRange = function(nums, target) {
//     var arr = []
//     if(target === 0){
//         return [-1,-1]
//     }
//     var s = nums.sort((a,b) => a - b)
//     console.log(s);
//     s.forEach((val) => {
//         if(val === target){
//             var r = arr.push(nums[4])
//             console.log(r);
//             return arr
//         }
//         console.log(val);
//     })

// };

var searchRange = function(nums, target) {
    let first = -1; // Initialize first occurrence to -1
    let last = -1;  // Initialize last occurrence to -1
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) {
                first = i; // Found the first occurrence
            }
            last = i; // Update last occurrence
        }
    }
    
    // Return the result as an array
    return [first, last];
};

const ans = searchRange([5,7,7,8,8,10],8)
console.log(ans);
