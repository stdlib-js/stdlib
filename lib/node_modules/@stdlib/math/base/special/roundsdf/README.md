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

# roundsdf

> Round a single-precision floating-point number to the nearest value with `n` significant figures.

<section class="intro">

The function rounds a single-precision floating-point number to the specified number of [significant figures][significant-figures].

<!-- <equation class="equation" label="eq:roundsd_function" align="center" raw="y = \left\lfloor x \cdot b^{n - \lfloor \log_b |x| \rfloor - 1} + 0.5 \right\rfloor \cdot b^{\lfloor \log_b |x| \rfloor - n + 1}" alt="Round to n significant figures"> -->

```math
y = \left\lfloor x \cdot b^{n - \lfloor \log_b |x| \rfloor - 1} + 0.5 \right\rfloor \cdot b^{\lfloor \log_b |x| \rfloor - n + 1}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var roundsdf = require( '@stdlib/math/base/special/roundsdf' );
```

#### roundsdf( x, n, b )

Rounds a single-precision floating-point number to the nearest value with `n` significant figures.

```javascript
var v = roundsdf( 3.1415927410125732, 3, 10 );
// returns ~3.14

v = roundsdf( 3.1415927410125732, 1, 10 );
// returns 3.0

v = roundsdf( 12368.0, 2, 10 );
// returns 12000.0

v = roundsdf( 0.0313, 2, 2 );
// returns 0.03125
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
var roundsdf = require( '@stdlib/math/base/special/roundsdf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -5000.0, 5000.0, opts );

logEachMap( 'x: %0.4f. n: %d. b: %d. Rounded: %0.4f.', x, 5, 10, roundsdf );
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
#include "stdlib/math/base/special/roundsdf.h"
```

#### stdlib_base_roundsdf( x, n, b )

Rounds a single-precision floating-point number to the nearest value with `n` significant figures.

```c
float out = stdlib_base_roundsdf( 3.141592653589793f, 3, 10 );
// returns ~3.14f

out = stdlib_base_roundsdf( 12368.0f, 2, 10 );
// returns 12000.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **n**: `[in] int32_t` number of significant figures.
-   **b**: `[in] int32_t` base.

```c
float stdlib_base_roundsdf( const float x, const int32_t n, const int32_t b );
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
#include "stdlib/math/base/special/roundsdf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_roundsdf( x[ i ], 2, 10 );
        printf( "roundsdf(%f, 2, 10) = %f\n", x[ i ], y );
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

[significant-figures]: https://en.wikipedia.org/wiki/Significant_figures

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
