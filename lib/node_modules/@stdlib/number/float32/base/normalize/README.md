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

# Normalize

> Return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

<section class="usage">

## Usage

```javascript
var normalizef = require( '@stdlib/number/float32/base/normalize' );
```

#### normalizef( \[out,] x )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

```javascript
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );

var out = normalizef( toFloat32( 1.401e-45 ) );
// returns [ 1.1754943508222875e-38, -23 ]
```

By default, the function returns `y` and `exp` as a two-element `array`.

```javascript
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var pow = require( '@stdlib/math/base/special/pow' );

var out = normalizef( toFloat32( 1.401e-45 ) );
// returns [ 1.1754943508222875e-38, -23 ]

var y = out[ 0 ];
var exp = out[ 1 ];

var bool = ( y*pow(2, exp) === toFloat32(1.401e-45) );
// returns true
```

To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var v = normalizef( out, toFloat32( 1.401e-45 ) );
// returns <Float32Array>[ 1.1754943508222875e-38, -23 ]

var bool = ( v === out );
// returns true
```

The function expects a finite, non-zero [single-precision floating-point number][ieee754] `x`. If `x == 0`,

```javascript
var out = normalizef( 0.0 );
// returns [ 0.0, 0 ];
```

If `x` is either positive or negative `infinity` or `NaN`,

```javascript
var PINF = require( '@stdlib/constants/float32/pinf' );
var NINF = require( '@stdlib/constants/float32/ninf' );

var out = normalizef( PINF );
// returns [ Infinity, 0 ]

out = normalizef( NINF );
// returns [ -Infinity, 0 ]

out = normalizef( NaN );
// returns [ NaN, 0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   While the function accepts higher precision [floating-point numbers][ieee754], beware that providing such numbers can be a source of subtle bugs as the relation `x = y * 2^exp` may **not** hold.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var normalizef = require( '@stdlib/number/float32/base/normalize' );

var frac;
var exp;
var x;
var v;
var i;

// Generate denormalized single-precision floating-point numbers and then normalize them...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = 38 + round( randu()*6.0 );
    x = frac * pow( 10.0, -exp );
    x = toFloat32( x );
    v = normalizef( x );
    console.log( '%d = %d * 2^%d = %d', x, v[0], v[1], v[0]*pow(2.0, v[1]) );
}
```

</section>

<!-- /.examples -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
