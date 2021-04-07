<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# EOL

> [Regular expression][mdn-regexp] to match a [newline][newline] character sequence.

<section class="usage">

## Usage

```javascript
var reEOL = require( '@stdlib/regexp/eol' );
```

#### reEOL( \[options] )

Returns a [Regular expression][mdn-regexp] to match a [newline][newline] character sequence. 

```javascript
var RE_EOL = reEOL();

var bool = RE_EOL.test( '\n' );
// returns true

bool = RE_EOL.test( '\r\n' );
// returns true

bool = RE_EOL.test( '\\r\\n' );
// returns false
```

The function accepts an `options` object with optional properties:

-   **flags**: `string` specifying regular expression [flags][mdn-regexp-flags]. Default: `''`.
-   **capture**: `boolean` indicating whether to create a capture group for the match. Default: `false`.

By default, the function returns a regular expression which does not have any flags specified. To specify [flags][mdn-regexp-flags], set the `flags` option with a list of flags (which may be in any order).

```javascript
var replace = require( '@stdlib/string/replace' );

var RE_EOL = reEOL({
    'flags': 'g'
});

var str = '1\n2\n3';
var out = replace( str, RE_EOL, '' );
// returns '123'
```

By default, the function returns a regular expression which does not capture the part of a string matching the regular expression. To capture matches, set the `capture` option.

```javascript
var RE_EOL = reEOL({
    'capture': true
});

var str = 'beep\nboop';
var arr = str.split( RE_EOL );
// returns [ 'beep', '\n', 'boop' ]
```

#### reEOL.REGEXP

[Regular expression][mdn-regexp] to match a [newline][newline] character sequence. 

```javascript
var bool = reEOL.REGEXP.test( 'abc' );
// returns false
```

#### reEOL.REGEXP_CAPTURE

[Regular expression][mdn-regexp] to capture a [newline][newline] character sequence. 

```javascript
var parts = reEOL.REGEXP_CAPTURE.exec( '\n' );
// returns [ '\n', '\n' ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var reEOL = require( '@stdlib/regexp/eol' );

var RE_EOL = reEOL();
var bool;
var str;

bool = RE_EOL.test( '\r\n' );
// returns true

bool = RE_EOL.test( '\n' );
// returns true

bool = RE_EOL.test( '\r' );
// returns false

bool = RE_EOL.test( '\\r\\n' );
// returns false

bool = RE_EOL.test( 'beep' );
// returns false

str = 'This is\na newline\r\ndelimited string.';

var arr = str.split( RE_EOL );
// returns [ 'This is', 'a newline', 'delimited string.' ]
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[mdn-regexp-flags]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2

[newline]: https://en.wikipedia.org/wiki/Newline

</section>

<!-- /.links -->
