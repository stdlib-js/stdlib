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

# wrapf

> Wrap a single-precision floating-point value to the half-open interval `[min,max)`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var wrapf = require( '@stdlib/math/base/special/wrapf' );
```

#### wrapf( v, min, max )

Wraps a single-precision floating-point value to the half-open interval `[min,max)`.

```javascript
var v = wrapf( 3.14, 0.0, 5.0 );
// returns ~3.14

v = wrapf( -3.14, 0.0, 5.0 );
// returns ~1.86

v = wrapf( 10.0, 0.0, 5.0 );
// returns 0.0

v = wrapf( -0.0, 0.0, 5.0 );
// returns 0.0

v = wrapf( 0.0, -3.14, -0.0 );
// returns ~-3.14
```

If provided `NaN` for any argument, the function returns `NaN`.

```javascript
var v = wrapf( NaN, 0.0, 5.0 );
// returns NaN

v = wrapf( 0.0, NaN, 5.0 );
// returns NaN

v = wrapf( 3.14, 0.0, NaN );
// returns NaN
```

If provided `min == max`, the function returns `NaN`.

```javascript
var v = wrapf( 3.14, 3.0, 3.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function does **not** distinguish between positive and negative zero. Where appropriate, the function returns positive zero.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var wrapf = require( '@stdlib/math/base/special/wrapf' );

var opts = {
    'dtype': 'float32'
};
var min = uniform( 100, 0.0, 10.0, opts );
var max = uniform( 100, 5.0, 15.0, opts );
var v = uniform( 100, -20.0, 20.0, opts );

logEachMap( 'wrapf(%0.4f,%0.4f,%0.4f) => %0.4f', v, min, max, wrapf );
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
#include "stdlib/math/base/special/wrapf.h"
```

#### stdlib_base_wrapf( v, min, max )

Wraps a single-precision floating-point value to the half-open interval `[min,max)`.

```c
float v = stdlib_base_wrapf( 3.14f, 0.0f, 5.0f );
// returns ~3.14f

v = stdlib_base_wrapf( -3.14f, 0.0f, 5.0f );
// returns ~1.86f
```

The function accepts the following arguments:

-   **v**: `[in] float` input value to wrap.
-   **min**: `[in] float` minimum value.
-   **max**: `[in] float` maximum value.

```c
float stdlib_base_wrapf( const float v, const float min, const float max )
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
#include "stdlib/math/base/special/wrapf.h"
#include <stdio.h>

int main( void ) {
    const float min[] = { 0.0f, 0.0f, 0.0f, 0.0f, -3.14f };
    const float max[] = { 5.0f, 5.0f, 5.0f, 5.0f, -0.0f };
    const float v[] = { 3.14f, -3.14f, 10.0f, -0.0f, 0.0f };

    float out;
    int i;
    for ( i = 0; i < 5; i++ ) {
        out = stdlib_base_wrapf( v[i], min[i], max[i] );
        printf( "wrapf(%f,%f,%f) => %f\n", v[i], min[i], max[i], out );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
