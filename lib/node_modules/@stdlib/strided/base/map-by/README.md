<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

<!-- lint disable maximum-heading-length -->

# mapBy

> Apply a unary function to each element retrieved from a strided input array according to a callback function and assign each result to an element in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var mapBy = require( '@stdlib/strided/base/map-by' );
```

#### mapBy( N, x, strideX, y, strideY, fcn, clbk\[, thisArg] )

Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns each result to an element in a strided output array.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

function accessor( v ) {
    return v * 2.0;
}

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

mapBy( x.length, x, 1, y, 1, abs, accessor );
// y => [ 4.0, 2.0, 6.0, 10.0, 8.0, 0.0, 2.0, 6.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Array`][mdn-array], [`typed array`][mdn-typed-array], or an array-like object (excluding strings and functions).
-   **strideX**: index increment for `x`.
-   **y**: output [`Array`][mdn-array], [`typed array`][mdn-typed-array], or an array-like object (excluding strings and functions).
-   **strideY**: index increment for `y`.
-   **fcn**: unary function to apply to callback return values.
-   **clbk**: callback function.
-   **thisArg**: execution context (_optional_).

The invoked callback function is provided six arguments:

-   **value**: input array element.
-   **idx**: iteration index (zero-based).
-   **xi**: input array strided index (`offsetX + idx*strideX`).
-   **yi**: output array strided index (`offsetY + idx*strideY`).
-   **x**: input array/collection.
-   **y**: output array/collection.

To set the callback execution context, provide a `thisArg`.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

function accessor( v ) {
    this.count += 1;
    return v * 2.0;
}

var context = {
    'count': 0
};

var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

mapBy( x.length, x, 1, y, 1, abs, accessor, context );
// y => [ 4.0, 2.0, 6.0, 10.0, 8.0, 0.0, 2.0, 6.0 ]

var cnt = context.count;
// returns 8
```

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

function accessor( v ) {
    return v * 2.0;
}

var x = [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

mapBy( 3, x, 2, y, -1, abs, accessor );
// y => [ 10.0, 6.0, 2.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var abs = require( '@stdlib/math/base/special/abs' );

function accessor( v ) {
    return v * 2.0;
}

// Initial arrays...
var x0 = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

mapBy( 3, x1, -2, y1, 1, abs, accessor );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, 12.0, 8.0, 4.0 ]
```

#### mapBy.ndarray( N, x, strideX, offsetX, y, strideY, offsetY, fcn, clbk\[, thisArg] )

Applies a unary function to each element retrieved from a strided input array according to a callback function and assigns each result to an element in a strided output array using alternative indexing semantics.

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

function accessor( v ) {
    return v * 2.0;
}

var x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

mapBy.ndarray( x.length, x, 1, 0, y, 1, 0, abs, accessor );
// y => [ 2.0, 4.0, 6.0, 8.0, 10.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var abs = require( '@stdlib/math/base/special/abs' );

function accessor( v ) {
    return v * 2.0;
}

var x = [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ];
var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

mapBy.ndarray( 3, x, 2, 1, y, -1, y.length-1, abs, accessor );
// y => [ 0.0, 0.0, 0.0, 12.0, 8.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a provided callback function does not return any value (or equivalently, explicitly returns `undefined`), the value is **ignored**.

    ```javascript
    var abs = require( '@stdlib/math/base/special/abs' );

    function accessor() {
        // No-op...
    }

    var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
    var y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

    mapBy( x.length, x, 1, y, 1, abs, accessor );
    // y => [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var filledarray = require( '@stdlib/array/filled' );
var abs = require( '@stdlib/math/base/special/abs' );
var mapBy = require( '@stdlib/strided/base/map-by' );

function accessor( v, i ) {
    if ( (i%3) === 0 ) {
        // Simulate a "missing" value...
        return;
    }
    return v;
}

var x = filledarray( 0.0, 10, 'generic' );
var y = filledarray( null, 10, 'generic' );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = discreteUniform( -100.0, 100.0 );
}
console.log( x );
console.log( y );

mapBy.ndarray( x.length, x, 1, 0, y, -1, y.length-1, abs, accessor );
console.log( y );
```

</section>

<!-- /.examples -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
