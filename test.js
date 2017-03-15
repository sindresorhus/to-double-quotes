import test from 'ava';
import m from '.';

test('convert matching single-quotes to double-quotes', t => {
	t.is(m(''), '');
	t.is(m('foo'), 'foo');
	t.is(m('\'\''), '""');
	t.is(m('""'), '""');
	t.is(m('\'foo\''), '"foo"');
	t.is(m('"foo"'), '"foo"');
	t.is(m('bar "foo" baz'), 'bar "foo" baz');
	t.is(m('\'bar\' "foo" \'baz\''), '"bar" "foo" "baz"');
	t.is(m('\\\'foo\\\''), '"foo"');
	t.is(m('{\'a\':\'<a href=\\\'addr\\\'>\'}'), JSON.stringify({a: '<a href=\'addr\'>'}));
	t.is(m('{\'a\':\'aa\\n<a href=\\\'addr\\\'>\'}'), JSON.stringify({a: 'aa\n<a href=\'addr\'>'}));
	t.is(m(JSON.stringify({a: 'b""c'})), '{"a":"b\\"\\"c"}');
});

test('convert matching single-quotes to double-quotes despite backslashes', t => {
	t.is(m('\'1\\"\''), '"1\\\\""', 'First sequence in the string');
	t.is(m('\'\\"\''), '"\\\\""', 'Not the first sequence in the string');
	t.is(m('\'\\\\"\''), '"\\\\\\""', 'Double backslash');
	t.is(m('\'\\\\" \\\\"\''), '"\\\\\\" \\\\\\""', 'Repetition');
	t.is(m('\'\\\\n \\\\"\''), '"\\\\n \\\\\\""', 'With another backslash character');
});
