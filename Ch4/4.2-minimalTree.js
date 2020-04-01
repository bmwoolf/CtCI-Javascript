// given a sorted array with unique values, create a BST with minimal height
// match left with right as much as possible

const TreeNode = function(value) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
}

const Tree = function() {
    this.root = null;
}

Tree.prototype.add = function(value) {
    let node = new TreeNode(value);
    if (!this.root) {
        this.root = node;
    } else {
        let n = this.root;
        let branch;
        while (n) {
            branch = value < n.value ? 'left' : 'right';
            if (!n[branch]) {
                break;
            }
            n = n[branch];
        }
        node.parent = n;
        n[branch] = node;
    }
}

// we find the middle element, make that the parent, then recursively go left and right

function balanceTree(arr) {
    return createNodes(arr, 0, arr.length - 1);
}

function createNodes(arr, start, end) {
    if (end < start) {
        return null;
    }
    let mid = start + Math.floor((end - start) / 2);
    let node = new TreeNode(arr[mid]);
    node.left = createNodes(arr, start, mid - 1); // go left
    node.right = createNodes(arr, start, mid + 1); // go right
    return node;
}


// from careersup
function makeBalancedTree(values) {
    let tree = new Tree();
    if (values && values.length) {
        add(tree, values, 0, values.length - 1);
    }
    return tree;
}

function add(tree, values, start, end) {
    if (start === end) {
        tree.add(values[start]);
    } else if (start < end) {
        let mid = start + Math.floor((end - start) / 2); // industry standard- prevent stack overflow if you use Infinity/-Infinity
        tree.add(values[mid]);
        add(tree, values, start, mid - 1);
        add(tree, values, start, mid + 1);
    }
}

console.log(makeBalancedTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))