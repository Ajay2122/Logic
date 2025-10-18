// // Example 1:

// // Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// // Output:
// // [
// //    "This    is    an",
// //    "example  of text",
// //    "justification.  "
// // ]
// // Example 2:

// // Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
// // Output:
// // [
// //   "What   must   be",
// //   "acknowledgment  ",
// //   "shall be        "


// /**
//  * @param {string[]} words
//  * @param {number} maxWidth
//  * @return {string[]}
//  */
// var fullJustify = function(words,maxWidth) {
//     const q1 = words.toString().split(' ').join("").replace(/,/g, " ")
//    const q2 =  (q1).slice(0,16)
//     console.log(q2);
    
// };

// const ans = fullJustify(["What","must","be","acknowledgment","shall","be"],16)

// var fullJustify = function(words, maxWidth) {
//   const res = [];
//   let line = [];
//   let lineLen = 0;

//   for (let word of words) {
//     // Check if adding this word would exceed maxWidth
//     if (lineLen + word.length + line.length > maxWidth) {
//       // distribute spaces
//       let spaces = maxWidth - lineLen;
//       for (let i = 0; i < spaces; i++) {
//         line[i % (line.length - 1 || 1)] += ' ';
//       }
//       res.push(line.join(''));
//       line = [];
//       lineLen = 0;
//     }

//     line.push(word);
//     lineLen += word.length;
//   }

//   // last line (left-justified)
//   res.push(line.join(' ') + ' '.repeat(maxWidth - (lineLen + line.length - 1)));
//   return res;
// };

// // Example
// const ans = fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16);
// console.log(ans);
