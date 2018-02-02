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

# Contains

> Test if an array-like value contains a search value.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var contains = require( '@stdlib/assert/contains' );
```

#### contains( val, searchValue\[, position] )

Tests if `val` contains a search value. When `val` is a `string`, the function checks whether the characters of a search string are found in the input string.

```javascript
var v = contains( 'Hello World', 'World' );
// returns true
```

When `val` is an `array-like` object, but not a `string`, the function checks whether the input value contains an element strictly equal to the specified search value.

```javascript
var arr = [ null, NaN, 2, 'abc', {} ];

var v = contains( arr, NaN ); // NaNs are considered equal
// returns true

v = contains( arr, {} );
// returns false

v = contains( arr, 'ab' );
// returns false
```

Search is case-sensitive.

```javascript
var v = contains( 'Hello World', 'world' );
// returns false
```

To start searching at a specified index, provide a `position` argument.

```javascript
var v = contains( 'Hello World', 'Hello', 6 );
// returns false

v = contains( [ true, NaN, false ], true, 1 );
// returns false
```

If not provided an `array-like` object, the function throws an error.

<!-- run throws: true -->

```javascript
var v = contains( false, 'abc' );
// throws <TypeError>
```

If not provided an integer-valued `position` argument, the function throws an error.

<!-- run throws: true -->

```javascript
var v = contains( 'hello', 'e', 2.5 );
// throws <TypeError>
```

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   For `strings`, the function is modeled after [String.prototype.includes][mdn-includes], part of the ECMAScript 6 specification. This function is different from a call to `String.prototype.includes.call` insofar as type-checking is performed for all arguments.
-   The function does **not** distinguish between positive and negative zero.
-   If `position < 0`, the search is performed for the entire input array or string.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var contains = require( '@stdlib/assert/contains' );

var bool = contains( 'last man standing', 'stand' );
// returns true

bool = contains( [ 1, 2, 3, 4 ], 2 );
// returns true

bool = contains( 'presidential election', 'president' );
// returns true

bool = contains( [ NaN, 2, 3, 4 ], NaN );
// returns true

bool = contains( 'javaScript', 'js' );
// returns false

bool = contains( 'Hidden Treasures', '' );
// returns true
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-includes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

</section>

<!-- /.links -->
