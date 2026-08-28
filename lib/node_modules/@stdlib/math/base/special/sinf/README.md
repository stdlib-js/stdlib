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

# Sine

> Compute the [sine][sine] of a single-precision floating-point number (in radians).

<section class="intro">

The [sine][sine] function can be expressed as the infinite series

<!-- <equation class="equation" label="eq:sine_function" align="center" raw="\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots" alt="Sine function Taylor series expansion"> -->

```math
\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots
```

<!-- <div class="equation" align="center" data-raw-text="\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n+1)!} x^{2n+1} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots" data-equation="eq:sine_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e35241e609f4ea7a5a1e367022755bde30d3119f/lib/node_modules/@stdlib/math/base/special/sinf/docs/img/equation_sine_function.svg" alt="Sine function Taylor series expansion">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sinf = require( '@stdlib/math/base/special/sinf' );
```

#### sinf( x )

Computes the [sine][sine] of a single-precision floating-point number (in radians).

```javascript
var v = sinf( 0.0 );
// returns ~0.0

v = sinf( 3.141592653589793/2.0 );
// returns ~1.0

v = sinf( -3.141592653589793/6.0 );
// returns ~-0.5
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var TWO_PI = require( '@stdlib/constants/float32/two-pi' );
var sinf = require( '@stdlib/math/base/special/sinf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, 0.0, TWO_PI, opts );

logEachMap( 'sinf(%0.4f) = %0.4f', x, sinf );
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
#include "stdlib/math/base/special/sinf.h"
```

#### stdlib_base_sinf( x )

Computes the [sine][sine] of a single-precision floating-point number (in radians).

```c
float y = stdlib_base_sinf( 3.141592653589793f / 2.0f );
// returns ~1.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_sinf( const float x );
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
#include "stdlib/math/base/special/sinf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.0f, 0.523f, 0.785f, 1.047f, 3.14f };

    float y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_sinf( x[ i ] );
        printf( "sinf(%f) = %f\n", x[ i ], y );
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
