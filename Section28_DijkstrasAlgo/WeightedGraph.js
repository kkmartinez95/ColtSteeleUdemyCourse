class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
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
}

let weightedG = new WeightedGraph();

weightedG.addVertex('A');
weightedG.addVertex('B');
weightedG.addVertex('C');

weightedG.addEdge('A', 'B', 9);
weightedG.addEdge('A', 'C', 5);
weightedG.addEdge('B', 'C', 7);

console.log(weightedG.adjacencyList);
