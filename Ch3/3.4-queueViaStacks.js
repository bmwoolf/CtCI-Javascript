// implement a queue with two stacks- peep and pop go in reverse order

function LinkedList(value) {
    this.value = value;
    this.next = null;
};

class Stack {
    constructor() {
      this._data = [];
    }
  
    size() {
      return this._data.length;
    }
  
    isEmpty() {
      return this.size() == 0;
    }
  
    push(value) {
      this._data.push(value);
    }
  
    pop() {
      return this._data.pop();
    }
  
    peek() {
      if (this.isEmpty()) return null;
      return this._data[this.size() - 1];
    }
}

function MyQueue() {
    this.newOrder = new Stack(); // new order stack, front
    this.oldOrder = new Stack(); // old order stack, back
    this.backUp = true;
}

MyQueue.prototype.add = function(value) {
  if (!this.backUp) {
    // while the stack is not empty
    while (!this.newOrder.isEmpty()) {
      this.oldOrder.push(this.newOrder.pop())
    }
    this.backUp = true;
  }
  this.oldOrder.push(value);
}

MyQueue.prototype.remove = function() {
  console.log('in remove')
  if (this.backUp) {
    while (!this.oldOrder.isEmpty()) {
      // push the last value in the back array in the newOrder array
      this.newOrder.push(this.oldOrder.pop())
      console.log('neworder', this.newOrder)
    }
    this.backUp = false;
  }
  console.log('peek output', this.newOrder.peek())
  return this.newOrder.peek();
}

MyQueue.prototype.peek = function() {
  if (this.backUp) {
    while (!this.oldOrder.isEmpty()) {
      this.newOrder.push(this.oldOrder.pop());
    }
    this.backUp = false;
  }
  return this.newOrder.peek();
}

MyQueue.prototype.isEmpty = function() {
  // both stacks need to be empty
  return this.newOrder.isEmpty() && this.oldOrder.isEmpty();
}


const test = new MyQueue();
console.log(test.isEmpty()); // true

test.add('a');
test.add('b');
test.add('c');
test.add('d');
test.add('e');
test.remove(); // remove isnt working
test.remove();
console.log(test.peek(), 'b');