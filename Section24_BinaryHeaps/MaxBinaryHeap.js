class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    // get the index of the child just pushed in
    let childIndex = this.values.length - 1;
    const child = this.values[childIndex];
    while (childIndex > 0) {
      // get the index of the parent using the formula!

      let parentIndex = Math.floor((childIndex - 1) / 2);
      let parent = this.values[parentIndex];

      if (child <= parent) break;
      this.values[parentIndex] = child;
      this.values[childIndex] = parent;
      childIndex = parentIndex;
    }
  }

  extractMax() {
    // THIS SECTION IS INCOMPLETE
    let maxVal = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = maxVal;
    let oldMax = this.values.pop();

    let parentIndex = 0;
    let leftChild = parentIndex * 2 + 1;
    let rightChild = parentIndex * 2 + 2;

    while (true) {
      if (
        this.values[leftChild] > this.values[parentIndex] &&
        this.values[rightChild] > this.values[parentIndex]
      ) {
      }
    }
    // return oldMax;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.values);
