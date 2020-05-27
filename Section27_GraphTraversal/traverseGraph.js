class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => {
      return v !== v2;
    });

    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => {
      return v !== v1;
    });
  }

  removeVertex(vertex) {
    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v);
    }

    delete this.adjacencyList[vertex];
  }

  // TRAVERSE!
  depthFirstRecursive(vertex) {
    let visited = {};
    let data = [];

    const helper = (v) => {
      if (!v) return null;
      data.push(v);
      visited[v] = true;
      this.adjacencyList[v].forEach((vertex) => {
        if (!visited[vertex]) {
          return helper(vertex);
        }
      });
    };
    helper(vertex);
    return data;
  }

  depthFirstIterative(vertex) {
    let stack = [vertex];
    let visited = {};
    let data = [];

    while (stack.length) {
      let current = stack.pop();
      if (!visited[current]) {
        data.push(current);
        visited[current] = true;

        this.adjacencyList[current].forEach((v) => {
          stack.push(v);
        });
      }
    }
    return data;
  }

  breadthFirstT(vertex) {
    let queue = [vertex];
    let data = [];
    let visited = {};

    while (queue.length) {
      let current = queue.shift();

      if (!visited[current]) {
        data.push(current);
        visited[current] = true;

        this.adjacencyList[current].forEach((v) => {
          queue.push(v);
        });
      }
    }
    return data;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log('RECURSIVE', g.depthFirstRecursive('A'));
console.log('Iterative', g.depthFirstIterative('A'));
console.log('BF Travsersal', g.breadthFirstT('A'));
