function findMissingLetter(letters) {
  if (!letters || letters.length < 2) return "";

  const isUpperCase = letters[0] === letters[0].toUpperCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const initialIdx = alphabet.indexOf(letters[0].toLowerCase());

  for (let i = 0; i < letters.length; i++) {
    if (letters[i].toLowerCase() !== alphabet[initialIdx + i]) {
      return isUpperCase
        ? alphabet[initialIdx + i].toUpperCase()
        : alphabet[initialIdx + i];
    }
  }
}

module.exports = findMissingLetter;
