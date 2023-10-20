function generatePermutations(string) {
  function runPermutation(FirstChar, remainingChars) {
    if (!remainingChars.length) {
      permutations.push(FirstChar);
      return;
    }

    for (let i = 0; i < remainingChars.length; i++) {
      const newFirstChar = FirstChar + remainingChars[i];
      const newremainingChars =
        remainingChars.slice(0, i) + remainingChars.slice(i + 1);
      runPermutation(newFirstChar, newremainingChars);
    }
  }

  const permutations = [];
  runPermutation("", string);
  return permutations;
}

const string = "abc";
const result = generatePermutations(string);
console.log(result);

module.exports = permutations;
