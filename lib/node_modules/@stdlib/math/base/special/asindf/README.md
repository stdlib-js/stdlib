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

# asindf

> Compute the [arcsine][arcsine] (in degrees) of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var asindf = require( '@stdlib/math/base/special/asindf' );
```

#### asindf( x )

Computes the [arcsine][arcsine] (in degrees) of a single-precision floating-point number.

```javascript
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );

var v = asindf( 0.0 );
// returns 0.0

v = asindf( 0.5 );
// returns ~30.0

v = asindf( sqrtf( 2.0 ) / 2.0 );
// returns ~45.0

v = asindf( sqrtf( 3.0 ) / 2.0 );
// returns ~60.0

v = asindf( NaN );
// returns NaN
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var v = asindf( -3.14 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var asindf = require( '@stdlib/math/base/special/asindf' );

var x = linspace( -1.0, 1.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( asindf( x[ i ] ) );
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
#include "stdlib/math/base/special/asindf.h"
```

#### stdlib_base_asindf( x )

Computes the [arcsine][arcsine] (in degrees) of a single-precision floating-point number.

```c
float out = stdlib_base_asindf( 0.0f );
// returns 0.0f

out = stdlib_base_asindf( 0.5f );
// returns ~30.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_asindf( const float x );
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
#include "stdlib/math/base/special/asindf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 1.0f, 0.45f, -0.89f, 0.33f, -0.78f, -0.22f, 0.66f, 0.11f, -0.55f, 0.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_asindf( x[ i ] );
        printf( "asind(%f) = %f\n", x[ i ], v );
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

[arcsine]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
