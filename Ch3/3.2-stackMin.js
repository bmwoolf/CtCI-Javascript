// a stack that returns the minimum in O(1)

// we are going to need 2 Stack prototypes for tracking
function LinkedList(value) {
    this.value = value;
    this.next = null;
};

function Stack() {
    this.top = null;
}

// push to last index- we use linked lists for O(1) insertion
Stack.prototype.push = function(value) {
    let node = new LinkedList(value);
    node.next = this.top;
    this.top = node;
}

// remove last value and return it
Stack.prototype.pop = function() {
    let popped = this.top;
    if (this.top !== null) {
        this.top = this.top.next;
    }
    return popped.value;
}

// if not null, return the top value
Stack.prototype.peek = function() {
    return this.top !== null ? this.top.value : null;
}

Stack.prototype.isEmpty = function() {
    return this.top === null;
}

// we create a stack with the same methods, this time focusing on the minimum value
function StackMin() {
    this.stack = new Stack();
    this.minStack = new Stack();
    this.currentMin = undefined;
}

StackMin.prototype.push = function(value) {
    if (this.currentMin === undefined || value <= this.currentMin) {
        this.minStack.push(this.currentMin);
        this.currentMin = value;
    }
    this.stack.push(value);
}

StackMin.prototype.pop = function(value) {
    let answer = this.stack.pop();
    if (answer === this.currentMin) {
        this.currentMin = this.minStack.pop();
    }
    return answer;
}

StackMin.prototype.peek = function() {
    return this.stack.peek(); // same function as Stack peep() so just call it here
}

StackMin.prototype.isEmpty = function() {
    return this.stack.isEmpty();
}

StackMin.prototype.min = function() {
    return this.currentMin;
}


const stack = new StackMin();
stack.push(9);
stack.push(8);
stack.push(1);
stack.push(2);
stack.push(1);
stack.push(9);

console.log(stack.min()); // 1
stack.pop();
stack.pop();
console.log(stack.peek()); // 2
console.log(stack.min()); // 1
stack.pop();
stack.pop();
console.log(stack);
console.log(stack.peek()); // 8
console.log(stack.min()); // 8 -> only have 9 and 8 left
stack.pop();
stack.pop();
console.log(stack.isEmpty()); // true
console.log(stack.min()); // undefined