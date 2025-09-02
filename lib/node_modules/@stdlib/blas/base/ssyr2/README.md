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

# ssyr2

> Perform the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`.

<section class="usage">

## Usage

```javascript
var ssyr2 = require( '@stdlib/blas/base/ssyr2' );
```

#### ssyr2( order, uplo, N, α, x, sx, y, sy, A, LDA )

Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`, where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr2( 'row-major', 'upper', 3, 1.0, x, 1, y, 1, A, 3 );
// A => <Float32Array>[ 3.0, 6.0, 9.0, 2.0, 9.0, 14.0, 3.0, 2.0, 19.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: number of elements along each dimension of `A`.
-   **α**: scalar constant.
-   **x**: first input [`Float32Array`][mdn-float32array].
-   **sx**: stride length for `x`.
-   **y**: second input [`Float32Array`][mdn-float32array].
-   **sy**: stride length for `y`.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over every other element of `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr2( 'row-major', 'upper', 3, 1.0, x, 2, y, 1, A, 3 );
// A => <Float32Array>[ 3.0, 7.0, 11.0, 2.0, 13.0, 21.0, 3.0, 2.0, 31.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 1.0, 1.0, 1.0 ] );
var y0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

ssyr2( 'row-major', 'upper', 3, 1.0, x1, 1, y1, 1, A, 3 );
// A => <Float32Array>[ 3.0, 5.0, 7.0, 2.0, 5.0, 7.0, 3.0, 2.0, 7.0 ]
```

#### ssyr2.ndarray( uplo, N, α, x, sx, ox, y, sy, oy, A, sa1, sa2, oa )

Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr2.ndarray( 'upper', 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
// A => <Float32Array>[ 3.0, 6.0, 9.0, 2.0, 9.0, 14.0, 3.0, 2.0, 19.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 2.0, 1.0, 2.0, 3.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr2.ndarray( 'upper', 3, 1.0, x, -2, 4, y, 1, 0, A, 3, 1, 0 );
// A => <Float32Array>[ 11.0, 15.0, 19.0, 2.0, 13.0, 13.0, 3.0, 2.0, 7.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `ssyr2()` corresponds to the [BLAS][blas] level 2 function [`ssyr2`][blas-ssyr2].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ones = require( '@stdlib/array/ones' );
var ssyr2 = require( '@stdlib/blas/base/ssyr2' );

var opts = {
    'dtype': 'float32'
};

var N = 3;

// Create N-by-N symmetric matrices:
var A1 = ones( N*N, opts.dtype );
var A2 = ones( N*N, opts.dtype );

// Create random vectors:
var x = discreteUniform( N, -10.0, 10.0, opts );
var y = discreteUniform( N, -10.0, 10.0, opts );

ssyr2( 'row-major', 'upper', 3, 1.0, x, 1, y, 1, A1, 3 );
console.log( A1 );

ssyr2.ndarray( 'upper', 3, 1.0, x, 1, 0, y, 1, 0, A2, 3, 1, 0 );
console.log( A2 );
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
#include "stdlib/blas/base/ssyr2.h"
```

#### c_ssyr2( order, uplo, N, alpha, \*X, sx, \*Y, sy, \*A, LDA )

Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.

```c
#include "stdlib/blas/base/shared.h"

float A[] = { 1.0f, 2.0f, 3.0f, 2.0f, 1.0f, 2.0f, 3.0f, 2.0f, 1.0f };
const float x[] = { 1.0f, 2.0f, 3.0f };
const float y[] = { 1.0f, 2.0f, 3.0f };

c_ssyr2( CblasColMajor, CblasUpper, 3, 1.0f, x, 1, y, 1, A, 3 );
```

The function accepts the following arguments:

-   **order**: `[in] CBLAS_LAYOUT` storage layout.
-   **uplo**: `[in] CBLAS_UPLO` specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: `[in] CBLAS_INT` number of elements along each dimension of `A`.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[in] float*` first input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[in] float*` second input array.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **A**: `[inout] float*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

```c
void c_ssyr2( const CBLAS_LAYOUT order, const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY, float *A, const CBLAS_INT LDA )
```

<!-- lint disable maximum-heading-length -->

#### c_ssyr2_ndarray( uplo, N, alpha, \*X, sx, ox, \*Y, sy, oy, \*A, sa1, sa2, oa )

Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.

```c
#include "stdlib/blas/base/shared.h"

float A[] = { 1.0f, 2.0f, 3.0f, 2.0f, 1.0f, 2.0f, 3.0f, 2.0f, 1.0f };
const float x[] = { 1.0f, 2.0f, 3.0f };
const float y[] = { 1.0f, 2.0f, 3.0f };

c_ssyr2_ndarray( CblasUpper, 3, 1.0f, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
```

The function accepts the following arguments:

-   **uplo**: `[in] CBLAS_UPLO` specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: `[in] CBLAS_INT` number of elements along each dimension of `A`.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[in] float*` first input array.
-   **sx**: `[in] CBLAS_INT` stride length for `X`.
-   **ox**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[in] float` second input array.
-   **sy**: `[in] CBLAS_INT` stride length for `Y`.
-   **oy**: `[in] CBLAS_INT` starting index for `Y`.
-   **A**: `[inout] float*` input matrix.
-   **sa1**: `[in] CBLAS_INT` stride of the first dimension of `A`.
-   **sa2**: `[in] CBLAS_INT` stride of the second dimension of `A`.
-   **oa**: `[in] CBLAS_INT` starting index for `A`.

```c
void c_ssyr2_ndarray( const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, CBLAS_INT strideY, const CBLAS_INT offsetY, float *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA )
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
#include "stdlib/blas/base/ssyr2.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Define 3x3 symmetric matrices stored in row-major layout:
    float A1[ 3*3 ] = {
        1.0f, 2.0f, 3.0f,
        2.0f, 1.0f, 2.0f,
        3.0f, 2.0f, 1.0f
    };

    float A2[ 3*3 ] = {
        1.0f, 2.0f, 3.0f,
        2.0f, 1.0f, 2.0f,
        3.0f, 2.0f, 1.0f
    };

    // Define `x` and `y` vectors:
    const float x[ 3 ] = { 1.0f, 2.0f, 3.0f };
    const float y[ 3 ] = { 1.0f, 2.0f, 3.0f };

    // Specify the number of elements along each dimension of `A1` and `A2`:
    const int N = 3;

    // Perform the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`:
    c_ssyr2( CblasColMajor, CblasUpper, N, 1.0f, x, 1, y, 1, A1, N );

    // Print the result:
    for ( int i = 0; i < N*N; i++ ) {
        printf( "A1[ %i ] = %f\n", i, A1[ i ] );
    }

    // Perform the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A` using alternative indexing semantics:
    c_ssyr2_ndarray( CblasUpper, N, 1.0f, x, 1, 0, y, 1, 0, A2, N, 1, 0 );

    // Print the result:
    for ( int i = 0; i < N*N; i++ ) {
        printf( "A2[ %i ] = %f\n", i, A2[ i ] );
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

[blas-ssyr2]: https://www.netlib.org/lapack/explore-html-3.6.1/d6/d30/group__single__blas__level2_gafeb94d36b0bb94a6f87a0576e339434d.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
