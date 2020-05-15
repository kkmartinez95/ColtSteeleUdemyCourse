function binarySearch(array, target) {
  // add whatever parameters you deem necessary - good luck!

  let i = 0;
  let j = array.length - 1;

  while (i <= j) {
    let midpoint = Math.floor((i + j) / 2);

    if (array[midpoint] === target) return midpoint;
    if (target > array[midpoint]) {
      i = midpoint + 1;
    } else {
      j = midpoint - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5)); // 4
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103)); // -1
