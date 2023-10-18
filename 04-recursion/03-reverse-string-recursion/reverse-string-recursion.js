function reverseString(string) {
  if (string === "") return string;

  return reverseString(string.slice(1)) + string[0];
}

module.exports = reverseString;
