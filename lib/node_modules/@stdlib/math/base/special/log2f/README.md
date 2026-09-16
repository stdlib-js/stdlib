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

# Binary Logarithm

> Evaluate the [binary logarithm][binary-logarithm] (base two) of a single-precision floating-point number.

<section class="intro">

The [binary logarithm][binary-logarithm] (logarithm with base 2) is defined for any positive single-precision floating-point number as

<!-- <equation class="equation" label="eq:binary_logarithm" align="center" raw="\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x" alt="Equation for the binary logarithm."> -->

```math
\quad \log_{2} \left( x \right) = y \quad \text{such that} \quad 2^y = x
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var log2f = require( '@stdlib/math/base/special/log2f' );
```

#### log2f( x )

Evaluates the [binary logarithm][binary-logarithm] (base two) of a single-precision floating-point number.

```javascript
var v = log2f( 4.0 );
// returns 2.0

v = log2f( 8.0 );
// returns 3.0

v = log2f( 0.0 );
// returns -Infinity

v = log2f( Infinity );
// returns Infinity

v = log2f( NaN );
// returns NaN
```

For negative numbers, the [binary logarithm][binary-logarithm] is **not** defined.

```javascript
var v = log2f( -4.0 );
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
var log2f = require( '@stdlib/math/base/special/log2f' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, 0.0, 100.0, opts );

logEachMap( 'log2f(%0.4f) = %0.4f', x, log2f );
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
#include "stdlib/math/base/special/log2f.h"
```

#### stdlib_base_log2f( x )

Evaluates the [binary logarithm][binary-logarithm] (base two) of a single-precision floating-point number.

```c
float out = stdlib_base_log2f( 4.0f );
// returns 2.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_log2f( const float x );
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
#include "stdlib/math/base/special/log2f.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.01f, 0.1f, 1.0f, 2.0f, 4.0f, 8.0f, 16.0f, 100.0f, 1000.0f, 0.0f / 0.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_log2f( x[ i ] );
        printf( "log2f(%f) = %f\n", x[ i ], v );
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

[binary-logarithm]: https://en.wikipedia.org/wiki/Binary_logarithm

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
