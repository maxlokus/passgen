const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

function createPassword(length, hasNumbers = true, hasSymbols = true) {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";
  const generated = generatePassword(length, chars);
  return generated;
}

function generatePassword(length, characters) {
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += characters[Math.floor(Math.random() * characters.length)];
  }
  return pass;
}

module.exports = createPassword;
