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

# kernelLog1pf

> Evaluate a correction term for single-precision base-2 and base-10 logarithms when `1 + f` is in `[√2/2, √2]`.

<section class="usage">

## Usage

```javascript
var kernelLog1pf = require( '@stdlib/math/base/special/kernel-log1pf' );
```

#### kernelLog1pf( f )

Evaluates a correction term for single-precision base-2 and base-10 logarithms when `1 + f` is in `[√2/2, √2]`.

```javascript
var v = kernelLog1pf( 1.0 );
// returns ~0.1931

v = kernelLog1pf( 1.4142135381698608 );
// returns ~0.4672

v = kernelLog1pf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is a helper function for computing logarithms in base `e`. Argument reduction and adding the final term of the polynomial must be done by the caller for increased accuracy when different bases are used.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );
var kernelLog1pf = require( '@stdlib/math/base/special/kernel-log1pf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, sqrtf( 2.0 ) / 2.0, sqrtf( 2.0 ), opts );

logEachMap( 'kernelLog1pf(%0.4f) = %0.4f', x, kernelLog1pf );
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
#include "stdlib/math/base/special/kernel_log1pf.h"
```

#### stdlib_base_kernel_log1pf( f )

Evaluates a correction term for single-precision base-2 and base-10 logarithms when `1 + f` is in `[√2/2, √2]`.

```c
float out = stdlib_base_kernel_log1pf( 1.0f );
// returns ~0.1931f
```

The function accepts the following arguments:

-   **f**: `[in] float` input value.

```c
float stdlib_base_kernel_log1pf( const float f );
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
#include "stdlib/math/base/special/kernel_log1pf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.7071f, 0.7856f, 0.8642f, 0.9428f, 1.0213f, 1.0999f, 1.1785f, 1.2570f, 1.3356f, 1.4142f };

    float out;
    int i;
    for ( i = 0; i < 10; i++ ) {
        out = stdlib_base_kernel_log1pf( x[ i ] );
        printf ( "kernelLog1pf(%f) = %f\n", x[ i ], out );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
