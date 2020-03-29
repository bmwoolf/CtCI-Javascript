// create a stack that has a max- like a callstack in an engine

const stackOfPlates = function(maxCapacity) {
    // array of stacks, each stack has a max capacity of some input value 
    this.maxCapacity = maxCapacity;
    this.stackSet = [];
}

stackOfPlates.prototype.push = function(value) {
    // if the current last stack is full (=== capacity)
    if (this.stackSet.length === 0 || this.stackSet[this.stackSet.length - 1].length === this.capacity) {
        // put value in new stack, push that stack into the main array
        let newStack = [];
        newStack.push(value);
        this.stackSet.push(newStack);
    } else {
        // push to the last stack array in the array of stacks
        this.stackSet[this.stackSet.length - 1].push(value);
    }
}

stackOfPlates.prototype.pop = function() {
    if (this.numStack === 0) {
        return 'array is empty';
    } else if (this.stackSet[this.stackSet.length - 1].length === 0) {
        this.stackSet.pop();
    }
    // return the last index value of the last stack, like normal pop()
    return this.stackSet[this.stackSet.length - 1].pop();
}

stackOfPlates.prototype.peek = function() {
    // look at last value of the current stack this one is called at
    let currentStack = this.stackSet[this.stackSet.length - 1];
    return currentStack[currentStack.length - 1];
}

stackOfPlates.prototype.isEmpty = function() {
    // check if it is empty
    return this.stackSet.length === 0;
}

stackOfPlates.prototype.popAt = function(index) {
    return this.stackSet[index].pop();
}   

const stack = new stackOfPlates(1);
stack.push(6);
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
stack.push(1);

console.log('stack', stack.stackSet);
console.log('maxCapacity', stack.maxCapacity);

console.log(stack.stackSet);