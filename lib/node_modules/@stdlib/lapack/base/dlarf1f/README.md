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

# dlarf1f

> Apply a real elementary reflector `H = I - tau * v * v^T` to a real M by N matrix `C`.

<section class="intro">

A **Householder transformation** (or an **elementary reflector**) is a linear transformation that describes a reflection about a plane or a hyperplane containing the origin.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dlarf1f = require( '@stdlib/lapack/base/dlarf1f' );
```

#### dlarf1f( order, side, M, N, V, strideV, tau, C, LDC, work )

Applies a real elementary reflector `H = I - tau * v * v^T` to a real M by N matrix `C`.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
var work = new Float64Array( 3 );

var out = dlarf1f( 'row-major', 'left', 4, 3, V, 1, 1.0, C, 3, work );
// returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **side**: specifies the side of multiplication with `C`.
-   **M**: number of rows in `C`.
-   **N**: number of columns in `C`.
-   **V**: the vector `v` as a [`Float64Array`][mdn-float64array].
-   **strideV**: stride length for `V`. If `strideV` is negative, the elements of `V` are accessed in reverse order.
-   **tau**: scalar constant.
-   **C**: input matrix stored in linear memory as a [`Float64Array`][mdn-float64array].
-   **LDC**: stride of the first dimension of `C` (a.k.a., leading dimension of the matrix `C`).
-   **work**: workspace [`Float64Array`][mdn-float64array].

When `side` is `'left'`,

-   `work` should have `N` indexed elements.
-   `V` should have `1 + (M-1) * abs(strideV)` indexed elements.
-   `C` is overwritten by `H * C`.

When `side` is `'right'`,

-   `work` should have `M` indexed elements.
-   `V` should have `1 + (N-1) * abs(strideV)` indexed elements.
-   `C` is overwritten by `C * H`.

The sign of the increment parameter `strideV` determines the order in which elements of `V` are accessed. For example, to access elements in reverse order,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
var V = new Float64Array( [ 0.5, 0.4, 0.3, 0.2 ] );
var work = new Float64Array( 3 );

var out = dlarf1f( 'row-major', 'left', 4, 3, V, -1, 1.0, C, 3, work );
// returns <Float64Array>[ ~-3.80, -8.6, ~-13.4, ~0.56, 1.92, ~3.28, ~1.08, ~1.56, ~2.04, ~1.60, ~1.20, ~0.80 ]
```

To perform strided access over `V`, provide an `abs(strideV)` value greater than one. For example, to access every other element in `V`,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
var V = new Float64Array( [ 0.5, 999, 0.5, 999, 0.5, 999, 0.5 ] );
var work = new Float64Array( 3 );

var out = dlarf1f( 'row-major', 'left', 4, 3, V, 2, 1.0, C, 3, work );
// returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments, max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var C0 = new Float64Array( [ 0.0, 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
var V0 = new Float64Array( [ 0.0, 0.5, 0.5, 0.5, 0.5 ] );
var work0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var C1 = new Float64Array( C0.buffer, C0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var V1 = new Float64Array( V0.buffer, V0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var work1 = new Float64Array( work0.buffer, work0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var our = dlarf1f( 'row-major', 'left', 4, 3, V1, 1, 1.0, C1, 3, work1 );
// C0 => <Float64Array>[ 0.0, -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
```

#### dlarf1f.ndarray( side, M, N, V, sv, ov, tau, C, sc1, sc2, oc, work, sw, ow )

Applies a real elementary reflector `H = I - tau * v * v^T` to a real M by N matrix `C` using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
var work = new Float64Array( 3 );

var out = dlarf1f.ndarray( 'left', 4, 3, V, 1, 0, 1.0, C, 3, 1, 0, work, 1, 0 );
// returns <Float64Array>[ -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
```

The function has the following additional parameters:

-   **side**: specifies the side of multiplication with `C`.
-   **M**: number of rows in `C`.
-   **N**: number of columns in `C`.
-   **V**: the vector `v` as a [`Float64Array`][mdn-float64array].
-   **sv**: stride length for `V`.
-   **ov**: starting index for `V`.
-   **tau**: scalar constant.
-   **C**: input matrix as a [`Float64Array`][mdn-float64array].
-   **sc1**: stride of the first dimension of `C`.
-   **sc2**: stride of the second dimension of `C`.
-   **oc**: starting index for `C`.
-   **work**: workspace array as a [`Float64Array`][mdn-float64array].
-   **sw**: stride length for `work`.
-   **ow**: starting index for `work`.

When `side` is `'left'`,

-   `work` should have `N` indexed elements.
-   `V` should have `1 + (M-1) * abs(sv)` indexed elements.
-   `C` is overwritten by `H * C`.

When `side` is `'right'`,

-   `work` should have `M` indexed elements.
-   `V` should have `1 + (N-1) * abs(sv)` indexed elements.
-   `C` is overwritten by `C * H`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var C = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
var V = new Float64Array( [ 0.0, 0.0, 0.5, 0.5, 0.5, 0.5 ] );
var work = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

var out = dlarf1f.ndarray( 'left', 4, 3, V, 1, 2, 1.0, C, 3, 1, 4, work, 1, 0 );
// C => <Float64Array>[ 0.0, 0.0, 0.0, 0.0, -4.5, -10.5, -16.5, -0.75, -1.75, -2.75, 0.25, -0.75, -1.75, 1.25,  0.25, -0.75 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dlarf1f()` corresponds to the [LAPACK][LAPACK] function [`dlarf1f`][lapack-dlarf1f].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var dlarf1f = require( '@stdlib/lapack/base/dlarf1f' );

// Specify matrix meta data:
var shape = [ 4, 3 ];
var order = 'row-major';
var strides = shape2strides( shape, order );

// Create a matrix stored in linear memory:
var C = new Float64Array( [ 1.0, 5.0, 9.0, 2.0, 6.0, 10.0, 3.0, 7.0, 11.0, 4.0, 8.0, 12.0 ] );
console.log( ndarray2array( C, shape, strides, 0, order ) );

// Define the vector `v` and a workspace array:
var V = new Float64Array( [ 0.5, 0.5, 0.5, 0.5 ] );
var work = new Float64Array( 3 );

// Apply the elementary reflector:
dlarf1f( order, 'left', shape[ 0 ], shape[ 1 ], V, 1, 1.0, C, strides[ 0 ], work );
console.log( ndarray2array( C, shape, strides, 0, order ) );
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

[lapack-dlarf1f]: https://netlib.org/lapack/explore-html/d2/d97/group__larf_ga3b4608752c4f72758c2d297e1e7cf3f0.html#ga3b4608752c4f72758c2d297e1e7cf3f0

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
