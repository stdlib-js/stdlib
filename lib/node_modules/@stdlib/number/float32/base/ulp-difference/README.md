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
#include "stdlib/number/float32/base/ulp_difference.h"
```

#### stdlib_base_float32_ulp_difference( x, y )

Computes the number of representable [single-precision][single-precision] floating-point values that separate two [single-precision][single-precision] floating-point numbers along the real number line.

```c
double d = stdlib_base_float32_ulp_difference( 1.0f, 1.0f + 1.1920929e-7f );
// returns 1.0
```

The function accepts the following arguments:

-   **x**: `[in] float` first input value.
-   **y**: `[in] float` second input value.

```c
double stdlib_base_float32_ulp_difference( const float x, const float y );
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
#include "stdlib/number/float32/base/ulp_difference.h"
#include "stdlib/constants/float32/eps.h"
#include "stdlib/constants/float32/smallest_subnormal.h"
#include <stdio.h>

int main( void ) {
    const float x[] = {
        1.0f,
        5.8364e-31f,
        0.0f,
        0.0f,
        STDLIB_CONSTANT_FLOAT32_SMALLEST_SUBNORMAL
    };
    const float y[] = {
        1.0f + STDLIB_CONSTANT_FLOAT32_EPS,
        5.8367e-31f,
        STDLIB_CONSTANT_FLOAT32_SMALLEST_SUBNORMAL,
        -0.0f,
        -STDLIB_CONSTANT_FLOAT32_SMALLEST_SUBNORMAL
    };

    double d;
    int i;
    for ( i = 0; i < 5; i++ ) {
        d = stdlib_base_float32_ulp_difference( x[ i ], y[ i ] );
        printf( "ulpdiff(%f, %f) = %lf\n", x[ i ], y[ i ], d );
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

[single-precision]: https://en.wikipedia.org/wiki/Single-precision_floating-point_format

[ulp]: https://en.wikipedia.org/wiki/Unit_in_the_last_place

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
