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

# strmv

> Perform one of the matrix-vector operations `x = A*x` or `x = A^T*x`.

<section class="usage">

## Usage

```javascript
var strmv = require( '@stdlib/blas/base/strmv' );
```

#### strmv( order, uplo, trans, diag, N, A, LDA, x, sx )

Performs one of the matrix-vector operations `x = A*x` or `x = A^T*x`, where `x` is an `N` element vector and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

strmv( 'row-major', 'upper', 'no-transpose', 'unit', 3, A, 3, x, 1 );
// x => <Float32Array>[ 14.0, 8.0, 3.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether `A` is an upper or lower triangular matrix.
-   **trans**: specifies whether `A` should be transposed, conjugate-transposed, or not transposed.
-   **diag**: specifies whether `A` has a unit diagonal.
-   **N**: number of elements along each dimension of `A`.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **lda**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **x**: input vector [`Float32Array`][mdn-float32array].
-   **sx**: `x` stride length.

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over the elements of `x` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

strmv( 'row-major', 'upper', 'no-transpose', 'unit', 3, A, 3, x, -1 );
// x => <Float32Array>[ 1.0, 4.0, 10.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );
var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

strmv( 'row-major', 'upper', 'no-transpose', 'unit', 3, A, 3, x1, 1 );
// x0 => <Float32Array>[ 1.0, 6.0, 3.0, 1.0 ]
```

#### strmv.ndarray( uplo, trans, diag, N, A, sa1, sa2, oa, x, sx, ox )

Performs one of the matrix-vector operations `x = A*x` or `x = A^T*x`, using alternative indexing semantics and where `x` is an `N` element vector and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

strmv.ndarray( 'upper', 'no-transpose', 'unit', 3, A, 3, 1, 0, x, 1, 0 );
// x => <Float32Array>[ 14.0, 8.0, 3.0 ]
```

The function has the following additional parameters:

-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **ox**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

strmv.ndarray( 'upper', 'no-transpose', 'unit', 3, A, 3, 1, 0, x, -1, 2 );
// x => <Float32Array>[ 1.0, 4.0, 10.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `strmv()` corresponds to the [BLAS][blas] level 2 function [`strmv`][blas-strmv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var strmv = require( '@stdlib/blas/base/strmv' );

var opts = {
    'dtype': 'float32'
};

var N = 5;

var A = discreteUniform( N*N, -10.0, 10.0, opts );
var x = discreteUniform( N, -10.0, 10.0, opts );

strmv( 'column-major', 'upper', 'no-transpose', 'unit', N, A, N, x, 1 );
console.log( x );

strmv.ndarray( 'upper', 'no-transpose', 'unit', N, A, 1, N, 0, x, 1, 0 );
console.log( x );
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
TODO
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

[blas-strmv]: https://www.netlib.org/lapack/explore-html/d6/d1c/group__trmv_ga7b90369d2b2b19f78f168e10dd9eb8ad.html#ga7b90369d2b2b19f78f168e10dd9eb8ad

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
