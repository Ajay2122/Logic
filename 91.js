// Example 1:

// Input: s = "12"

// Output: 2

// Explanation:

// "12" could be decoded as "AB" (1 2) or "L" (12).

// Example 2:

// Input: s = "226"

// Output: 3

// Explanation:

// "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

// Example 3:

// Input: s = "06"

// Output: 0

// Explanation:


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    
};

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] === '0') {
        return 0;
    }

    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        const one = parseInt(s[i - 1]);
        const two = parseInt(s.substring(i - 2, i));

        if (1 <= one && one <= 9) {
            dp[i] += dp[i - 1];
        }
        if (10 <= two && two <= 26) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];    
};