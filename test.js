import test from 'ava';
import toDoubleQuotes from './index.js';

test('convert matching single-quotes to double-quotes', t => {
	t.is(toDoubleQuotes(''), '');
	t.is(toDoubleQuotes('foo'), 'foo');
	t.is(toDoubleQuotes('\'\''), '""');
	t.is(toDoubleQuotes('""'), '""');
	t.is(toDoubleQuotes('\'foo\''), '"foo"');
	t.is(toDoubleQuotes('"foo"'), '"foo"');
	t.is(toDoubleQuotes('bar "foo" baz'), 'bar "foo" baz');
	t.is(toDoubleQuotes('\'bar\' "foo" \'baz\''), '"bar" "foo" "baz"');
	t.is(toDoubleQuotes('\\\'foo\\\''), '"foo"');
	t.is(toDoubleQuotes('{\'a\':\'<a href=\\\'addr\\\'>\'}'), JSON.stringify({a: '<a href=\'addr\'>'}));
	t.is(toDoubleQuotes('{\'a\':\'aa\\n<a href=\\\'addr\\\'>\'}'), JSON.stringify({a: 'aa\n<a href=\'addr\'>'}));
	t.is(toDoubleQuotes(JSON.stringify({a: 'b""c'})), '{"a":"b\\"\\"c"}');
});

test('convert matching single-quotes to double-quotes despite backslashes', t => {
	t.is(toDoubleQuotes('\'1\\"\''), '"1\\\\""', 'First sequence in the string');
	t.is(toDoubleQuotes('\'\\"\''), '"\\\\""', 'Not the first sequence in the string');
	t.is(toDoubleQuotes('\'\\\\"\''), '"\\\\\\""', 'Double backslash');
	t.is(toDoubleQuotes('\'\\\\" \\\\"\''), '"\\\\\\" \\\\\\""', 'Repetition');
	t.is(toDoubleQuotes('\'\\\\n \\\\"\''), '"\\\\n \\\\\\""', 'With another backslash character');
});
