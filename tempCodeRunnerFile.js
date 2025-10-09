var permute = function(nums) {
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