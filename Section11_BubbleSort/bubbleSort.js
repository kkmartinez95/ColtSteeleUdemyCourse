function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([1, 4, 2, 10, 23, 3, 1, 0, 20])); // [0, 1, 1, 2, 3, 4, 10, 20, 23]
