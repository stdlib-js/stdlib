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

# dgttrf

> Compute an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges.

<section class="intro">

The `dgttrf` routine computes an LU factorization of a real N-by-N tridiagonal matrix `A` using elimination with partial pivoting and row interchanges. The factorization has the form:

<!-- <equation class="equation" label="eq:lu_decomposition" align="center" raw="A = L U" alt="Equation for LU factorization."> -->

```math
A = L U
```

<!-- </equation> -->

where `L` is a product of permutation and unit lower bidiagonal matrices and `U` is upper triangular with non-zeros in only the main diagonal and first two superdiagonals.

For a 5-by-5 tridiagonal matrix `A`, elements are stored in three arrays:

<!-- <equation class="equation" label="eq:matrix_a" align="center" raw="A = \left[\begin{array}{rrrrr}d_1     & du_1     & 0       & 0          & 0 \\dl_1    & d_2      & du_2    & 0          & 0 \\0       & dl_2     & d_3     & du_3       & 0 \\0       & 0        & dl_3    & d_4        & du_4 \\0       & 0        & 0       & dl_4       & d_5\end{array}\right]" alt="Representation of matrix A."> -->

```math
A = \left[
\begin{array}{rrrrr}
    d_1     & du_1     & 0       & 0          & 0 \\
    dl_1    & d_2      & du_2    & 0          & 0 \\
    0       & dl_2     & d_3     & du_3       & 0 \\
    0       & 0        & dl_3    & d_4        & du_4 \\
    0       & 0        & 0       & dl_4       & d_5
    \end{array}
\right]
```

<!-- </equation> -->

where:

-   `dl` contains the subdiagonal elements.
-   `d` contains the diagonal elements.
-   `du` contains the superdiagonal elements.

After factorization, the elements of `L` and `U` are used to update the input arrays, where:

-   `dl` contains the multipliers that define unit lower bidiagonal matrix `L`.
-   `d` contains the diagonal elements of `U`.
-   `du` and `du2` contain the elements of `U` on the first and second superdiagonals.

The resulting `L` and `U` matrices have the following structure:

<!-- <equation class="equation" label="eq:matrix_l" align="center" raw="L = \left[\begin{array}{rrrrr}1      & 0      & 0      & 0      & 0 \\l_1    & 1      & 0      & 0      & 0 \\0      & l_2    & 1      & 0      & 0 \\0      & 0      & l_3    & 1      & 0 \\0      & 0      & 0      & l_4    & 1\end{array}\right]" alt="Representation of matrix L as derived from DL."> -->

```math
L = \left[
    \begin{array}{rrrrr}
    1      & 0      & 0      & 0      & 0 \\
    l_1    & 1      & 0      & 0      & 0 \\
    0      & l_2    & 1      & 0      & 0 \\
    0      & 0      & l_3    & 1      & 0 \\
    0      & 0      & 0      & l_4    & 1
    \end{array}
\right]
```

<!-- </equation> -->

<!-- <equation class="equation" label="eq:matrix_u" align="center" raw="U = \left[\begin{array}{rrrrr}u_{1,1} & u_{1,2} & u_{1,3} & 0       & 0 \\0       & u_{2,2} & u_{2,3} & u_{2,4} & 0 \\0       & 0       & u_{3,3} & u_{3,4} & u_{3,5} \\0       & 0       & 0       & u_{4,4} & u_{4,5} \\0       & 0       & 0       &  0      & u_{5,5}\end{array}\right]" alt="Representation of matrix U as derived from D, DU, DU2."> -->

```math
U = \left[
    \begin{array}{rrrrr}
    u_{1,1} & u_{1,2} & u_{1,3} & 0       & 0 \\
    0       & u_{2,2} & u_{2,3} & u_{2,4} & 0 \\
    0       & 0       & u_{3,3} & u_{3,4} & u_{3,5} \\
    0       & 0       & 0       & u_{4,4} & u_{4,5} \\
    0       & 0       & 0       &  0      & u_{5,5}
    \end{array}
\right]
```

<!-- </equation> -->

where the `l(i)` values are stored in `DL`, the diagonal elements `u(i,i)` are stored in `D`, and the superdiagonal elements `u(i,i+1)` and `u(i,i+2)` are stored in `DU` and `DU2`, respectively.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dgttrf = require( '@stdlib/lapack/base/dgttrf' );
```

#### dgttrf( N, DL, D, DU, DU2, IPIV )

Computes an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var dgttrf = require( '@stdlib/lapack/base/dgttrf' );

var DL = new Float64Array( [ 6.0, 6.0 ] );
var D = new Float64Array( [ 20.0, 30.0, 10.0 ] );
var DU = new Float64Array( [ 8.0, 8.0 ] );
var DU2 = new Float64Array( [ 0.0 ] );
var IPIV = new Int32Array( [ 0, 0, 0 ] );

/*
    A = [
        [ 20.0, 8.0,  0.0  ],
        [ 6.0,  30.0, 8.0  ],
        [ 0.0,  6.0,  10.0 ]
    ]
*/

dgttrf( 3, DL, D, DU, DU2, IPIV );
// DL => <Float64Array>[ 0.3, ~0.22 ]
// D => <Float64Array>[ 20.0, 27.6, ~8.26 ]
// DU => <Float64Array>[ 8.0, 8.0 ]
// DU2 => <Float64Array>[ 0.0 ]
// IPIV => <Int32Array>[ 0, 1, 2 ]
```

The function has the following parameters:

-   **N**: number of rows/columns in `A`.
-   **DL**: the first sub diagonal of `A` as a [`Float64Array`][mdn-float64array]. Should have `N-1` indexed elements. `DL` is overwritten by the multipliers that define the matrix `L` from the `LU` factorization of `A`.
-   **D**: the diagonal of `A` as a [`Float64Array`][mdn-float64array]. Should have `N` indexed elements. `D` is overwritten by the diagonal elements of the upper triangular matrix `U` from the `LU` factorization of `A`.
-   **DU**: the first super-diagonal of `A` as a [`Float64Array`][mdn-float64array]. Should have `N-1` indexed elements. `DU` is overwritten by the elements of the first super-diagonal of `U`.
-   **DU2**: the second super-diagonal of `U`  as a [`Float64Array`][mdn-float64array]. Should have `N-2` indexed elements. `DU2` is overwritten by the elements of the second super-diagonal of `U` as a [`Float64Array`][mdn-float64array].
-   **IPIV**: vector of pivot indices as a [`Int32Array`][mdn-int32array]. Should have `N` indexed elements.

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var dgttrf = require( '@stdlib/lapack/base/dgttrf' );

// Initial arrays...
var DL0 = new Float64Array( [ 0.0, 6.0, 6.0 ] );
var D0 = new Float64Array( [ 0.0, 20.0, 30.0, 10.0 ] );
var DU0 = new Float64Array( [ 0.0, 8.0, 8.0 ] );
var DU20 = new Float64Array( [ 0.0, 0.0 ] );
var IPIV0 = new Int32Array( [ 0, 0, 0, 0 ] );

/*
    A = [
        [ 20.0, 8.0,  0.0  ],
        [ 6.0,  30.0, 8.0  ],
        [ 0.0,  6.0,  10.0 ]
    ]
*/

// Create offset views...
var DL = new Float64Array( DL0.buffer, DL0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var D = new Float64Array( D0.buffer, D0.BYTES_PER_ELEMENT*1 );
var DU = new Float64Array( DU0.buffer, DU0.BYTES_PER_ELEMENT*1 );
var DU2 = new Float64Array( DU20.buffer, DU20.BYTES_PER_ELEMENT*1 );
var IPIV = new Int32Array( IPIV0.buffer, IPIV0.BYTES_PER_ELEMENT*1 );

dgttrf( 3, DL, D, DU, DU2, IPIV );
// DL0 => <Float64Array>[ 0.0, 0.3, ~0.22 ]
// D0 => <Float64Array>[ 0.0, 20.0, 27.6, ~8.26 ]
// DU0 => <Float64Array>[ 0.0, 8.0, 8.0 ]
// DU20 => <Float64Array>[ 0.0, 0.0 ]
// IPIV0 => <Int32Array>[ 0, 0, 1, 2 ]
```

<!-- lint disable maximum-heading-length -->

#### dgttrf.ndarray( N, DL, sdl, odl, D, sd, od, DU, sdu, odu, DU2, sdu2, odu2, IPIV, si, oi )

Computes an `LU` factorization of a real tridiagonal matrix `A` using elimination with partial pivoting and row interchanges and alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var dgttrf = require( '@stdlib/lapack/base/dgttrf' );

var DL = new Float64Array( [ 6.0, 6.0 ] );
var D = new Float64Array( [ 20.0, 30.0, 10.0 ] );
var DU = new Float64Array( [ 8.0, 8.0 ] );
var DU2 = new Float64Array( [ 0.0 ] );
var IPIV = new Int32Array( [ 0, 0, 0 ] );

/*
    A = [
        [ 20.0, 8.0,  0.0  ],
        [ 6.0,  30.0, 8.0  ],
        [ 0.0,  6.0,  10.0 ]
    ]
*/

dgttrf.ndarray( 3, DL, 1, 0, D, 1, 0, DU, 1, 0, DU2, 1, 0, IPIV, 1, 0 );
// DL => <Float64Array>[ 0.3, ~0.22 ]
// D => <Float64Array>[ 20.0, 27.6, ~8.26 ]
// DU => <Float64Array>[ 8.0, 8.0 ]
// DU2 => <Float64Array>[ 0.0 ]
// IPIV => <Int32Array>[ 0, 1, 2 ]
```

The function has the following additional parameters:

-   **sdl**: stride length for `DL`.
-   **odl**:  starting index for `DL`.
-   **sd**: stride length for `D`.
-   **od**:  starting index for `D`.
-   **sdu**: stride length for `DU`.
-   **odu**:  starting index for `DU`.
-   **sdu2**: stride length for `DU2`.
-   **odu2**:  starting index for `DU2`.
-   **si**: stride length for `IPIV`.
-   **oi**:  starting index for `IPIV`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Int32Array = require( '@stdlib/array/int32' );
var dgttrf = require( '@stdlib/lapack/base/dgttrf' );

var DL = new Float64Array( [ 0.0, 6.0, 6.0 ] );
var D = new Float64Array( [ 0.0, 20.0, 30.0, 10.0 ] );
var DU = new Float64Array( [ 0.0, 8.0, 8.0 ] );
var DU2 = new Float64Array( [ 0.0, 0.0 ] );
var IPIV = new Int32Array( [ 0, 0, 0, 0 ] );

/*
    A = [
        [ 20.0, 8.0,  0.0  ],
        [ 6.0,  30.0, 8.0  ],
        [ 0.0,  6.0,  10.0 ]
    ]
*/

dgttrf.ndarray( 3, DL, 1, 1, D, 1, 1, DU, 1, 1, DU2, 1, 1, IPIV, 1, 1 );
// DL => <Float64Array>[ 0.0, 0.3, ~0.22 ]
// D => <Float64Array>[ 0.0, 20.0, 27.6, ~8.26 ]
// DU => <Float64Array>[ 0.0, 8.0, 8.0 ]
// DU2 => <Float64Array>[ 0.0, 0.0 ]
// IPIV => <Int32Array>[ 0, 0, 1, 2 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both functions mutate the input arrays `DL`, `D`, `DU`, `DU2`, and `IPIV`.

-   Both functions return a status code indicating success or failure. The status code indicates the following conditions:

    -   `0`: factorization was successful.
    -   `>0`: `U(k, k)` is exactly zero the factorization has been completed, but the factor `U` is exactly singular, and division by zero will occur if it is used to solve a system of equations where `k` equals the status code value.

-   `dgttrf()` corresponds to the [LAPACK][LAPACK] routine [`dgttrf`][lapack-dgttrf].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Int32Array = require( '@stdlib/array/int32' );
var Float64Array = require( '@stdlib/array/float64' );
var dgttrf = require( '@stdlib/lapack/base/dgttrf' );

var N = 9;

var DL = new Float64Array( [ 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0 ] );
var D = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var DU = new Float64Array( [ 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0 ] );
var DU2 = new Float64Array( N-2 );
var IPIV = new Int32Array( N );

/*
    A = [
        [ 1.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
        [ 3.0, 1.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
        [ 0.0, 3.0, 1.0, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0 ],
        [ 0.0, 0.0, 3.0, 1.0, 4.0, 0.0, 0.0, 0.0, 0.0 ],
        [ 0.0, 0.0, 0.0, 3.0, 1.0, 4.0, 0.0, 0.0, 0.0 ],
        [ 0.0, 0.0, 0.0, 0.0, 3.0, 1.0, 4.0, 0.0, 0.0 ],
        [ 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1.0, 4.0, 0.0 ],
        [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1.0, 4.0 ],
        [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 1.0 ],
    ]
*/

// Perform the `A = LU` factorization:
var info = dgttrf( N, DL, D, DU, DU2, IPIV );

console.log( DL );
console.log( D );
console.log( DU );
console.log( DU2 );
console.log( IPIV );
console.log( info );
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

[lapack-dgttrf]: https://www.netlib.org/lapack/explore-html/d6/d46/group__gttrf_ga8d1e46216e6c861c89bd4328b8be52a1.html#ga8d1e46216e6c861c89bd4328b8be52a1

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-int32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
