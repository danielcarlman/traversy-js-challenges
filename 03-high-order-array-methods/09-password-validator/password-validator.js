function validatePassword(string) {
  const hasLength = string.length > 7;
  const hasUpperCase = /[A-Z]/.test(string);
  const hasLowerCase = /[a-z]/.test(string);
  const hasDigit = /\d/.test(string);
  return hasLength && hasUpperCase && hasLowerCase && hasDigit;
}

module.exports = validatePassword;
