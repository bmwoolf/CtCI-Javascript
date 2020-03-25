// sum up two linked lists made up of nodes of the digits in 1's, 10's, 100's in reverse order


const LinkedList = function (value) {
    this.value = value;
    this.next = null;
};

function sumList (head1, head2) {
    let node1 = head1;
    let node2 = head2;
    let node3 = null;
    let head3 = null;

    let ones;
    let tens = 0;
    let sum;

    // i think we'll be decrementing
    while (node1 !== null && node2 !== null) {
        // do the first LL
        if (node1 === null) {
            if (node1 === null) {
                sum = node2.value;
            } else if (node2 === null) {
                sum = node1.value;
            } else {
                sum = node1.value + node2.value;
            }
        }

        sum += tens;
        ones = sum % 10;
        
        // do the second LL
        if (node3 === null) {
            head3 = new LinkedList(ones);
            node3 = head3;
        } else {
            node3 = node3.next;
        }

        tens = Math.floor(sum / 10);

        if (node1 !== null) {
            node1 = node1.next;
        }

        if (node2 !== null) {
            node2 = node2.next;
        }
    }

    if (tens > 0) {
        node3.next = new LinkedList(tens);
        node3 = node3.next;
    }

    return head3;
}

function printList (node) {
    while (node !== null) {
        console.log('node.value', node.value);
        node = node.next;
    }
}

// first list
const a = new LinkedList(7);
const b = new LinkedList(1);
const c = new LinkedList(6);

a.next = b;
b.next = c;

// second list
const d = new LinkedList(5);
const e = new LinkedList(9);
const f = new LinkedList(2);

d.next = e;
e.next = f;

// invoke with the two different heads
const newHead = sumList(a, d);
printList(newHead)