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

# kernelTanf

> Compute the [tangent][tangent] of a number on `[-π/4, π/4]` in single-precision floating-point format.

<section class="usage">

## Usage

```javascript
var kernelTanf = require( '@stdlib/math/base/special/kernel-tanf' );
```

#### kernelTanf( x, iy )

Computes the [tangent][tangent] of a number on `[-π/4, π/4]` in single-precision floating-point format.

```javascript
var out = kernelTanf( 3.141592653589793/4.0, 1 );
// returns ~1.0

out = kernelTanf( 3.141592653589793/6.0, 1 );
// returns ~0.577

out = kernelTanf( 0.664, 1 );
// returns ~0.783
```

If `k = 1`, the function returns `tan(x)`. To return the negative inverse `-1/tan(x)`, set `k = -1`.

```javascript
var out = kernelTanf( 3.141592653589793/4.0, -1 );
// returns ~-1.0
```

If provided `NaN` for `x`, the function returns `NaN`.

```javascript
var out = kernelTanf( NaN, 1 );
// returns NaN

out = kernelTanf( NaN, -1 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var PI = require( '@stdlib/constants/float32/pi' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var kernelTanf = require( '@stdlib/math/base/special/kernel-tanf' );

var x = linspace( -PI/4.0, PI/4.0, 100 );

logEachMap( 'kernelTanf(%0.4f, %d) = %0.4f', x, 1, kernelTanf );
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
#include "stdlib/math/base/special/kernel_tanf.h"
```

#### stdlib_base_kernel_tanf( x, iy )

Computes the [tangent][tangent] of a number on `[-π/4, π/4]` in single-precision floating-point format.

```c
float out = stdlib_base_kernel_tanf( 3.141592653589793/4.0, 1 );
// returns ~1.0f

out = stdlib_base_kernel_tanf( 3.141592653589793/6.0, 1 );
// returns ~0.577f
```

The function accepts the following arguments:

-   **x**: `[in] double` input value (in radians, assumed to be bounded by `~pi/4` in magnitude).
-   **iy**: `[in] int32_t` indicates whether `tan(x)` (if `iy = 1`) or `-1/tan(x)` (if `iy = -1`) is returned.

```c
float stdlib_base_kernel_tanf( const double x, const int32_t iy );
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
#include "stdlib/math/base/special/kernel_tanf.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -0.7853981633974483, -0.6108652381980153, -0.4363323129985824, -0.26179938779914946, -0.08726646259971649, 0.08726646259971649, 0.26179938779914935, 0.43633231299858233, 0.6108652381980153, 0.7853981633974483 };

    float out;
    int i;
    for ( i = 0; i < 10; i++ ) {
        out = stdlib_base_kernel_tanf( x[ i ], 1 );
        printf( "kernelTanf(%lf, %d) = %f\n", x[ i ], 1, out );
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

[tangent]: https://en.wikipedia.org/wiki/Tangent

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
