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
var normalize = require( '@stdlib/number/float64/base/normalize' );
```

#### normalize( \[out,] x )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

```javascript
var out = normalize( 3.14e-319 );
// returns [ 1.4141234400356668e-303, -52 ]
```

By default, the function returns `y` and `exp` as a two-element `array`.

```javascript
var pow = require( '@stdlib/math/base/special/pow' );

var out = normalize( 3.14e-319 );
// returns [ 1.4141234400356668e-303, -52 ]

var y = out[ 0 ];
var exp = out[ 1 ];

var bool = ( y*pow(2.0, exp) === 3.14e-319 );
// returns true
```

To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = normalize( out, 3.14e-319 );
// returns <Float64Array>[ 1.4141234400356668e-303, -52 ]

var bool = ( v === out );
// returns true
```

The function expects a finite, non-zero `numeric` value `x`. If `x == 0`,

```javascript
var out = normalize( 0.0 );
// returns [ 0.0, 0 ];
```

If `x` is either positive or negative `infinity` or `NaN`,

```javascript
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );

var out = normalize( PINF );
// returns [ Infinity, 0 ]

out = normalize( NINF );
// returns [ -Infinity, 0 ]

out = normalize( NaN );
// returns [ NaN, 0 ]
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
var normalize = require( '@stdlib/number/float64/base/normalize' );

var frac;
var exp;
var x;
var v;
var i;

// Generate denormalized numbers and then normalize them...
for ( i = 0; i < 100; i++ ) {
    // Generate a random fraction:
    frac = randu() * 10.0;

    // Generate an exponent on the interval (-308,-324):
    exp = -309 - round( randu()*14.0 );

    // Create a subnormal number (~2.23e-308, ~4.94e-324):
    x = frac * pow( 10.0, exp );

    // Determine a `y` and an `exp` to "normalize" the subnormal:
    v = normalize( x );

    console.log( '%d = %d * 2^%d = %d', x, v[0], v[1], v[0]*pow(2.0, v[1]) );
}
```

</section>

<!-- /.examples -->

<section class="links">

</section>

<!-- /.links -->
