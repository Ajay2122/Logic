// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//     if(strs.length == 1){
//         return [strs]
//     }

// };

// const ans = groupAnagrams([""])
// console.log(ans);

var groupAnagrams = function(strs) {
    let map = new Map();
    
    for (let str of strs) {
        let key = str.split('').sort().join('');
        console.log(key);
        
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
        
    }
    
    return Array.from(map.values());
};

const ans = groupAnagrams(["ate","vat","eat","tea","vta","cat"])
console.log(ans);