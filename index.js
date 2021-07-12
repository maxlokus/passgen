#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./createPassword");
const savePassword = require("./savePassword");

program.version("1.0.0").description("Easy pass generator");

program
  .option("-l, --length <length>", "length of password", "8")
  .option("-s, --save", "save password (if specified) to passwords.txt")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

const password = createPassword(length, numbers, symbols);

if (save) {
  savePassword(password);
}

console.log(chalk.greenBright(password));

clipboardy.writeSync(password);

console.log(chalk.yellow("Password copied to clipboard"));

console.log(program.opts());
