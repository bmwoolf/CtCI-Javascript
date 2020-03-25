// delete a middle node, not the exact middle one-- however, you are only given access to that node, not the head

// * you cannot delete the last node in this implementation if that is what they ask for, can solve with dummy node but means more space

// Time: O(N) || Space: O(1)
const LinkedList = function (value, number) {
    this.value = value;
    this.number = number;
    this.next = null;
};

function deleteNode(node) {
    if (node === null || node.next === null) {
        return false;
    }
    // copy next node data over to the current node, then remove that node
    let next = node.next;
    node.value = next.value;
    node.next = next.next;
    return true; 
}

function printList (head) {
    while (head !== null) {
        console.log('head.value',head.value);
        head = head.next;
    }
    console.log('done printing \n');
}


const a = new LinkedList('a', 1);
const b = new LinkedList('b', 2);
const c = new LinkedList('c', 3);
const d = new LinkedList('d', 4);
const e = new LinkedList('e', 5);
const f = new LinkedList('f', 6);
const g = new LinkedList('g', 7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

printList(a);
deleteNode(d);
printList(a);