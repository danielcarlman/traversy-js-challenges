function findMissingNumber(numbers) {
  if (!numbers) return undefined;
  if (!numbers.length) return 1;

  let numbersSum = 0;
  let totalSum = 0;
  const maxNum = Math.max(...numbers);
  const minNum = Math.min(...numbers);

  for (let i = minNum; i <= maxNum; i++) {
    totalSum += i;
  }

  for (let i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
  }

  return totalSum - numbersSum;
}

module.exports = findMissingNumber;
