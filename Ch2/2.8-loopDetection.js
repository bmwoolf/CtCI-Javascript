// find out if there is a loop in a linked list and return the start of it

// pattern matching approach with FastRunner (+2) and SlowRunner (+1)

function LinkedList (value) {
    this.value = value;
    this.next = null;
}

// Time: O(N) || Space: O(1)
function findBeginning (head) {
    // create two pointers
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        // move fast +2 and slow +1
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) { // we have the first collision
            break;
        }

        if (fast === null || fast.next === null) {
            return null;
        }
    }
    // when they collide, move slow to head
    slow = head;
    while (slow !== fast) {
        // move both at the rate of one, return new collision spot
        slow = slow.next;
        fast = fast.next;
    }
    // can return either slow or fast
    return fast.value;
}


const a = new LinkedList('a');
const b = new LinkedList('b');
const c = new LinkedList('c');
const d = new LinkedList('d');
const e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

console.log(findBeginning(a));