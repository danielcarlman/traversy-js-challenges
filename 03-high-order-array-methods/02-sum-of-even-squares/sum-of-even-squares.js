function sumOfEvenSquares(numbers) {
  if (!numbers.length) return 0;
  return numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * num)
    .reduce((total, cur) => total + cur, 0);
}

module.exports = sumOfEvenSquares;
