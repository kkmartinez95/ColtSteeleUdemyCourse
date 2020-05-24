class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a node to the end of the list
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remove last node from list
  pop() {
    if (!this.head) return undefined;
    let tail = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
      tail.prev = null;
    }
    this.length--;
    return tail;
  }

  // remove first node from list
  shift() {
    let formerFirst = this.head;
    if (!formerFirst) return undefined;
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = formerFirst.next;
      this.head.prev = null;
      formerFirst.next = null;
    }
    this.length--;
    return formerFirst;
  }

  // adding a node to the beginning of list
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // get a node at a specific index;
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let middle = Math.floor(this.length / 2);
    if (index <= middle) {
      let node = this.head;
      let count = 0;

      while (index !== count) {
        node = node.next;
        count++;
      }
      return node;
    } else {
      let node = this.tail;
      let count = this.length - 1;

      while (index !== count) {
        node = node.prev;
        count--;
      }
      return node;
    }
  }

  // change the value of a node at a specific index;
  set(index, val) {
    let specificNode = this.get(index);

    if (specificNode !== null) {
      specificNode.val = val;
      return true;
    }

    return false;
  }

  // insert a node at a specific index;
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = this.get(index);
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  // remove a node at a specific index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let nodeBefore = this.get(index - 1);
    let nodeToRemove = this.get(index);
    let nodeAfter = nodeToRemove.next;

    nodeBefore.next = nodeAfter;
    nodeAfter.prev = nodeBefore;
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    this.length--;
    return nodeToRemove;
  }
}

let list = new DoublyLinkedList();

// PUSH
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);

// console.log(list.pop());
// console.log(list.shift());
// console.log(list.unshift(-1));
// console.log('set 1', list.set(1, 11));
// list.pop();
// list.pop();
// console.log('inserted 57', list.insert(2, 57));
console.log('lets remove at index 2', list.remove(2));

console.log(list.head.next.next);
