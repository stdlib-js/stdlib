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

# iladlc

> Find the index of the last non-zero column in a matrix `A`.

<section class="usage">

## Usage

```javascript
var iladlc = require( '@stdlib/lapack/base/iladlc' );
```

#### iladlc( order, M, N, A, LDA )

Returns the index of the last non-zero column in a matrix `A`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] );

/*
    A = [
        [ 1.0, 2.0, 0.0 ],
        [ 3.0, 4.0, 0.0 ]
    ]
*/

var out = iladlc( 'row-major', 2, 3, A, 3 );
// returns 1
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array:
var A0 = new Float64Array( [ 9999.0, 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] );

// Create an offset view:
var A1 = new Float64Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var out = iladlc( 'row-major', 2, 3, A1, 3 );
// returns 1
```

#### iladlc.ndarray( M, N, A, strideA1, strideA2, offsetA )

Returns the index of the last non-zero column in a matrix `A` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] );

/*
    A = [
        [ 1.0, 2.0, 0.0 ],
        [ 3.0, 4.0, 0.0 ]
    ]
*/

var out = iladlc.ndarray( 2, 3, A, 3, 1, 0 );
// returns 1
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float64Array`][mdn-float64array].
-   **strideA1**: stride of the first dimension of `A`.
-   **strideA2**: stride of the second dimension of `A`.
-   **offsetA**: starting index for `A`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var A = new Float64Array( [ 9999.0, 1.0, 2.0, 0.0, 3.0, 4.0, 0.0 ] );

/*
    A = [
        [ 1.0, 2.0, 0.0 ],
        [ 3.0, 4.0, 0.0 ]
    ]
*/

var out = iladlc.ndarray( 2, 3, A, 3, 1, 1 );
// returns 1
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This routine is commonly used throughout LAPACK to shrink work domains (e.g., before bulge-chasing, deflation, or when trimming Householder panels), thus ensuring that higher-level routines operate only on numerically relevant sub-matrices.
-   `iladlc()` corresponds to the [LAPACK][lapack] routine [`iladlc`][lapack-iladlc].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var Float64Array = require( '@stdlib/array/float64' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var iladlc = require( '@stdlib/lapack/base/iladlc' );

var shape = [ 3, 3 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

var A = new Float64Array( [ 1.0, 2.0, 0.0, 3.0, 4.0, 0.0, 5.0, 6.0, 0.0 ] );
console.log( ndarray2array( A, shape, strides, 0, order ) );

var out = iladlc( order, shape[ 0 ], shape[ 1 ], A, strides[ 0 ] );
console.log( out );
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

[lapack]: https://www.netlib.org/lapack/explore-html/

[lapack-iladlc]: https://www.netlib.org/lapack/explore-html/dc/df6/group__ilalc_gad8c407910f229795fe7a074b98be9338.html

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
