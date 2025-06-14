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

# minmaxabsf

> Return the minimum and maximum absolute values of two single-precision floating-point numbers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var minmaxabsf = require( '@stdlib/math/base/special/minmaxabsf' );
```

#### minmaxabsf( x, y )

Returns the minimum and maximum absolute values of two single-precision floating-point numbers in a single pass.

```javascript
var v = minmaxabsf( 4.2, 3.14 );
// returns [ 3.14, 4.2 ]

v = minmaxabsf( +0.0, -0.0 );
// returns [ 0.0, 0.0 ]
```

If any argument is `NaN`, the function returns `NaN` for both the minimum value and the maximum value.

```javascript
var v = minmaxabsf( 4.2, NaN );
// returns [ NaN, NaN ]

v = minmaxabsf( NaN, 3.14 );
// returns [ NaN, NaN ]
```

#### minmaxabsf.assign( x, y, out, stride, offset )

Returns the minimum and maximum absolute values of two single-precision floating-point numbers in a single pass and assigns results to a provided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var v = minmaxabsf.assign( 5.0, -2.0, out, 1, 0 );
// returns <Float32Array>[ 2.0, 5.0 ]

var bool = ( v === out );
// returns true
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
var logEachMap = require( '@stdlib/console/log-each-map' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var minmaxabsf = require( '@stdlib/math/base/special/minmaxabsf' );

var opts = {
    'dtype': 'float32'
};
var x = discreteUniform( 100, -100, 100, opts );
var y = discreteUniform( 100, -100, 100, opts );

logEachMap( 'minmaxabsf(%d, %d) = [%s]', x, y, minmaxabsf );
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
#include "stdlib/math/base/special/minmaxabsf.h"
```

#### stdlib_base_minmaxabsf( x, y, &min, &max )

Evaluates the minimum and maximum absolute values of two single-precision floating-point numbers in a single pass.

```c
float x = -3.14f;
float y = 2.71f;

float min;
float max;
stdlib_base_minmaxabsf( x, y, &min, &max );
```

The function accepts the following arguments:

-   **x**: `[in] float` first number.
-   **y**: `[in] float` second number.
-   **min**: `[out] float` destination for the minimum absolute value.
-   **max**: `[out] float` destination for the maximum absolute value.

```c
void stdlib_base_minmaxabsf( const float x, const float y, float* min, float* max );
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
#include "stdlib/math/base/special/minmaxabsf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 1.0f, 0.45f, -0.89f, 0.0f / 0.0f, -0.78f, -0.22f, 0.66f, 0.11f, -0.55f, 0.0f };
    const float y[] = { -0.22f, 0.66f, 0.0f, -0.55f, 0.33f, 1.0f, 0.0f / 0.0f, 0.11f, 0.45f, -0.78f };

    float min;
    float max;
    int i;
    for ( i = 0; i < 10; i++ ) {
        stdlib_base_minmaxabsf( x[ i ], y[ i ], &min, &max );
        printf( "x: %f, y: %f => min: %f, max: %f\n", x[ i ], y[ i ], min, max );
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
