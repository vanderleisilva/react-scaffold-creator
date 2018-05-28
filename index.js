const program = require('commander');
const info = require('./package');
const commands = require('./commands');
const execute = require('./execute');

program
	.version(info.version)
	.description(info.description);

commands.forEach(command => {
    program
	.command(command.action + (command.params || []).map(i => ` <${i}>`))
	.description(command.description)
	.action(param => execute({command, param}))
});

program.parse(process.argv);
