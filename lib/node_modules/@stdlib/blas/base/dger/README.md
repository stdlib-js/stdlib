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

# dger

> Perform the rank 1 operation `A = α*x*y^T + A`.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dger = require( '@stdlib/blas/base/dger' );
```

#### dger( ord, M, N, α, x, sx, y, sy, A, lda )

Performs the rank 1 operation `A = α*x*y^T + A`, where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float64Array( [ 1.0, 1.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );

dger( 'row-major', 2, 3, 1.0, x, 1, y, 1, A, 3 );
// A => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function has the following parameters:

-   **ord**: storage layout.
-   **M**: number of rows in the matrix `A`.
-   **N**: number of columns in the matrix `A`.
-   **α**: scalar constant.
-   **x**: input [`Float64Array`][mdn-float64array].
-   **sx**: stride length for `x`.
-   **y**: output [`Float64Array`][mdn-float64array].
-   **sy**: stride length for `y`.
-   **A**: input matrix stored in linear memory as a [`Float64Array`][mdn-float64array].
-   **lda**: stride of the first dimension of `A` (leading dimension of `A`).

The stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to iterate over every other element in `x` and `y`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );
var x = new Float64Array( [ 1.0, 0.0, 1.0, 0.0 ] );
var y = new Float64Array( [ 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] );

dger( 'column-major', 2, 3, 1.0, x, 2, y, 2, A, 2 );
// A => <Float64Array>[ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 0.0, 1.0, 1.0 ] );
var y0 = new Float64Array( [ 0.0, 1.0, 1.0, 1.0 ] );
var A = new Float64Array( [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

dger( 'column-major', 2, 3, 1.0, x1, -1, y1, -1, A, 2 );
// A => <Float64Array>[ 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

#### dger.ndarray( M, N, α, x, sx, ox, y, sy, oy, A, sa1, sa2, oa )

Performs the rank 1 operation `A = α*x*y^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M` by `N` matrix.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float64Array( [ 1.0, 1.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );

dger.ndarray( 2, 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
// A => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function has the following additional parameters:

-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 0.0, 0.0, 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );
var x = new Float64Array( [ 0.0, 1.0, 0.0, 1.0, 0.0 ] );
var y = new Float64Array( [ 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0 ] );

dger.ndarray( 2, 3, 1.0, x, 2, 1, y, 2, 1, A, 1, 2, 2 );
// A => <Float64Array>[ 0.0, 0.0, 2.0, 5.0, 3.0, 6.0, 4.0, 7.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dger()` corresponds to the [BLAS][blas] level 2 function [`dger`][blas-dger].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dger = require( '@stdlib/blas/base/dger' );

var opts = {
    'dtype': 'float64'
};

var M = 3;
var N = 5;

var A = discreteUniform( M*N, 0, 255, opts );
var x = discreteUniform( M, 0, 255, opts );
var y = discreteUniform( N, 0, 255, opts );

dger( 'row-major', M, N, 1.0, x, 1, y, 1, A, N );
console.log( A );

dger.ndarray( M, N, 1.0, x, 1, 0, y, 1, 0, A, 1, M, 0 );
console.log(A);

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
#include "stdlib/blas/base/dger.h"
```

#### c_dger( layout, M, N, alpha, \*X, strideX, \*Y, strideY, \*A, LDA )

Performs the rank 1 operation `A = alpha*x*y^T + A`, where `alpha` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.

```c
#include "stdlib/blas/base/shared.h"

double A[ 3*4 ] = {
   0.0, 0.0, 0.0, 0.0,
   0.0, 0.0, 0.0, 0.0,
   0.0, 0.0, 0.0, 0.0
};

const double x[ 3 ] = { 1.0, 4.0, 0.0 };
const double y[ 4 ] = { 0.0, 1.0, 2.0, 3.0 };

c_dger( CblasRowMajor, 3, 4, 1.0, x, 1, y, 1, A, 4 );
```

The function accepts the following arguments:

-   **layout**: `[in] CBLAS_LAYOUT` storage layout.
-   **M**: `[in] CBLAS_INT` number of rows in the matrix `A`.
-   **N**: `[in] CBLAS_INT` number of columns in the matrix `A`.
-   **alpha**: `[in] double` scalar constant.
-   **X**: `[in] double*` an `M` element vector.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Y**: `[in] double*` an `N` element vector.
-   **strideY**: `[in] CBLAS_INT` stride length for `Y`.
-   **A**: `[inout] double*` input matrix.
-   **LDA**: `[in] CBLAS_INT` stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

```c
void c_dger( const CBLAS_LAYOUT layout, const CBLAS_INT M, const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, const double *Y, const CBLAS_INT strideY, double *A, const CBLAS_INT LDA );
```

#### c_dger_ndarray( M, N, alpha, \*X, sx, ox, \*Y, sy, oy, \*A, sa1, sa2, oa )

Performs the rank 1 operation `A = alpha*x*y^T + A`, using alternative indexing semantics and where `alpha` is a scalar, `x` is an `M` element vector, `y` is an `N` element vector, and `A` is an `M`-by-`N` matrix.

```c
#include "stdlib/blas/base/shared.h"

double A[ 3*4 ] = {
   0.0, 0.0, 0.0, 0.0,
   0.0, 0.0, 0.0, 0.0,
   0.0, 0.0, 0.0, 0.0
};

const double x[ 3 ] = { 1.0, 4.0, 0.0 };
const double y[ 4 ] = { 0.0, 1.0, 2.0, 3.0 };

c_dger_ndarray( 3, 4, 1.0, x, 1, 0, y, 1, 0, A, 4, 1, 0 );
```

The function accepts the following arguments:

-   **layout**: `[in] CBLAS_LAYOUT` storage layout.
-   **M**: `[in] CBLAS_INT` number of rows in the matrix `A`.
-   **N**: `[in] CBLAS_INT` number of columns in the matrix `A`.
-   **alpha**: `[in] double` scalar constant.
-   **X**: `[in] double*` an `M` element vector.
-   **sx**: `[in] CBLAS_INT` stride length for `X`.
-   **ox**: `[in] CBLAS_INT` starting index for `X`.
-   **Y**: `[in] double*` an `N` element vector.
-   **sy**: `[in] CBLAS_INT` stride length for `Y`.
-   **oy**: `[in] CBLAS_INT` starting index for `Y`.
-   **A**: `[inout] double*` input matrix.
-   **sa1**: `[in] CBLAS_INT` stride of the first dimension of `A`.
-   **sa2**: `[in] CBLAS_INT` stride of the second dimension of `A`.
-   **oa**: `[in] CBLAS_INT` starting index for `A`.

```c
void c_dger( onst CBLAS_INT M, const CBLAS_INT N, const double alpha, const double *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, const double *Y, const CBLAS_INT strideY, const CBLAS_INT offsetY, double *A, const CBLAS_INT strideA1, const CBLAS_INT strideA2, const CBLAS_INT offsetA );
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
#include "stdlib/blas/base/dger.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
   // Define a 3x4 matrix stored in row-major order:
   double A[ 3*4 ] = {
      0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0
   };
   // Define `x` and `y^T` vectors:
   const double x[ 3 ] = { 1.0, 4.0, 0.0 };      // M
   const double y[ 4 ] = { 0.0, 1.0, 2.0, 3.0 }; // N

   // Specify the number of rows and columns:
   const int M = 3;
   const int N = 4;

   // Specify stride lengths:
   const int strideX = 1;
   const int strideY = 1;

   // Perform operation:
   c_dger( CblasRowMajor, M, N, 1.0, x, strideX, y, strideY, A, N );

   // Print the result:
   for ( int i = 0; i < M; i++ ) {
      for ( int j = 0; j < N; j++ ) {
         printf( "A[%i,%i] = %lf\n", i, j, A[ (i*N)+j ] );
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

[blas-dger]: https://www.netlib.org/lapack/explore-html-3.6.1/d7/d15/group__double__blas__level2_ga458222e01b4d348e9b52b9343d52f828.html

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
