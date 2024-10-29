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

# Secant

> Evaluate the [secant][trigonometric-functions] of a number.

<section class="intro">

</section>

<section class="usage">

## Usage

```javascript
var sec = require( '@stdlib/math/base/special/sec' );
```

## sec( x )

Evaluates the [secant][trigonometric-functions] of `x` (in radians).

```javascript
var v = sec( 0.0 );
// returns 1.0

v = sec( 3.141592653589793/2.0 );
// returns 16331239353195370.0

v = sec( -3.141592653589793/3.0 );
// returns ~1.9999999999999996

v = sec( 3.141592653589793/3.0 );
// returns ~1.9999999999999996

v = sec( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var PI = require( '@stdlib/constants/float64/pi' );
var sec = require( '@stdlib/math/base/special/sec' );

var x = linspace( -PI/2.0, PI/2.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( sec( x[ i ] ) );
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
#include "stdlib/math/base/special/sec.h"
```

#### stdlib_base_sec( x )

Evaluates the [secant][trigonometric-functions] of `x` (in radians).

```c
double out = stdlib_base_sec( 0.0 );
// returns 1.0

out = stdlib_base_cos( 3.141592653589793 / 2.0 );
// returns 6.123233995736766e-17
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_sec( const double x );
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
#include "stdlib/math/base/special/sec.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_sec( x[ i ] );
        printf( "sec(%lf) = %lf\n", x[ i ], y );
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
