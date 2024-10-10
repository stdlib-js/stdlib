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

# gcdf

> Compute the [greatest common divisor][gcd] (gcd) of two single-precision floating point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [greatest common divisor][gcd] (gcd) of two non-zero integers `a` and `b` is the largest positive integer which divides both `a` and `b` without a remainder. The gcd is also known as the **greatest common factor** (gcf), **highest common factor** (hcf), **highest common divisor**, and **greatest common measure** (gcm).

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var gcdf = require( '@stdlib/math/base/special/gcdf' );
```

#### gcdf( a, b )

Computes the [greatest common divisor][gcd] (gcd).

```javascript
var v = gcdf( 48, 18 );
// returns 6
```

If both `a` and `b` are `0`, the function returns `0`.

```javascript
var v = gcdf( 0, 0 );
// returns 0
```

Both `a` and `b` must have integer values; otherwise, the function returns `NaN`.

```javascript
var v = gcdf( 3.14, 18 );
// returns NaN

v = gcdf( 48, 3.14 );
// returns NaN

v = gcdf( NaN, 18 );
// returns NaN

v = gcdf( 48, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var gcdf = require( '@stdlib/math/base/special/gcdf' );

var a = discreteUniform( 100, 0, 50 );
var b = discreteUniform( a.length, 0, 50 );

var i;
for ( i = 0; i < a.length; i++ ) {
    console.log( 'gcdf(%d,%d) = %d', a[ i ], b[ i ], gcdf( a[ i ], b[ i ] ) );
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
#include "stdlib/math/base/special/gcdf.h"
```

#### stdlib_base_gcdf( a, b )

Computes the greatest common divisor (gcd).

```c
float v = stdlib_base_gcdf( 48.0f, 18.0f );
// returns 6.0f
```

The function accepts the following arguments:

-   **a**: `[in] float` input value.
-   **b**: `[in] float` input value.

```c
float stdlib_base_gcdf( const float a, const float b );
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
#include "stdlib/math/base/special/gcdf.h"
#include <stdio.h>

int main( void ) {
    const float a[] = { 24.0f, 32.0f, 48.0f, 116.0f, 33.0f };
    const float b[] = { 12.0f, 6.0f, 15.0f, 52.0f, 22.0f };

    float out;
    int i;
    for ( i = 0; i < 5; i++ ) {
        out = stdlib_base_gcdf( a[ i ], b[ i ] );
        printf( "gcdf(%f, %f) = %f\n", a[ i ], b[ i ], out );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

## References

-   Stein, Josef. 1967. "Computational problems associated with Racah algebra." _Journal of Computational Physics_ 1 (3): 397–405. doi:[10.1016/0021-9991(67)90047-2][@stein:1967].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[gcd]: https://en.wikipedia.org/wiki/Greatest_common_divisor

[@stein:1967]: https://doi.org/10.1016/0021-9991(67)90047-2

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
