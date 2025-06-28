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

# roundNearestEven

> Round a double-precision floating-point number to the nearest integer value with ties rounding to the nearest even integer.

<section class="usage">

## Usage

```javascript
var roundNearestEven = require( '@stdlib/math/base/special/round-nearest-even' );
```

#### roundNearestEven( x )

Rounds a double-precision floating-point number to the nearest integer value with ties rounding to the nearest even integer.

```javascript
var v = roundNearestEven( -3.5 );
// returns -4.0

v = roundNearestEven( -4.2 );
// returns -4.0

v = roundNearestEven( -4.5 );
// returns -4.0

v = roundNearestEven( -4.6 );
// returns -5.0

v = roundNearestEven( 9.99999 );
// returns 10.0

v = roundNearestEven( 8.5 );
// returns 8.0

v = roundNearestEven( 9.5 );
// returns 10.0

v = roundNearestEven( 9.2 );
// returns 9.0

v = roundNearestEven( 0.0 );
// returns 0.0

v = roundNearestEven( -0.0 );
// returns -0.0

v = roundNearestEven( Infinity );
// returns Infinity

v = roundNearestEven( -Infinity );
// returns -Infinity

v = roundNearestEven( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var roundNearestEven = require( '@stdlib/math/base/special/round-nearest-even' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'roundNearestEven(%.4f) = %.4f', x, roundNearestEven );
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
#include "stdlib/math/base/special/round_nearest_even.h"
```

#### stdlib_base_round_nearest_even( x )

Rounds a double-precision floating-point number to the nearest integer value with ties rounding to the nearest even integer.

```c
double out = stdlib_base_round_nearest_even( -4.5 );
// returns -4.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_round_nearest_even( const double x );
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
#include "stdlib/math/base/special/round_nearest_even.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -5.0, -3.89, -2.78, -1.67, -0.50, 0.50, 1.67, 2.78, 3.89, 5.0 };

    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_round_nearest_even( x[ i ] );
        printf( "roundNearestEven(%lf) = %lf\n", x[ i ], v );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
