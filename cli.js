#!/usr/bin/env node
'use strict';
var stdin = require('get-stdin');
var pkg = require('./package.json');
var toDoubleQuotes = require('./');
var argv = process.argv.slice(2);
var input = argv[0];

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    to-double-quotes <string>',
		'    echo <string> | to-double-quotes',
		'',
		'  Example',
		'    to-double-quotes "I love \'unicorns\'"',
		'    I love "unicorns"'
	].join('\n'));
}

function init(data) {
	console.log(toDoubleQuotes(data));
}

if (argv.indexOf('--help') !== -1) {
	help();
	return;
}

if (argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

if (process.stdin.isTTY) {
	if (!input) {
		help();
		return;
	}

	init(input);
} else {
	stdin(init);
}
