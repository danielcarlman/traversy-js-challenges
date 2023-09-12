// WITH SET
// function removeDuplicates(array) {
//   return [...new Set(array)];
// }

function removeDuplicates(array) {
  let unique = [];

  for (i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique;
}

module.exports = removeDuplicates;
