function findMajorityElement(nums) {
        const v = nums.sort((a,b) => a - b )
        let c = nums[Math.floor(nums.length/2)]
        console.log(c);
        
}
findMajorityElement([2, 2, 1, 1, 1, 2, 2])

// console.log("findMajorityElement", findMajorityElement([2, 2, 1, 1, 1, 2, 2]));


//   nums.sort((a, b) => a - b);
//   console.log(nums)
//   return nums[Math.floor(nums.length / 2)];