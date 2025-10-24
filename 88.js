// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

var q1 = (nums1.slice(0,m));
var q2 = (nums2.slice(0,n)); 

  const q3 = [...q1, ...q2];

return q3.sort((a,b) => a -b)

};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m-1; // last element of nums1 which is now 3
  let j = n-1; // last element of nums2 which is now 6
  let k = m+n-1 // last element of nums1 which is now 0
  
   while(j >= 0){
    if(i >= 0 && nums1[i] > nums2[j]){
      nums1[k--] = nums1[i--]
    }else {
      nums1[k--] = nums2[j--]
    }
  }
};