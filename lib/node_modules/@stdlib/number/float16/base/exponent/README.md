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

# exponent

> Return an integer corresponding to the unbiased exponent of a [half-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var exponent = require( '@stdlib/number/float16/base/exponent' );
```

#### exponent( x )

Returns an integer corresponding to the unbiased exponent of a [half-precision floating-point number][ieee754].

```javascript
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );

var exp = exponent( toFloat16( 3.14e4 ) ); // => 2^15 ≈ 3.27e4
// returns 15

exp = exponent( toFloat16( 3.14e-4 ) ); // => 2^-12 ≈ 2.44e-4
// returns -12

exp = exponent( toFloat16( -3.14 ) );
// returns 1

exp = exponent( 0.0 );
// returns -15

exp = exponent( NaN );
// returns 16
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var exponent = require( '@stdlib/number/float16/base/exponent' );

var frac;
var exp;
var x;
var e;
var i;

// Generate random numbers and extract their exponents...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = round( randu()*13.0 ) - 7;
    x = frac * pow( 10.0, exp );
    x = toFloat16( x );
    e = exponent( x );
    console.log( 'x: %d. unbiased exponent: %d.', x, e );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
