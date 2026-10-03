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

# atanhf

> Compute the [hyperbolic arctangent][inverse-hyperbolic] of a single‐precision floating-point number.

<section class="usage">

## Usage

```javascript
var atanhf = require( '@stdlib/math/base/special/fast/atanhf' );
```

#### atanhf( x )

Computes the [hyperbolic arctangent][inverse-hyperbolic] of a single‐precision floating-point `number` (in radians).

```javascript
var v = atanhf( 0.0 );
// returns 0.0

v = atanhf( -0.0 );
// returns -0.0

v = atanhf( 0.5 );
// returns ~0.549

v = atanhf( 0.9 );
// returns ~1.472

v = atanhf( 1.0 );
// returns Infinity

v = atanhf( -1.0 );
// returns -Infinity
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var v = atanhf( -3.14 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For small `x`, the function will underflow.

    ```javascript
    var v = atanhf( 1.0e-17 );
    // returns 0.0
    // (expected 1.0e-17)
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var atanhf = require( '@stdlib/math/base/special/fast/atanhf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 103, -1.0, 1.0, opts );

logEachMap( 'atanhf(%0.4f) = %0.4f', x, atanhf );
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
#include "stdlib/math/base/special/fast/atanhf.h"
```

#### stdlib_base_fast_atanhf( x )

Computes the [hyperbolic arctangent][inverse-hyperbolic] of a single-precision floating-point number (in radians).

```c
float out = stdlib_base_fast_atanhf( 0.0f );
// returns 0.0f

out = stdlib_base_fast_atanhf( -0.0f );
// returns -0.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_fast_atanhf( const float x );
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
#include "stdlib/math/base/special/fast/atanhf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -1.0f, -0.78f, -0.56f, -0.33f, -0.11f, 0.11f, 0.33f, 0.56f, 0.78f, 1.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_fast_atanhf( x[ i ] );
        printf( "atanh(%f) = %f\n", x[ i ], v );
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

[inverse-hyperbolic]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
