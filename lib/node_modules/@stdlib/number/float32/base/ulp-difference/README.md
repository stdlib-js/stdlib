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

# ulpdiff

> Compute the number of representable [single-precision][single-precision] floating-point values that separate two [single-precision][single-precision] floating-point numbers along the real number line.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ulpdiff = require( '@stdlib/number/float32/base/ulp-difference' );
```

#### ulpdiff( x, y )

Computes the number of representable [single-precision][single-precision] floating-point values that separate two [single-precision][single-precision] floating-point numbers along the real number line.

```javascript
var EPS = require( '@stdlib/constants/float32/eps' );

var d = ulpdiff( 1.0, 1.0+EPS );
// returns 1.0

d = ulpdiff( 1.0+EPS, 1.0 );
// returns 1.0

d = ulpdiff( 1.0, 1.0+EPS+EPS );
// returns 2.0

d = ulpdiff( 1.0, NaN );
// returns NaN

d = ulpdiff( NaN, 1.0 );
// returns NaN

d = ulpdiff( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Adjacent [single-precision][single-precision] floating-point numbers differ by `1` [ulp][ulp] (unit in the last place).
-   Signed zeros differ only in the sign bit but are considered numerically equal, and thus their ULP difference is `0`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var EPS = require( '@stdlib/constants/float32/eps' );
var SMALLEST_SUBNORMAL = require( '@stdlib/constants/float32/smallest-subnormal' );
var ulpdiff = require( '@stdlib/number/float32/base/ulp-difference' );

var d = ulpdiff( 1.0, 1.0+EPS );
console.log( d );
// => 1.0

d = ulpdiff( 5.8364e-31, 5.8367e-31 );
console.log( d );
// => 638.0

d = ulpdiff( 0.0, SMALLEST_SUBNORMAL );
console.log( d );
// => 1.0

d = ulpdiff( 0.0, -0.0 );
console.log( d );
// => 0.0

d = ulpdiff( SMALLEST_SUBNORMAL, -SMALLEST_SUBNORMAL );
console.log( d );
// => 2.0
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[single-precision]: https://en.wikipedia.org/wiki/Single-precision_floating-point_format

[ulp]: https://en.wikipedia.org/wiki/Unit_in_the_last_place

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
