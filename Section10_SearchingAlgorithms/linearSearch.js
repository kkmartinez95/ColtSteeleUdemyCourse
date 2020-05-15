function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([2, 3, 55, 6, 894, 20], 6)); // 3
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 7)); // -1
