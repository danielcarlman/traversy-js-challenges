function validAnagrams(str1, str2) {
  const sorted1 = str1.split("").sort();
  const sorted2 = str2.split("").sort();
  return sorted1.join("") === sorted2.join("");
}

module.exports = validAnagrams;
