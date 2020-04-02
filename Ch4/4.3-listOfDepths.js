// create a list of linked lists for each level

class LinkedListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  export class LinkedList {
    constructor() {
      // this.size = 0;
      this.head = this.tail = null;
    }
  
    prepend(value) {
      if (!this.head) {
        this.head = this.tail = new LinkedListNode(value);
      }
      else {
        this.head = new LinkedListNode(value, this.head);
      }
      // this.size++;
    }
  
    append(value) {
      if (!this.head) {
        this.head = this.tail = new LinkedListNode(value);
      }
      else {
        this.tail = this.tail.next = new LinkedListNode(value);
      }
      // this.size++;
    }
  
    toArray() {
      let arr = [], node = this.head;
      while (node) {
        arr.push(node.value);
        node = node.next;
      }
      return arr;
    }
  }
  

  function DFS(tree) {
      return createList(tree.root);
  }

  function createList(tree, lists = [], depth = 0) {
      if (tree) {
          if (!lists[depthLevel]) {
              lists[depthLevel] = new LinkedList();
          }

          lists[depth].append(tree.value);

          createList(tree.left, lists, depth + 1);
          createList(tree.right, list, depth + 1);
      }

      return lists;
  }