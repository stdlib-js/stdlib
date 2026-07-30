<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# dtriu

> Copy the upper triangular part of a double-precision floating-point matrix `A` to another matrix `B`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dtriu = require( '@stdlib/blas/ext/base/dtriu' );
```

#### dtriu( order, M, N, k, A, LDA, B, LDB )

Copies the upper triangular part of a double-precision floating-point matrix `A` to another matrix `B`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

dtriu( 'row-major', 2, 2, 0, A, 2, B, 2 );
// B => <Float64Array>[ 1.0, 2.0, 0.0, 4.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **k**: diagonal below which to ignore. A value of `k = 0` refers to the main diagonal, `k < 0` refers to a diagonal below the main diagonal, and `k > 0` refers to a diagonal above the main diagonal. Accordingly, when `k < 0`, the function copies the upper triangle **and** one or more sub-diagonals (i.e., part of the lower triangle), and, when `k > 0`, the function copies only part of the upper triangle.
-   **A**: input matrix.
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: output matrix.
-   **LDB**: stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

Setting the `k` parameter to a value other than `0` allows including and excluding sub- and super-diagonals, respectively. For example, to copy the upper triangle and the first sub-diagonal,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

dtriu( 'row-major', 2, 2, -1, A, 2, B, 2 );
// B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
```

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

dtriu( 'row-major', 2, 2, 0, A1, 2, B1, 2 );
// B0 => <Float64Array>[ 0.0, 2.0, 3.0, 0.0, 5.0 ]
```

#### dtriu.ndarray( M, N, k, A, sa1, sa2, oa, B, sb1, sb2, ob )

Copies the upper triangular part of a double-precision floating-point matrix `A` to another matrix `B` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

dtriu.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
// B => <Float64Array>[ 1.0, 2.0, 0.0, 4.0 ]
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **k**: diagonal below which to ignore.
-   **A**: input matrix.
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **B**: output matrix.
-   **sb1**: stride of the first dimension of `B`.
-   **sb2**: stride of the second dimension of `B`.
-   **ob**: starting index for `B`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

dtriu.ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 2 );
// B => <Float64Array>[ 0.0, 0.0, 1.0, 2.0, 0.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Elements outside of the copied region are left unchanged.

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
var dtriu = require( '@stdlib/blas/ext/base/dtriu' );

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

dtriu( order, shape[ 0 ], shape[ 1 ], 0, A, strides[ 0 ], B, strides[ 0 ] );
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
#include "stdlib/blas/ext/base/dtriu.h"
```

#### stdlib_strided_dtriu( layout, M, N, k, \*A, LDA, \*B, LDB )

Copies the upper triangular part of a double-precision floating-point matrix `A` to another matrix `B`.

```c
#include "stdlib/blas/base/shared.h"

const double A[] = { 1.0, 2.0, 3.0, 4.0 };
double B[] = { 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_dtriu( CblasRowMajor, 2, 2, 0, A, 2, B, 2 );
```

The function accepts the following arguments:

-   **layout**: `[in] CBLAS_LAYOUT` storage layout.
-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **k**: `[in] CBLAS_INT` diagonal below which to ignore.
-   **A**: `[in] double*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **B**: `[out] double*` output matrix.
-   **LDB**: `[in] CBLAS_INT` stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`).

```c
void API_SUFFIX(stdlib_strided_dtriu)( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const CBLAS_INT k, const double *A, const CBLAS_INT LDA, double *B, const CBLAS_INT LDB );
```

#### stdlib_strided_dtriu_ndarray( M, N, k, \*A, sa1, sa2, oa, \*B, sb1, sb2, ob )

Copies the upper triangular part of a double-precision floating-point matrix `A` to another matrix `B` using alternative indexing semantics.

```c
#include "stdlib/blas/base/shared.h"

const double A[] = { 1.0, 2.0, 3.0, 4.0 };
double B[] = { 0.0, 0.0, 0.0, 0.0 };

stdlib_strided_dtriu_ndarray( 2, 2, 0, A, 2, 1, 0, B, 2, 1, 0 );
```

The function accepts the following arguments:

-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **k**: `[in] CBLAS_INT` diagonal below which to ignore.
-   **A**: `[in] double*` input matrix.
-   **sa1**: `[in] CBLAS_INT` stride of the first dimension of `A`.
-   **sa2**: `[in] CBLAS_INT` stride of the second dimension of `A`.
-   **oa**: `[in] CBLAS_INT` starting index for `A`.
-   **B**: `[out] double*` output matrix.
-   **sb1**: `[in] CBLAS_INT` stride of the first dimension of `B`.
-   **sb2**: `[in] CBLAS_INT` stride of the second dimension of `B`.
-   **ob**: `[in] CBLAS_INT` starting index for `B`.

```c
void API_SUFFIX(stdlib_strided_dtriu_ndarray)( const CBLAS_INT M, const CBLAS_INT N, const CBLAS_INT k, const double *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, double *B, const CBLAS_INT strideB1, const CBLAS_INT strideB2, const CBLAS_INT offsetB );
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
#include "stdlib/blas/ext/base/dtriu.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Define a 3x3 input matrix stored in row-major order:
    const double A[ 3*3 ] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 };

    // Define a 3x3 output matrix:
    double B[ 3*3 ] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements along each dimension of `A`:
    const CBLAS_INT M = 3;
    const CBLAS_INT N = 3;

    // Copy the upper triangular part of `A` to `B`:
    stdlib_strided_dtriu( CblasRowMajor, M, N, 0, A, N, B, N );

    // Print the result:
    for ( int i = 0; i < M; i++ ) {
        for ( int j = 0; j < N; j++ ) {
            printf( "B[ %i,%i ] = %lf\n", i, j, B[ (i*N)+j ] );
        }
    }

    // Copy the upper triangular part of `A`, including the first sub-diagonal, to `B` using alternative indexing semantics:
    stdlib_strided_dtriu_ndarray( M, N, -1, A, N, 1, 0, B, N, 1, 0 );

    // Print the result:
    for ( int i = 0; i < M; i++ ) {
        for ( int j = 0; j < N; j++ ) {
            printf( "B[ %i,%i ] = %lf\n", i, j, B[ (i*N)+j ] );
        }
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="references">

</section>

<!-- /.references -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
