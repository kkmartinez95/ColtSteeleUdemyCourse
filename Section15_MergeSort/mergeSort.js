function mergeArrays(arrayOne, arrayTwo) {
  let sorted = [];

  while (arrayOne.length && arrayTwo.length) {
    // NOTE! EVEN THOUGH THIS WORKS IN THIS CASE, TRY NOT TO USE THIS METHOD!
    // IT MUTATES THE ORIGINAL ARRAY. THAT IS NOT THE SIDE EFFECT YOU WANT. USE POINTERS.
    if (arrayOne[0] < arrayTwo[0]) {
      sorted.push(arrayOne.shift());
    } else {
      sorted.push(arrayTwo.shift());
    }
  }
  while (arrayOne.length) {
    sorted.push(arrayOne.shift());
  }

  while (arrayTwo.length) {
    sorted.push(arrayTwo.shift());
  }

  return sorted;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let midpoint = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midpoint));
  let right = mergeSort(array.slice(midpoint));
  return mergeArrays(left, right);
}
// helper function that will split my arrays into halves!

console.log(mergeSort([1, 3, 88, 0, 2, 100, 5])); // [0, 1, 2, 3, 5, 88]
