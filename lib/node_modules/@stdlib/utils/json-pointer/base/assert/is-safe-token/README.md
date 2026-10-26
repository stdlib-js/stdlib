<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# isSafeToken

> Test whether a JSON Pointer reference token is safe.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

This function tests whether a [JSON Pointer][json-pointer] reference token is safe to use for property traversal. Tokens matching `__proto__`, `constructor`, or `prototype` are considered unsafe as they are common prototype pollution vectors.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isSafeToken = require( '@stdlib/utils/json-pointer/base/assert/is-safe-token' );
```

#### isSafeToken( token )

Tests whether a JSON Pointer reference token is safe.

```javascript
var bool = isSafeToken( 'foo' );
// returns true

bool = isSafeToken( '__proto__' );
// returns false

bool = isSafeToken( 'constructor' );
// returns false

bool = isSafeToken( 'prototype' );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isSafeToken = require( '@stdlib/utils/json-pointer/base/assert/is-safe-token' );

var bool = isSafeToken( 'foo' );
// returns true

bool = isSafeToken( '0' );
// returns true

bool = isSafeToken( '-' );
// returns true

bool = isSafeToken( '__proto__' );
// returns false

bool = isSafeToken( 'constructor' );
// returns false

bool = isSafeToken( 'prototype' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json-pointer]: https://tools.ietf.org/html/rfc6901

</section>

<!-- /.links -->
