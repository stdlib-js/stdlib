<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# cfloornf

> Round each component of a single-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.

<section class="intro">

<!-- <equation class="equation" label="eq:cfloorn_function" align="center" raw="\operatorname{cfloorn}(a + bi, n) = \operatorname{floorn}(a, n) + \operatorname{floorn}(b, n)\,i" alt="Complex floor to n decimal places"> -->

```math
\mathop{\mathrm{cfloorn}}(a + bi, n) = \mathop{\mathrm{floorn}}(a, n) + \mathop{\mathrm{floorn}}(b, n)\,i
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{cfloorn}(a + bi, n) = \operatorname{floorn}(a, n) + \operatorname{floorn}(b, n)\,i" data-equation="eq:cfloorn_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e35241e609f4ea7a5a1e367022755bde30d3119f/lib/node_modules/@stdlib/math/base/special/cfloornf/docs/img/equation_cfloorn_function.svg" alt="Complex floor to n decimal places">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cfloornf = require( '@stdlib/math/base/special/cfloornf' );
```

#### cfloornf( z, n )

Rounds each component of a single-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );

// Round components to the nearest ten:
var v = cfloornf( new Complex64( -15.0, 15.0 ), 1 );
// returns <Complex64>[ -20.0, 10.0 ]

// If n = 0, `cfloornf` behaves like `cfloorf`:
v = cfloornf( new Complex64( -3.14, 3.14 ), 0 );
// returns <Complex64>[ -4.0, 3.0 ]

// Round components to the nearest hundred:
v = cfloornf( new Complex64( -150.0, 150.0 ), 2 );
// returns <Complex64>[ -200.0, 100.0 ]

v = cfloornf( new Complex64( NaN, NaN ), 0 );
// returns <Complex64>[ NaN, NaN ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var Complex64 = require( '@stdlib/complex/float32/ctor' );
    var f32 = require( '@stdlib/number/float64/base/to-float32' );

    var x = f32( f32( -0.2 ) - f32( 0.1 ) );
    // returns -0.30000001192092896

    // Should round components to -0.3:
    var v = cfloornf( new Complex64( x, x ), -8 );
    // returns <Complex64>[ -0.30000001192092896, -0.30000001192092896 ]
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var uniform = require( '@stdlib/random/array/uniform' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cfloornf = require( '@stdlib/math/base/special/cfloornf' );

// Generate an array of random complex numbers:
var z = new Complex64Array( uniform( 200, -50.0, 50.0, {
    'dtype': 'float32'
}));

// Generate an array of random integer powers of 10:
var n = discreteUniform( 100, -5, 0, {
    'dtype': 'int32'
});

// Round each component of each complex number to the nearest multiple of `10^n` toward negative infinity:
logEachMap( 'cfloornf(%s, %d) = %s', z, n, cfloornf );
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
#include "stdlib/math/base/special/cfloornf.h"
```

#### stdlib_base_cfloornf( z, n )

Rounds each component of a single-precision complex floating-point number to the nearest multiple of `10^n` toward negative infinity.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"

stdlib_complex64_t z = stdlib_complex64( -3.141592653589793f, 3.141592653589793f );
stdlib_complex64_t out = stdlib_base_cfloornf( z, -2 );

float re = stdlib_complex64_real( out );
// returns -3.15f

float im = stdlib_complex64_imag( out );
// returns 3.14f
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` input value.
-   **n**: `[in] int32_t` integer power of 10.

```c
stdlib_complex64_t stdlib_base_cfloornf( const stdlib_complex64_t z, const int32_t n );
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
#include "stdlib/math/base/special/cfloornf.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.5f ),
        stdlib_complex64( -3.14f, -1.5f ),
        stdlib_complex64( 0.0f, 0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    stdlib_complex64_t v;
    stdlib_complex64_t y;
    float re1;
    float im1;
    float re2;
    float im2;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cfloornf( v, -2 );
        stdlib_complex64_reim( v, &re1, &im1 );
        stdlib_complex64_reim( y, &re2, &im2 );
        printf( "cfloornf(%f + %fi, -2) = %f + %fi\n", re1, im1, re2, im2 );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
