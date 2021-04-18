import toSingleQuotes from 'to-single-quotes';

export default function toDoubleQuotes(string) {
	return toSingleQuotes._transform(string, false);
}
