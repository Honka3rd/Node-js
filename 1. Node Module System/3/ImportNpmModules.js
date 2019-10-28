const validator = require("validator");
const chalk = require("chalk");

console.log(validator.isIn("APPLE",["APPLE","Banana"]));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);