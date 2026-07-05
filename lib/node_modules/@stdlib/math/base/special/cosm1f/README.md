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

# cosm1f

> Compute `cos(x) - 1`.

<section class="usage">

## Usage

```javascript
var cosm1f = require( '@stdlib/math/base/special/cosm1f' );
```

#### cosm1f( x )

Computes `cos(x) - 1`, where `cos` is the [cosine][cosine] of a single-precision floating-point number (in radians). This function should be used instead of manually calculating `cos(x) - 1` when the argument is near unity.

```javascript
var PI = require( '@stdlib/constants/float32/pi' );

var v = cosm1f( 0.0 );
// returns 0.0

v = cosm1f( PI/4.0 );
// returns ~-0.293

v = cosm1f( -PI/6.0 );
// returns ~-0.134

v = cosm1f( NaN );
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
var PI = require( '@stdlib/constants/float32/pi' );
var cosm1f = require( '@stdlib/math/base/special/cosm1f' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, 0.0, 2.0*PI, opts );

logEachMap( 'cos(%0.4f) - 1 = %0.4f', x, cosm1f );
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
#include "stdlib/math/base/special/cosm1f.h"
```

#### stdlib_base_cosm1f( x )

Computes `cos(x) - 1`, where `cos` is the [cosine][cosine] of a single-precision floating-point number (in radians). This function should be used instead of manually calculating `cos(x) - 1` when the argument is near unity.

```c
float out = stdlib_base_cosm1f( 0.0f );
// returns 0.0f

out = stdlib_base_cosm1f( 3.141592653589793238f / 4.0f );
// returns ~-0.293f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_cosm1f( const float x );
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
#include "stdlib/math/base/special/cosm1f.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.0f, 0.523f, 0.785f, 1.047f, 3.14f };

    float y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_cosm1f( x[ i ] );
        printf( "cosm1f(%f) = %f\n", x[ i ], y );
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

[cosine]: https://en.wikipedia.org/wiki/Cosine

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
