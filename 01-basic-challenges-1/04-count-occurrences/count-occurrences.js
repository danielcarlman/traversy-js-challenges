function countOccurrences(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  console.log("vowels", vowels);
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str.charAt(i))) count++;
  }

  return count;
}

module.exports = countOccurrences;
