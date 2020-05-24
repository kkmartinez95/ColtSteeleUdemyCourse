// function mergeArrays(arrayOne, arrayTwo) {
//   let sorted = [];

//   while (arrayOne.length && arrayTwo.length) {
//     if (arrayOne[0] < arrayTwo[0]) {
//       sorted.push(arrayOne.shift());
//     } else {
//       sorted.push(arrayTwo.shift());
//     }
//   }
//   while (arrayOne.length) {
//     sorted.push(arrayOne.shift());
//   }

//   while (arrayTwo.length) {
//     sorted.push(arrayTwo.shift());
//   }

//   return sorted;
// }

// ALTERNATIVE USING POINTERS
function mergeArrays(arrayOne, arrayTwo) {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (arrayOne[i] < arrayTwo[j]) {
      sorted.push(arrayOne[i]);
      i++;
    } else {
      sorted.push(arrayTwo[j]);
      j++;
    }
  }
  while (i < arrayOne.length) {
    sorted.push(arrayOne[i]);
    i++;
  }

  while (j < arrayTwo.length) {
    sorted.push(arrayTwo[j]);
    j++;
  }

  return sorted;
}

console.log(mergeArrays([1, 3, 88], [0, 2, 5])); // [0, 1, 2, 3, 5, 88]
