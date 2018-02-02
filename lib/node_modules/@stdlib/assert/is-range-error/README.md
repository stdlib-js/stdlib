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

# isRangeError

> Test if a value is a [RangeError][mdn-range-error] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isRangeError = require( '@stdlib/assert/is-range-error' );
```

#### isRangeError( value )

Tests if a `value` is a [`RangeError`][mdn-range-error] object.

```javascript
var bool = isRangeError( new RangeError( 'beep' ) );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function should **not** be considered robust. While the function should **always** return `true` if provided a [`RangeError`][mdn-range-error] (or a descendant) object, false positives may occur due to the fact that the [`RangeError`][mdn-range-error] constructor inherits from [`Error`][mdn-error] and has no internal class of its own. Hence, [`RangeError`][mdn-range-error] impersonation is possible.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isRangeError = require( '@stdlib/assert/is-range-error' );

var bool = isRangeError( new RangeError( 'range error' ) );
// returns true

bool = isRangeError( new Error( 'error' ) );
// returns false

bool = isRangeError( new EvalError( 'eval error' ) );
// returns false

bool = isRangeError( new ReferenceError( 'reference error' ) );
// returns false

bool = isRangeError( new SyntaxError( 'syntax error' ) );
// returns false

bool = isRangeError( new TypeError( 'type error' ) );
// returns false

bool = isRangeError( new URIError( 'URI error' ) );
// returns false

bool = isRangeError( {} );
// returns false

bool = isRangeError( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[mdn-range-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError

</section>

<!-- /.links -->
