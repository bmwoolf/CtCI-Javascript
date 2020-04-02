// check if a binary search tree is balanced

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function getHeight(root) {
    if (!root) {
        return -1;
    }
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1; // one of the sides will be lower by 1 node if the tree isnt perfectly level at the bottom
}

function isBalanced(root) {
    if (!root) {
        return true;
    }
    let heightDifference = getHeight(root.left) - getHeight(root.right);
    if (Math.abs(heightDifference) > 1) {
        return false; // meaning it isn't balanced
    } else {
        return isBalanced(root.left) && isBalanced(root.right);
    }
}