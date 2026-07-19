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

# atan2f

> Compute the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)` as a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var atan2f = require( '@stdlib/math/base/special/atan2f' );
```

#### atan2f( y, x )

Computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)` as a single-precision floating-point number.

```javascript
var v = atan2f( 2.0, 2.0 ); // => atanf( 1.0 )
// returns ~0.785

v = atan2f( 6.0, 2.0 ); // => atanf( 3.0 )
// returns ~1.249

v = atan2f( -1.0, -1.0 ); // => atanf( 1.0 ) - π
// returns ~-2.356

v = atan2f( 3.0, 0.0 ); // => π/2
// returns ~1.571

v = atan2f( -2.0, 0.0 ); // => -π/2
// returns ~-1.571

v = atan2f( 0.0, 0.0 );
// returns 0.0

v = atan2f( 3.0, NaN );
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
var atan2f = require( '@stdlib/math/base/special/atan2f' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, 0.0, 100.0, opts );
var y = uniform( 100, 0.0, 100.0, opts );

logEachMap( 'atan2f(%0.4f,%0.4f) = %0.4f', y, x, atan2f );
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
#include "stdlib/math/base/special/atan2f.h"
```

#### stdlib_base_atan2f( y, x )

Computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)` as a single-precision floating-point number.

```c
float out = stdlib_base_atan2f( 2.0f, 2.0f );
// returns ~0.785f

out = stdlib_base_atan2f( 6.0f, 2.0f );
// returns ~1.249f
```

The function accepts the following arguments:

-   **y**: `[in] float` `y` coordinate.
-   **x**: `[in] float` `x` coordinate.

```c
float stdlib_base_atan2f( const float y, const float x );
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
#include "stdlib/math/base/special/atan2f.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float y;
    float x;
    float v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        y = ( ( (float)rand() / (float)RAND_MAX ) * 100.0f );
        x = ( ( (float)rand() / (float)RAND_MAX ) * 100.0f );
        v = stdlib_base_atan2f( y, x );
        printf( "atan2f(%f, %f) = %f\n", y, x, v );
    }
    return 0;
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
