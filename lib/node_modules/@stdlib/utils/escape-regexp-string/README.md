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

# rescape

> Escape a [regular expression][mdn-regexp] string or pattern.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var rescape = require( '@stdlib/utils/escape-regexp-string' );
```

#### rescape( str )

Escapes a [regular expression][mdn-regexp] `string` or pattern.

```javascript
var str = rescape( '/[A-Z]*/' );
// returns '/\\[A\\-Z\\]\\*/'

str = rescape( '[A-Z]*' );
// returns '\\[A\\-Z\\]\\*'
```

If provided a value which is not a primitive `string`, the function **throws** a `TypeError`.

```javascript
try {
    rescape( null );
    // throws an error...
} catch ( err ) {
    console.error( err );
}
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

-   The following characters have special meaning inside of regular expressions and need to be escaped in case the characters should be treated literally:

    | description   | value    |
    | ------------- | -------- |
    | Backslash     | `&#92;`  |
    | Braces        | `{ }`    |
    | Brackets      | `[ ]`    |
    | Caret         | `^`      |
    | Dollar Sign   | `$`      |
    | Forward Slash | `/`      |
    | Asterisk      | `*`      |
    | Parentheses   | `( )`    |
    | Period        | `.`      |
    | Plus Sign     | `+`      |
    | Vertical Bar  | `&#124;` |
    | Question Mark | `?`      |

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable no-useless-escape -->

<!-- eslint no-undef: "error" -->

```javascript
var rescape = require( '@stdlib/utils/escape-regexp-string' );

var out = rescape( '/beep/' );
// returns '/beep/'

out = rescape( 'beep' );
// returns 'beep'

out = rescape( '/[A-Z]*/' );
// returns '/\\[A\\-Z\\]\\*/'

out = rescape( '[A-Z]*' );
// returns '\\[A\\-Z\\]\\*'

out = rescape( '/\\\//ig' );
// returns '/\\\\\\\//ig'

out = rescape( '\\\/' );
// returns '\\\\\\\/'

out = rescape( '/[A-Z]{0,}/' );
// returns '/\\[A\\-Z\\]\\{0,\\}/'

out = rescape( '[A-Z]{0,}' );
// returns '\\[A\\-Z\\]\\{0,\\}'

out = rescape( '/^boop$/' );
// returns '/\\^boop\\$/'

out = rescape( '^boop$' );
// returns '\\^boop\\$'

out = rescape( '/(?:.*)/' );
// returns '/\\(\\?:\\.\\*\\)/'

out = rescape( '(?:.*)' );
// returns '\\(\\?:\\.\\*\\)'

out = rescape( '/(?:beep|boop)/' );
// returns '/\\(\\?:beep\\|boop\\)/'

out = rescape( '(?:beep|boop)' );
// returns '\\(\\?:beep\\|boop\\)'
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
