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

# Binary

> Apply a binary callback to elements in input ndarrays and assign results to elements in an output ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var binary = require( '@stdlib/ndarray/base/binary' );
```

#### binary( arrays, fcn )

Applies a binary callback to elements in input ndarrays and assigns results to elements in an output ndarray.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var add = require( '@stdlib/number/float64/base/add' );

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var ybuf = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var zbuf = new Float64Array( 6 );

// Define the shape of the input and output arrays:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 2, 2, 1 ];
var sy = [ 2, 2, 1 ];
var sz = [ 2, 2, 1 ];

// Define the index offsets:
var ox = 0;
var oy = 0;
var oz = 0;

// Create the input and output ndarray-like objects:
var x = {
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
var z = {
    'dtype': 'float64',
    'data': zbuf,
    'shape': shape,
    'strides': sz,
    'offset': oz,
    'order': 'row-major'
};

// Apply the binary function:
binary( [ x, y, z ], add );

console.log( z.data );
// => <Float64Array>[ 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing two input ndarrays and one output ndarray.
-   **fcn**: binary function to apply.

Each provided ndarray should be an object with the following properties:

-   **dtype**: data type.
-   **data**: data buffer.
-   **shape**: dimensions.
-   **strides**: stride lengths.
-   **offset**: index offset.
-   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying a binary function in order to achieve better performance.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var add = require( '@stdlib/number/float64/base/add' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var binary = require( '@stdlib/ndarray/base/binary' );

var N = 10;
var x = {
    'dtype': 'generic',
    'data': filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) ),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );

var y = {
    'dtype': 'generic',
    'data': filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) ),
    'shape': x.shape.slice(),
    'strides': shape2strides( x.shape, 'column-major' ),
    'offset': 0,
    'order': 'column-major'
};
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );

var z = {
    'dtype': 'generic',
    'data': filledarray( 0, N, 'generic' ),
    'shape': x.shape.slice(),
    'strides': shape2strides( x.shape, 'column-major' ),
    'offset': 0,
    'order': 'column-major'
};

binary( [ x, y, z ], add );
console.log( ndarray2array( z.data, z.shape, z.strides, z.offset, z.order ) );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
