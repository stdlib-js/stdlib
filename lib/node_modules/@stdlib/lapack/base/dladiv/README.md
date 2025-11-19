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

# dladiv

> Divide two double-precision complex floating-point numbers in real arithmetic.

<section class="usage">

## Usage

```javascript
var dladiv = require( '@stdlib/lapack/base/dladiv' );
```

#### dladiv( a, b, c, d, P, Q )

Divides two double-precision complex floating-point numbers in real arithmetic.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var P = new Float64Array( 1 );
var Q = new Float64Array( 1 );

dladiv( -13.0, -1.0, -2.0, 1.0, P, Q );
// P => <Float64Array>[ 5.0 ]
// Q => <Float64Array>[ 3.0 ]
```

The function has the following parameters:

-   **a**: real component of numerator.
-   **b**: imaginary component of numerator.
-   **c**: real component of denominator.
-   **d**: imaginary component of denominator.
-   **P**: [`Float64Array`][mdn-float64array] containing a single element which is overwritten by the real part of the quotient.
-   **Q**: [`Float64Array`][mdn-float64array] containing a single element which is overwritten by the imaginary part of the quotient.

#### dladiv.ndarray( a, b, c, d, P, offsetP, Q, offsetQ )

Divides two double-precision complex floating-point numbers in real arithmetic using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var P = new Float64Array( 1 );
var Q = new Float64Array( 1 );

dladiv.ndarray( -13.0, -1.0, -2.0, 1.0, P, 0, Q, 0 );
// P => <Float64Array>[ 5.0 ]
// Q => <Float64Array>[ 3.0 ]
```

The function has the following parameters:

-   **a**: real component of numerator.
-   **b**: imaginary component of numerator.
-   **c**: real component of denominator.
-   **d**: imaginary component of denominator.
-   **P**: [`Float64Array`][mdn-float64array] containing an element which is overwritten by the real part of the quotient.
-   **offsetP**: index of the element in `P`.
-   **Q**: [`Float64Array`][mdn-float64array] containing an element which is overwritten by the imaginary part of the quotient.
-   **offsetQ**: index of the element in `Q`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var P = new Float64Array( [ 0.0, 0.0, 0.0 ] );
var Q = new Float64Array( [ 0.0, 0.0, 0.0 ] );

dladiv.ndarray( 2.0, 1.0, 3.0, 4.0, P, 1, Q, 2 );
// P => <Float64Array>[ 0.0, 0.4, 0.0 ]
// Q => <Float64Array>[ 0.0, 0.0, -0.2 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `dladiv()` corresponds to the [LAPACK][LAPACK] function [`dladiv`][lapack-dladiv].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var dladiv = require( '@stdlib/lapack/base/dladiv' );

var P = new Float64Array( 1 );
var Q = new Float64Array( 1 );
dladiv( 2.0, 1.0, 3.0, 4.0, P, Q );
console.log( '(2+i)/(3+4i) =', P[ 0 ], '+', Q[ 0 ], 'i' );
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

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[lapack-dladiv]: https://www.netlib.org/lapack/explore-html/d5/db7/group__ladiv_gacbc97eb1922a833ffe257e1731bb0aaa.html

[mdn-float64array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array

[lapack]: https://www.netlib.org/lapack/explore-html/

</section>

<!-- /.links -->
