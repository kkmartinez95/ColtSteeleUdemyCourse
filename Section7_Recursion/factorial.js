function factorial(num) {
  // base case: if num == 1 return result
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(4)); // should return 24
console.log(factorial(5)); // should return 120
