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

# Nullary

> Apply a nullary callback and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var nullary = require( '@stdlib/strided/base/nullary' );
```

#### nullary( arrays, shape, strides, fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

nullary( [ x ], [ x.length ], [ 1 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride length for the strided output array.
-   **fcn**: nullary function to apply.

The `shape` and `strides` parameters determine which elements in the strided output array are accessed at runtime. For example, to index the first `N` elements of the strided output array in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var N = floor( x.length / 2 );

nullary( [ x ], [ N ], [ -1 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, -4.0, -5.0, -6.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

function fill() {
    return 3.0;
}

// Initial arrays...
var x0 = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var N = floor( x0.length / 2 );

nullary( [ x1 ], [ N ], [ 1 ], fill );
// x0 => <Float64Array>[ -1.0, 3.0, -3.0, 3.0, -5.0, 3.0 ]
```

#### nullary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a nullary callback and assigns results to elements in a strided output array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );

nullary.ndarray( [ x ], [ x.length ], [ 1 ], [ 0 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting index (i.e., index offset) for the strided output array.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index the last `N` elements in the strided output array,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var floor = require( '@stdlib/math/base/special/floor' );

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var N = floor( x.length / 2 );

nullary.ndarray( [ x ], [ N ], [ -1 ], [ x.length-1 ], fill );
// x => <Float64Array>[ -1.0, -2.0, -3.0, 3.0, 3.0, 3.0 ]
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
var nullary = require( '@stdlib/strided/base/nullary' );

var N = 10;

var x = filledarray( 0.0, N, 'generic' );
console.log( x );

var shape = [ N ];
var strides = [ 1 ];
var offsets = [ 0 ];

nullary.ndarray( [ x ], shape, strides, offsets, discreteUniform( -100, 100 ) );
console.log( x );
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
