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

# kernelSinf

> Compute the [sine][sine] of a number on `[-π/4, π/4]` in single-precision floating-point format.

<section class="usage">

## Usage

```javascript
var kernelSinf = require( '@stdlib/math/base/special/kernel-sinf' );
```

#### kernelSinf( x )

Computes the [sine][sine] of a number on `[-π/4, π/4]` in single-precision floating-point format.

```javascript
var v = kernelSinf( 0.0 );
// returns ~0.0

v = kernelSinf( 3.141592653589793/6.0 );
// returns ~0.5

v = kernelSinf( 0.619 );
// returns ~0.580

v = kernelSinf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var PI = require( '@stdlib/constants/float64/pi' );
var kernelSinf = require( '@stdlib/math/base/special/kernel-sinf' );

var x = linspace( -PI/4.0, PI/4.0, 100 );

logEachMap( 'kernelSinf(%0.4f) = %0.4f', x, kernelSinf );
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
#include "stdlib/math/base/special/kernel_sinf.h"
```

#### stdlib_base_kernel_sinf( x )

Computes the [sine][sine] of a number on `[-π/4, π/4]` in single-precision floating-point format.

```c
float v = stdlib_base_kernel_sinf( 0.0 );
// returns ~0.0f

v = stdlib_base_kernel_sinf( 3.141592653589793/6.0 );
// returns ~0.5f
```

The function accepts the following arguments:

-   **x**: `[in] double` input value (in radians, assumed to be bounded by `~pi/4` in magnitude).

```c
float stdlib_base_kernel_sinf( const double x );
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
#include "stdlib/math/base/special/kernel_sinf.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -0.7853981633974483, -0.6108652381980153, -0.4363323129985824, -0.26179938779914946, -0.08726646259971649, 0.08726646259971649, 0.26179938779914935, 0.43633231299858233, 0.6108652381980153, 0.7853981633974483 };

    float out;
    int i;
    for ( i = 0; i < 10; i++ ) {
        out = stdlib_base_kernel_sinf( x[ i ] );
        printf( "kernelSinf(%lf) = %f\n", x[ i ], out );
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

[sine]: https://en.wikipedia.org/wiki/Sine

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
