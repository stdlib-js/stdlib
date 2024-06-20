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

# ssymv

> Perform the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.

<section class = "usage">

## Usage

```javascript
var ssymv = require( '@stdlib/blas/base/ssymv' );
```

#### ssymv( order, uplo, N, α, A, LDA, x, sx, β, y, sy )

Performs the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0 ] );

ssymv( 'row-major', 'lower', 3, 1.0, A, 3, x, 1, 0.0, y, 1 );
// y => <Float32Array>[ 1.0, 2.0, 3.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: number of elements along each dimension of `A`.
-   **α**: scalar constant.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **lda**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **x**: input [`Float32Array`][mdn-float32array].
-   **sx**: index increment for `x`.
-   **β**: scalar constant.
-   **y**: output [`Float32Array`][mdn-float32array].
-   **sy**: index increment for `y`.

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over the elements of `x` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssymv( 'row-major', 'upper', 3, 2.0, A, 3, x, -1, 1.0, y, 1 );
// y => <Float32Array>[ 7.0, 10.0, 9.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );
var y0 = new Float32Array( [ 1.0, 1.0, 1.0, 1.0 ] );
var A = new Float32Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

ssymv( 'row-major', 'upper', 3, 1.0, A, 3, x1, -1, 1.0, y1, -1 );
// y0 => <Float32Array>[ 1.0, 4.0, 3.0, 2.0 ]
```

#### ssymv.ndarray( order, uplo, N, α, A, LDA, x, sx, ox, β, y, sy, oy )

Performs the matrix-vector operation `y = α*A*x + β*y` using alternative indexing semantics and where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssymv.ndarray( 'row-major', 'upper', 3, 2.0, A, 3, x, -1, 2, 1.0, y, 1, 0 );
// y => <Float32Array>[ 7.0, 10.0, 9.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 0.0, 3.0 ] );
var x = new Float32Array( [ 1.0, 1.0, 1.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0 ] );

ssymv.ndarray( 'row-major', 'lower', 3, 1.0, A, 3, x, -1, 2, 1.0, y, -1, 2 );
// y => <Float32Array>[ 4.0, 3.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `ssymv()` corresponds to the [BLAS][blas] level 2 function [`ssymv`][ssymv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ones = require( '@stdlib/array/ones' );
var ssymv = require( '@stdlib/blas/base/ssymv' );

var opts = {
    'dtype': 'float32'
};

var N = 3;
var A = ones( N*N, opts.dtype );

var x = discreteUniform( N, 0, 255, opts );
var y = discreteUniform( N, 0, 255, opts );

ssymv.ndarray( 'row-major', 'upper', N, 1.0, A, N, x, 1, 0, 1.0, y, 1, 0 );
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

[ssymv]: https://netlib.org/lapack/explore-html/d2/d94/ssymv_8f.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
