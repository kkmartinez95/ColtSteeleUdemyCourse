function areThereDuplicates(...args) {
  args = [...args];
  let memo = {};

  args.forEach((arg) => {
    if (!memo[arg]) {
      memo[arg] = 1;
    } else {
      memo[arg]++;
    }
  });

  for (let key in memo) {
    if (memo[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
