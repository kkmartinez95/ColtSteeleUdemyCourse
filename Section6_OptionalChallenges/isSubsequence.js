function isSubsequence(shortString, longString) {
  let first = 0;
  let second = 0;

  if (shortString.length > longString.length) return false;

  while (second < longString.length) {
    if (shortString[first] === longString[second]) first++;
    if (first === shortString.length) return true;
    second++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
