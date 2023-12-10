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

# normalizef

> Return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

<section class="usage">

## Usage

```javascript
var normalizef = require( '@stdlib/number/float32/base/normalize' );
```

#### normalizef( x )

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

#### normalizef( x, out, stride, offset )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp` and assigns results to a provided output array.

```javascript
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var v = normalizef.assign( toFloat32( 1.401e-45 ), out, 1, 0 );
// returns <Float32Array>[ 1.1754943508222875e-38, -23 ]

var bool = ( v === out );
// returns true
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

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/number/float32/base/normalize.h"
```

#### stdlib_base_float32_normalize( x, \*y, \*exp )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

```c
#include <stdint.h>

float y;
int32_t exp;
stdlib_base_float32_normalize( 3.14, &y, &exp );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **y**: `[out] float*` destination for normal number.
-   **exp**: `[out] int32_t*` destination for exponent.

```c
void stdlib_base_float32_normalize( const float x, float *y, int32_t *exp );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/number/float32/base/normalize.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    float x[] = { 4.0f, 0.0f, -0.0f, 1.0f, -1.0f, 3.14f, -3.14f, 1.0e-38f, -1.0e-38f, 1.0f/0.0f, -1.0f/0.0f, 0.0f/0.0f };

    int32_t exp;
    float y;
    int i;
    for ( i = 0; i < 12; i++ ) {
        stdlib_base_float32_normalize( x[ i ], &y, &exp );
        printf( "%f => y: %f, exp: %" PRId32 "\n", x[ i ], y, exp );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
