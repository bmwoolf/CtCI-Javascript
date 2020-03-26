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

const a = new LinkedList('a');
const b = new LinkedList('b');
const c = new LinkedList('b');
const d = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;


const e = new LinkedList('e');
const f = new LinkedList('f');
const g = new LinkedList('g');

e.next = f;
f.next = g;

console.log(isPalindrome(a)); // true
console.log(isPalindrome(e)); // false