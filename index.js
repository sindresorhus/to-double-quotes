'use strict';
const toSingleQuotes = require('to-single-quotes');

module.exports = input => toSingleQuotes._transform(input, false);
