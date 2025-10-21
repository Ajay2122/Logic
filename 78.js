// xample 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    if(nums == [0]){
        return [[],[0]]
    }
    if(nums == [1]){
        return [[],[1]]
    }
    nums.forEach((val) => {
        
    })
    
};

subsets([1])

var subsets = function(nums) {
    let outer = [[]];
    for (let num of nums) {
        let n = outer.length;
        for (let i = 0; i < n; i++) {
            let internal = outer[i].slice(); // Copy existing subset
            internal.push(num);
            outer.push(internal);
        }
    }
    return outer;
};