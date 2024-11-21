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

var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr2( 'row-major', 'upper', 3, 1.0, x, 1, y, 1, A, 3 );
// A => <Float32Array>[ 3.0, 6.0, 9.0, 0.0, 9.0, 14.0, 0.0, 0.0, 19.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the symmetric matrix `A` should be referenced.
-   **N**: number of elements along each dimension of `A`.
-   **α**: scalar constant.
-   **x**: first input [`Float32Array`][mdn-float32array].
-   **sx**: index increment for `x`.
-   **y**: second input [`Float32Array`][mdn-float32array].
-   **sy**: index increment for `y`.
-   **A**: input matrix stored in linear memory as a [`Float32Array`][mdn-float32array].
-   **lda**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over every other element of `x`,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr2( 'row-major', 'upper', 3, 1.0, x, 2, y, 1, A, 3 );
// A => <Float32Array>[ 3.0, 7.0, 11.0, 0.0, 13.0, 21.0, 0.0, 0.0, 31.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 1.0, 1.0, 1.0 ] );
var y0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0 ] );
var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

ssyr2( 'row-major', 'upper', 3, 1.0, x1, 1, y1, 1, A, 3 );
// A => <Float32Array>[ 3.0, 5.0, 7.0, 0.0, 5.0, 7.0, 0.0, 0.0, 7.0 ]
```

#### ssyr2.ndarray( uplo, N, α, x, sx, ox, y, sy, oy, A, sa1, sa2, oa )

Performs the symmetric rank 2 operation `A = α*x*y^T + α*y*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr2.ndarray( 'upper', 3, 1.0, x, 1, 0, y, 1, 0, A, 3, 1, 0 );
// A => <Float32Array>[ 3.0, 6.0, 9.0, 0.0, 9.0, 14.0, 0.0, 0.0, 19.0 ]
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

var A = new Float32Array( [ 1.0, 2.0, 3.0, 0.0, 1.0, 2.0, 0.0, 0.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 1.0, 2.0, 3.0 ] );

ssyr2.ndarray( 'upper', 3, 1.0, x, -2, 4, y, 1, 0, A, 3, 1, 0 );
// A => <Float32Array>[ 11.0, 15.0, 19.0, 0.0, 13.0, 13.0, 0.0, 0.0, 7.0 ]
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

var A = ones( N*N, opts.dtype );
var x = discreteUniform( N, -10.0, 10.0, opts );
var y = discreteUniform( N, -10.0, 10.0, opts );

ssyr2( 'row-major', 'upper', 3, 1.0, x, 1, y, 1, A, 3 );
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

[blas-ssyr2]: https://www.netlib.org/lapack/explore-html/dd/de5/group__her2_ga6741f2ac8fe025042fd994ccc6625b45.html#ga6741f2ac8fe025042fd994ccc6625b45

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
