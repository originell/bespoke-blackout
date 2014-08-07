# bespoke-blackout

### Black- or White-out for [Bespoke.js](https://github.com/markdalgleish/bespoke.js)

**B**lack or **W**hite out the current screen, as is possible in professional
presentation programs.

## Download

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/originell/bespoke-blackout/master/dist/bespoke-blackout.min.js
[max]: https://raw.github.com/originell/bespoke-blackout/master/dist/bespoke-blackout.js

## Basic Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  blackout = require('bespoke-blackout');

bespoke.from('article', [
  blackout()
]);
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.blackout()
]);
```

Press `b` to blackout the screen, or `w` to whiteout.

In order to show your presentation again, just press `ESC`, `Return` or either
`b` or `w` again.


## Questions?

Contact me on GitHub or Twitter: [@originell](http://twitter.com/originell)

## License

Copyright 2013, Luis Nell  
This content is released under the MIT license  
http://luis.mit-license.org/
