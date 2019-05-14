#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program.version(pkg.version);

program
    .command('start <swaggerFile>')
    .option('-p, --port', 'Specify port to listen. Default is 3000.')
    .action(function(dir, cmd) {
        console.log(dir + cmd);
    });

program.parse(process.argv);
