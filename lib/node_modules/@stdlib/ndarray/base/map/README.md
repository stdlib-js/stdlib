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

# map

> Apply a callback function to elements in an input ndarray and assign results to elements in an output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var map = require( '@stdlib/ndarray/base/map' );
```

#### map( arrays, fcn\[, thisArg] )

Applies a callback function to elements in an input ndarray and assigns results to elements in an output ndarray.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function scale( x ) {
    return x * 10.0;
}

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var ybuf = new Float64Array( 6 );

// Define the shape of the input and output arrays:
var shape = [ 3, 2 ];

// Define the array strides:
var sx = [ 2, 1 ];
var sy = [ 2, 1 ];

// Define the index offsets:
var ox = 0;
var oy = 0;

// Create the input and output ndarray-like objects:
var x = {
    'ref': null,
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};
var y = {
    'dtype': 'float64',
    'data': ybuf,
    'shape': shape,
    'strides': sy,
    'offset': oy,
    'order': 'row-major'
};

// Apply the map function:
map( [ x, y ], scale );

console.log( y.data );
// => <Float64Array>[ 10.0, 20.0, 30.0, 40.0, 50.0, 60.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input ndarray and one output ndarray.
-   **fcn**: callback to apply.
-   **thisArg**: callback execution context.

The callback function is provided the following arguments:

-   **values**: current array element.
-   **indices**: current array element indices.
-   **arr**: the input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Each provided ndarray should be an object with the following properties:

    -   **dtype**: data type.
    -   **data**: data buffer.
    -   **shape**: dimensions.
    -   **strides**: stride lengths.
    -   **offset**: index offset.
    -   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying a callback function in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var abs = require( '@stdlib/math/base/special/abs' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var map = require( '@stdlib/ndarray/base/map' );

var N = 10;
var x = {
    'dtype': 'generic',
    'data': filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) ),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var y = {
    'dtype': 'generic',
    'data': filledarray( 0, N, 'generic' ),
    'shape': x.shape.slice(),
    'strides': shape2strides( x.shape, 'column-major' ),
    'offset': 0,
    'order': 'column-major'
};

map( [ x, y ], naryFunction( abs, 1 ) );
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
