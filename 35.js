// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var first = 1
    var last = 1

    for( let i = 0 ; i <= nums.length; i++){
        if(nums[i] === target)
            return i
    }

};

var ans  = searchInsert([1,12,3,5,8],5)
console.log(ans);

var searchInsert = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        }else if(target > nums[i] && target < nums[i+1]){
            return i+1;
        }else if(target > nums[nums.length-1]){
           return nums.length;
        }else if(target < nums[0]){
            return 0;
        }
    }
};