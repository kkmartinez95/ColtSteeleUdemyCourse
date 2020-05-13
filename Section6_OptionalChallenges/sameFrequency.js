/**
 * Given two positive integers, find out if the two numbers have the same frequency of digits. MUST be O(n) time complexity!
 *
 */

function sameFrequency(num1, num2) {
  let memo = {};
  num1 = String(num1).split('');
  num2 = String(num2).split('');

  for (let num of num1) {
    if (!memo[num]) {
      memo[num] = 1;
    } else {
      memo[num]++;
    }
  }

  for (let num of num2) {
    if (!memo[num]) {
      return false;
    } else {
      memo[num]--;
    }
  }
  return true;
}

// sameFrequency(182, 281);

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
