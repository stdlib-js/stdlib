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

# acschf

> Compute the [hyperbolic arccosecant][inverse-hyperbolic-functions] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acschf = require( '@stdlib/math/base/special/acschf' );
```

#### acschf( x )

Computes the [hyperbolic arccosecant][inverse-hyperbolic-functions] of a single-precision floating-point number.

```javascript
var v = acschf( 0.0 );
// returns Infinity

v = acschf( -0.0 );
// returns -Infinity

v = acschf( 1.0 );
// returns ~0.881

v = acschf( -1.0 );
// returns ~-0.881

v = acschf( NaN );
// returns NaN

v = acschf( -Infinity );
// returns -0.0

v = acschf( Infinity );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var acschf = require( '@stdlib/math/base/special/acschf' );

var x = uniform( 100, 1.0, 5.0, {
    'dtype': 'float32'
});

logEachMap( 'acschf(%0.4f) = %0.4f', x, acschf );
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
#include "stdlib/math/base/special/acschf.h"
```

#### stdlib_base_acschf( x )

Computes the [hyperbolic arccosecant][inverse-hyperbolic-functions] of a single-precision floating-point number.

```c
float out = stdlib_base_acschf( 1.0f );
// returns ~0.881f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_acschf( const float x );
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
#include "stdlib/math/base/special/acschf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -5.0f, -3.89f, -2.78f, -1.67f, -0.55f, 0.55f, 1.67f, 2.78f, 3.89f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acschf( x[ i ] );
        printf( "acschf(%f) = %f\n", x[ i ], v );
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

[inverse-hyperbolic-functions]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
