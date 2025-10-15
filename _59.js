// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]
// Example 2:

// Input: n = 1
// Output: [[1]]

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if (n == 1){
        return [[1]]
    }
};

const ans = generateMatrix(1)
console.log(ans);

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const mat = Array.from({length : n}, () => Array(n).fill(0));

    let t = 0;
    let b = n - 1;
    let l = 0;
    let r = n - 1;

    let a = 1;
    while(t <= b && l <= r) // Step 5
    {
        for(let i = l; i <= r; i++) mat[t][i] = a++; t++;

        for(let i = t; i <= b; i++) mat[i][r] = a++; r--;

        for(let i = r; i >= l; i--) mat[b][i] = a++; b--;

        for(let i = b; i >= t; i--) mat[i][l] = a++; l++;
    } 

    return mat;
};