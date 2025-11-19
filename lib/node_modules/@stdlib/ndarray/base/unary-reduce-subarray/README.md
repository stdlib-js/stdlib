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

# unaryReduceSubarray

> Perform a reduction over a list of specified dimensions in an input ndarray and assign results to a provided output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var unaryReduceSubarray = require( '@stdlib/ndarray/base/unary-reduce-subarray' );
```

#### unaryReduceSubarray( fcn, arrays, dims\[, options] )

Performs a reduction over a list of specified dimensions in an input ndarray and assigns results to a provided output ndarray.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var filled = require( '@stdlib/array/base/filled' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var every = require( '@stdlib/ndarray/base/every' );

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var ybuf = filled( false, 3 );

// Define the array shapes:
var xsh = [ 1, 3, 2, 2 ];
var ysh = [ 1, 3 ];

// Define the array strides:
var sx = [ 12, 4, 2, 1 ];
var sy = [ 3, 1 ];

// Define the index offsets:
var ox = 0;
var oy = 0;

// Create an input ndarray-like object:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': xsh,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

// Create an output ndarray-like object:
var y = {
    'dtype': 'generic',
    'data': ybuf,
    'shape': ysh,
    'strides': sy,
    'offset': oy,
    'order': 'row-major'
};

// Perform a reduction:
unaryReduceSubarray( every, [ x, y ], [ 2, 3 ] );

var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
// returns [ [ true, false, true ] ]
```

The function accepts the following arguments:

-   **fcn**: function which will be applied to a subarray and should reduce the subarray to a single scalar value.
-   **arrays**: array-like object containing one input ndarray and one output ndarray, followed by any additional ndarray arguments.
-   **dims**: list of dimensions over which to perform a reduction.
-   **options**: function options which are passed through to `fcn` (_optional_).

Each provided ndarray should be an object with the following properties:

-   **dtype**: data type.
-   **data**: data buffer.
-   **shape**: dimensions.
-   **strides**: stride lengths.
-   **offset**: index offset.
-   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

#### TODO: document factory method

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The output ndarray and any additional ndarray arguments are expected to have the same dimensions as the non-reduced dimensions of the input ndarray. When calling the reduction function, any additional ndarray arguments are provided as zero-dimensional ndarray-like objects.

-   The reduction function is expected to have the following signature:

    ```text
    fcn( arrays[, options] )
    ```

    where

    -   **arrays**: array containing a subarray of the input ndarray and any additional ndarray arguments as zero-dimensional ndarrays.
    -   **options**: function options (_optional_).

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before performing a reduction in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var filled = require( '@stdlib/array/base/filled' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var every = require( '@stdlib/ndarray/base/every' );
var unaryReduceSubarray = require( '@stdlib/ndarray/base/unary-reduce-subarray' );

var N = 10;
var x = {
    'dtype': 'generic',
    'data': discreteUniform( N, -5, 5, {
        'dtype': 'generic'
    }),
    'shape': [ 1, 5, 2 ],
    'strides': [ 10, 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var y = {
    'dtype': 'generic',
    'data': filled( false, 2 ),
    'shape': [ 1, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};

unaryReduceSubarray( every, [ x, y ], [ 1 ] );

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

</section>

<!-- /.links -->
