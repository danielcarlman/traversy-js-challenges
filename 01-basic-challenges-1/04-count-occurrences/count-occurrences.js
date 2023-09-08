function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase() === char.toLowerCase()) count++;
  }

  return count;
}

module.exports = countOccurrences;
