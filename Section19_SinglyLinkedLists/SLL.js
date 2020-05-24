class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a node into list!
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remove form the last of the list
  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let oldTailVal = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      while (currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return oldTailVal;
  }

  // remove from the begining of the list
  shift() {
    if (!this.head) return undefined;

    let head = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return head;
  }

  // add to the begining of the list
  unshift(val) {
    const newNode = new Node(val);
    const oldHead = this.head;

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.head = newNode;
      newNode.next = oldHead;
    }
    this.length++;
    return this;
  }

  // retrieve a node by it's position
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
  // reassigns a node's val at a specific position
  set(val, index) {
    const specificNode = this.get(index);
    if (!specificNode) return false;
    specificNode.val = val;
    return true;
  }

  // insert a node at a specific postition
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (this.length === index) return !!this.push(val);

    let prev = this.get(index - 1);
    let current = this.get(index);
    let newNode = new Node(val);
    prev.next = newNode;
    newNode.next = current;
    this.length++;
    return true;
  }

  // removes a node at a specific index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let removed = prev.next;

    prev.next = removed.next;
    this.length--;
    return removed;
  }

  // reverse the linked list!
  reverse() {
    let node = this.head; // 0 -> 1

    this.head = this.tail; //
    this.tail = node; // 4 -> null is now: 0 -> 1
    let prev = null;

    while (node !== null) {
      // traverses the whole list!
      let temp = node.next; // 1 -> 2, 2 -> 3
      node.next = prev; // 0 -> 1 is now pointing to: 0 -> null, 1 -> 2 is now pointing to: 1 -> 0 -> null
      prev = node; // 0 -> null
      node = temp; // 1 -> 2
    }

    // let node = this.head;
    // this.head = this.tail;
    // this.tail = node;

    // let next;
    // let prev = null;

    // while (node !== null) {
    //   next = node.next;
    //   node.next = prev;
    //   prev = node;
    //   node = next;
    // }
    // return this;
  }
  print() {
    let values = [];
    let curr = this.head;
    while (curr !== null) {
      values.push(curr.val);
      curr = curr.next;
    }
    return values;
  }
}

const list = new SinglyLinkedList();

list.push('0');
list.push('1');
list.push('2');
list.push('3');
list.push('4');

// console.log(list.get(3));
// console.log(list.get(4));
// console.log('SETTING THE 2 to an 8', list.set('100', 2));
// console.log('inserting 77 at position 1', list.insert('77', 0))
// console.log('remove 1st!', list.remove(1));
// console.log('remove 1st!', list.remove(1));
list.reverse();
console.log(list.print());

// list.pop();
// list.shift();
// list.shift();
// list.unshift('added this!! ');

// console.log(list);
