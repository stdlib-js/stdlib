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

# White Space

> [Regular expression][regexp] to match a [white space][whitespace] character.

<section class="usage">

## Usage

```javascript
var reWhitespace = require( '@stdlib/regexp/whitespace' );
```

#### reWhitespace( \[options] )

Returns a [regular expression][regexp] to match a [white space][whitespace] character. 

```javascript
var RE_WHITESPACE = reWhitespace();

var bool = RE_WHITESPACE.test( '\n' );
// returns true

bool = RE_WHITESPACE.test( ' ' );
// returns true
```

The function accepts an `options` object with optional properties:

-   **flags**: `string` specifying regular expression [flags][mdn-regexp-flags]. Default: `''`.
-   **capture**: `boolean` indicating whether to create a capture group for the match. Default: `false`.

By default, the function returns a regular expression which does not have any flags specified. To specify [flags][mdn-regexp-flags], set the `flags` option with a list of flags (which may be in any order).

```javascript
var RE_WHITESPACE = reWhitespace({
    'flags': 'gm'
});

var str = 'Hello World!';
var bool = RE_WHITESPACE.test( str );
// returns true

bool = RE_WHITESPACE.test( str );
// returns false
```

By default, the function returns a regular expression which does not capture the part of a string matching the regular expression. To capture matches, set the `capture` option.

```javascript
var RE_WHITESPACE = reWhitespace({
    'capture': true
});
var str = 'Hello World!';
var arr = str.split( RE_WHITESPACE );
// returns [ 'Hello', ' ', 'World!' ]
```

#### reWhitespace.REGEXP

[Regular expression][regexp] to match a [white space][whitespace] character. 

```javascript
var bool = reWhitespace.REGEXP.test( '\n' );
// returns true

bool = reWhitespace.REGEXP.test( '\\n' );
// returns false
```

#### reWhitespace.REGEXP_CAPTURE

[Regular expression][regexp] to capture characters matching a [white space][whitespace] character. 

```javascript
var replace = require( '@stdlib/string/replace' );

var str = 'Duplicate capture';
var out = replace( str, reWhitespace.REGEXP_CAPTURE, '$1$1' );
// returns 'Duplicate  capture'
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Matches the `25` characters defined as white space ("WSpace=Y","WS") characters in the Unicode `9.0` character database.

-   Matches one related white space character without the Unicode character property "WSpace=Y" (zero width non-breaking space which was deprecated as of Unicode 3.2).

-   The `REGEXP` regular expression is defined as 

    ```text
    /[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/
    ```

-   The `REGEXP_CAPTURE` regular expression is defined as 

    ```text
    /([\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF])/
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error",  stdlib/doctest: "off" -->

```javascript
var reWhitespace = require( '@stdlib/regexp/whitespace' );

var RE_WHITESPACE = reWhitespace();

var bool = RE_WHITESPACE.test( 'beep boop' );
// returns true

bool = RE_WHITESPACE.test( '\n' );
// returns true

bool = RE_WHITESPACE.test( '\r' );
// returns true

bool = RE_WHITESPACE.test( '\t' );
// returns true

bool = RE_WHITESPACE.test( 'beep' );
// returns false

var str = 'This is\na newline\r\ndelimited string.';

var arr = str.split( RE_WHITESPACE );
// returns [ 'This', 'is', 'a', 'newline', '', 'delimited', 'string.' ]
```

</section>

<!-- /.examples -->

<section class="links">

[regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

[whitespace]: https://en.wikipedia.org/wiki/Whitespace_character

[mdn-regexp-flags]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2

</section>

<!-- /.links -->
