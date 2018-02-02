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

# isWhitespace

> Test whether a string contains only [white space][whitespace] characters.

<section class="usage">

## Usage

```javascript
var isWhitespace = require( '@stdlib/assert/is-whitespace' );
```

#### isWhitespace( value )

Tests whether a string contains only [white space][whitespace] characters.

```javascript
var bool = isWhitespace( '             ' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A [white space][whitespace] character is defined as one of the 25 characters defined as a [white space][whitespace] ("WSpace=Y","WS") character in the Unicode 9.0 character database, as well as one related [white space][whitespace] character without the Unicode character property "WSpace=Y" (zero width non-breaking space which was deprecated as of Unicode 3.2).
-   For non-string values, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isWhitespace = require( '@stdlib/assert/is-whitespace' );

var out = isWhitespace( '              ' );
// returns true

out = isWhitespace( '' );
// returns false

out = isWhitespace( '\\r\\n' );
// returns false

out = isWhitespace( 123 );
// returns false
```

</section>

<!-- /.examples -->

<section class="links">

[whitespace]: https://en.wikipedia.org/wiki/Whitespace_character

</section>

<!-- /.links -->
