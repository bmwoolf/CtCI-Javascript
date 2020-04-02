// determine if a bst is actually a bst (left < parent < right)

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const isValidBST = function(root) {
    if (!root) {
        return true;
    }

    function traverse (root, min, max) {
        if (!root) {
            return true;
        }
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false;
        }
        return traverse(root.left, min, root.val) && traverse(root.right, root.val, max);
    }

    return traverse(root, null, null);
}

