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

# dtrsv

> Solve one of the systems of equations `A*x = b` or `A^T*x = b`.

<section class="usage">

## Usage

```javascript
var dtrsv = require( '@stdlib/blas/base/dtrsv' );
```

#### dtrsv( order, uplo, trans, diag, N, A, LDA, x, sx )

Solves one of the systems of equations `A*x = b` or `A^T*x = b` where `b` and `x` are `N` element vectors and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 3, A, 3, x, 1 );
// x => <Float64Array>[ 0.0, -4.0, 3.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether `A` is an upper or lower triangular matrix.
-   **trans**: specifies whether `A` should be transposed, conjugate-transposed, or not transposed.
-   **diag**: specifies whether `A` has a unit diagonal.
-   **N**: number of elements along each dimension of `A`.
-   **A**: input matrix stored in linear memory as a [`Float64Array`][mdn-float64array].
-   **lda**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **x**: input vector [`Float64Array`][mdn-float64array].
-   **sx**: `x` stride length.

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over the elements of `x` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float64Array( [ 3.0, 2.0, 1.0 ] );

dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 3, A, 3, x, -1 );
// x => <Float64Array>[ 3.0, -4.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 1.0, 1.0, 1.0 ] );
var A = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

dtrsv( 'row-major', 'upper', 'no-transpose', 'unit', 3, A, 3, x1, 1 );
// x0 => <Float64Array>[ 1.0, 0.0, -1.0, 1.0 ]
```

#### dtrsv.ndarray( uplo, trans, diag, N, A, sa1, sa2, oa, x, sx, ox )

Solves one of the systems of equations `A*x = b` or `A^T*x = b`, using alternative indexing semantics and where `b` and `x` are `N` element vectors and `A` is an `N` by `N` unit, or non-unit, upper or lower triangular matrix.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 3, A, 3, 1, 0, x, 1, 0 );
// x => <Float64Array>[ 0.0, -4.0, 3.0 ]
```

The function has the following additional parameters:

-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **ox**: starting index for `x`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float64Array( [ 3.0, 2.0, 1.0 ] );

dtrsv.ndarray( 'upper', 'no-transpose', 'unit', 3, A, 3, 1, 0, x, -1, 2 );
// x => <Float64Array>[ 3.0, -4.0, 0.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dtrsv()` corresponds to the [BLAS][blas] level 2 function [`dtrsv`][blas-dtrsv].
-   Neither routine tests for singularity or near-singularity. Such tests must be performed before calling the routines.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dtrsv = require( '@stdlib/blas/base/dtrsv' );

var opts = {
    'dtype': 'float64'
};

var N = 5;

var A = discreteUniform( N*N, -10.0, 10.0, opts );
var x = discreteUniform( N, -10.0, 10.0, opts );

dtrsv( 'column-major', 'upper', 'no-transpose', 'unit', N, A, N, x, 1 );
console.log( x );

dtrsv.ndarray( 'upper', 'no-transpose', 'unit', N, A, 1, N, 0, x, 1, 0 );
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

[blas-dtrsv]: https://www.netlib.org/lapack/explore-html/dd/dc3/group__trsv_ga7a7dcbb8745b4776ce13063ab031141f.html#ga7a7dcbb8745b4776ce13063ab031141f

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
