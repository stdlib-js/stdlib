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

# lcmf

> Compute the [least common multiple][lcm] (lcm) of two single-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [least common multiple][lcm] (lcm) of two non-zero integers `a` and `b` is the smallest positive integer that is divisible by both `a` and `b`. The lcm is also known as the **lowest common multiple** or **smallest common multiple** and finds common use in calculating the **lowest common denominator** (lcd).

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var lcmf = require( '@stdlib/math/base/special/lcmf' );
```

#### lcmf( a, b )

Computes the [least common multiple][lcm] (lcm) of two single-precision floating-point numbers.

```javascript
var v = lcmf( 48, 18 );
// returns 144
```

If either `a` or `b` is `0`, the function returns `0`.

```javascript
var v = lcmf( 0, 0 );
// returns 0

v = lcmf( 2, 0 );
// returns 0

v = lcmf( 0, 3 );
// returns 0
```

Both `a` and `b` must have integer values; otherwise, the function returns `NaN`.

```javascript
var v = lcmf( 3.14, 18 );
// returns NaN

v = lcmf( 48, 3.14 );
// returns NaN

v = lcmf( NaN, 18 );
// returns NaN

v = lcmf( 48, NaN );
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
var randu = require( '@stdlib/random/base/randu' );
var roundf = require( '@stdlib/math/base/special/roundf' );
var lcmf = require( '@stdlib/math/base/special/lcmf' );

var a;
var b;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    a = roundf( randu() * 50 );
    b = roundf( randu() * 50 );
    v = lcmf( a, b );
    console.log( 'lcmf(%d,%d) = %d', a, b, v );
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
#include "stdlib/math/base/special/lcmf.h"
```

#### stdlib_base_lcmf( a, b )

Computes the [least common multiple][lcm] (lcm) of two single-precision floating-point numbers.

```c
float v = stdlib_base_lcmf( 48.0f, 18.0f );
// returns 144.0f
```

The function accepts the following arguments:

-   **a**: `[in] float` input value.
-   **b**: `[in] float` input value.

```c
float stdlib_base_lcmf( const float a, const float b );
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
#include "stdlib/math/base/special/lcmf.h"
#include <stdio.h>

int main( void ) {
    const float a[] = { 24.0f, 32.0f, 48.0f, 116.0f, 33.0f };
    const float b[] = { 12.0f, 6.0f, 15.0f, 52.0f, 22.0f };

    float out;
    int i;
    for ( i = 0; i < 5; i++ ) {
        out = stdlib_base_lcmf( a[ i ], b[ i ] );
        printf( "lcmf(%f, %f) = %f\n", a[ i ], b[ i ], out );
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

[lcm]: https://en.wikipedia.org/wiki/Least_common_multiple

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
