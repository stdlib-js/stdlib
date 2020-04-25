<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# sdsdot

> Calculate the dot product of two single-precision floating-point vectors with extended accumulation.

<section class="intro">

The [dot product][dot-product] (or scalar product) is defined as

<!-- <equation class="equation" label="eq:dot_product" align="center" raw="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" alt="Dot product definition."> -->

<div class="equation" align="center" data-raw-text="\mathbf{x}\cdot\mathbf{y} = \sum_{i=0}^{N-1} x_i y_i = x_0 y_0 + x_1 y_1 + \ldots + x_{N-1} y_{N-1}" data-equation="eq:dot_product">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7880e0a57ea969a8dc50fe81eaa0b242ec30f537/lib/node_modules/@stdlib/blas/base/sdsdot/docs/img/equation_dot_product.svg" alt="Dot product definition.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sdsdot = require( '@stdlib/blas/base/sdsdot' );
```

#### sdsdot( N, scalar, x, strideX, y, strideY )

Calculates the dot product of vectors `x` and `y` with extended accumulation.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = sdsdot( x.length, 0.0, x, 1, y, 1 );
// returns -5.0
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **scalar**: scalar constant added to the dot product.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to calculate the dot product of every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var N = floor( x.length / 2 );

var z = sdsdot( N, 0.0, x, 2, y, -1 );
// returns 9.0
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

var z = sdsdot( N, 0.0, x1, -2, y1, 1 );
// returns 128.0
```

#### sdsdot.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Calculates the dot product of vectors `x` and `y` with extended accumulation and using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var x = new Float32Array( [ 4.0, 2.0, -3.0, 5.0, -1.0 ] );
var y = new Float32Array( [ 2.0, 6.0, -1.0, -4.0, 8.0 ] );

var z = sdsdot.ndarray( x.length, 0.0, x, 1, 0, y, 1, 0 );
// returns -5.0
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to calculate the dot product of every other value in `x` starting from the second value with the last 3 elements in `y` in reverse order

```javascript
var Float32Array = require( '@stdlib/array/float32' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var N = floor( x.length / 2 );

var z = sdsdot.ndarray( N, 0.0, x, 2, 1, y, -1, y.length-1 );
// returns 128.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `scalar`.
-   `sdsdot()` corresponds to the [BLAS][blas] level 1 function [`sdsdot`][sdsdot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var Float32Array = require( '@stdlib/array/float32' );
var sdsdot = require( '@stdlib/blas/base/sdsdot' );

var x;
var y;
var i;

x = new Float32Array( 10 );
y = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu() * 100.0 );
    y[ i ] = round( randu() * 10.0 );
}
console.log( x );
console.log( y );

var z = sdsdot( x.length, 0.0, x, 1, y, -1 );
console.log( z );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Lawson, Charles L., Richard J. Hanson, Fred T. Krogh, and David Ronald Kincaid. 1979. "Algorithm 539: Basic Linear Algebra Subprograms for Fortran Usage \[F1]." _ACM Transactions on Mathematical Software_ 5 (3). New York, NY, USA: Association for Computing Machinery: 324–25. doi:[10.1145/355841.355848][@lawson:1979a].

</section>

<!-- /.references -->

<section class="links">

[dot-product]: https://en.wikipedia.org/wiki/Dot_product

[blas]: http://www.netlib.org/blas

[sdsdot]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[@stdlib/array/float32]: https://github.com/stdlib-js/stdlib

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@lawson:1979a]: https://doi.org/10.1145/355841.355848

</section>

<!-- /.links -->
