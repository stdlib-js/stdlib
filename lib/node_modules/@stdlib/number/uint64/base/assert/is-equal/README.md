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

# isEqual

> Test whether two 64-bit unsigned integers are equal.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isEqual = require( '@stdlib/number/uint64/base/assert/is-equal' );
```

#### isEqual( a, b )

Tests whether two 64-bit unsigned integers are equal.

```javascript
var Uint64 = require( '@stdlib/number/uint64/ctor' );

var a = new Uint64( 1234 );
var b = Uint64.of( 0, 1234 );

var out = isEqual( a, b );
// returns true
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
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var isEqual = require( '@stdlib/number/uint64/base/assert/is-equal' );

var a = new Uint64( 1234 );
var b = Uint64.of( 0, 1234 );
var out = isEqual( a, b );
// returns true

a = new Uint64( 1234 );
b = new Uint64( 5678 );
out = isEqual( a, b );
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

</section>

<!-- /.links -->
