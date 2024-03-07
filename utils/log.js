const chalk = require('chalk');
const gradient= require('gradient-string');
const color = gradient('blue', 'purple');
const crayon = gradient('yellow', 'lime', 'green');
const blu = gradient("#243aff", "#4687f0", "#5800d4");
const sky = gradient('#0905ed','#346eeb', '#344feb');

module.exports = (text, type) => {
  switch (type) {
		case "warn":
			process.stderr.write(color(`\r[ ERROR ] `) + text + '\n');
			break;
		case "error":
			process.stderr.write(chalk.bold.hex("#ff0000").bold(`\r[ ERROR ] `) + text + '\n');
			break;
		case "load":
      process.stderr.write(blu(`\r[ NEW USER ] `) + text + '\n');
			break;
		default:
			process.stderr.write(sky(`\r[ ${String(type).toUpperCase()} ] `) + text + '\n');
			break;
	}
};
module.exports.error = (text, type) => {
	process.stderr.write(chalk.hex("#ff0000")(`\r» ${type} « `) + text + '\n');
};

module.exports.err = (text, type) => {
  process.stderr.write(chalk.hex("#ff0000")(`\r[ ${type} ] `) + text) + '\n';
};

module.exports.warn = (text, type) => {
	process.stderr.write(crayon(`\r[ ${type} ] `) + text + '\n');
};

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			process.stderr.write(crayon(`\r[ SYSTEM ] `) + data + '\n');
			break;
		case "error":
			process.stderr.write(chalk.hex("#ff0000")(`\r[ SYSTEM ] `) + data + '\n');
			break;
		default:
			process.stderr.write(blu(`\r[ SYSTEM ] `) + data + '\n');
			break;
	}
}


// THIZ FILE WAS MODIFIED BY ME(@YanMaglinte) - DO NOT STEAL MY CREDITS (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯