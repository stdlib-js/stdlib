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

# asinhf

> Compute the [hyperbolic arcsine][hyperbolic-arcsine] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var asinhf = require( '@stdlib/math/base/special/asinhf' );
```

#### asinhf( x )

Computes the [hyperbolic arcsine][hyperbolic-arcsine] of a single-precision floating-point number.

```javascript
var v = asinhf( 0.0 );
// returns 0.0

v = asinhf( -0.0 );
// returns -0.0

v = asinhf( 2.0 );
// returns ~1.444

v = asinhf( -2.0 );
// returns ~-1.444

v = asinhf( NaN );
// returns NaN

v = asinhf( -Infinity );
// returns -Infinity

v = asinhf( Infinity );
// returns Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var asinhf = require( '@stdlib/math/base/special/asinhf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'asinhf(%0.4f) = %0.4f', x, asinhf );
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
#include "stdlib/math/base/special/asinhf.h"
```

#### stdlib_base_asinhf( x )

Computes the [hyperbolic arcsine][hyperbolic-arcsine] of a single-precision floating-point number.

```c
float out = stdlib_base_asinhf( 2.0f );
// returns ~1.444f

out = stdlib_base_asinhf( -2.0f );
// returns ~-1.444f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_asinhf( const float x );
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
#include "stdlib/math/base/special/asinhf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float x;
    float v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (float)rand() / (float)RAND_MAX ) * 100.0f;
        v = stdlib_base_asinhf( x );
        printf( "asinhf(%f) = %f\n", x, v );
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

[hyperbolic-arcsine]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

<!-- <related-links> -->


<!-- </related-links> -->

</section>

<!-- /.links -->
