class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val > current.val) {
          if (!current.right) {
            current.right = new Node(val);
            return this;
          } else {
            current = current.right;
          }
        } else {
          if (!current.left) {
            current.left = new Node(val);
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  find(val) {
    let current = this.root;
    while (current !== null) {
      if (current.val === val) {
        return true;
      } else if (val > current.val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }

  BFS() {
    let queue = [this.root];
    let visited = [];

    while (queue.length) {
      let current = queue.shift();
      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  }

  // DFS Pre Order!
  DFSPO() {
    let visited = [];
    let current = this.root;

    function helper(node) {
      visited.push(node.val);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }

    helper(current);
    return visited;
  }
  // DFS Post Order!
  DFSpostO() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }
    traverse(current);
    return visited;
  }
  // DFS In Order!
  DFSinO() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return visited;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log('found? ', tree.find(100));
// console.log(tree.BFS()); // [ 10, 6, 15, 3, 8, 20 ]
console.log('PRE', tree.DFSPO()); // [ 10, 6, 3, 8, 15, 20 ]
console.log('POST', tree.DFSpostO()); // [ 3, 8, 6, 20, 15, 10 ]
console.log('IN', tree.DFSinO()); // [ 3, 6, 8, 10, 15, 20 ]

console.log(tree.root.left);
