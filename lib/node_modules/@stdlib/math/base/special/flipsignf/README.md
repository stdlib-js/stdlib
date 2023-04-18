<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# flipsignf

> Return a [single-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `x*y`.

<section class="usage">

## Usage

```javascript
var flipsignf = require( '@stdlib/math/base/special/flipsignf' );
```

#### flipsignf( x, y )

Returns a [single-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `x*y` (i.e., only return `-x` when `y` is a negative number).

```javascript
var z = flipsignf( -3.0, 10.0 );
// returns -3.0

z = flipsignf( -3.0, -1.0 );
// returns 3.0

z = flipsignf( 1.0, -0.0 );
// returns -1.0

z = flipsignf( -3.0, -0.0 );
// returns 3.0

z = flipsignf( -0.0, 1.0 );
// returns -0.0

z = flipsignf( 0.0, -1.0 );
// returns -0.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   According to the [IEEE 754][ieee754] standard, a `NaN` has a biased exponent equal to `255`, a significand greater than `0`, and a sign bit equal to **either** `1` **or** `0`. In which case, `NaN` may not correspond to just one but many binary representations. Accordingly, care should be taken to ensure that `y` is **not** `NaN`; otherwise, behavior may be indeterminate.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var flipsignf = require( '@stdlib/math/base/special/flipsignf' );

var x;
var y;
var z;
var i;

// Generate random numbers `x` and `y` and flip the sign of `x` only if `y` is negative...
for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    y = (randu()*10.0) - 5.0;
    z = flipsignf( x, y );
    console.log( 'x: %d, y: %d => %d', x, y, z );
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
#include "stdlib/math/base/special/flipsignf.h"
```

#### stdlib_base_flipsignf( x, y )

Returns a [single-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `x*y`.

```c
float v = stdlib_base_flipsignf( -3.0f, 10.0f );
// returns -3.0f

float v = stdlib_base_flipsignf( -3.0f, -1.0f );
// returns 3.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` number from which to derive a magnitude.
-   **y**: `[in] float` number from which to derive a sign.

```c
float stdlib_base_flipsignf( const float x, const float y );
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
#include "stdlib/math/base/special/flipsignf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.0f, -3.0f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_flipsignf( x[ i ], -3.0f );
        printf( "flipsignf(%f, %f) = %f\n", x[ i ], -3.0f, y );
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

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
