// Input: s = "barfoothefoobarman", words = ["foo","bar"]

// Output: [0,9]

// The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
// The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

// Example 2:

// Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

// Output: []

// Explanation:

// There is no concatenated substring.

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  for (let i = 0; i < s.length; i += size) {
    parts.push(s.slice(i, i + size));
  }
};

const ans = findSubstring("barfoothefoobarman", ["foo", "bar"]);

// bakiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii


/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const frequency = {};
    const wordsCount = words.length;
    const wordsLength = words[0].length;
    const res = [];

    // Count the occurrence of each word in the words list
    for (const c of words) {
        frequency[c] = (frequency[c] || 0) + 1;
    }

    // Slide a window of size wordsCount * wordsLength over the string s
    for (let i = 0; i <= s.length - (wordsCount * wordsLength); i++) {
        const wordsSeen = {};
        // Check if the current window is a concatenated string
        for (let j = 0; j < wordsCount; j++) {
            const nextWordIndex = i + j * wordsLength;
            const nextWord = s.slice(nextWordIndex, nextWordIndex + wordsLength);
            if (!(nextWord in frequency)) {
                break;
            }
            // Check if the current word has been seen more times than its frequency
            wordsSeen[nextWord] = (wordsSeen[nextWord] || 0) + 1;
            if (wordsSeen[nextWord] > frequency[nextWord]) {
                break;
            }
            // If all the words in the current window are seen the correct number of times,
            // add the starting index to the result list
            if (j + 1 === wordsCount) {
                res.push(i);
            }
        }
    }

    return res;

};