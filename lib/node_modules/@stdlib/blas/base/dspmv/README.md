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

# dspmv

> Perform the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors and, `A` is an `N` by `N` symmetric matrix supplied in packed form.

<section class = "usage">

## Usage

```javascript
var dspmv = require( '@stdlib/blas/base/dspmv' );
```

#### dspmv( order, uplo, N, α, AP, x, sx, β, y, sy )

Performs the matrix-vector operation `y = α*A*x + β*y` where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form `AP`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var AP = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );

dspmv( 'column-major', 'lower', 3, 1.0, AP, x, 1, 1.0, y, 1 );
// y => <Float64Array>[ 7.0, 12.0, 15.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the symmetric matrix `A` is supplied.
-   **N**: specifies the order of the matrix `A`.
-   **α**: scalar constant.
-   **AP**: packed form of a symmetric matrix `A` stored in linear memory as a [`Float64Array`][mdn-float64array].
-   **x**: input [`Float64Array`][mdn-float64array].
-   **sx**: index increment for `x`.
-   **β**: scalar constant.
-   **y**: output [`Float64Array`][mdn-float64array].
-   **sy**: index increment for `y`.

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over the elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var AP = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );

dspmv( 'column-major', 'lower', 3, 1.0, AP, x, 1, 1.0, y, -1 );
// y => <Float64Array>[ 15.0, 12.0, 7.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 1.0 ] );
var y0 = new Float64Array( [ 1.0, 1.0 ] );
var AP = new Float64Array( [ 1.0, 2.0, 3.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*0 ); // start at 1st element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*0 ); // start at 1st element

dspmv( 'row-major', 'upper', 2, 1.0, AP, x1, -1, 1.0, y1, -1 );
// y0 => <Float64Array>[ 6.0, 4.0 ]
```

#### dspmv.ndarray( order, uplo, N, α, AP, oa, x, sx, ox, β, y, sy, oy )

Performs the matrix-vector operation `y = α*A*x + β*y` using alternative indexing semantics and where `α` and `β` are scalars, `x` and `y` are `N` element vectors, and `A` is an `N` by `N` symmetric matrix supplied in packed form `AP`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var AP = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );

dspmv.ndarray( 'column-major', 'lower', 3, 1.0, AP, 0, x, 1, 0, 1.0, y, 1, 0 );
// y => <Float64Array>[ 7.0, 12.0, 15.0 ]
```

The function has the following additional parameters:

-   **oa**: starting index for `AP`.
-   **ox**: starting index for `x`.
-   **oy**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var AP = new Float64Array( [ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var x = new Float64Array( [ 1.0, 1.0, 1.0 ] );
var y = new Float64Array( [ 1.0, 1.0, 1.0 ] );

dspmv.ndarray( 'column-major', 'lower', 3, 1.0, AP, 2, x, 1, 0, 1.0, y, -1, 2 );
// y => <Float64Array>[ 15.0, 12.0, 7.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dspmv()` corresponds to the [BLAS][blas] level 2 function [`dspmv`][dspmv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dspmv = require( '@stdlib/blas/base/dspmv' );

var opts = {
    'dtype': 'float64'
};

var N = 3;
var AP = discreteUniform( N * ( N + 1 ) / 2, -10, 10, opts );

var x = discreteUniform( N, -10, 10, opts );
var y = discreteUniform( N, -10, 10, opts );

dspmv.ndarray( 'row-major', 'upper', N, 1.0, AP, 0, x, 1, 0, 1.0, y, 1, 0 );
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

[dspmv]: https://www.netlib.org/lapack/explore-html/d0/d4b/group__hpmv_ga739f8dc2316523832bde2b237fcad8a6.html#ga739f8dc2316523832bde2b237fcad8a6

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
