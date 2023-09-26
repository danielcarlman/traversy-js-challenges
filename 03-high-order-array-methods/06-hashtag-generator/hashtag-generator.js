function generateHashtag(str) {
  if (!str.length || str.length > 140) return false;
  const words = str.trim().split(" ");
  const capitalized = words
    .map((word) => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      }
      return "";
    })
    .join("");
  return "#" + capitalized;
}

module.exports = generateHashtag;
