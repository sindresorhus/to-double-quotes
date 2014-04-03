# to-double-quotes [![Build Status](https://travis-ci.org/sindresorhus/to-double-quotes.svg?branch=master)](https://travis-ci.org/sindresorhus/to-double-quotes)

> Convert matching single-quotes to double-quotes: `I 'love' unicorns` => `I "love" unicorns`

See [to-single-quotes](https://github.com/sindresorhus/to-single-quotes) for the inverse.


## Install

Download [manually](https://github.com/sindresorhus/to-double-quotes/releases) or with a package-manager.

```bash
$ npm install --save to-double-quotes
```

```bash
$ bower install --save to-double-quotes
```

```basb
$ component install sindresorhus/to-double-quotes
```


## Usage

##### Node.js

```js
var toDoubleQuotes = require('to-double-quotes');
```

##### Bower

```html
<script src="bower_components/to-double-quotes/to-double-quotes.js"></script>
```

##### Usage

```js
toDoubleQuotes('I love \'unicorns\' "and" \'ponies\'');
//=> I love "unicorns" "and" "ponies"
```


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global to-double-quotes
```

### Usage

```bash
$ to-double-quotes --help

Usage
  to-double-quotes <path|glob>
  cat input.txt | to-double-quotes > output.txt

Example
  to-double-quotes src/*.txt
```


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
