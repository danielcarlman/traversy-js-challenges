function findFirstNonRepeatingCharacter(string) {
  const map = {};
  for (const char of string) {
    !map[char] ? (map[char] = 1) : map[char]++;
  }

  const entries = Object.entries(map);

  for (const [key, value] of entries) {
    if (value === 1) return key;
  }

  return null;
}

// NO NEED TO DO OBJECT.ENTRIES. COULD HAVE JUST LOOPED AGAIN.

module.exports = findFirstNonRepeatingCharacter;
