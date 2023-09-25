function formatPhoneNumber(n) {
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
}

// function formatPhoneNumber2(array) {
//   return array.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
// }

module.exports = formatPhoneNumber;
