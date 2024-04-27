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

# drot

> Apply a plane rotation.

<section class="intro">

This BLAS level 1 routine applies a real plane rotation to real double-precision floating-point vectors. The plane rotation is applied to `N` points, where the points to be rotated are contained in vectors `x` and `y` and where the cosine and sine of the angle of rotation are `c` and `s`, respectively. The operation is as follows:

<!-- <equation class="equation" label="eq:drot" align="center" raw="\begin{bmatrix}x_i \\ y_i\end{bmatrix} = \begin{bmatrix} c & s \\ -s & c\end{bmatrix}\begin{bmatrix} x_i \\ y_i \end{bmatrix}" alt="Plane rotation"> -->

<!-- </equation> -->

where `x_i` and `y_i` are the individual elements on which the rotation is applied.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var drot = require( '@stdlib/blas/base/drot' );
```

#### drot( N, x, strideX, y, strideY, c, s )

Applies a plane rotation.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

drot( x.length, x, 1, y, 1, 0.8, 0.6 );
// x => <Float64Array>[ ~4.4, ~5.8, 7.2, 8.6, 10.0 ]
// y => <Float64Array>[ ~4.2, 4.4, 4.6, 4.8, 5.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Float64Array`][mdn-float64array].
-   **strideX**: index increment for `x`.
-   **y**: second input [`Float64Array`][mdn-float64array].
-   **strideY**: index increment for `y`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

The `N` and stride parameters determine how values in the strided arrays are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

drot( 3, x, 2, y, 2, 0.8, 0.6 );
// x => <Float64Array>[ 5.0, 2.0, 7.8, 4.0, 10.6, 6.0 ]
// y => <Float64Array>[ ~5.0, 8.0, 5.4, 10.0, ~5.8, 12.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

drot( 3, x1, -2, y1, 1, 0.8, 0.6 );
// x0 => <Float64Array>[ 1.0, ~8.8, 3.0, 9.8, 5.0, 10.8 ]
// y0 => <Float64Array>[ 7.0, 8.0, 9.0, 4.4, 6.4, ~8.4 ]
```

#### drot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );

drot.ndarray( 4, x, 1, 1, y, 1, 1, 0.8, 0.6 );
// x => <Float64Array>[ 1.0, ~5.8, 7.2, 8.6, 10.0 ]
// y => <Float64Array>[ 6.0, 4.4, ~4.6, ~4.8, 5.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

drot.ndarray( 3, x, 2, 1, y, 2, 1, 0.8, 0.6 );
// x => <Float64Array>[ 1.0, 6.4, 3.0, 9.2, 5.0, 12.0 ]
// y => <Float64Array>[ 7.0, 5.2, 9.0, 5.6, 11.0, ~6.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `x` and `y` unchanged.
-   `drot()` corresponds to the [BLAS][blas] level 1 function [`drot`][drot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var drot = require( '@stdlib/blas/base/drot' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 500, opts );
console.log( x );

var y = discreteUniform( x.length, 0, 255, opts );
console.log( y );

// Apply a plane rotation:
drot( x.length, x, 1, y, 1, 0.8, 0.6 );
console.log( x );
console.log( y );
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
#include "stdlib/blas/base/drot.h"
```

#### c_drot( N, X, strideX, Y, strideY, c, s )

Applies a plane rotation.

```c
double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0 };
double y[] = { 6.0, 7.0, 8.0, 9.0, 10.0 };

c_drot( 5, x, 1, y, 1, 0.8, 0.6 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[inout] double*` first input array.
-   **strideX**: `[in] CBLAS_INT` index increment for `X`.
-   **Y**: `[inout] double*` first input array.
-   **strideY**: `[in] CBLAS_INT` index increment for `Y`.
-   **c**: `[in] double` cosine of the angle of rotation.
-   **s**: `[in] double` sine of the angle of rotation.

```c
void c_drot( const CBLAS_INT N, double *X, const CBLAS_INT strideX, double *Y, const CBLAS_INT strideY, const double c, const double s );
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
#include "stdlib/blas/base/drot.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    double x[] = { 1.0, 2.0, 3.0, 4.0, 5.0 };
    double y[] = { 6.0, 7.0, 8.0, 9.0, 10.0 };

    // Specify the number of elements:
    const int N = 5;

    // Specify stride lengths:
    const int strideX = 1;
    const int strideY = 1;

    // Specify angle of rotation:
    const double c = 0.8;
    const double s = 0.6;

    // Apply plane rotation:
    c_drot( N, x, strideX, y, strideY, c, s );

    // Print the result:
    for ( int i = 0; i < 5; i++ ) {
        printf( "x[ %i ] = %lf, y[ %i ] = %lf\n", i, x[ i ], i, y[ i ] );
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

[blas]: http://www.netlib.org/blas

[drot]: https://www.netlib.org/lapack/explore-html/d1/d45/group__rot_gae48ef017306866ac2d5a8c5a52617858.html#gae48ef017306866ac2d5a8c5a5261785

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
