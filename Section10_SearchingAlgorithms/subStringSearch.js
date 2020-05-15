function subStringSearch(longString, subString) {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (longString[j + i] !== subString[j]) break;
      if (j === subString.length - 1) count++;
    }
  }
  return count;
}

console.log(subStringSearch('abhjabcjkl', 'abc')); // returns 1
console.log(subStringSearch('hello mello', 'ello')); // returns 2
console.log(subStringSearch('wow', 'nope')); // returns 0
