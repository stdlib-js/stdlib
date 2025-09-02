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

# sind

> Compute the [sine][trigonometric-functions] of an angle measured in degrees.

<section class="intro">

</section>

<section class="usage">

## Usage

```javascript
var sind = require( '@stdlib/math/base/special/sind' );
```

#### sind( x )

Computes the [sine][trigonometric-functions] of `x` (in degrees).

```javascript
var v = sind( 0.0 );
// returns 0.0

v = sind( 30.0 );
// returns ~0.5

v = sind( 90.0 );
// returns 1.0

v = sind( NaN );
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
var sind = require( '@stdlib/math/base/special/sind' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, -180.0, 180.0, opts );

logEachMap( 'sind(%0.4f) = %0.4f', x, sind );
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
#include "stdlib/math/base/special/sind.h"
```

#### stdlib_base_sind( x )

Computes the [sine][trigonometric-functions] of `x` (in degrees).

```c
double out = stdlib_base_sind( 0.0 );
// returns 0.0

out = stdlib_base_sind( 30.0 );
// returns ~0.5
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_sind( const double x );
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
#include "stdlib/math/base/special/sind.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 30.0, 45.0, 60.0, 90.0 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_sind( x[ i ] );
        printf( "sind(%lf) = %lf\n", x[ i ], y );
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

</section>

<!-- /.links -->
