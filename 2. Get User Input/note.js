const chalk = require('chalk');

console.log(chalk.blue.inverse.bold("greeting"));

const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}