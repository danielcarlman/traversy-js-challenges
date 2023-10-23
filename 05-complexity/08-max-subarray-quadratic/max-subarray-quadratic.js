function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;

  let currentSum;
  for (let i = 0; i <= arr.length - k; i++) {
    currentSum = 0;

    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
