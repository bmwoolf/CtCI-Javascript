// sort the stack in order of least to greatest

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


function sortStack(stack) {
    let tempStack = new Stack();
    let currentMin = Infinity;
    let stackDepth = 0;
    // while the input stack is not empty
    while (!stack.isEmpty()) {
        if (stack.peek() <= currentMin) {
            // meaning this isn't the first time we've changed it
            if (currentMin !== Infinity) {
                tempStack.push(currentMin);
            }
            // why are we doing this?- the last value in the stack is implicitly the smallest value
            currentMin = stack.pop();
        } else {
            // we need to shuffle values around, so store the higher value in a variable and replace with smaller until smallest is at the bottom
            tempStack.push(stack.pop())
        }
        stackDepth++;
    }

    while (!tempStack.isEmpty()) {
        // put all values from the tempstack into the normal stack from least the greatest (since least is on top in tempStack)
        stack.push(tempStack.pop());
    }

    tempStack.push(currentMin);
    currentMin = Infinity; // reset the whole process for line 39
    stackDepth--;

    while (stackDepth > 0) {
        while (!stack.isEmpty()) {
            // if the last value in stack is less than or equalt to the current min
            if (stack.peek() <= currentMin) {
                if (currentMin !== Infinity) {
                    tempStack.push(currentMin);
                }
                currentMin = stack.pop();
            } else {
                tempStack.push(stack.pop());
            }
        }

        for (let i = 0; i < stackDepth; i++) {
            stack.push(tempStack.pop());
        }

        tempStack.push(currentMin);
        currentMin = Infinity;
        stackDepth--;
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop())
    }

    return stack;
}

const stack = new Stack();
stack.push(99);
stack.push(4);
stack.push(1);
stack.push(6);
stack.push(8);
stack.push(10);
stack.push(22);
stack.push(3);
stack.push(72);

const sortMyStack = sortStack(stack);

while (!sortMyStack.isEmpty()) {
  console.log(sortMyStack.pop());
}