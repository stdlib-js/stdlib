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

# sechf

> Compute the [hyperbolic secant][hyperbolic-functions] of a single-precision floating-point number.

<section class="intro">

The [hyperbolic secant][hyperbolic-functions] is defined as

<!-- <equation class="equation" label="eq:hyperbolic_secant" align="center" raw="\operatorname{sech}(x) = \frac{1}{\cosh(x)} = \frac{2}{e^x + e^{-x}}" alt="Hyperbolic secant"> -->

```math
\mathop{\mathrm{sech}}(x) = \frac{1}{\cosh(x)} = \frac{2}{e^x + e^{-x}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{sech}(x) = \frac{1}{\cosh(x)} = \frac{2}{e^x + e^{-x}}" data-equation="eq:hyperbolic_secant">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@ffd6ded5947d911657cac30a4548743bc210d2a5/lib/node_modules/@stdlib/math/base/special/sechf/docs/img/equation_hyperbolic_secant.svg" alt="Hyperbolic secant">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sechf = require( '@stdlib/math/base/special/sechf' );
```

#### sechf( x )

Computes the [hyperbolic secant][hyperbolic-functions] of a single-precision floating-point number.

```javascript
var v = sechf( 0.0 );
// returns 1.0

v = sechf( 2.0 );
// returns ~0.2658

v = sechf( -2.0 );
// returns ~0.2658

v = sechf( NaN );
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
var sechf = require( '@stdlib/math/base/special/sechf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'sechf(%0.4f) = %0.4f', x, sechf );
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
#include "stdlib/math/base/special/sechf.h"
```

#### stdlib_base_sechf( x )

Computes the [hyperbolic secant][hyperbolic-functions] of a single-precision floating-point number.

```c
float out = stdlib_base_sechf( 2.0f );
// returns ~0.2658f

out = stdlib_base_sechf( -2.0f );
// returns ~0.2658f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_sechf( const float x );
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
#include "stdlib/math/base/special/sechf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -5.0f, -3.89f, -2.78f, -1.67f, -0.56f, 0.56f, 1.67f, 2.78f, 3.89f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_sechf( x[ i ] );
        printf( "sechf(%f) = %f\n", x[ i ], v );
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
