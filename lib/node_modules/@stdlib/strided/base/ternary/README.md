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

# Ternary

> Apply a ternary callback to strided input array elements and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ternary = require( '@stdlib/strided/base/ternary' );
```

#### ternary( arrays, shape, strides, fcn )

Applies a ternary callback to strided input array elements and assigns results to elements in a strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function add( x, y, z ) {
    return x + y + z;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary( [ x, y, z, w ], [ x.length ], [ 1, 1, 1, 1 ], add );
// w => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing three strided input arrays and one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride lengths for the strided input and output arrays.
-   **fcn**: ternary function to apply.

The `shape` and `strides` parameters determine which elements in the strided input and output arrays are accessed at runtime. For example, to index every other value in the strided input arrays and to index the first `N` elements of the strided output array in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

function add( x, y, z ) {
    return x + y + z;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

ternary( [ x, y, z, w ], [ N ], [ 2, 2, 2, -1 ], add );
// w => <Float64Array>[ 15.0, 9.0, 3.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

function add( x, y, z ) {
    return x + y + z;
}

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var w0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var w1 = new Float64Array( w0.buffer, w0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

ternary( [ x1, y1, z1, w1 ], [ N ], [ -2, -2, -2, 1 ], add );
// w0 => <Float64Array>[ 0.0, 0.0, 0.0, 18.0, 12.0, 6.0 ]
```

#### ternary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a ternary callback to strided input array elements and assigns results to elements in a strided output array using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function add( x, y, z ) {
    return x + y + z;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

ternary.ndarray( [ x, y, z, w ], [ x.length ], [ 1, 1, 1, 1 ], [ 0, 0, 0, 0 ], add );
// w => <Float64Array>[ 3.0, 6.0, 9.0, 12.0, 15.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting indices (i.e., index offsets) for the strided input and output arrays.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index every other value in the strided input arrays starting from the second value and to index the last `N` elements in the strided output array,

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

function add( x, y, z ) {
    return x + y + z;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

ternary.ndarray( [ x, y, z, w ], [ N ], [ 2, 2, 2, -1 ], [ 1, 1, 1, w.length-1 ], add );
// w => <Float64Array>[ 0.0, 0.0, 0.0, 18.0, 12.0, 6.0 ]
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
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
var ternary = require( '@stdlib/strided/base/ternary' );

function add( x, y, z ) {
    return x + y + z;
}

var N = 10;

var x = filledarray( 0.0, N, 'generic' );
gfillBy( x.length, x, 1, discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarray( 0.0, N, 'generic' );
gfillBy( y.length, y, 1, discreteUniform( -100, 100 ) );
console.log( y );

var z = filledarray( 0.0, N, 'generic' );
gfillBy( z.length, z, 1, discreteUniform( -100, 100 ) );
console.log( z );

var w = filledarray( 0.0, N, 'generic' );
console.log( w );

var shape = [ N ];
var strides = [ 1, 1, 1, -1 ];
var offsets = [ 0, 0, 0, N-1 ];

ternary.ndarray( [ x, y, z, w ], shape, strides, offsets, add );
console.log( w );
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
