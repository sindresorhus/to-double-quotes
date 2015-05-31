'use strict';
var assert = require('assert');
var d = require('./');

it('should convert matching single-quotes to double-quotes', function () {
	assert.equal(d(''), '');
	assert.equal(d('foo'), 'foo');
	assert.equal(d('\'\''), '""');
	assert.equal(d('""'), '""');
	assert.equal(d('\'foo\''), '"foo"');
	assert.equal(d('"foo"'), '"foo"');
	assert.equal(d('bar "foo" baz'), 'bar "foo" baz');
	assert.equal(d('\'bar\' "foo" \'baz\''), '"bar" "foo" "baz"');
	assert.equal(d('\\\'foo\\\''), '"foo"');
	assert.equal(d('{\'a\':\'<a href=\\\'addr\\\'>\'}'), JSON.stringify({'a': '<a href=\'addr\'>'}));
	assert.equal(d('{\'a\':\'aa\\n<a href=\\\'addr\\\'>\'}'), JSON.stringify({'a': 'aa\n<a href=\'addr\'>'}));
	assert.equal(d(JSON.stringify({'a': 'b""c' })), '{"a":"b\\\"\\\"c"}');
});

it('should convert matching single-quotes to double-quotes despite backslashes', function () {
	assert.equal(d('\'1\\\"\''), '\"1\\\\\"\"', 'First sequence in the string');
	assert.equal(d('\'\\\"\''), '\"\\\\\"\"', 'Not the first sequence in the string');
	assert.equal(d('\'\\\\\"\''), '\"\\\\\\\"\"', 'Double backslash');
	assert.equal(d('\'\\\\\" \\\\\"\''), '"\\\\\\" \\\\\\""', 'Repetition');
	assert.equal(d('\'\\\\n \\\\\"\''), '"\\\\n \\\\\\""', 'With another backslash character');
});
