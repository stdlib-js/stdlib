<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# hypot

> Compute the [hypotenuse][hypotenuse] avoiding overflow and underflow.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var hypot = require( '@stdlib/math/base/special/hypot' );
```

#### hypot( x, y )

Computes the [hypotenuse][hypotenuse] avoiding overflow and underflow.

```javascript
var h = hypot( -5.0, 12.0 );
// returns 13.0

h = hypot( -0.0, -0.0 );
// returns +0.0
```

If either argument is `NaN`, the function returns `NaN`.

```javascript
var h = hypot( NaN, 12.0 );
// returns NaN

h = hypot( 5.0, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The textbook approach to calculating the hypotenuse is subject to overflow and underflow. For example, for a sufficiently large `x` and/or `y`, computing the hypotenuse will overflow.

    ```javascript
    var sqrt = require( '@stdlib/math/base/special/sqrt' );

    var x2 = 1.0e154 * 1.0e154;
    // returns 1.0e308

    var h = sqrt( x2 + x2 );
    // returns Infinity
    ```

    Similarly, for sufficiently small `x` and/or `y`, computing the hypotenuse will underflow.

    ```javascript
    var sqrt = require( '@stdlib/math/base/special/sqrt' );

    var x2 = 1.0e-200 * 1.0e-200;
    // returns 0.0

    var h = sqrt( x2 + x2 );
    // returns 0.0
    ```

    This implementation uses a numerically stable algorithm which avoids overflow and underflow.

    ```javascript
    var h = hypot( 1.0e154, 1.0e154 );
    // returns ~1.4142e+154

    h = hypot( 1.0e-200, 1.0e-200 );
    // returns ~1.4142e-200
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var hypot = require( '@stdlib/math/base/special/hypot' );

var len = 100;
var x = discreteUniform( len, -50, 50 );
var y = discreteUniform( len, -50, 50 );

var i;
for ( i = 0; i < len; i++ ) {
    console.log( 'h(%d,%d) = %d', x[ i ], y[ i ], hypot( x[ i ], y[ i ] ) );
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
#include "stdlib/math/base/special/hypot.h
```

#### stdlib_base_hypot( x, y )

Computes the hypotenuse avoiding overflow and underflow.

```c
double h = stdlib_base_hypot( 5.0, 12.0 );
// returns 13.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **y**: `[in] double` input value.

```c
double stdlib_base_hypot( const double x, const double y );
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
#include "stdlib/math/base/special/hypot.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 3.0, 4.0, 5.0, 12.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i += 2 ) {
        y = stdlib_base_hypot( x[ i ], x[ i+1 ] );
        printf( "hypot(%lf, %lf) = %lf\n", x[ i ], x[ i+1 ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hypotenuse]: https://en.wikipedia.org/wiki/Pythagorean_theorem

</section>

<!-- /.links -->
