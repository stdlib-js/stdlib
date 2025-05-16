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

# atan2d

> Compute the angle in the plane (in degrees) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.

<section class="usage">

## Usage

```javascript
var atan2d = require( '@stdlib/math/base/special/atan2d' );
```

#### atan2d( y, x )

Computes the angle in the plane (in degrees) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.

```javascript
var v = atan2d( 2.0, 2.0 ); // => atand(1.0)
// returns ~45.0

v = atan2d( 6.0, 2.0 ); // => atand(3.0)
// returns ~71.565

v = atan2d( -1.0, -1.0 ); // => atand(1.0) - 180.0
// returns ~-135.0

v = atan2d( 3.0, 0.0 );
// returns 90.0

v = atan2d( -2.0, 0.0 );
// returns -90.0

v = atan2d( 0.0, 0.0 );
// returns 0.0

v = atan2d( 3.0, NaN );
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
var atan2d = require( '@stdlib/math/base/special/atan2d' );

var x = uniform( 100, 0.0, 100.0 );
var y = uniform( 100, 0.0, 100.0 );

logEachMap( 'y: %0.4f, x: %0.4f, atan2d(y,x): %0.4f', y, x, atan2d );
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
#include "stdlib/math/base/special/atan2d.h"
```

#### stdlib_base_atan2d( y, x )

Computes the angle in the plane (in degrees) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.

```c
double out = stdlib_base_atan2d( 2.0, 2.0 );
// returns ~45.0

out = stdlib_base_atan2d( 6.0, 2.0 );
// returns ~71.565
```

The function accepts the following arguments:

-   **y**: `[in] double` - `y` coordinate.
-   **x**: `[in] double` - `x` coordinate.

```c
double stdlib_base_atan2d( const double y, const double x );
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
#include "stdlib/math/base/special/atan2d.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double y;
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        y = random_uniform( 0.0, 100.0 );
        x = random_uniform( 0.0, 100.0 );
        v = stdlib_base_atan2d( y, x );
        printf( "atan2d(%lf, %lf) = %lf\n", y, x, v );
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
