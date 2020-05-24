function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}

function pivot(array, startIndex = 0, endIndex = array.length + 1) {
  let pivot = array[startIndex];
  let pivotIndex = startIndex;
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  for (let i = startIndex + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      pivotIndex++;
      swap(array, pivotIndex, i);
    }
  }

  swap(array, startIndex, pivotIndex);
  return pivotIndex;
}

// console.log(pivot([10, 4, 2, 10, 23, 3, 1, 0, 20])); // [0, 1, 1, 2, 3, 4, 10, 20, 23]

console.log(quickSort([1, 4, 2, 10, 23, 3, 1, 0, 20])); // [0, 1, 1, 2, 3, 4, 10, 20, 23]
