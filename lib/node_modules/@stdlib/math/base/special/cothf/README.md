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

# cothf

> Compute the [hyperbolic cotangent][hyperbolic-functions] of a single-precision floating-point number.

<section class="intro">

The [hyperbolic cotangent][hyperbolic-functions] function is defined as

<!-- <equation class="equation" label="eq:hyperbolic_cotangent" align="center" raw="y = \coth(x) = \frac{\cosh(x)}{\sinh(x)} = \frac{e^x + e^{-x}}{e^x - e^{-x}}" alt="Hyperbolic cotangent function"> -->

```math
y = \coth(x) = \frac{\cosh(x)}{\sinh(x)} = \frac{e^x + e^{-x}}{e^x - e^{-x}}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cothf = require( '@stdlib/math/base/special/cothf' );
```

#### cothf( x )

Computes the [hyperbolic cotangent][hyperbolic-functions] of a single-precision floating-point number.

```javascript
var v = cothf( 0.0 );
// returns Infinity

v = cothf( 2.0 );
// returns ~1.0373

v = cothf( -2.0 );
// returns ~-1.0373

v = cothf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cothf = require( '@stdlib/math/base/special/cothf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'cothf(%0.4f) = %0.4f', x, cothf );
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
#include "stdlib/math/base/special/cothf.h"
```

#### stdlib_base_cothf( x )

Computes the [hyperbolic cotangent][hyperbolic-functions] of a single-precision floating-point number.

```c
float out = stdlib_base_cothf( 2.0f );
// returns ~1.0373f

out = stdlib_base_cothf( -2.0f );
// returns ~-1.0373f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_cothf( const float x );
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
#include "stdlib/math/base/special/cothf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -5.0f, -3.89f, -2.78f, -1.67f, -0.56f, 0.56f, 1.67f, 2.78f, 3.89f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_cothf( x[ i ] );
        printf( "cothf(%f) = %f\n", x[ i ], v );
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

[hyperbolic-functions]: https://en.wikipedia.org/wiki/Hyperbolic_functions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
