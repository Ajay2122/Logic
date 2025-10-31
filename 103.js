var zigzagLevelOrder = function(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    let leftToRight = true;

    while (queue.length) {
        const levelSize = queue.length;
        const level = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (leftToRight) level.push(node.val);
            else level.unshift(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        res.push(level);
        leftToRight = !leftToRight;
    }

    return res;
};