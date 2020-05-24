function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([1, 4, 2, 10, 23, 3, 1, 0, 20])); // [0, 1, 1, 2, 3, 4, 10, 20, 23]
