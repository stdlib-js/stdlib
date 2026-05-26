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

# floornf

> Round a single-precision floating-point number to the nearest multiple of 10^n toward negative infinity.

<section class="usage">

## Usage

```javascript
var floornf = require( '@stdlib/math/base/special/floornf' );
```

#### floornf( x, n )

Rounds a single-precision floating-point number to the nearest multiple of `10^n` toward negative infinity.

```javascript
// Round a value to 3 decimal places:
var v = floornf( 3.14159, -3 );
// returns ~3.141

// Round a value to the nearest thousand:
v = floornf( 12368.0, 3 );
// returns ~12000.0

// If n = 0, `floornf` behaves like `floorf`:
v = floornf( 3.14159, 0 );
// returns 3.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When operating on [floating-point numbers][ieee754] in bases other than `2`, rounding to specified digits can be **inexact**. For example,

    ```javascript
    var f32 = require( '@stdlib/number/float64/base/to-float32' );

    var x = f32( f32( -0.2 ) - f32( 0.1 ) );
    // returns -0.30000001192092896

    // Should round to -0.3:
    var v = floornf( x, -8 );
    // returns -0.30000001192092896
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var floornf = require( '@stdlib/math/base/special/floornf' );

var x = uniform( 100, -50.0, 50.0, {
    'dtype': 'float32'
});
var n = discreteUniform( 100, -4, 0, {
    'dtype': 'int32'
});

logEachMap( 'x: %0.8f. Number of decimals: %d. Rounded: %0.8f', x, n, floornf );
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
#include "stdlib/math/base/special/floornf.h"
```

#### stdlib_base_floornf( x, n )

Rounds a single-precision floating-point number to the nearest multiple of `10^n` toward negative infinity.

```c
// Round a value to 3 decimal places:
float y = stdlib_base_floornf( 3.14159f, -3 );
// returns ~3.141f

// If n = 0, `floornf` behaves like `floorf`:
y = stdlib_base_floornf( 3.14159f, 0 );
// returns 3.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **n**: `[in] int32_t` integer power of 10.

```c
float stdlib_base_floornf( const float x, const int32_t n );
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
#include "stdlib/math/base/special/floornf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_floornf( x[ i ], -2 );
        printf( "floornf(%f, -2) = %f\n", x[ i ], y );
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

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
