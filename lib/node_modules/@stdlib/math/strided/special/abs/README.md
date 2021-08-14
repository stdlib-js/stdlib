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

# abs

> Compute the [absolute value][absolute-value] for each element in a strided array.

<section class="intro">

The [absolute value][absolute-value] is defined as

<!-- <equation class="equation" label="eq:absolute_value" align="center" raw="|x| = \begin{cases} x & \textrm{if}\ x \geq 0 \\ -x & \textrm{if}\ x < 0\end{cases}" alt="Absolute value"> -->

<div class="equation" align="center" data-raw-text="|x| = \begin{cases} x &amp; \textrm{if}\ x \geq 0 \\ -x &amp; \textrm{if}\ x &lt; 0\end{cases}" data-equation="eq:absolute_value">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5080b1c6024f68941c0bd4829b354fc345de408a/lib/node_modules/@stdlib/math/strided/special/abs/docs/img/equation_absolute_value.svg" alt="Absolute value">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var abs = require( '@stdlib/math/strided/special/abs' );
```

#### abs( N, x, strideX, y, strideY )

Computes the [absolute value][absolute-value] for each element in `x` and assigns the results to elements in `y`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

// Compute the absolute values in-place:
abs( x.length, x, 1, x, 1 );
// x => <Float64Array>[ 2.0, 1.0, 3.0, 5.0, 4.0, 0.0, 1.0, 3.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input array-like object.
-   **strideX**: index increment for `x`.
-   **y**: output array-like object.
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

abs( N, x, 2, y, -1 );
// y => <Float64Array>[ 5.0, 3.0, 1.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

// Initial arrays...
var x0 = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

abs( N, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 2.0 ]
```

#### abs.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the [absolute value][absolute-value] for each element in `x` and assigns the result to an element in `y` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

abs.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

abs.ndarray( N, x, 2, 1, y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var dtypes = require( '@stdlib/array/dtypes' );
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
var abs = require( '@stdlib/math/strided/special/abs' );

var dt;
var x;
var y;
var i;

dt = dtypes();
for ( i = 0; i < dt.length; i++ ) {
    x = filledarray( 0.0, 10, dt[ i ] );
    gfillBy( x.length, x, 1, discreteUniform( -100, 100 ) );
    console.log( x );

    y = filledarray( 0.0, x.length, dt[ i ] );
    console.log( y );

    abs.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
    console.log( y );
    console.log( '' );
}
```

</section>

<!-- /.examples -->

<section class="links">

[absolute-value]: https://en.wikipedia.org/wiki/Absolute_value

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
