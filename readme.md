# to-double-quotes

> Convert matching single-quotes to double-quotes: `I 'love' unicorns` → `I "love" unicorns`

## Install

```
$ npm install to-double-quotes
```


## Usage

```js
import toDoubleQuotes from 'to-double-quotes';

toDoubleQuotes('I love \'unicorns\' "and" \'ponies\'');
//=> 'I love "unicorns" "and" "ponies"'
```

## Related

- [to-double-quotes-cli](https://github.com/sindresorhus/to-double-quotes-cli) - CLI for this module
- [to-single-quotes](https://github.com/sindresorhus/to-single-quotes) - Convert matching double-quotes to single-quotes
