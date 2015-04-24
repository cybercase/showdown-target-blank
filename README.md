Showdown's Target Blank Extension
==========================

[![Build Status](https://travis-ci.org/cybercase/showdown-target-blank.svg)](https://travis-ci.org/cybercase/showdown-target-blank)

------

**Target Blank extension for [showdown](https://github.com/showdownjs/showdown)**

Adds support for:

    \[somelink\](https://some.url.com/some/path) -> <a target="_blank" href="..." >somelink</a>

## Installation

### With [npm](http://npmjs.org)

    npm install showdown-target-blank

### With [bower](http://bower.io/)

    bower install showdown-target-blank

### Manual

You can also [download the latest release zip or tarball](https://github.com/cybercase/showdown-target-blank/releases) and include it in your webpage, after showdown:

    <script src="showdown.min.js">
    <script src="showdown-target-blank.min.js">

### Enabling the extension

After including the extension in your application, you just need to enable it in showdown.

    var converter = new Showdown.converter({extensions: ['target-blank']});

## Example

```javascript
var converter = new Showdown.converter({extensions: ['target-blank']}),
    input = 'This is a [link](http://www.example.com)',
    html = converter.makeHtml(input);
    console.log(html);
```

This should output:

```html
<p>This is a <a target="_blank" href="http://example.com">link</a></p>
```

## License
These files are distributed under BSD license. For more information, please check the [LICENSE file](https://github.com/cybercase/showdown-target-blank/blob/master/LICENSE) in the source code.

