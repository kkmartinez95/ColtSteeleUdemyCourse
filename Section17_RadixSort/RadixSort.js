// helper function that will return the digit in the num

function getNumAt(num, index) {
  let gotIt = 0;
  num = Math.abs(num);

  while (index >= 0) {
    gotIt = Math.floor(num % 10);
    num /= 10;
    index--;
  }
  return gotIt;
  //   return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10; // this works too!! COLT'S SOLUTION!
}

// helper function #2 that will count the length of a number (123 => 3)
function digitCount(num) {
  let count = 0;
  if (num === 0) return 1;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

// helper function #3 that will find the element in an array with the most digits ([10, 11111, 4]) returns 5
function mostDigits(array) {
  let max = 0;

  for (let num of array) {
    if (digitCount(num) > max) {
      max = digitCount(num);
    }
  }

  return max;
}

// FINALLY RADIX SORT!
function radixSort(array) {
  const largestDidits = mostDigits(array);

  for (let i = 0; i < largestDidits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < array.length; j++) {
      let whichBucketIndex = getNumAt(array[j], i);
      buckets[whichBucketIndex].push(array[j]);
    }
    array = [].concat(...buckets);
  }
  return array;
}

// HELPER #1
console.log('getNumAt', getNumAt(147, 2)); // 1
console.log('getNumAt', getNumAt(147, 0)); // 7
console.log('getNumAt', getNumAt(-7323, 2)); // 3
// HELPER #2
console.log('digitCount', digitCount(123)); // 3
console.log('digitCount', digitCount(3)); // 1
console.log('digitCount', digitCount(123456789112)); // 3
console.log('digitCount', digitCount(0)); // 1
// HELPER #3
console.log('mostDigits', mostDigits([10, 11111, 4])); // 5
console.log('mostDigits', mostDigits([101, 3, 5432189273482024885, 11111, 4])); // 19
console.log('mostDigits', mostDigits([10, 11111, 4, 7777777])); // 7
// RADIX SORT TESTS
console.log('RADIX sort ==>', radixSort([2, 445, 23, 205, 444, 679]));
