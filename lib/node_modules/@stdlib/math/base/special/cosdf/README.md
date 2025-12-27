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

# cosdf

> Computes the [cosine][trigonometric-functions] of a single-precision floating-point number (in degrees).

<section class="intro">

</section>

<section class="usage">

## Usage

```javascript
var cosdf = require( '@stdlib/math/base/special/cosdf' );
```

#### cosdf( x )

Computes the [cosine][trigonometric-functions] of a single-precision floating-point number (in degrees).

```javascript
var v = cosdf( 0.0 );
// returns 1.0

v = cosdf( 60.0 );
// returns ~0.5

v = cosdf( 90.0 );
// returns 0.0

v = cosdf( NaN );
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
var cosdf = require( '@stdlib/math/base/special/cosdf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -180, 180, opts );

logEachMap( 'cosdf(%0.4f) = %0.4f', x, cosdf );
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
#include "stdlib/math/base/special/cosdf.h"
```

#### stdlib_base_cosdf( x )

Computes the [cosine][trigonometric-functions] of a single-precision floating-point number (in degrees).

```c
float out = stdlib_base_cosdf( 0.0f );
// returns 1.0f

out = stdlib_base_cosdf( 60.0f );
// returns ~0.5f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_cosdf( const float x );
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
#include "stdlib/math/base/special/cosdf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.0f, 30.0f, 45.0f, 60.0f, 90.0f };

    float y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_cosdf( x[ i ] );
        printf( "cosdf(%f) = %f\n", x[ i ], y );
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

[trigonometric-functions]: https://en.wikipedia.org/wiki/Trigonometric_functions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
