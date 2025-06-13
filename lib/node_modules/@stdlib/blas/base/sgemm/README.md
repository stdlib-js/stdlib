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

# sgemm

> Perform the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is one of the `op(X) = X`, or `op(X) = X^T`.

<section class="usage">

## Usage

```javascript
var sgemm = require( '@stdlib/blas/base/sgemm' );
```

#### sgemm( ord, ta, tb, M, N, K, α, A, lda, B, ldb, β, C, ldc )

Performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C` where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float32Array( [ 1.0, 1.0, 0.0, 1.0 ] );
var C = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

sgemm( 'row-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, B, 2, 1.0, C, 2 );
// C => <Float32Array>[ 2.0, 5.0, 6.0, 11.0 ]
```

The function has the following parameters:

-   **ord**: storage layout.
-   **ta**: specifies whether `A` should be transposed, conjugate-transposed, or not transposed.
-   **tb**: specifies whether `B` should be transposed, conjugate-transposed, or not transposed.
-   **M**: number of rows in the matrix `op(A)` and in the matrix `C`.
-   **N**: number of columns in the matrix `op(B)` and in the matrix `C`.
-   **K**: number of columns in the matrix `op(A)` and number of rows in the matrix `op(B)`.
-   **α**: scalar constant.
-   **A**: first input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **lda**: stride of the first dimension of `A` (leading dimension of `A`).
-   **B**: second input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **ldb**: stride of the first dimension of `B` (leading dimension of `B`).
-   **β**: scalar constant.
-   **C**: third input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **ldc**: stride of the first dimension of `C` (leading dimension of `C`).

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to perform matrix multiplication of two subarrays

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 0.0, 0.0, 3.0, 4.0, 0.0, 0.0 ] );
var B = new Float32Array( [ 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0 ] );
var C = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

sgemm( 'row-major', 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 4, B, 4, 1.0, C, 2 );
// C => <Float32Array>[ 2.0, 5.0, 6.0, 11.0 ]
```

<!-- lint disable maximum-heading-length -->

#### sgemm.ndarray( ta, tb, M, N, K, α, A, sa1, sa2, oa, B, sb1, sb2, ob, β, C, sc1, sc2, oc )

Performs the matrix-matrix operation `C = α*op(A)*op(B) + β*C`, using alternative indexing semantics and where `op(X)` is either `op(X) = X` or `op(X) = X^T`, `α` and `β` are scalars, `A`, `B`, and `C` are matrices, with `op(A)` an `M` by `K` matrix, `op(B)` a `K` by `N` matrix, and `C` an `M` by `N` matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var B = new Float32Array( [ 1.0, 1.0, 0.0, 1.0 ] );
var C = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );

sgemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 2, 1, 0, B, 2, 1, 0, 1.0, C, 2, 1, 0 );
// C => <Float32Array>[ 2.0, 5.0, 6.0, 11.0 ]
```

The function has the following additional parameters:

-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **sb1**: stride of the first dimension of `B`.
-   **sb2**: stride of the second dimension of `B`.
-   **ob**: starting index for `B`.
-   **sc1**: stride of the first dimension of `C`.
-   **sc2**: stride of the second dimension of `C`.
-   **oc**: starting index for `C`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 0.0, 0.0, 1.0, 3.0, 2.0, 4.0 ] );
var B = new Float32Array( [ 0.0, 1.0, 0.0, 1.0, 1.0 ] );
var C = new Float32Array( [ 0.0, 0.0, 0.0, 1.0, 3.0, 2.0, 4.0 ] );

sgemm.ndarray( 'no-transpose', 'no-transpose', 2, 2, 2, 1.0, A, 1, 2, 2, B, 1, 2, 1, 1.0, C, 1, 2, 3 );
// C => <Float32Array>[ 0.0, 0.0, 0.0, 2.0, 6.0, 5.0, 11.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sgemm()` corresponds to the [BLAS][blas] level 3 function [`sgemm`][blas-sgemm].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var sgemm = require( '@stdlib/blas/base/sgemm' );

var opts = {
    'dtype': 'float32'
};

var M = 3;
var N = 4;
var K = 2;

var A = discreteUniform( M*K, 0, 10, opts ); // 3x2
var B = discreteUniform( K*N, 0, 10, opts ); // 2x4
var C = discreteUniform( M*N, 0, 10, opts ); // 3x4

sgemm( 'row-major', 'no-transpose', 'no-transpose', M, N, K, 1.0, A, K, B, N, 1.0, C, N );
console.log( C );

sgemm.ndarray( 'no-transpose', 'no-transpose', M, N, K, 1.0, A, K, 1, 0, B, N, 1, 0, 1.0, C, N, 1, 0 );
console.log( C );
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
#include "stdlib/blas/base/sgemm.h"
```

#### TODO

TODO.

```c
TODO
```

TODO

```c
TODO
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
TODO
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

[blas-sgemm]: https://www.netlib.org/lapack/explore-html/dd/d09/group__gemm_ga8cad871c590600454d22564eff4fed6b.html#ga8cad871c590600454d22564eff4fed6b

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
