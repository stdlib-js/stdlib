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

# expm1f

> Compute `exp(x) - 1` for a single-precision floating-point number.

<section class="intro">

The natural [exponential function][exponential-function] minus one is defined as

<!-- <equation class="equation" label="eq:natural_exponential_function_minus_one" align="center" raw="y = e^x - 1" alt="Natural exponential function minus one."> -->

```math
y = e^x - 1
```

<!-- <div class="equation" align="center" data-raw-text="y = e^x - 1" data-equation="eq:natural_exponential_function_minus_one">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@59ded26cf977eb741b49ca66f32901fc903bac2d/lib/node_modules/@stdlib/math/base/special/expm1f/docs/img/equation_natural_exponential_function_minus_one.svg" alt="Natural exponential function minus one.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var expm1f = require( '@stdlib/math/base/special/expm1f' );
```

#### expm1f( x )

Computes `exp(x) - 1` for a single-precision floating-point number, where `exp(x)` is the natural [exponential function][exponential-function].

```javascript
var v = expm1f( 0.2 );
// returns ~0.221

v = expm1f( -9.0 );
// returns ~-1.0

v = expm1f( 0.0 );
// returns 0.0

v = expm1f( NaN );
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
var expm1f = require( '@stdlib/math/base/special/expm1f' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'e^%0.4f - 1 = %0.4f', x, expm1f );
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
#include "stdlib/math/base/special/expm1f.h"
```

#### stdlib_base_expm1f( x )

Computes `exp(x) - 1` for a single-precision floating-point number, where `exp(x)` is the natural [exponential function][exponential-function].

```c
float out = stdlib_base_expm1f( 0.2f );
// returns ~0.221f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_expm1f( const float x );
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
#include "stdlib/math/base/special/expm1f.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -5.0f, -3.89f, -2.78f, -1.67f, -0.56f, 0.56f, 1.67f, 2.78f, 3.89f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_expm1f( x[ i ] );
        printf( "e^%f - 1 = %f\n", x[ i ], v );
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

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
