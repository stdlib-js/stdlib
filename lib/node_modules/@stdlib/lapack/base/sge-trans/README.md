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

# sgetrans

> Convert a matrix from row-major layout to column-major layout or vice versa.

<section class="usage">

## Usage

```javascript
var sgetrans = require( '@stdlib/lapack/base/sge-trans' );
```

#### sgetrans( order, M, N, A, LDA, out, LDO )

Converts a matrix from row-major layout to column-major layout or vice versa.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var out = new Float32Array( 6 );

out = sgetrans( 'row-major', 2, 3, A, 3, out, 2 );
// returns <Float32Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float32Array`][mdn-float32array].
-   **LDA**: stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`).
-   **out**: output [`Float32Array`][mdn-float32array].
-   **LDO**: stride of the first dimension of `out` (a.k.a., leading dimension of the matrix `out`).

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );

// Initial arrays...
var A0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
var out0 = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

// Create offset views...
var A1 = new Float32Array( A0.buffer, A0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var out1 = new Float32Array( out0.buffer, out0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

sgetrans( 'row-major', 2, 2, A1, 2, out1, 2 );
// out0 => <Float32Array>[ 0.0, 1.0, 3.0, 2.0, 4.0 ]
```

#### sgetrans.ndarray( M, N, A, sa1, sa2, oa, out, so1, so2, oo )

Converts a matrix from row-major layout to column-major layout or vice versa using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var out = new Float32Array( 6 );

out = sgetrans.ndarray( 2, 3, A, 3, 1, 0, out, 2, 1, 0 );
// returns <Float32Array>[ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ]
```

The function has the following parameters:

-   **M**: number of rows in `A`.
-   **N**: number of columns in `A`.
-   **A**: input [`Float32Array`][mdn-float32array].
-   **sa1**: stride of the first dimension of `A`.
-   **sa2**: stride of the second dimension of `A`.
-   **oa**: starting index for `A`.
-   **out**: output [`Float32Array`][mdn-float32array].
-   **so1**: stride of the first dimension of `out`.
-   **so2**: stride of the second dimension of `out`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var A = new Float32Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
var out = new Float32Array( [ 0.0, 0.0, 11.0, 312.0, 53.0, 412.0 ] );

sgetrans.ndarray( 2, 2, A, 2, 1, 1, out, 2, 1, 2 );
// out => <Float32Array>[ 0.0, 0.0, 1.0, 3.0, 2.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sgetrans()` corresponds to the [LAPACK][lapack] utility routine [`sge_trans`][lapack-sge-trans].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var numel = require( '@stdlib/ndarray/base/numel' );
var Float32Array = require( '@stdlib/array/float32' );
var sgetrans = require( '@stdlib/lapack/base/sge-trans' );

var shapeA = [ 2, 3 ];
var shapeOut = [ 3, 2 ];

// Row-major layout...
var order = 'row-major';

var stridesA = shape2strides( shapeA, order );
var stridesOut = shape2strides( shapeOut, order );

var A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, order ) );

var out = new Float32Array( numel( shapeA ) );

out = sgetrans( order, shapeA[0], shapeA[1], A, stridesA[0], out, stridesOut[0] );
console.log( ndarray2array( out, shapeOut, stridesOut, 0, order ) );

// Column-major layout...
order = 'column-major';

stridesA = shape2strides( shapeA, order );
stridesOut = shape2strides( shapeOut, order );

A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, order ) );

out = new Float32Array( numel( shapeA ) );

out = sgetrans( order, shapeA[0], shapeA[1], A, stridesA[1], out, stridesOut[1] );
console.log( ndarray2array( out, shapeOut, stridesOut, 0, order ) );

// Input and output arrays have different layouts...
stridesA = shape2strides( shapeA, 'row-major' );
stridesOut = shape2strides( shapeOut, 'column-major' );

A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, 'row-major' ) );

out = new Float32Array( numel( shapeA ) );

out = sgetrans.ndarray( shapeA[0], shapeA[1], A, stridesA[0], stridesA[1], 0, out, stridesOut[0], stridesOut[1], 0 );
console.log( ndarray2array( out, shapeOut, stridesOut, 0, 'column-major' ) );

// Input and output arrays have different layouts...
stridesA = shape2strides( shapeA, 'column-major' );
stridesOut = shape2strides( shapeOut, 'row-major' );

A = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
console.log( ndarray2array( A, shapeA, stridesA, 0, 'column-major' ) );

out = new Float32Array( numel( shapeA ) );

out = sgetrans.ndarray( shapeA[0], shapeA[1], A, stridesA[0], stridesA[1], 0, out, stridesOut[0], stridesOut[1], 0 );
console.log( ndarray2array( out, shapeOut, stridesOut, 0, 'row-major' ) );
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

[lapack-sge-trans]: https://github.com/OpenMathLib/OpenBLAS/blob/develop/lapack-netlib/LAPACKE/utils/lapacke_sge_trans.c

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
