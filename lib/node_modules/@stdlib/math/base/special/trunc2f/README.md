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

# trunc2f

> Round a single-precision floating-point number to the nearest power of two toward zero.

<section class="intro">

<!-- <equation class="equation" label="eq:trunc2_function" align="center" raw="y = \operatorname{sgn}(x) \cdot 2^{\lfloor \log_2 |x| \rfloor}" alt="Truncate to nearest power of two"> -->

```math
y = \mathop{\mathrm{sgn}}(x) \cdot 2^{\lfloor \log_2 |x| \rfloor}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var trunc2f = require( '@stdlib/math/base/special/trunc2f' );
```

#### trunc2f( x )

Rounds a single-precision floating-point number to the nearest power of two toward zero.

```javascript
var v = trunc2f( -4.2 );
// returns -4.0

v = trunc2f( -4.5 );
// returns -4.0

v = trunc2f( -4.6 );
// returns -4.0

v = trunc2f( 9.99999 );
// returns 8.0

v = trunc2f( 9.5 );
// returns 8.0

v = trunc2f( 13.0 );
// returns 8.0

v = trunc2f( -13.0 );
// returns -8.0

v = trunc2f( 0.0 );
// returns 0.0

v = trunc2f( -0.0 );
// returns -0.0

v = trunc2f( Infinity );
// returns Infinity

v = trunc2f( -Infinity );
// returns -Infinity

v = trunc2f( NaN );
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
var trunc2f = require( '@stdlib/math/base/special/trunc2f' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'x: %0.4f. Rounded: %0.4f.', x, trunc2f );
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
#include "stdlib/math/base/special/trunc2f.h"
```

#### stdlib_base_trunc2f( x )

Rounds a single-precision floating-point number to the nearest power of two toward zero.

```c
float y = stdlib_base_trunc2f( -4.2f );
// returns -4.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_trunc2f( const float x );
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
#include "stdlib/math/base/special/trunc2f.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, 0.0f / 0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_trunc2f( x[ i ] );
        printf( "trunc2f(%f) = %f\n", x[ i ], y );
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
