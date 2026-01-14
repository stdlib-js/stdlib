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

# dpttrf

> Compute the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.

<section class="usage">

## Usage

```javascript
var dpttrf = require( '@stdlib/lapack/base/dpttrf' );
```

#### dpttrf( N, D, E )

Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
var E = new Float64Array( [ 1.0, 2.0 ] );

dpttrf( 3, D, E );
// D => <Float64Array>[ 4, 4.75, ~5.15789 ]
// E => <Float64Array>[ 0.25, ~0.4210 ]
```

The function has the following parameters:

-   **N**: order of matrix `A`.
-   **D**: the `N` diagonal elements of `A` as a [`Float64Array`][mdn-float64array].
-   **E**: the N-1 subdiagonal elements of `A` as a [`Float64Array`][mdn-float64array].

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var D0 = new Float64Array( [ 0.0, 4.0, 5.0, 6.0 ] );
var E0 = new Float64Array( [ 0.0, 1.0, 2.0 ] );

// Create offset views...
var D1 = new Float64Array( D0.buffer, D0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var E1 = new Float64Array( E0.buffer, E0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

dpttrf( 3, D1, E1 );
// D0 => <Float64Array>[ 0.0, 4.0, 4.75, ~5.15789 ]
// E0 => <Float64Array>[ 0.0, 0.25, ~0.4210 ]
```

#### dpttrf.ndarray( N, D, strideD, offsetD, E, strideE, offsetE )

Computes the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var D = new Float64Array( [ 4.0, 5.0, 6.0 ] );
var E = new Float64Array( [ 1.0, 2.0 ] );

dpttrf.ndarray( 3, D, 1, 0, E, 1, 0 );
// D => <Float64Array>[ 4, 4.75, ~5.15789 ]
// E => <Float64Array>[ 0.25, ~0.4210 ]
```

The function has the following additional parameters:

-   **strideD**: stride length for `D`.
-   **offsetD**:  starting index for `D`.
-   **strideE**: stride length for `E`.
-   **offsetE**:  starting index for `E`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var D = new Float64Array( [ 0.0, 4.0, 5.0, 6.0 ] );
var E = new Float64Array( [ 0.0, 1.0, 2.0 ] );

dpttrf.ndarray( 3, D, 1, 1, E, 1, 1 );
// D => <Float64Array>[ 0.0, 4.0, 4.75, ~5.15789 ]
// E => <Float64Array>[ 0.0, 0.25, ~0.4210 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Both functions mutate the input arrays `D` and `E`.

-   Both functions return a status code indicating success or failure. A status code indicates the following conditions:

    -   `0`: factorization was successful.
    -   `<0`: the k-th argument had an illegal value, where `-k` equals the status code value.
    -   `0 < k < N`: the leading principal minor of order `k` is not positive and factorization could not be completed, where `k` equals the status code value.
    -   `N`: the leading principal minor of order `N` is not positive, and factorization was completed.

-   `dpttrf()` corresponds to the [LAPACK][LAPACK] routine [`dpttrf`][lapack-dpttrf].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dpttrf = require( '@stdlib/lapack/base/dpttrf' );

var opts = {
    'dtype': 'float64'
};
var D = discreteUniform( 5, 1, 5, opts );
console.log( D );

var E = discreteUniform( D.length-1, 1, 5, opts );
console.log( E );

// Perform the `L * D * L^T` factorization:
var info = dpttrf( D.length, D, E );
console.log( D );
console.log( E );
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

[lapack-dpttrf]: https://www.netlib.org/lapack/explore-html/d4/d2c/group__pttrf_ga8f112041da2b9b443f8761a1eaaf15b6.html#ga8f112041da2b9b443f8761a1eaaf15b6

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
