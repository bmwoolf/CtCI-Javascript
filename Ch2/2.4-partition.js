// divide linked list into two lists that are either less than the node or greater than/equal to the node- node will be on the right side

// stable method- meaning we keep the order of the nodes intact

// Time: O(N) || Space: O(N)
const LinkedList = function (value) {
    this.value = value;
    this.next = null;
};

function partitionStable (node, x) {
    let beforeStart = null;
    let beforeEnd = null;
    let afterStart = null;
    let afterEnd = null;

    while (node !== null) {
        let next = node.next;
        node.next = null;
        // insert into before list
        if (node.value < x) {
            if (beforeStart === null) {
                beforeStart = node;
                beforeEnd = beforeStart;
            } else {
                beforeEnd.next = node;
                beforeEnd = node;
            }
        } 
        // insert into afterlist
        else {
            if (afterStart === null) {
                afterStart = node;
                afterEnd = afterStart;
            } else {
                afterEnd.next = node;
                afterEnd = node;
            }
        }
        node = next; // next = node.next
    }

    if (beforeStart === null) {
        return afterStart;
    }

    beforeEnd.next = afterStart;
    return beforeStart;
}

function printList (node) {
    while (node !== null) {
        console.log('node.value', node.value);
        node = node.next;
    }
}

const a = new LinkedList(1);
const b = new LinkedList(6);
const c = new LinkedList(19);
const d = new LinkedList(3);
const e = new LinkedList(5);
const f = new LinkedList(8);
const g = new LinkedList(10);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

printList(a); 
console.log('-----------');
partitionStable(a, 6);
console.log('-----------');
printList(a); // 1 3 6 19 5 8 10