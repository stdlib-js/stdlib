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

# dlacpy

> Copy all or part of a matrix `A` to another matrix `B`.

<section class="usage">

## Usage

```javascript
var dlacpy = require( '@stdlib/lapack/base/dlacpy' );
```

#### dlacpy( order, uplo, M, N, A, LDA, B, LDB )

Copies all or part of a matrix `A` to another matrix `B`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float64Array( 4 );

dlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
// B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: output [`Float64Array`][mdn-float64array].
-   **LDB**: stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var A0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var B0 = new Float64Array( 5 );

// Create offset views...
var A1 = new Float64Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var B1 = new Float64Array( B0.buffer, B0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

dlacpy( 'row-major', 'all', 2, 2, A1, 2, B1, 2 );
// B0 => <Float64Array>[ 0.0, 2.0, 3.0, 4.0, 5.0 ]
```

#### dlacpy.ndarray( uplo, M, N, A, sa1, sa2, oa, B, sb1, sb2, ob )

Copies all or part of a matrix `A` to another matrix `B` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
// B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
```

The function has the following parameters:

-   **uplo**: specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **B**: output [`Float64Array`][mdn-float64array].
-   **sb1**: stride of the first dimension of `B`.
-   **sb2**: stride of the second dimension of `B`.
-   **ob**: starting index for `B`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
// B => <Float64Array>[ 0.0, 0.0, 2.0, 3.0, 4.0, 5.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlacpy()` corresponds to the [LAPACK][lapack] routine [`dlacpy`][lapack-dlacpy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var uniform = require( '@stdlib/random/array/discrete-uniform' );
var numel = require( '@stdlib/ndarray/base/numel' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var dlacpy = require( '@stdlib/lapack/base/dlacpy' );

var shape = [ 5, 8 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var N = numel( shape );

var A = uniform( N, -10, 10, {
    'dtype': 'float64'
});
console.log( ndarray2array( A, shape, strides, 0, order ) );

var B = uniform( N, -10, 10, {
    'dtype': 'float64'
});
console.log( ndarray2array( B, shape, strides, 0, order ) );

dlacpy( order, 'all', shape[ 0 ], shape[ 1 ], A, strides[ 0 ], B, strides[ 0 ] );
console.log( ndarray2array( B, shape, strides, 0, order ) );
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
#include "stdlib/lapack/base/dlacpy.h"
```

#### c_dlacpy( layout, uplo, M, N, \*A, LDA, \*B, LDB )

Copies all or part of a matrix `A` to another matrix `B`.

```c
#include "stdlib/lapack/base/shared.h"

const double A[] = { 1.0, 2.0, 3.0, 4.0 };
double B[] = { 0.0, 0.0, 0.0, 0.0 };

c_dlacpy( LAPACK_ROW_MAJOR, LAPACK_UPPER_TRIANGLE, 2, 2, A, 2, B, 2 );
```

The function accepts the following arguments:

-   **order**: `[in] LAPACK_LAYOUT` storage layout.
-   **uplo**: `[in] int` specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: `[in] LAPACK_INT` number of rows in `A`.
-   **N**: `[in] LAPACK_INT` number of columns in `A`.
-   **A**: `[in] double*` input matrix.
-   **LDA**: `[in] LAPACK_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: `[out] double*` output matrix.
-   **LDB**: `[in] LAPACK_INT` stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

```c
LAPACK_INT c_dlacpy( const LAPACK_LAYOUT layout, const int uplo, const LAPACK_INT M, const LAPACK_INT N, const double *A, const LAPACK_INT LDA, double *B, const LAPACK_INT LDB );
```

#### c_dlacpy_ndarray( uplo, M, N, \*A, sa1, sa2, oa, \*B, sb1, sb2, ob )

Copies all or part of a matrix `A` to another matrix `B` using alternative indexing semantics.

```c
#include "stdlib/lapack/base/shared.h"

const double A[] = { 1.0, 2.0, 3.0, 4.0 };
double B[] = { 0.0, 0.0, 0.0, 0.0 };

c_dlacpy_ndarray( LAPACK_UPPER_TRIANGLE, 2, 2, A, 2, 1, 0, B, 2, 1, 0 );
```

The function accepts the following arguments:

-   **uplo**: `[in] int` specifies whether to copy the upper or lower triangular/trapezoidal part of a matrix `A`.
-   **M**: `[in] LAPACK_INT` number of rows in `A`.
-   **N**: `[in] LAPACK_INT` number of columns in `A`.
-   **A**: `[in] double*` input matrix.
-   **sa1**: `[in] LAPACK_INT` stride of the first dimension of `A`.
-   **sa2**: `[in] LAPACK_INT` stride of the second dimension of `A`.
-   **oa**: `[in] LAPACK_INT` starting index for `A`.
-   **B**: `[out] double*` output matrix.
-   **sb1**: `[in] LAPACK_INT` stride of the first dimension of `B`.
-   **sb2**: `[in] LAPACK_INT` stride of the second dimension of `B`.
-   **ob**: `[in] LAPACK_INT` starting index for `B`.

```c
LAPACK_INT c_dlacpy_ndarray( const int uplo, const LAPACK_INT M, const LAPACK_INT N, const double *A, const LAPACK_INT strideA1, const LAPACK_INT strideA2, const LAPACK_INT offsetA, double *B, const LAPACK_INT strideB1, const LAPACK_INT strideB2, const LAPACK_INT offsetB );
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
#include "stdlib/lapack/base/dlacpy.h"
#include "stdlib/lapack/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Define a 3x3 input matrix stored in row-major order:
    const double A[ 3*3 ] = {
        1.0, 2.0, 3.0,
        4.0, 5.0, 6.0,
        7.0, 8.0, 9.0
    };

    // Define a 3x3 output matrix:
    double B[ 3*3 ] = {
        0.0, 0.0, 0.0,
        0.0, 0.0, 0.0,
        0.0, 0.0, 0.0
    };

    // Specify the number of elements along each dimension of `A`:
    const int M = 3;
    const int N = 3;

    // Copy elements from the upper triangle of `A` to `B`:
    c_dlacpy( LAPACK_ROW_MAJOR, LAPACK_UPPER_TRIANGLE, M, N, A, N, B, N );

    // Print the result:
    for ( int i = 0; i < M; i++ ) {
        for ( int j = 0; j < N; j++ ) {
            printf( "B[ %i, %i ] = %lf\n", i, j, B[ (i*N)+j ] );
        }
    }

    // Copy elements from the lower triangle of `A` to `B` using alternative indexing semantics:
    c_dlacpy_ndarray( LAPACK_LOWER_TRIANGLE, M, N, A, N, 1, 0, B, N, 1, 0 );

    // Print the result:
    for ( int i = 0; i < M; i++ ) {
        for ( int j = 0; j < N; j++ ) {
            printf( "B[ %i, %i ] = %lf\n", i, j, B[ (i*N)+j ] );
        }
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

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-dlacpy]: https://www.netlib.org/lapack/explore-html/d0/d9e/group__lacpy_gaba7ee02955a93bf8af4a432c98734e65.html#gaba7ee02955a93bf8af4a432c98734e65

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
