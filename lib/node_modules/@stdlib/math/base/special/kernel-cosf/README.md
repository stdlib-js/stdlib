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

# kernelCosf

> Compute the [cosine][cosine] of a number on `[-π/4, π/4]` in single-precision floating-point format.

<section class="usage">

## Usage

```javascript
var kernelCosf = require( '@stdlib/math/base/special/kernel-cosf' );
```

#### kernelCosf( x )

Computes the [cosine][cosine] of a number on `[-π/4, π/4]` in single-precision floating-point format.

```javascript
var v = kernelCosf( 0.0 );
// returns ~1.0

v = kernelCosf( 3.141592653589793/6.0 );
// returns ~0.866

v = kernelCosf( 0.785 );
// returns ~0.707

v = kernelCosf( NaN );
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
var kernelCosf = require( '@stdlib/math/base/special/kernel-cosf' );

var x = linspace( -PI/4.0, PI/4.0, 100 );

logEachMap( 'kernelCosf(%0.4f) = %0.4f', x, kernelCosf );
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
#include "stdlib/math/base/special/kernel_cosf.h"
```

#### stdlib_base_kernel_cosf( x )

Computes the [cosine][cosine] of a number on `[-π/4, π/4]` in single-precision floating-point format.

```c
float v = stdlib_base_kernel_cosf( 0.0 );
// returns ~1.0f

v = stdlib_base_kernel_cosf( 3.141592653589793/6.0 );
// returns ~0.866f
```

The function accepts the following arguments:

-   **x**: `[in] double` input value (in radians, assumed to be bounded by `~pi/4` in magnitude).

```c
float stdlib_base_kernel_cosf( const double x );
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
#include "stdlib/math/base/special/kernel_cosf.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -0.7853981633974483, -0.6108652381980153, -0.4363323129985824, -0.26179938779914946, -0.08726646259971649, 0.08726646259971649, 0.26179938779914935, 0.43633231299858233, 0.6108652381980153, 0.7853981633974483 };

    float out;
    int i;
    for ( i = 0; i < 10; i++ ) {
        out = stdlib_base_kernel_cosf( x[ i ] );
        printf( "kernelCosf(%lf) = %f\n", x[ i ], out );
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

[cosine]: https://en.wikipedia.org/wiki/Cosine

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
