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

# ldexp

> Multiply a [double-precision floating-point number][ieee754] by an integer power of two.

<section class="usage">

## Usage

```javascript
var ldexp = require( '@stdlib/math/base/special/ldexp' );
```

#### ldexp( frac, exp )

Multiplies a [double-precision floating-point number][ieee754] by an `integer` power of two; i.e., `x = frac * 2^exp`.

```javascript
var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
// returns 4.0

x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
// returns 1.0
```

If `frac` equals positive or negative `zero`, `NaN`, or positive or negative `infinity`, the function returns a value equal to `frac`.

```javascript
var x = ldexp( 0.0, 20 );
// returns 0.0

x = ldexp( -0.0, 39 );
// returns -0.0

x = ldexp( NaN, -101 );
// returns NaN

x = ldexp( Infinity, 11 );
// returns Infinity

x = ldexp( -Infinity, -118 );
// returns -Infinity
```

<section class="usage">

<section class="notes">

## Notes

-   This function is the inverse of [`frexp`][@stdlib/math/base/special/frexp].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var frexp = require( '@stdlib/math/base/special/frexp' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

/*
* 1) Generate random numbers.
* 2) Break each number into a normalized fraction and an integer power of two.
* 3) Reconstitute the original number.
*/
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    frac = randu() * 10.0;
    exp = round( randu()*616.0 ) - 308;
    x = sign * frac * pow( 10.0, exp );
    f = frexp( x );
    v = ldexp( f[ 0 ], f[ 1 ] );
    console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[@stdlib/math/base/special/frexp]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/frexp

</section>

<!-- /.links -->
