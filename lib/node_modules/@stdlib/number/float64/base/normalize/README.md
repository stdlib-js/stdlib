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

# normalize

> Return a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

<section class="usage">

## Usage

```javascript
var normalize = require( '@stdlib/number/float64/base/normalize' );
```

#### normalize( x )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

```javascript
var pow = require( '@stdlib/math/base/special/pow' );

var out = normalize( 3.14e-319 );
// returns [ 1.4141234400356668e-303, -52 ]

var y = out[ 0 ];
var exp = out[ 1 ];

var bool = ( y*pow(2.0, exp) === 3.14e-319 );
// returns true
```

The function expects a finite, non-zero numeric value `x`. If `x == 0`,

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

#### normalize.assign( x, out, stride, offset )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp` and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var v = normalize.assign( 3.14e-319, out, 1, 0);
// returns <Float64Array>[ 1.4141234400356668e-303, -52 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var randu = require( '@stdlib/random/base/uniform' );
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
    frac = randu( 0.0, 10.0 );

    // Generate an exponent on the interval (-308,-324):
    exp = discreteUniform( -323, -309 );

    // Create a subnormal number (~2.23e-308, ~4.94e-324):
    x = frac * pow( 10.0, exp );

    // Determine a `y` and an `exp` to "normalize" the subnormal:
    v = normalize( x );

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
#include "stdlib/number/float64/base/normalize.h"
```

#### stdlib_base_float64_normalize( x, \*y, \*exp )

Returns a normal number `y` and exponent `exp` satisfying `x = y * 2^exp`.

```c
#include <stdint.h>

double y;
int32_t exp;

stdlib_base_float64_normalize( 3.14, &y, &exp );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[out] double*` destination for normal number.
-   **exp**: `[out] int32_t*` destination for exponent.

```c
void stdlib_base_float64_normalize( const double x, double *y, int32_t *exp );
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
#include "stdlib/number/float64/base/normalize.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    double x[] = { 1.0, 3.14, 0.0, -0.0, 3.14e-308, 3.14e308, 1.0/0.0, 0.0/0.0 };
    int32_t exp;
    double y;
    int i;

    for ( i = 0; i < 8; i++ ) {
        stdlib_base_float64_normalize( x[ i ], &y, &exp );
        printf( "%lf => y: %lf, exp: %" PRId32 "\n", x[ i ], y, exp );
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

</section>

<!-- /.links -->
