// remove duplicates from an unsorted linked list


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

// function to print the values in the nodes in LL
function printLinkedList (head) {
    let node = head;
    console.log('start of linked list');
    while (node !== null) {
        console.log('node.value', node.value, node.number);
        node = node.next;
    }
    console.log('end of linked list');
}

// main function to remove duplicates
function removeDups (head) {
    let node = head;
    while (node !== null) {
        // if we are not at the end of the list and 
        if (node.next !== null && checkDups(head, node.next)) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return head;
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