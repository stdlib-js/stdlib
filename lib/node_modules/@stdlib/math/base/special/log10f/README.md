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

# Common Logarithm

> Evaluate the [common logarithm][common-logarithm] (base ten) of a single-precision floating-point number.

<section class="intro">

The [common logarithm][common-logarithm] (logarithm with base 10) is defined for any positive single-precision floating-point number as

<!-- <equation class="equation" label="eq:common_logarithm" align="center" raw="\quad \log_{10} \left( x \right) = y \quad \text{such that} \quad 10^y = x" alt="Equation for the common logarithm."> -->

```math
\quad \log_{10} \left( x \right) = y \quad \text{such that} \quad 10^y = x
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var log10f = require( '@stdlib/math/base/special/log10f' );
```

#### log10f( x )

Evaluates the [common logarithm][common-logarithm] (base ten) of a single-precision floating-point number.

```javascript
var v = log10f( 100.0 );
// returns ~2.0

v = log10f( 8.0 );
// returns ~0.903

v = log10f( 0.0 );
// returns -Infinity

v = log10f( Infinity );
// returns Infinity

v = log10f( NaN );
// returns NaN
```

For negative numbers, the [common logarithm][common-logarithm] is **not** defined.

```javascript
var v = log10f( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var log10f = require( '@stdlib/math/base/special/log10f' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 100, 0, 100, opts );

logEachMap( 'log10f(%0.4f) = %0.4f', x, log10f );
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
#include "stdlib/math/base/special/log10f.h"
```

#### stdlib_base_log10f( x )

Evaluates the [common logarithm][common-logarithm] (base ten) of a single-precision floating-point number.

```c
float out = stdlib_base_log10f( 100.0f );
// returns ~2.0f

out = stdlib_base_log10f( 8.0f );
// returns ~0.903f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_log10f( const float x );
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
#include "stdlib/math/base/special/log10f.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.01f, 0.1f, 1.0f, 2.0f, 4.0f, 8.0f, 10.0f, 100.0f, 1000.0f, 0.0f / 0.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_log10f( x[ i ] );
        printf( "log10f(%f) = %f\n", x[ i ], v );
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

[common-logarithm]: https://en.wikipedia.org/wiki/Common_logarithm

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
