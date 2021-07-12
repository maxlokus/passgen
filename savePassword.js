const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = password => {
  const stream = fs.createWriteStream("passwords.txt", { flags: "a", encoding: "utf-8", mode: 0666 });
  stream.write(`${new Date().toLocaleString()}: ${password + os.EOL}`);
  stream.end();
  console.log(chalk.hex("#ff03f7")("Saved password to passwords.txt"));
};

module.exports = savePassword;
