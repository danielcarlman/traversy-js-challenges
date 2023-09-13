function areAllCharactersUnique(str) {
  let currChar = "";
  for (let i = 0; i < str.length; i++) {
    if (currChar !== str[i]) {
      currChar = str[i];
    } else {
      return false;
    }
  }
  return true;
}

// function areAllCharactersUnique(str) {
//   const charArr = str.split("");
//   const charSet = [...new Set(charArr)];
//   return charArr.join("") === charSet.join("");
// }

module.exports = areAllCharactersUnique;
