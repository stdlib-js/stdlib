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

# sindexOfRow

> Return the index of the first row in a single-precision floating-point input matrix which has the same elements as a provided search vector.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sindexOfRow = require( '@stdlib/blas/ext/base/sindex-of-row' );
```

#### sindexOfRow( order, M, N, A, LDA, x, strideX, workspace, strideW )

Returns the index of the first row in a single-precision floating-point input matrix which has the same elements as a provided search vector.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

/*
    A = [
        [ 1.0, 3.0 ],
        [ 2.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/
var A = new Float32Array( [ 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] );

var x = new Float32Array( [ 2.0, 4.0 ] );
var workspace = new Uint8Array( 3 );
var out = sindexOfRow( 'column-major', 3, 2, A, 3, x, 1, workspace, 1 );
// returns 1
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input matrix stored as a [`Float32Array`][mdn-float32array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **x**: search vector stored as a [`Float32Array`][mdn-float32array].
-   **strideX**: stride length of `x`.
-   **workspace**: workspace array stored as a [`Uint8Array`][mdn-uint8array] for tracking row match candidates. This parameter is ignored if the function is provided an input matrix stored in row-major order.
-   **strideW**: stride length of `workspace`.

When an input matrix is stored in row-major order, the workspace parameter is ignored, and, thus, one may provide an empty workspace array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

/*
    A = [
        [ 1.0, 2.0 ],
        [ 3.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/
var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

var x = new Float32Array( [ 3.0, 4.0 ] );
var workspace = new Uint8Array( 0 );
var out = sindexOfRow( 'row-major', 3, 2, A, 2, x, 1, workspace, 1 );
// returns 1
```

If the function is unable to find a matching row, the function returns `-1`.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

/*
    A = [
        [ 1.0, 3.0 ],
        [ 2.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/
var A = new Float32Array( [ 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] );

var x = new Float32Array( [ -3.0, -4.0 ] );
var workspace = new Uint8Array( 3 );
var out = sindexOfRow( 'column-major', 3, 2, A, 3, x, 1, workspace, 1 );
// returns -1
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

// Initial arrays:
var A0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );
var x0 = new Float32Array( [ 0.0, 3.0, 4.0 ] );

// Create offset views:
var A1 = new Float32Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var workspace = new Uint8Array( 0 );
var out = sindexOfRow( 'row-major', 3, 2, A1, 2, x1, 1, workspace, 1 );
// returns 1
```

<!-- lint disable maximum-heading-length -->

#### sindexOfRow.ndarray( M, N, A, strideA1, strideA2, offsetA, x, strideX, offsetX, workspace, strideW, offsetW )

<!-- lint enable maximum-heading-length -->

Returns the index of the first row in a single-precision floating-point input matrix which has the same elements as a provided search vector using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

/*
    A = [
        [ 1.0, 3.0 ],
        [ 2.0, 4.0 ],
        [ 0.0, 0.0 ]
    ]
*/
var A = new Float32Array( [ 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] );

var x = new Float32Array( [ 2.0, 4.0 ] );
var workspace = new Uint8Array( 3 );
var out = sindexOfRow.ndarray( 3, 2, A, 1, 3, 0, x, 1, 0, workspace, 1, 0 );
// returns 1
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input matrix stored as a [`Float32Array`][mdn-float32array].
-   **strideA1**: stride of the first dimension of `A`.
-   **strideA2**: stride of the second dimension of `A`.
-   **offsetA**: starting index for `A`.
-   **x**: search vector stored as a [`Float32Array`][mdn-float32array].
-   **strideX**: stride length of `x`.
-   **offsetX**: starting index for `x`.
-   **workspace**: workspace array stored as a [`Uint8Array`][mdn-uint8array] for tracking row match candidates. This parameter is ignored if the function is provided an input matrix stored in row-major order.
-   **strideW**: stride length of `workspace`.
-   **offsetW**: starting index for `workspace`.

When an input matrix is stored in row-major order, the workspace parameter is ignored, and, thus, one may provide an empty workspace array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0 ] );

var x = new Float32Array( [ 3.0, 4.0 ] );
var workspace = new Uint8Array( 0 );
var out = sindexOfRow.ndarray( 3, 2, A, 2, 1, 0, x, 1, 0, workspace, 1, 0 );
// returns 1
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When searching for a matching row, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct, and `-0` and `+0` are considered the same.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var Uint8Array = require( '@stdlib/array/uint8' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var sindexOfRow = require( '@stdlib/blas/ext/base/sindex-of-row' );

var shape = [ 3, 3 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 0.0, 0.0, 0.0 ] );
console.log( ndarray2array( A, shape, strides, 0, order ) );

var x = new Float32Array( [ 4.0, 5.0, 6.0 ] );
console.log( x );

var workspace = new Uint8Array( shape[ 0 ] );

var out = sindexOfRow( order, shape[ 0 ], shape[ 1 ], A, strides[ 0 ], x, 1, workspace, 1 );
console.log( out );
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
#include "stdlib/blas/ext/base/sindex_of_row.h"
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_sindex_of_row( order, M, N, \*A, LDA, \*X, strideX, \*workspace, strideW )

<!-- lint enable maximum-heading-length -->

Returns the index of the first row in a single-precision floating-point input matrix which has the same elements as a provided search vector.

```c
#include "stdlib/blas/base/shared.h"
#include <stdint.h>

const float A[] = { 1.0f, 2.0f, 0.0f, 3.0f, 4.0f, 0.0f };
const float x[] = { 2.0f, 4.0f };
uint8_t workspace[ 3 ];

int idx = stdlib_strided_sindex_of_row( CblasColMajor, 3, 2, A, 3, x, 1, workspace, 1 );
// returns 1
```

The function accepts the following arguments:

-   **order**: `[in] CBLAS_LAYOUT` storage layout.
-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **A**: `[in] float*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **X**: `[in] float*` search vector.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **workspace**: `[inout] uint8_t*` workspace array for tracking row match candidates. This parameter is ignored if the function is provided an input matrix stored in row-major order.
-   **strideW**: `[in] CBLAS_INT` stride length for `workspace`.

When an input matrix is stored in row-major order, the workspace parameter is ignored, and, thus, one may either provide an empty workspace array or a `NULL` pointer.

```c
#include "stdlib/blas/base/shared.h"

const float A[] = { 1.0f, 2.0f, 3.0f, 4.0f, 0.0f, 0.0f };
const float x[] = { 3.0f, 4.0f };

int idx = stdlib_strided_sindex_of_row( CblasRowMajor, 3, 2, A, 2, x, 1, NULL, 1 );
// returns 1
```

```c
CBLAS_INT stdlib_strided_sindex_of_row( const CBLAS_LAYOUT order, const CBLAS_INT M, const CBLAS_INT N, const float *A, const CBLAS_INT LDA, const float *X, const CBLAS_INT strideX, uint8_t *workspace, const CBLAS_INT strideW );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_sindex_of_row_ndarray( M, N, \*A, strideA1, strideA2, offsetA, \*X, strideX, offsetX, \*workspace, strideW, offsetW )

<!-- lint enable maximum-heading-length -->

Returns the index of the first row in a single-precision floating-point input matrix which has the same elements as a provided search vector using alternative indexing semantics.

```c
#include <stdint.h>

const float A[] = { 1.0f, 2.0f, 0.0f, 3.0f, 4.0f, 0.0f };
const float x[] = { 2.0f, 4.0f };
uint8_t workspace[ 3 ];

int idx = stdlib_strided_sindex_of_row_ndarray( 3, 2, A, 1, 3, 0, x, 1, 0, workspace, 1, 0 );
// returns 1
```

The function accepts the following arguments:

-   **M**: `[in] CBLAS_INT` number of rows in `A`.
-   **N**: `[in] CBLAS_INT` number of columns in `A`.
-   **A**: `[in] float*` input matrix.
-   **strideA1**: `[in] CBLAS_INT` stride of the first dimension of `A`.
-   **strideA2**: `[in] CBLAS_INT` stride of the second dimension of `A`.
-   **offsetA**: `[in] CBLAS_INT` index offset for `A`.
-   **X**: `[in] float*` search vector.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **workspace**: `[inout] uint8_t*` workspace array for tracking row match candidates. This parameter is ignored if the function is provided an input matrix stored in row-major order.
-   **strideW**: `[in] CBLAS_INT` stride length for `workspace`.
-   **offsetW**: `[in] CBLAS_INT` starting index for `workspace`.

When an input matrix is stored in row-major order, the workspace parameter is ignored, and, thus, one may either provide an empty workspace array or a `NULL` pointer.

```c
const float A[] = { 1.0f, 2.0f, 3.0f, 4.0f, 0.0f, 0.0f };
const float x[] = { 3.0f, 4.0f };

int idx = stdlib_strided_sindex_of_row_ndarray( 3, 2, A, 2, 1, 0, x, 1, 0, NULL, 1, 0 );
// returns 1
```

```c
CBLAS_INT stdlib_strided_sindex_of_row_ndarray( const CBLAS_INT M, const CBLAS_INT N, const float *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, uint8_t *workspace, const CBLAS_INT strideW, const CBLAS_INT offsetW );
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
#include "stdlib/blas/ext/base/sindex_of_row.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Create a matrix (row-major):
    const float A[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 0.0f, 0.0f, 0.0f };

    // Create a search vector:
    const float x[] = { 4.0f, 5.0f, 6.0f };

    // Specify the number of matrix rows and columns:
    const int M = 3;
    const int N = 3;

    // Perform a search:
    int idx = stdlib_strided_sindex_of_row( CblasRowMajor, M, N, A, N, x, 1, NULL, 1 );

    // Print the result:
    printf( "index value: %d\n", idx );
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

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-uint8array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

</section>

<!-- /.links -->
