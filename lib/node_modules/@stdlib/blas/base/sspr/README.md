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

# sspr

> Perform the symmetric rank 1 operation `A = α*x*x^T + A`.

<section class="usage">

## Usage

```javascript
var sspr = require( '@stdlib/blas/base/sspr' );
```

#### sspr( order, uplo, N, α, x, sx, AP )

Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

sspr( 'row-major', 'upper', 3, 1.0, x, 1, AP );
// AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the symmetric matrix `A` is supplied.
-   **N**: number of elements along each dimension of `A`.
-   **α**: scalar constant.
-   **x**: input [`Float32Array`][mdn-float32array].
-   **sx**: index increment for `x`.
-   **AP**: packed form of a symmetric matrix `A` stored as a [`Float32Array`][mdn-float32array].

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over the elements of `x` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 3.0, 2.0, 1.0 ] );

sspr( 'row-major', 'upper', 3, 1.0, x, -1, AP );
// AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 3.0, 2.0, 1.0 ] );
var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

sspr( 'row-major', 'upper', 3, 1.0, x1, -1, AP );
// AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

#### sspr.ndarray( uplo, N, α, x, sx, ox, AP, sap, oap )

Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var AP = new Float32Array( [ 1.0, 1.0, 2.0, 1.0, 2.0, 3.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

sspr.ndarray( 'row-major', 'lower', 3, 1.0, x, 1, 0, AP, 1, 0 );
// AP => <Float32Array>[ 2.0, 3.0, 6.0, 4.0, 8.0, 12.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **sap**: `AP` stride length.
-   **oap**: starting index for `AP`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 3.0, 2.0, 1.0 ] );

sspr.ndarray( 'row-major', 'upper', 3, 1.0, x, -1, 2, AP, 1, 0 );
// AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sspr()` corresponds to the [BLAS][blas] level 2 function [`sspr`][blas-sspr].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sspr = require( '@stdlib/blas/base/sspr' );

var opts = {
    'dtype': 'float32'
};

var N = 5;

var AP = discreteUniform( N * ( N + 1 ) / 2, -10.0, 10.0, opts );
var x = discreteUniform( N, -10.0, 10.0, opts );

sspr( 'column-major', 'upper', N, 1.0, x, 1, AP );
console.log( AP );

sspr.ndarray( 'column-major', 'upper', N, 1.0, x, 1, 0, AP, 1, 0 );
console.log( AP );
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
#include "stdlib/blas/base/sspr.h"
```

#### c_sspr( order, uplo, N, alpha, \*X, strideX, \*AP )

Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.

```c
#include "stdlib/blas/base/shared.h"

float AP[] = { 1.0f, 2.0f, 3.0f, 1.0f, 2.0f, 1.0f };
const float x[] = { 1.0f, 2.0f, 3.0f };

c_sspr( CblasColMajor, CblasUpper, 3, 1.0f, x, 1, AP );
```

The function accepts the following arguments:

-   **order**: `[in] CBLAS_LAYOUT` storage layout.
-   **uplo**: `[in] CBLAS_UPLO` specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: `[in] CBLAS_INT` number of elements along each dimension of `A`.
-   **alpha**: `[in] float` scalar.
-   **X**: `[in] float*` input vector.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **AP**: `[inout] float*` packed form of a symmetric matrix `A`.

```c
void c_sspr( const CBLAS_LAYOUT order, const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, float *AP )
```

#### c_sspr_ndarray( order, uplo, N, alpha, \*X, strideX, \*AP, strideAP, offsetAP )

Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form using alternative indexing semantics.

```c
#include "stdlib/blas/base/shared.h"

float AP[] = { 1.0f, 2.0f, 3.0f, 1.0f, 2.0f, 1.0f };
const float x[] = { 1.0f, 2.0f, 3.0f };

c_sspr_ndarray( CblasColMajor, CblasUpper, 3, 1.0f, x, 1, AP, 1, 0 );
```

The function accepts the following arguments:

-   **order**: `[in] CBLAS_LAYOUT` storage layout.
-   **uplo**: `[in] CBLAS_UPLO` specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: `[in] CBLAS_INT` number of elements along each dimension of `A`.
-   **alpha**: `[in] float` scalar.
-   **X**: `[in] float*` input vector.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **AP**: `[inout] float*` packed form of a symmetric matrix `A`.
-   **strideAP**: `[in] CBLAS_INT` stride length for `AP`.
-   **offsetAP**: `[in] CBLAS_INT` starting index for `AP`.

```c
void c_sspr_ndarray( const CBLAS_LAYOUT order, const CBLAS_UPLO uplo, const CBLAS_INT N, const float alpha, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *AP, const CBLAS_INT strideAP, const CBLAS_INT offsetAP )
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
#include "stdlib/blas/base/sspr.h"
#include "stdlib/blas/base/shared.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    float AP[] = { 1.0f, 2.0f, 3.0f, 1.0f, 2.0f, 1.0f };
    const float x[] = { 1.0f, 2.0f, 3.0f };

    // Specify the number of elements along each dimension of `A`:
    const int N = 3;

    // Perform the symmetric rank 1 operation `A = α*x*x^T + A`:
    c_sspr( CblasRowMajor, CblasUpper, N, 1.0f, x, 1, AP );

    // Print the result:
    for ( int i = 0; i < N*(N+1)/2; i++ ) {
        printf( "AP[ %i ] = %f\n", i, AP[ i ] );
    }

    // Perform the symmetric rank 1 operation `A = α*x*x^T + A` using alternative indexing semantics:
    c_sspr_ndarray( CblasRowMajor, CblasUpper, N, 1.0f, x, 1, 0, AP, 1, 0 );

    // Print the result:
    for ( int i = 0; i < N*(N+1)/2; i++ ) {
        printf( "AP[ %i ] = %f\n", i, AP[ i ] );
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

[blas-sspr]: https://www.netlib.org/lapack/explore-html/d5/df9/group__hpr_ga7cacbe603f23f8b0aca186fba51ad490.html#ga7cacbe603f23f8b0aca186fba51ad490

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
