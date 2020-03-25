// find the kth to the lst element in a linked list

const LinkedList = function(value, number) {
    this.value = value;
    this.number = number;
    this.next = null;
}

// iterative
function kthToLastIterate (head, k) {
    if (head === null || k < 1) {
        return false;
    }

    // create two pointers
    let p1 = head;
    let p2 = head;

    for (let i = 0; i < k; i++) {
        if (p1 === null) { //p1.value?
            return null;
        }
        p1 = p1.next;
    }

    while (p1 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }
    
    console.log('p2.value',p2.value, p2.number);
    return p2;
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


kthToLastIterate(a, 3); // e 5