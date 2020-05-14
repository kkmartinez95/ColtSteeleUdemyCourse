// QUESTION #1

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log('POWER', power(2, 0)); // 1
console.log('POWER', power(2, 2)); // 4
console.log('POWER', power(2, 4)); // 16

// QUESTION #2

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

console.log('FACTORIAL', factorial(5)); // should return 120
console.log('FACTORIAL', factorial(4)); // should return 24
/**
 factorial(4)
        return 4 * factorial(3)
                    return 3 * factorial(2)
                                return 2* factorial(1)
                                          return 1
 */

// QUESTION #3

function productOfArray(array) {
  // base case is if the array is empty
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}

console.log('PRODUCT OF ARRAY', productOfArray([1, 2, 3])); // 6
console.log('PRODUCT OF ARRAY', productOfArray([1, 2, 3, 10])); // 60

// QUESTION #4

function recursiveRange(num) {
  // base case is if the number is zero we return the sum
  if (num === 0) return num;
  return num + recursiveRange(num - 1);
}

console.log('recursiveRange', recursiveRange(6)); // 21
console.log('recursiveRange', recursiveRange(10)); // 55

// QUESTION #5

function fib(num) {
  // add whatever parameters you deem necessary - good luck!
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log('FIB! ', fib(4)); // 3 (1, 1, 2, 3)
console.log('FIB! ', fib(10)); // 55
console.log('FIB! ', fib(28)); // 317811
console.log('FIB! ', fib(35)); // 9227465

// SECTION #9
function reverse(string) {
  // add whatever parameters you deem necessary - good luck!

  if (string.length <= 1) {
    return string;
  }
  return reverse(string.slice(1)) + string[0];
}

console.log('REVERSE =>> ', reverse('awesome')); // 'emosewa'
console.log('REVERSE =>> ', reverse('rithmschool')); // 'loohcsmhtir'
