<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Logarithm

> Compute the base `b` [logarithm][logarithm] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var logf = require( '@stdlib/math/base/special/logf' );
```

#### logf( x, b )

Computes the base `b` logarithm of a single-precision floating-point number.

```javascript
var v = logf( 100.0, 10.0 );
// returns 2.0

v = logf( 16.0, 2.0 );
// returns 4.0

v = logf( 5.0, 1.0 );
// returns Infinity
```

For negative `x` or `b`, the [logarithm][logarithm] is **not** defined.

```javascript
var v = logf( -4.0, 1.0 );
// returns NaN

v = logf( 2.0, -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/array/discrete-uniform' );
var logf = require( '@stdlib/math/base/special/logf' );

var opts = {
    'dtype': 'float32'
};

var x = randu( 100, 0, 100, opts );
var b = randu( 100, 0, 5, opts );

var i;
for ( i = 0; i < 100; i++ ) {
    console.log( 'logf( %d, %d ) = %d', x[ i ], b[ i ], logf( x[ i ], b[ i ] ) );
}
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
#include "stdlib/math/base/special/logf.h"
```

#### stdlib_base_logf( x, b )

Computes the base `b` logarithm of a single-precision floating-point number.

```c
float v = stdlib_base_logf( 100.0f, 10.0f );
// returns 2.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **b**: `[in] float` input value.

```c
float stdlib_base_logf( const float x, const float b );
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
#include "stdlib/math/base/special/logf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float out;
    float x;
    float b;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (float)rand() / (float)RAND_MAX ) * 100.0f;
        b = ( (float)rand() / (float)RAND_MAX ) * 5.0f;
        out = stdlib_base_logf( x, b );
        printf( "logf(%f, %f) = %f\n", x, b, out );
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

[logarithm]: https://en.wikipedia.org/wiki/Logarithm

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
