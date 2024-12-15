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

# acotdf

> Compute the [arccotangent][arccotangent] in degrees of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var acotdf = require( '@stdlib/math/base/special/acotdf' );
```

#### acotdf( x )

Computes the [arccotangent][arccotangent] (in degrees) of a single-precision floating-point number.

```javascript
var sqrtf = require( '@stdlib/math/base/special/sqrtf' );

var v = acotdf( 0.0 );
// returns 90.0

v = acotdf( sqrtf( 3.0 ) );
// returns ~30.0

v = acotdf( 1.0 );
// returns 45.0

v = acotdf( sqrtf( 3.0 ) / 3.0 );
// returns ~60.0

v = acotdf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var acotdf = require( '@stdlib/math/base/special/acotdf' );

var x = linspace( -1.0, 1.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( acotdf( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/acotdf.h"
```

#### stdlib_base_acotdf( x )

Computes the [arccotangent][arccotangent] (in degrees) of a single-precision floating-point number.

```c
float out = stdlib_base_acotdf( 0.0f );
// returns 90.0f

out = stdlib_base_acotdf( 3.0f );
// returns ~30.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_acotdf( const float x );
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
#include "stdlib/math/base/special/acotdf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 1.0f, 1.45f, 1.89f, 2.33f, 2.78f, 3.22f, 3.66f, 4.11f, 4.55f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acotdf( x[ i ] );
        printf( "acotdf(%f) = %f\n", x[ i ], v );
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

[arccotangent]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
