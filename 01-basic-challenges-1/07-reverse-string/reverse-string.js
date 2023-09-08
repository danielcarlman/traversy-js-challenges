// RESULT 1 (LOWER LEVEL)

function reverseString(str) {
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    reversedStr += str[str.length - 1 - i];
  }
  return reversedStr;
}

// RESULT 2 (BUILT-IN METHOD)

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

module.exports = reverseString;
