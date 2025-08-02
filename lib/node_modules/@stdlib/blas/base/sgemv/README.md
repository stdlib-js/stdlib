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

# sgemv

> Perform one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`.

<section class="usage">

## Usage

```javascript
var sgemv = require( '@stdlib/blas/base/sgemv' );
```

#### sgemv( order, trans, M, N, α, A, LDA, x, sx, β, y, sy )

Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
var y = new Float32Array( [ 1.0, 1.0 ] );

sgemv( 'row-major', 'no-transpose', 2, 3, 1.0, A, 3, x, 1, 1.0, y, 1 );
// y => <Float32Array>[ 7.0, 16.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **trans**: specifies whether `A` should be transposed, conjugate-transposed, or not transposed.
-   **M**: number of rows in the matrix `A`.
-   **N**: number of columns in the matrix `A`.
-   **α**: scalar constant.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **x**: input [`Float32Array`][mdn-float32array].
-   **sx**: stride length for `x`.
-   **β**: scalar constant.
-   **y**: output [`Float32Array`][mdn-float32array].
-   **sy**: stride length for `y`.

The stride parameters determine how operations are performed. For example, to iterate over every other element in `x` and `y`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var x = new Float32Array( [ 1.0, 0.0, 1.0, 0.0 ] );
var y = new Float32Array( [ 1.0, 0.0, 1.0, 0.0 ] );

sgemv( 'row-major', 'no-transpose', 2, 2, 1.0, A, 2, x, 2, 1.0, y, 2 );
// y => <Float32Array>[ 4.0, 0.0, 8.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 1.0, 1.0 ] );
var y0 = new Float32Array( [ 0.0, 1.0, 1.0 ] );
var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

sgemv( 'row-major', 'no-transpose', 2, 2, 1.0, A, 2, x1, -1, 1.0, y1, -1 );
// y0 => <Float32Array>[ 0.0, 8.0, 4.0 ]
```

<!-- lint disable maximum-heading-length -->

#### sgemv.ndarray( trans, M, N, α, A, sa1, sa2, oa, x, sx, ox, β, y, sy, oy )

Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, using alternative indexing semantics and where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
var y = new Float32Array( [ 1.0, 1.0 ] );

sgemv.ndarray( 'no-transpose', 2, 3, 1.0, A, 3, 1, 0, x, 1, 0, 1.0, y, 1, 0 );
// y => <Float32Array>[ 7.0, 16.0 ]
```

The function has the following additional parameters:

-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0 ] );

sgemv.ndarray( 'no-transpose', 2, 3, 1.0, A, 3, 1, 0, x, 1, 1, 1.0, y, -2, 2 );
// y => <Float32Array>[ 39, 8, 23, 10 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sgemv()` corresponds to the [BLAS][blas] level 2 function [`sgemv`][blas-sgemv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sgemv = require( '@stdlib/blas/base/sgemv' );

var opts = {
    'dtype': 'float32'
};

var M = 3;
var N = 3;

var A = discreteUniform( M*N, 0, 255, opts );
var x = discreteUniform( N, 0, 255, opts );
var y = discreteUniform( M, 0, 255, opts );

sgemv( 'row-major', 'no-transpose', M, N, 1.0, A, N, x, -1, 1.0, y, -1 );
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
#include "stdlib/blas/base/sgemv.h"
```

#### c_sgemv( layout, trans, M, N, alpha, \*A, LDA, \*X, strideX, beta, \*Y, strideY )

Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.

```c
#include "stdlib/blas/base/shared.h"

const float A[] = { 1.0f, 0.0f, 0.0f, 2.0f, 1.0f, 0.0f, 3.0f, 2.0f, 1.0f };
const float x[] = { 1.0f, 2.0f, 3.0f };
float y[] = { 1.0f, 2.0f, 3.0f };

c_sgemv( CblasColMajor, CblasNoTrans, 3, 3, 1.0f, A, 3, x, 1, 1.0f, y, 1 );
```

The function accepts the following arguments:

-   **layout**: `[in] CBLAS_LAYOUT` storage layout.
-   **trans**: `[in] CBLAS_TRANSPOSE` specifies whether `A` should be transposed, conjugate-transposed, or not transposed.
-   **M**: `[in] CBLAS_INT` number of rows in the matrix `A`.
-   **N**: `[in] CBLAS_INT` number of columns in the matrix `A`.
-   **alpha**: `[in] float` scalar constant.
-   **A**: `[in] float*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **X**: `[in] float*` first input vector.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **beta**: `[in] float` scalar constant.
-   **Y**: `[inout] float*` second input vector.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.

```c
void c_sgemv( const CBLAS_LAYOUT layout, const CBLAS_TRANSPOSE trans, const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *A, const CBLAS_INT LDA, const float *X, const CBLAS_INT strideX, const float beta, float *Y, const CBLAS_INT strideY )
```

#### c_sgemv_ndarray( trans, M, N, alpha, \*A, sa1, sa2, oa, \*X, sx, ox, beta, \*Y, sy, oy )

Performs one of the matrix-vector operations `y = α*A*x + β*y` or `y = α*A^T*x + β*y`, using indexing alternative semantics and where `α` and `β` are scalars, `x` and `y` are vectors, and `A` is an `M` by `N` matrix.

```c
#include "stdlib/blas/base/shared.h"

const float A[] = { 1.0f, 0.0f, 0.0f, 2.0f, 1.0f, 0.0f, 3.0f, 2.0f, 1.0f };
const float x[] = { 1.0f, 2.0f, 3.0f };
float y[] = { 1.0f, 2.0f, 3.0f };

c_sgemv_ndarray( CblasNoTrans, 3, 3, 1.0f, A, 1, 3, 0, x, 1, 0, 1.0f, y, 1, 0 );
```

The function accepts the following arguments:

-   **trans**: `[in] CBLAS_TRANSPOSE` specifies whether `A` should be transposed, conjugate-transposed, or not transposed.
-   **M**: `[in] CBLAS_INT` number of rows in the matrix `A`.
-   **N**: `[in] CBLAS_INT` number of columns in the matrix `A`.
-   **alpha**: `[in] float` scalar constant.
-   **A**: `[in] float*` input matrix.
-   **sa1**: `[in] CBLAS_INT` stride of the first dimension of `A`.
-   **sa2**: `[in] CBLAS_INT` stride of the second dimension of `A`.
-   **oa**: `[in] CBLAS_INT` starting index for `A`.
-   **X**: `[in] float*` first input vector.
-   **sx**: `[in] CBLAS_INT` stride length for `X`.
-   **ox**: `[in] CBLAS_INT` starting index for `X`.
-   **beta**: `[in] float` scalar constant.
-   **Y**: `[inout] float*` second input vector.
-   **sy**: `[in] CBLAS_INT` stride length for `Y`.
-   **oy**: `[in] CBLAS_INT` starting index for `Y`.

```c
void c_sgemv_ndarray( const CBLAS_TRANSPOSE trans, const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float beta, float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY )
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
#include "stdlib/blas/base/sgemv.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Define a 3x3 matrix stored in row-major order:
    const float A[ 3*3 ] = {
        1.0f, 2.0f, 3.0f,
        4.0f, 5.0f, 6.0f,
        7.0f, 8.0f, 9.0f
    };

    // Define `x` and `y` vectors:
    const float x[ 3 ] = { 1.0f, 2.0f, 3.0f };
    float y[ 3 ] = { 1.0f, 2.0f, 3.0f };

    // Specify the number of elements along each dimension of `A`:
    const int M = 3;
    const int N = 3;

    // Perform the matrix-vector operation `y = α*A*x + β*y`:
    c_sgemv( CblasRowMajor, CblasNoTrans, M, N, 1.0f, A, M, x, 1, 1.0f, y, 1 );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "y[ %i ] = %f\n", i, y[ i ] );
    }

    // Perform the matrix-vector operation `y = α*A*x + β*y` using alternative indexing semantics:
    c_sgemv_ndarray( CblasNoTrans, M, N, 1.0f, A, N, 1, 0, x, 1, 0, 1.0f, y, 1, 0 );

    // Print the result:
    for ( int i = 0; i < N; i++ ) {
        printf( "y[ %i ] = %f\n", i, y[ i ] );
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

[blas-sgemv]: https://www.netlib.org/lapack/explore-html-3.6.1/d6/d30/group__single__blas__level2_gafc92361b74c6d41c7e5afa0aa5d13ec9.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
