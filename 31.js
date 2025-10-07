// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]

function nextPermutation(nums) {
  let i = nums.length - 2;
  // step 1: find pivot
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;

  if (i >= 0) {
    // step 2: find next greater element
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // step 3: reverse suffix
  let l = i + 1, r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++; r--;
  }
}