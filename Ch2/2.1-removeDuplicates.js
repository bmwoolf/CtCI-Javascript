// remove duplicates from an unsorted linked list

// Time: O(N) || Space: O(1)
const LinkedList = function(value, number) {
    this.value = value;
    this.number = number;
    this.next = null;
}

// helper function for removeDups
function checkDups (head, node) {
    let currentNode = head;
    
    while (currentNode !== node) {
        // we have found a duplicate
        if (currentNode.value === node.value) {
            return true;
        }
        currentNode = currentNode.next; 
    }
    return false;
};

// main function to remove duplicates
function removeDups (head) {
    let node = head;
    while (node !== null) {
        // if we are not at the end of the list and 
        console.log('head', head.value)
        console.log('node.next',node.next.value)
        if (node.next !== null && checkDups(head, node.next)) {
            // skip over next node and reconnect to delete 'y
            node.next = node.next.next;
            // c -> e
        } else {
            // iterate
            node = node.next;
        }
    }
    return head;
}

// function to print the values in the nodes in LL
function printLinkedList (head) {
    let node = head;
    console.log('start of linked list');
    while (node !== null) {
        console.log('node.value', node.value, node.number);
        node = node.next; // increment
    }
    console.log('end of linked list');
}

const a = new LinkedList('y', 1);
const b = new LinkedList('b', 2);
const c = new LinkedList('c', 3);
const d = new LinkedList('y', 4);
const e = new LinkedList('e', 5);
const f = new LinkedList('y', 6);
const g = new LinkedList('g', 7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

// call the function taking in the head- only need this as it points to everything else
removeDups(a);
printLinkedList(a);