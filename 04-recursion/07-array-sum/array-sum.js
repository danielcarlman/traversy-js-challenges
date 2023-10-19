function arraySum(arr) {
  if (!arr.length) return 0;
  return arr[0] + arraySum(arr.slice(1));
}

module.exports = arraySum;
