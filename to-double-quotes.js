/*!
	to-double-quotes
	Convert matching single-quotes to double-quotes: I 'love' unicorns => I "love" unicorns
	https://github.com/sindresorhus/to-double-quotes
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';
	var toDoubleQuotes = function (str) {
		return str.replace(/(?:\\*)?'[^']*'/g, function (match) {
			return match
				.replace(/\\'/g, '\'')           // unescape single-quotes
				.replace(/([^\\])"/g, '$1\\\"')  // escape double-quotes
				.replace(/^'|'$/g, '"');         // convert
		});
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = toDoubleQuotes;
	} else {
		window.toDoubleQuotes = toDoubleQuotes;
	}
})();
