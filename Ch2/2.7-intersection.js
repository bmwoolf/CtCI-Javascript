// given two singly linked lists, determine if they intersect

const LinkedList = function (value) {
    this.value = value;
    this.next = null;
};

// this is the object we pass to findIntersection()
const Result = function (current, length) {
    this.current = current;
    this.length = length;
};

// Time: O(A + B) || Space: O(1)
function findIntersection (list1, list2) {
    if (list1 === null || list2 === null) {
        return null;
    }

    // we will get back an object with the length and tail location of each list
    let result1 = getTailAndLength(list1);
    let result2 = getTailAndLength(list2);
    console.log('result1', result1);
    console.log('result2', result2);

    // if they don't have the same tail, they don't have an intersection
    if (result1.tail !== result2.tail) {
        return null;
    }

    // set pointers to start of each list for iteration
    let shorter = result1.length < result2.length ? list1 : list2;
    let longer = result1.length > result2.length ? list1 : list2;

    // advance longer starter pointer to the shorter starting point
    longer = getKthNode(longer, Math.abs(result1.length - result2.length));

    // move both pointers until you have a collision
    while (shorter !== longer) {
        shorter = shorter.next;
        longer = longer.next;
        // longer and shorter will be the same node when we hit the same node
    }
    
    // you can return either one since they will be the same node
    return longer;
};

// helper function to get the tail of the lists and the length
function getTailAndLength (list) {
    if (list === null) {
        return null;
    }
    // initilize the length to 1 because we are at the 1st node
    let length = 1;
    let current = list;
    while (current.next !== null) {
        length++;
        current = current.next;
    }

    // create an object to store the object that we transfer to findIntersection() in result1 & result2
    return new Result(current, length); // current = tail of the linked list
};

// function for finding the starting point for the longer list
function getKthNode (head, k) {
    let current = head;
    while (k > 0 && current !== null) {
        current = current.next;
        k--;
    }
    return current;
};

const a = new LinkedList(3);
const b = new LinkedList(1);
const c = new LinkedList(5);
const d = new LinkedList(9);
const e = new LinkedList(7);
const f = new LinkedList(2);
const g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

const x = new LinkedList(4);
const y = new LinkedList(6);

x.next = y;
y.next = e;

let intersectedNode = findIntersection(a, x);
console.log(intersectedNode.value); // we are returning the node 1 spot before the intersection and in the first linked list
