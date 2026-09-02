<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# isAlmostEqual

> Test whether two complex numbers are approximately equal within a specified number of ULPs (units in the last place).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isAlmostEqual = require( '@stdlib/complex/base/assert/is-almost-equal' );
```

#### isAlmostEqual( z1, z2, maxULP )

Tests whether two complex numbers are approximately equal within a specified number of ULPs (units in the last place).

```javascript
var EPS = require( '@stdlib/constants/float64/eps' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );

var z1 = new Complex128( 1.0, 3.0 );
var z2 = new Complex128( 1.0+EPS, 3.0 );

var out = isAlmostEqual( z1, z2, 0 );
// returns false

out = isAlmostEqual( z1, z2, 1 );
// returns true
```

The function returns `false` if either input value has a `NaN` real or imaginary component.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var z1 = new Complex64( NaN, 3.0 );
var z2 = new Complex64( 1.0, 3.0 );

var out = isAlmostEqual( z1, z2, 1 );
// returns false

out = isAlmostEqual( z2, z1, 1 );
// returns false

z1 = new Complex64( NaN, NaN );
z2 = new Complex64( NaN, NaN );

out = isAlmostEqual( z1, z2, 1 );
// returns false
```

The function does not distinguish between `-0` and `+0`, treating them as equal.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var z1 = new Complex128( 0.0, 0.0 );
var z2 = new Complex64( -0.0, -0.0 );

var out = isAlmostEqual( z1, z2, 0 );
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
var EPS = require( '@stdlib/constants/float64/eps' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isAlmostEqual = require( '@stdlib/complex/base/assert/is-almost-equal' );

var z1 = new Complex128( 1.0, 3.0+EPS );
var z2 = new Complex128( 1.0+EPS, 3.0 );
console.log( isAlmostEqual( z1, z2, 1 ) );
// => true

z1 = new Complex128( 1.0, 3.0+EPS );
z2 = new Complex128( 1.0+EPS+EPS, 3.0 );
console.log( isAlmostEqual( z1, z2, 1 ) );
// => false

z1 = new Complex128( 0.0, 0.0 );
z2 = new Complex128( -0.0, 0.0 );
console.log( isAlmostEqual( z1, z2, 0 ) );
// => true

z1 = new Complex128( NaN, 0.0 );
z2 = new Complex128( 1.0, 0.0 );
console.log( isAlmostEqual( z1, z2, 1 ) );
// => false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
