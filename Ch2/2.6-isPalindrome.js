// check if a linked list is a palindrome

// #1- reverse and compare (like in an array)

const LinkedList = function (value) {
    this.value = value;
    this.next = null;
};

// make the code cleaner by invoking the two functions through another function
function isPalindrome(head) {
    let reversed = reverseAndClone(head);
    return isEqual(head, reversed);
}

function reverseAndClone(node) {
    let head = null;
    while (node !== null) {
        // create a new node with the passed in nodes value
        let n = new LinkedList(node.value);
        n.next = head; // set its next value to the head--- n....->{2}->{1}
        head = n; // assign head to the current node- make the current one head to chain the next iteration to the head
        node = node.next; // 
    }
    return head;
}

function isEqual(firstList, secondList) {
    // this while loop is dependent upon the values being equal
    while (firstList !== null && secondList !== null) {
        if (firstList.value !== secondList.value) {
            return false;
        }
        // iterate through the lists to check if they are equal
        firstList = firstList.next;
        secondList = secondList.next;
    }
    // true means that the original is a palindrome
    return firstList === null && secondList === null;
}


/* ---------- iterative method ---------- */
function isPalindromeIterative (head) {
    let fast = head;
    let slow = head;
    let stack = [];

    while (fast !== null && fast.next !== null) {
        stack.push(slow.value);
        console.log('stack',stack)
        slow = slow.next; // +1
        fast = fast.next.next; // + 2
    }

    if (fast !== null) {
        slow = slow.next;
    }

    while (slow !== null) {
        let top = stack.pop();
        if (top !== slow.value) {
            return false;
        }
        slow = slow.next;
    }
    return true;
}

const a = new LinkedList('a');
const b = new LinkedList('b');
const c = new LinkedList('c');
const d = new LinkedList('d');
const e = new LinkedList('d');
const f = new LinkedList('c');
const g = new LinkedList('b');
const h = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

const x = new LinkedList('x');
const y = new LinkedList('y');
const z = new LinkedList('z');

e.next = f;
f.next = g;

console.log(isPalindrome(a)); // true
console.log(isPalindrome(e)); // false
console.log(isPalindromeIterative(a)); // true
console.log(isPalindromeIterative(e)); // false
