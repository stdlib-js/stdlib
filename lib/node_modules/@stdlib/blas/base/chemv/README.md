<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# chemv

> Performs the matrix-vector operation `y = α*A*x + β*y`.

<section class="usage">

## Usage

```javascript
var chemv = require( '@stdlib/blas/base/chemv' );
```

#### chemv( order, uplo, N, α, A, LDA, x, sx, β, y, sy )

Performs the matrix-vector operation `y = α*A*x + β*y`, where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` Hermitian matrix.

<!-- eslint-disable max-len -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var A = new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, -2.0, 4.0, 0.0, 0.0, 0.0, 3.0, -3.0, 5.0, -5.0, 6.0, 0.0 ] );
var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );

var alpha = new Complex64( 0.5, 0.5 );
var beta = new Complex64( 0.5, -0.5 );

chemv( 'row-major', 'lower', 3, alpha, A, 3, x, 1, beta, y, 1 );
// y => <Complex64Array>[ -10.0, 14.0, -11.0, 25.0, 14.0, 31.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the matrix `A` is supplied.
-   **N**: specifies number of elements along each dimension of `A`.
-   **α**: scalar constant.
-   **A**: input matrix stored in linear memory as a [`Complex64Array`][@stdlib/array/complex64].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **x**: input vector [`Complex64Array`][@stdlib/array/complex64].
-   **sx**: stride length for `x`.
-   **β**: scalar constant.
-   **y**: output [`Complex64Array`][@stdlib/array/complex64].
-   **sy**: stride length for `y`.

The stride parameters determine how elements are accessed. For example, to iterate over every other element in `x` and `y`,

<!-- eslint-disable max-len -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var A = new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, -2.0, 4.0, 0.0, 0.0, 0.0, 3.0, -3.0, 5.0, -5.0, 6.0, 0.0 ] );
var x = new Complex64Array( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ] );
var y = new Complex64Array( [ 3.0, 3.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 1.0, 1.0 ] );

var alpha = new Complex64( 0.5, 0.5 );
var beta = new Complex64( 0.5, -0.5 );

chemv( 'row-major', 'lower', 3, alpha, A, 3, x, 2, beta, y, 2 );
// y => <Complex64Array>[ -10.0, 14.0, 0.0, 0.0, -11.0, 25.0, 0.0, 0.0, 14.0, 31.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

<!-- eslint-disable max-len -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

// Initial arrays...
var x0 = new Complex64Array( [ 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var y0 = new Complex64Array( [ 0.0, 0.0, 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
var A = new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, -2.0, 4.0, 0.0, 0.0, 0.0, 3.0, -3.0, 5.0, -5.0, 6.0, 0.0 ] );
var alpha = new Complex64( 0.5, 0.5 );
var beta = new Complex64( 0.5, -0.5 );

// Create offset views...
var x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd complex element
var y1 = new Complex64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd complex element

chemv( 'row-major', 'lower', 3, alpha, A, 3, x1, 1, beta, y1, 1 );
// y1 => <Complex64Array>[ -10.0, 14.0, -11.0, 25.0, 14.0, 31.0 ]
```

<!-- lint disable maximum-heading-length -->

#### chemv.ndarray( uplo, N, α, A, sa1, sa2, oa, x, sx, ox, β, y, sy, oy )

Performs the matrix-vector operation `y = α*A*x + β*y` using alternative indexing semantics, where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` Hermitian matrix.

<!-- eslint-disable max-len -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var A = new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, -2.0, 4.0, 0.0, 0.0, 0.0, 3.0, -3.0, 5.0, -5.0, 6.0, 0.0 ] );
var x = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var y = new Complex64Array( [ 3.0, 3.0, 2.0, 2.0, 1.0, 1.0 ] );
var alpha = new Complex64( 0.5, 0.5 );
var beta = new Complex64( 0.5, -0.5 );

chemv.ndarray( 'lower', 3, alpha, A, 3, 1, 0, x, 1, 0, beta, y, 1, 0 );
// y => <Complex64Array>[ -10.0, 14.0, -11.0, 25.0, 14.0, 31.0 ]
```

The function has the following additional parameters:

-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );

var A = new Complex64Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, -2.0, 4.0, 0.0, 0.0, 0.0, 3.0, -3.0, 5.0, -5.0, 6.0, 0.0 ] );
var x = new Complex64Array( [ 0.0, 0.0, 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
var y = new Complex64Array( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 3.0, 3.0 ] );

var alpha = new Complex64( 0.5, 0.5 );
var beta = new Complex64( 0.5, -0.5 );

chemv.ndarray( 'lower', 3, alpha, A, 3, 1, 0, x, 1, 1, beta, y, -2, 4 );
// y => <Complex64Array>[ 14.0, 31.0, 0.0, 0.0, -11.0, 25.0, 0.0, 0.0, -10.0, 14.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `chemv()` corresponds to the [BLAS][blas] level 2 function [`chemv`][chemv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable max-len -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var logEach = require( '@stdlib/console/log-each' );
var chemv = require( '@stdlib/blas/base/chemv' );

function rand() {
    return new Complex64( discreteUniform( 0, 255 ), discreteUniform( -128, 127 ) );
}

var N = 3;

var A = filledarrayBy( N*N, 'complex64', rand );
var x = filledarrayBy( N, 'complex64', rand );
var y = filledarrayBy( N, 'complex64', rand );

var alpha = new Complex64( 0.5, 0.5 );
var beta = new Complex64( 0.5, -0.5 );

chemv( 'row-major', 'lower', N, alpha, A, N, x, 1, beta, y, 1 );

// Print the results:
logEach( '%s', x );

chemv.ndarray( 'lower', N, alpha, A, N, 1, 0, x, 1, 0, beta, y, 1, 0 );

// Print the results:
logEach( '%s', x );
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

[chemv]: https://www.netlib.org/lapack/explore-html/db/d17/group__hemv_ga2308ede4c4300ca4cfac83f2531aec22.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/array/complex64

</section>

<!-- /.links -->
