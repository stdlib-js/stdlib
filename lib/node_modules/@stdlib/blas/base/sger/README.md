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

# sger

> Perform the rank 1 operation `A = α*x*y^T + A`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sger = require( '@stdlib/blas/base/sger' );
```

#### sger( order, M, N, α, x, sx, y, sy, A, lda )

Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float32Array( [ 1.0, 1.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );

sger( 'row-major', 2, 3, 1.0, x, 1, y, 1, A, 3 );
// A => <Float32Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in the matrix `A`.
-   **N**: number of columns in the matrix `A`.
-   **α**: scalar constant.
-   **x**: an `M` element [`Float32Array`][mdn-float32array].
-   **sx**: stride length for `x`.
-   **y**: an `N` element [`Float32Array`][mdn-float32array].
-   **sy**: stride length for `y`.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **lda**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

The stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to iterate over every other element in `x` and `y`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );
var x = new Float32Array( [ 1.0, 0.0, 1.0, 0.0 ] );
var y = new Float32Array( [ 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] );

sger( 'column-major', 2, 3, 1.0, x, 2, y, 2, A, 2 );
// A => <Float32Array>[ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 1.0, 1.0 ] );
var y0 = new Float32Array( [ 0.0, 1.0, 1.0, 1.0 ] );
var A = new Float32Array( [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

sger( 'column-major', 2, 3, 1.0, x1, -1, y1, -1, A, 2 );
// A => <Float32Array>[ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

#### sger.ndarray( M, N, α, x, sx, ox, y, sy, oy, A, sa1, sa2, oa )

Performs the rank 1 operation `A = α*x*y^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float32Array( [ 1.0, 1.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );

sger.ndarray( 2, 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
// A => <Float32Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
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

var A = new Float32Array( [ 0.0, 0.0, 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );
var x = new Float32Array( [ 0.0, 1.0, 0.0, 1.0, 0.0 ] );
var y = new Float32Array( [ 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] );

sger.ndarray( 2, 3, 1.0, x, 2, 1, y, 2, 1, A, 1, 2, 2 );
// A => <Float32Array>[ 0.0, 0.0, 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sger()` corresponds to the [BLAS][blas] level 2 function [`sger`][blas-sger].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sger = require( '@stdlib/blas/base/sger' );

var opts = {
    'dtype': 'float32'
};

var M = 3;
var N = 5;

var A = discreteUniform( M*N, 0, 255, opts );
var x = discreteUniform( M, 0, 255, opts );
var y = discreteUniform( N, 0, 255, opts );

sger( 'row-major', M, N, 1.0, x, 1, y, 1, A, N );
console.log( A );

sger.ndarray( M, N, 1.0, x, 1, 0, y, 1, 0, A, 1, M, 0 );
console.log( A );

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
#include "stdlib/blas/base/sger.h"
```

#### c_sger( layout, M, N, alpha, \*X, strideX, \*Y, strideY, \*A, LDA )

Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `X` is an `M` element vector, `Y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.

```c
#include "stdlib/blas/base/shared.h"

float A[ 3*4 ] = {
   0.0f, 0.0f, 0.0f, 0.0f,
   0.0f, 0.0f, 0.0f, 0.0f,
   0.0f, 0.0f, 0.0f, 0.0f
};

const float x[ 3 ] = { 1.0f, 4.0f, 0.0f };
const float y[ 4 ] = { 0.0f, 1.0f, 2.0f, 3.0f };

c_sger( CblasRowMajor, 3, 4, 1.0f, x, 1, y, 1, A, 4 );
```

The function accepts the following arguments:

-   **layout**: `[in] CBLAS_LAYOUT` storage layout.
-   **M**: `[in] CBLAS_INT` number of rows in the matrix `A`.
-   **N**: `[in] CBLAS_INT` number of columns in the matrix `A`.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[in] float*` an `M` element vector.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[in] float*` an `N` element vector.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **A**: `[inout] float*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

```c
void c_sger( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const float *Y, const CBLAS_INT strideY, float *A, const CBLAS_INT LDA );
```

#### c_sger_ndarray( M, N, alpha, \*X, sx, ox, \*Y, sy, oy, \*A, sa1, sa2, oa )

Performs the rank 1 operation `A = alpha*x*y^T + A`, using alternative indexing semantics and where `alpha` is a scalar, `X` is an `M` element vector, `Y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.

```c
#include "stdlib/blas/base/shared.h"

float A[ 3*4 ] = {
   0.0f, 0.0f, 0.0f, 0.0f,
   0.0f, 0.0f, 0.0f, 0.0f,
   0.0f, 0.0f, 0.0f, 0.0f
};

const float x[ 3 ] = { 1.0f, 4.0f, 0.0f };
const float y[ 4 ] = { 0.0f, 1.0f, 2.0f, 3.0f };

c_sger_ndarray( 3, 4, 1.0f, x, 1, 0, y, 1, 0, A, 4, 1, 0 );
```

The function accepts the following arguments:

-   **layout**: `[in] CBLAS_LAYOUT` storage layout.
-   **M**: `[in] CBLAS_INT` number of rows in the matrix `A`.
-   **N**: `[in] CBLAS_INT` number of columns in the matrix `A`.
-   **alpha**: `[in] float` scalar constant.
-   **X**: `[in] float*` an `M` element vector.
-   **sx**: `[in] CBLAS_INT` stride length for `X`.
-   **ox**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[in] float*` an `N` element vector.
-   **sy**: `[in] CBLAS_INT` stride length for `Y`.
-   **oy**: `[in] CBLAS_INT` starting index for `Y`.
-   **A**: `[inout] float*` input matrix.
-   **sa1**: `[in] CBLAS_INT` stride of the first dimension of `A`.
-   **sa2**: `[in] CBLAS_INT` stride of the second dimension of `A`.
-   **oa**: `[in] CBLAS_INT` starting index for `A`.

```c
void c_sger_ndarray( const CBLAS_INT M, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const float *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, float *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA );
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
#include "stdlib/blas/base/sger.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
   // Define a 3x4 matrix stored in row-major order:
   float A[ 3*4 ] = {
      0.0f, 0.0f, 0.0f, 0.0f,
      0.0f, 0.0f, 0.0f, 0.0f,
      0.0f, 0.0f, 0.0f, 0.0f
   };
   // Define `x` and `y^T` vectors:
   const float x[ 3 ] = { 1.0f, 4.0f, 0.0f };       // M
   const float y[ 4 ] = { 0.0f, 1.0f, 2.0f, 3.0f }; // N

   // Specify the number of rows and columns:
   const int M = 3;
   const int N = 4;

   // Specify stride lengths:
   const int strideX = 1;
   const int strideY = 1;

   // Perform operation:
   c_sger( CblasRowMajor, M, N, 1.0f, x, strideX, y, strideY, A, N );

   // Print the result:
   for ( int i = 0; i < M; i++ ) {
      for ( int j = 0; j < N; j++ ) {
         printf( "A[%i,%i] = %f\n", i, j, A[ (i*N)+j ] );
      }
   }

   // Perform operation using alternative indexing semantics:
   c_sger( CblasRowMajor, M, N, 1.0f, x, strideX, 0, y, 0, strideY, A, N, 1, 0 );

   // Print the result:
   for ( int i = 0; i < M; i++ ) {
      for ( int j = 0; j < N; j++ ) {
         printf( "A[%i,%i] = %f\n", i, j, A[ (i*N)+j ] );
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

[blas]: http://www.netlib.org/blas

[blas-sger]: https://www.netlib.org/lapack/explore-html/d8/d75/group__ger_ga95baec6bb0a84393d7bc67212b566ab0.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
