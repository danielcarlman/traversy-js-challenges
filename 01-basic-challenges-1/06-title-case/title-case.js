// LOWER LEVEL CODE

function titleCase(str) {
  let result = str.charAt(0).toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }

  return result;
}

// RESULT 2

// function titleCase(str) {
//   let array = str.split(" ");
//   let result = array
//     .map((word) => {
//       return word.slice(0, 1).toUpperCase() + word.toLowerCase().slice(1);
//     })
//     .join(" ");
//   return result;
// }

module.exports = titleCase;
