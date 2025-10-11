// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


var maxSubArray = function(nums) {
  if(nums.length == 1) {
    return nums
  }
  const max = nums.reduce((a,b) => a + b)
  console.log(max);

  const sort = nums.sort((a,b) => a - b)
  
};




var maxSubArray = function(nums) {
    let res = nums[0];
    let total = 0;

    for (let n of nums) {
        if (total < 0) {
            total = 0;
        }

        total += n;
        console.log(total);
        
        res = Math.max(res, total);
    }
    
    return res;    
};

const ans  = maxSubArray([5,4,-1,7,8])
console.log(ans);