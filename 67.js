// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  var bin = BigInt(a,2)  + BigInt(b,2)
  var dec = bin.toString(2)
  console.log(dec);
  
};

addBinary('11','1')