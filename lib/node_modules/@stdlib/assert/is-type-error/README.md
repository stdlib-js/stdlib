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

# isTypeError

> Test if a value is a [TypeError][mdn-type-error] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isTypeError = require( '@stdlib/assert/is-type-error' );
```

#### isTypeError( value )

Tests if a `value` is a [`TypeError`][mdn-type-error] object.

```javascript
var bool = isTypeError( new TypeError( 'beep' ) );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function should **not** be considered robust. While the function should **always** return `true` if provided a [`TypeError`][mdn-type-error] (or a descendant) object, false positives may occur due to the fact that the [`TypeError`][mdn-type-error] constructor inherits from [`Error`][mdn-error] and has no internal class of its own. Hence, [`TypeError`][mdn-type-error] impersonation is possible.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isTypeError = require( '@stdlib/assert/is-type-error' );

var bool = isTypeError( new TypeError( 'type error' ) );
// returns true

bool = isTypeError( new Error( 'error' ) );
// returns false

bool = isTypeError( new EvalError( 'eval error' ) );
// returns false

bool = isTypeError( new ReferenceError( 'reference error' ) );
// returns false

bool = isTypeError( new SyntaxError( 'syntax error' ) );
// returns false

bool = isTypeError( new RangeError( 'range error' ) );
// returns false

bool = isTypeError( new URIError( 'URI error' ) );
// returns false

bool = isTypeError( {} );
// returns false

bool = isTypeError( null );
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

[mdn-type-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

</section>

<!-- /.links -->
