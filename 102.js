// // Input: root = [3,9,20,null,null,15,7]
// // Output: [[3],[9,20],[15,7]]
// // Example 2:

// // Input: root = [1]
// // Output: [[1]]
// // Example 3:

// // Input: root = []
// // Output: []
 

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var levelOrder = function(root) {
//     if (!root) return []
//     if (root.length == 1) return [root]
// };

// var levelOrder = function(root) {
//     if (!root) return [];

//     const result = [];
//     const queue = [root, null];  // 🌐 Level separator
//     let level = [];

//     while (queue.length > 0) {
//         const node = queue.shift();

//         if (node === null) {
//             result.push([...level]);  // ✅ Save level
//             level = [];
//             if (queue.length > 0) queue.push(null);  // ➕ Add next level marker
//         } else {
//             level.push(node.val);  // 📥 Add node value
//             if (node.left) queue.push(node.left);   // ⬅️ Left
//             if (node.right) queue.push(node.right); // ➡️ Right
//         }
//     }

//     return result;
// };