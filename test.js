'use strict';
var assert = require('assert');
var d = require('./to-double-quotes');

it('should convert single-quotes to double-quotes', function () {
	assert.equal(d(''), '');
	assert.equal(d('foo'), 'foo');
	assert.equal(d('\'\''), '""');
	assert.equal(d('""'), '""');
	assert.equal(d('\'foo\''), '"foo"');
	assert.equal(d('"foo"'), '"foo"');
	assert.equal(d('bar "foo" baz'), 'bar "foo" baz');
	assert.equal(d('\'bar\' "foo" \'baz\''), '"bar" "foo" "baz"');
	assert.equal(d('\\\'foo\\\''), '"foo"');
});
