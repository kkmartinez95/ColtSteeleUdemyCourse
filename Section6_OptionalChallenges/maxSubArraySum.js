function maxSubarraySum(array, len) {
  // add whatever parameters you deem necessary - good luck!
  let maxSum = 0;
  let tempSum = 0;

  if (array.length < len) return null;

  for (let i = 0; i < len; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = len; i < array.length; i++) {
    tempSum = tempSum - array[i - len] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
