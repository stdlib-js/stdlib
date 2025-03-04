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

# dspr

> Perform the symmetric rank 1 operation `A = α*x*x^T + A`.

<section class="usage">

## Usage

```javascript
var dspr = require( '@stdlib/blas/base/dspr' );
```

#### dspr( order, uplo, N, α, x, sx, AP )

Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var AP = new Float64Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

dspr( 'row-major', 'upper', 3, 1.0, x, 1, AP );
// AP => <Float64Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the symmetric matrix `A` is supplied.
-   **N**: number of elements along each dimension of `A`.
-   **α**: scalar constant.
-   **x**: input [`Float64Array`][mdn-float64array].
-   **sx**: index increment for `x`.
-   **AP**: packed form of a symmetric matrix `A` stored as a [`Float64Array`][mdn-float64array].

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over the elements of `x` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var AP = new Float64Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float64Array( [ 3.0, 2.0, 1.0 ] );

dspr( 'row-major', 'upper', 3, 1.0, x, -1, AP );
// AP => <Float64Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial arrays...
var x0 = new Float64Array( [ 0.0, 3.0, 2.0, 1.0 ] );
var AP = new Float64Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

dspr( 'row-major', 'upper', 3, 1.0, x1, -1, AP );
// AP => <Float64Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

#### dspr.ndarray( uplo, N, α, x, sx, ox, AP, sap, oap )

Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var AP = new Float64Array( [ 1.0, 1.0, 2.0, 1.0, 2.0, 3.0 ] );
var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );

dspr.ndarray( 'row-major', 'lower', 3, 1.0, x, 1, 0, AP, 1, 0 );
// AP => <Float64Array>[ 2.0, 3.0, 6.0, 4.0, 8.0, 12.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **sap**: `AP` stride length.
-   **oap**: starting index for `AP`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var AP = new Float64Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float64Array( [ 3.0, 2.0, 1.0 ] );

dspr.ndarray( 'row-major', 'upper', 3, 1.0, x, -1, 2, AP, 1, 0 );
// AP => <Float64Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dspr()` corresponds to the [BLAS][blas] level 2 function [`dspr`][blas-dspr].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var dspr = require( '@stdlib/blas/base/dspr' );

var opts = {
    'dtype': 'float64'
};

var N = 5;

var AP = discreteUniform( N * ( N + 1 ) / 2, -10.0, 10.0, opts );
var x = discreteUniform( N, -10.0, 10.0, opts );

dspr( 'column-major', 'upper', N, 1.0, x, 1, AP );
console.log( AP );

dspr.ndarray( 'column-major', 'upper', N, 1.0, x, 1, 0, AP, 1, 0 );
console.log( AP );
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

[blas-dspr]: https://www.netlib.org/lapack/explore-html/d5/df9/group__hpr_gaa5d4297738fb1391709c645a7c2bee5e.html#gaa5d4297738fb1391709c645a7c2bee5e

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
