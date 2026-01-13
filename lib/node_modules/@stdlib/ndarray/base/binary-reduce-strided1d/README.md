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

# binaryReduceStrided1d

> Perform a reduction over a list of specified dimensions in two input ndarrays via a one-dimensional strided array binary reduction function and assign results to a provided output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var binaryReduceStrided1d = require( '@stdlib/ndarray/base/binary-reduce-strided1d' );
```

#### binaryReduceStrided1d( fcn, arrays, dims\[, options] )

Performs a reduction over a list of specified dimensions in two input ndarrays via a one-dimensional strided array binary reduction function and assigns results to a provided output ndarray.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var gdot = require( '@stdlib/blas/base/ndarray/gdot' );

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var zbuf = new Float64Array( [ 0.0, 0.0, 0.0 ] );

// Define the array shapes:
var xsh = [ 1, 3, 2, 2 ];
var ysh = [ 1, 3, 2, 2 ];
var zsh = [ 1, 3 ];

// Define the array strides:
var sx = [ 12, 4, 2, 1 ];
var sy = [ 12, 4, 2, 1 ];
var sz = [ 3, 1 ];

// Define the index offsets:
var ox = 0;
var oy = 0;
var oz = 0;

// Create input ndarray-like objects:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': xsh,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};
var y = {
    'dtype': 'float64',
    'data': ybuf,
    'shape': ysh,
    'strides': sy,
    'offset': oy,
    'order': 'row-major'
};

// Create an output ndarray-like object:
var z = {
    'dtype': 'float64',
    'data': zbuf,
    'shape': zsh,
    'strides': sz,
    'offset': oz,
    'order': 'row-major'
};

// Perform a reduction:
binaryReduceStrided1d( gdot, [ x, y, z ], [ 2, 3 ] );

var arr = ndarray2array( z.data, z.shape, z.strides, z.offset, z.order );
// returns [ [ 30.0, 174.0, 446.0 ] ]
```

The function accepts the following arguments:

-   **fcn**: function which will be applied to two one-dimensional subarrays and should reduce them to a single scalar value.
-   **arrays**: array-like object containing two input ndarrays and one output ndarray, followed by any additional ndarray arguments.
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

-   The output ndarray and any additional ndarray arguments are expected to have the same dimensions as the non-reduced dimensions of the input ndarrays. When calling the reduction function, any additional ndarray arguments are provided as zero-dimensional ndarray-like objects.

-   The reduction function is expected to have the following signature:

    ```text
    fcn( arrays[, options] )
    ```

    where

    -   **arrays**: array containing a one-dimensional subarray for each input ndarray and any additional ndarray arguments as zero-dimensional ndarrays.
    -   **options**: function options (_optional_).

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before performing a reduction in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeros = require( '@stdlib/array/base/zeros' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var gdot = require( '@stdlib/blas/base/ndarray/gdot' );
var binaryReduceStrided1d = require( '@stdlib/ndarray/base/binary-reduce-strided1d' );

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
    'data': discreteUniform( N, -5, 5, {
        'dtype': 'generic'
    }),
    'shape': [ 1, 5, 2 ],
    'strides': [ 10, 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var z = {
    'dtype': 'generic',
    'data': zeros( 2 ),
    'shape': [ 1, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};

binaryReduceStrided1d( gdot, [ x, y, z ], [ 1 ] );

console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
console.log( ndarray2array( z.data, z.shape, z.strides, z.offset, z.order ) );
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
