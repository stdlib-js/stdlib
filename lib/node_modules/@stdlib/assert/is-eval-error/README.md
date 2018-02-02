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

# isEvalError

> Test if a value is an [EvalError][mdn-eval-error] object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isEvalError = require( '@stdlib/assert/is-eval-error' );
```

#### isEvalError( value )

Tests if a `value` is an [`EvalError`][mdn-eval-error] object.

```javascript
var bool = isEvalError( new EvalError( 'beep' ) );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function should **not** be considered robust. While the function should **always** return `true` if provided an [`EvalError`][mdn-eval-error] (or a descendant) object, false positives may occur due to the fact that the [`EvalError`][mdn-eval-error] constructor inherits from [`Error`][mdn-error] and has no internal class of its own. Hence, [`EvalError`][mdn-eval-error] impersonation is possible.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEvalError = require( '@stdlib/assert/is-eval-error' );

var bool = isEvalError( new EvalError( 'eval error' ) );
// returns true

bool = isEvalError( new Error( 'error' ) );
// returns false

bool = isEvalError( new RangeError( 'range error' ) );
// returns false

bool = isEvalError( new ReferenceError( 'reference error' ) );
// returns false

bool = isEvalError( new SyntaxError( 'syntax error' ) );
// returns false

bool = isEvalError( new TypeError( 'type error' ) );
// returns false

bool = isEvalError( new URIError( 'URI error' ) );
// returns false

bool = isEvalError( {} );
// returns false

bool = isEvalError( null );
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

[mdn-eval-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError

</section>

<!-- /.links -->
