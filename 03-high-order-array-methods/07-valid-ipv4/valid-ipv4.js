const isValidIPv4 = (str) => {
  const array = str.split(".");
  if (array.length !== 4) return false;
  return array.every((el) => el <= 255 && el.charAt(0) !== "0");
};

module.exports = isValidIPv4;
