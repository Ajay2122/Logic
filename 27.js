/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;  // Pointer to track valid elements
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[k++] = nums[i];  // Move valid element forward
        }
    }
    return k;  // New length of array
};

const  u = removeElement([1,1,1,2,3,4,1],1)
console.log(u);
