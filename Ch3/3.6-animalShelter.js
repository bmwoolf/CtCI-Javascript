// the first animal in is the first animal out- basically a queue with two different types of data

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
  
    append(value) {
        let node = new Node(value);
        // if list is empty
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }
  
    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
  
    pop() {
        let cur = this.head;
  
        // only one or no item exists
        if (!cur) return null;
        if (!cur.next) {
            this.head = null;
            return cur;
        }
        // move till the 2nd last
        while (cur.next.next)
            cur = cur.next;
        
        let last = this.tail;
        this.tail = cur;
        this.tail.next = null;
        return last;
    }
  
    popFirst() {
        let first = this.head;
        if (this.head && this.head.next) {
            this.head = this.head.next;
            first.next = null;
        }
        else this.head = null;
        return first;
    }
  
    head() {
        return this.head;
    }
  
    tail() {
        return this.tail;
    }
  
    _toArray() {
        let arr = [];
        let cur = this.head;
        while (cur) {
            arr.push(cur.value);
            cur = cur.next;
        }
  
        return arr;
    }
  }
  

class Queue {
    constructor() {
      this._list = new LinkedList();
    }
  
    enqueue(value) {
      this._list.append(value);
    }
  
    dequeue() {
      let node = this._list.popFirst();
      return node.value;
    }
  
    peek() {
      return this._list.head ? this._list.head.value : null;
    }
  
    isEmpty() {
      return this._list.head == null;
    }
  
    _toArray() {
      return this._list._toArray();
    }
  }
  
  // alias
  Queue.prototype.add = Queue.prototype.enqueue;
  Queue.prototype.remove = Queue.prototype.dequeue;


  function AnimalShelter () {
      this.dogQueue = new Queue();
      this.catQueue = new Queue();
      this.wrapperQueue = new Queue();
      this.tempQueue = new Queue;
  }

  AnimalShelter.prototype.enqueue = function(animal) {
    if (animal.type === 'dog') {
        // add to dog queue
        this.dogQueue.enqueue(animal);
    } else if (animal.type === 'cat'){
        this.catQueue.enqueue(animal);
    }
    this.wrapperQueue.enqueue(animal);
  } 

  AnimalShelter.prototype.dequeueAny = function() {
      if (this.wrapperQueue.peek() === this.dogQueue.peek()) {
          this.dogQueue.remove();
      } else if (this.wrapperQueue.peek() === this.catQueue.peek()) {
          this.catQueue.remove();
      }
      return this.wrapperQueue.remove();
  }

  AnimalShelter.prototype.dequeueByType = function(animal) {
    let animalQueue;
    if (animal === 'dog') {
        animalQueue = this.dogQueue;
    } else if (animal === 'cat') {
        animalQueue = this.catQueue;
    }

    while (!this.wrapperQueue.isEmpty() && this.wrapperQueue.peek().type !== animal) {
        this.tempQueue.enqueue(this.wrapperQueue.remove());
    }

    let returnAnimal = this.wrapperQueue.remove();
    animalQueue.remove();

    while (!this.wrapperQueue.isEmpty()) {
        this.tempQueue.enqueue(this.wrapperQueue.remove());
    }

    while (!this.tempQueue.isEmpty()) {
        this.wrapperQueue.enqueue(this.tempQueue.remove());
    }

    return returnAnimal;
  }


  AnimalShelter.prototype.dequeueDog = function() {
      return this.dequeueByType('dog');
  }

  AnimalShelter.prototype.dequeueCat = function() {
      return this.dequeueByType('cat');
  }


let animal = new AnimalShelter();
animal.enqueue({type:'dog', name:'a'});
animal.enqueue({type:'dog', name:'b'});
animal.enqueue({type:'cat', name:'c'});
animal.enqueue({type:'dog', name:'d'});
animal.enqueue({type:'cat', name:'e'});
animal.enqueue({type:'cat', name:'f'});

console.log(animal.dequeueAny());

console.log(animal.dequeueCat());

console.log(animal.dequeueAny());

console.log(animal.dequeueAny());