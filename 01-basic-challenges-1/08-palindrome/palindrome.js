function isPalindrome(str) {
  const regExp = /[^a-z0-9]/g;
  const word = str.toLowerCase().replace(regExp, "");

  let reverse = "";

  for (i = 0; i <= word.length - 1; i++) {
    reverse += word[word.length - i - 1];
  }
  return word === reverse;
}

module.exports = isPalindrome;
