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

# hypotf

> Compute the [hypotenuse][hypotenuse] of two single-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var hypotf = require( '@stdlib/math/base/special/fast/hypotf' );
```

#### hypotf( x, y )

Computes the [hypotenuse][hypotenuse] of two single-precision floating-point numbers.

```javascript
var h = hypotf( -5.0, 12.0 );
// returns 13.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For a sufficiently large `x` and/or `y`, computing the hypotenuse will overflow.

    ```javascript
    var h = hypotf( 1.0e38, 1.0e38 );
    // returns Infinity
    ```

    Similarly, for sufficiently small `x` and/or `y`, computing the hypotenuse will underflow.

    ```javascript
    var h = hypotf( 1.0e-45, 1.0e-45 );
    // returns 0.0
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var hypotf = require( '@stdlib/math/base/special/fast/hypotf' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 100, -50, 50, opts );
var y = discreteUniform( 100, -50, 50, opts );

logEachMap( 'h(%d,%d) = %0.4f', x, y, hypotf );
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
#include "stdlib/math/base/special/fast/hypotf.h"
```

#### stdlib_base_fast_hypotf( x, y )

Computes the hypotenuse of two single-precision floating-point numbers.

```c
float h = stdlib_base_fast_hypotf( 5.0f, 12.0f );
// returns 13.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **y**: `[in] float` input value.

```c
float stdlib_base_fast_hypotf( const float x, const float y );
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
#include "stdlib/math/base/special/fast/hypotf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.0f, 4.0f, 5.0f, 12.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i += 2 ) {
        y = stdlib_base_fast_hypotf( x[ i ], x[ i+1 ] );
        printf( "hypot(%f, %f) = %f\n", x[ i ], x[ i+1 ], y );
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
