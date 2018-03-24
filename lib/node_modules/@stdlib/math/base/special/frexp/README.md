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

# frexp

> Split a [double-precision floating-point number][ieee754] into a normalized fraction and an integer power of two.

<section class="usage">

## Usage

```javascript
var frexp = require( '@stdlib/math/base/special/frexp' );
```

#### frexp( \[out,] x )

Splits a [double-precision floating-point number][ieee754] into a normalized fraction and an integer power of two.

```javascript
var out = frexp( 4.0 );
// returns [ 0.5, 3 ]
```

By default, the function returns the normalized fraction and the exponent as a two-element `array`. The normalized fraction and exponent satisfy the relation `x = frac * 2^exp`.

```javascript
var pow = require( '@stdlib/math/base/special/pow' );

var x = 4.0;
var out = frexp( x );
// returns [ 0.5, 3 ]

var frac = out[ 0 ];
var exp = out[ 1 ];

var bool = ( x === frac * pow(2.0, exp) );
// returns true
```

To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var y = frexp( out, 4.0 );
// returns <Float64Array>[ 0.5, 3 ]

var bool = ( y === out );
// returns true
```

If provided positive or negative zero, `NaN`, or positive or negative `infinity`, the function returns a two-element `array` containing the input value and an exponent equal to `0`.

```javascript
var out = frexp( 0.0 );
// returns [ 0.0, 0 ]

out = frexp( -0.0 );
// returns [ -0.0, 0 ]

out = frexp( NaN );
// returns [ NaN, 0 ]

out = frexp( Infinity );
// returns [ Infinity, 0 ]

out = frexp( -Infinity );
// returns [ -Infinity, 0 ]
```

For all other numeric input values, the [absolute value][@stdlib/math/base/special/abs] of the normalized fraction resides on the interval `[0.5,1)`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Care should be taken when reconstituting a [double-precision floating-point number][ieee754] from a normalized fraction and an exponent. For example,

    ```javascript
    var pow = require( '@stdlib/math/base/special/pow' );

    var x = 8.988939926493918e+307; // x ~ 2^1023

    var out = frexp( x );
    // returns [ 0.5000263811533315, 1024 ]

    // Naive reconstitution:
    var y = out[ 0 ] * pow( 2.0, out[ 1 ] );
    // returns Infinity

    // Account for 2^1024 evaluating as infinity by recognizing 2^1024 = 2^1 * 2^1023:
    y = out[ 0 ] * pow( 2.0, out[1]-1023 ) * pow( 2.0, 1023 );
    // returns 8.988939926493918e+307
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var BIAS = require( '@stdlib/constants/math/float64-exponent-bias' );
var frexp = require( '@stdlib/math/base/special/frexp' );

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

// Generate random numbers and break each into a normalized fraction and an integer power of two...
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
    if ( f[ 1 ] > BIAS ) {
        v = f[ 0 ] * pow( 2.0, f[1]-BIAS ) * pow( 2.0, BIAS );
    } else {
        v = f[ 0 ] * pow( 2.0, f[ 1 ] );
    }
    console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/special/abs

</section>

<!-- /.links -->
