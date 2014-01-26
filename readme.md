# to-double-quotes [![Build Status](https://travis-ci.org/sindresorhus/to-double-quotes.png?branch=master)](http://travis-ci.org/sindresorhus/to-double-quotes)

> Convert matching single-quotes to double-quotes: `I 'love' unicorns` => `I "love" unicorns`

See [to-single-quotes](https://github.com/sindresorhus/to-single-quotes) for the inverse.


## Install

Download [manually](https://github.com/sindresorhus/to-double-quotes/releases) or with a package-manager.

#### [npm](https://npmjs.org/package/to-double-quotes)

```
npm install --save to-double-quotes
```

Or globally if you want to use it as a CLI app:

```
npm install --global to-double-quotes
```

You can then use it in your terminal like:

```
to-double-quotes src/*.txt
```

*(make sure to have a backup before running this!)*

Or pipe something to it:

```
cat input.txt | to-double-quotes > output.txt
```

#### [Bower](http://bower.io)

```
bower install --save to-double-quotes
```

#### [Component](https://github.com/component/component)

```
component install sindresorhus/to-double-quotes
```


## Example

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


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
