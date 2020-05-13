function sumZero(array) {
  let i = 0;
  let j = array.length - 1;

  while (i <= j) {
    if (array[i] + array[j] === 0) {
      return [array[i], array[j]];
    }
    if (array[i] + array[j] > 0) {
      j--;
    } else {
      i--;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // should return [-3, 3]
console.log(sumZero([1, 2, 3])); // should return `undefined`

function countUniqueValues(array) {
  let memo = {};

  array.forEach((num) => {
    if (!memo[num]) {
      memo[num] = true;
    }
  });

  return Object.keys(memo).length;
}

console.log(countUniqueValues([0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3])); // should return 4
console.log(countUniqueValues([0, 1, 1, 3, 3, 3, 3, 3, 4, 5, 6, 8, 8])); // should return 7
console.log(countUniqueValues([])); // should return 0

function search(array, num) {
  let i = 0;
  let j = array.length - 1;

  while (i <= j) {
    let midpoint = Math.floor((i + j) / 2);

    if (array[midpoint] === num) return midpoint;

    if (num > array[midpoint]) {
      i = midpoint + 1;
    }
    if (num < array[midpoint]) {
      j = midpoint - 1;
    }
  }
  return -1;
}

console.log('SEARCH ', search([0, 1, 2, 3, 5, 6, 9], 1)); // should return index 1
console.log('SEARCH ', search([0, 2, 3, 5, 6, 9], 6)); // should return index 4
