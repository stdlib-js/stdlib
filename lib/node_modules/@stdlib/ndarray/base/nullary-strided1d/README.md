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

# nullaryStrided1d

> Apply a one-dimensional strided array function to a list of specified dimensions in an ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var nullaryStrided1d = require( '@stdlib/ndarray/base/nullary-strided1d' );
```

#### nullaryStrided1d( fcn, arrays, dims\[, options] )

Applies a one-dimensional strided array function to a list of specified dimensions in an ndarray.

<!-- eslint-disable max-len -->

```javascript
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var getStride = require( '@stdlib/ndarray/base/stride' );
var getOffset = require( '@stdlib/ndarray/base/offset' );
var getData = require( '@stdlib/ndarray/base/data-buffer' );
var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
var gsorthp = require( '@stdlib/blas/ext/base/gsorthp' ).ndarray;

function wrapper( arrays ) {
    var x = arrays[ 0 ];
    var o = arrays[ 1 ];
    return gsorthp( numelDimension( x, 0 ), ndarraylike2scalar( o ), getData( x ), getStride( x, 0 ), getOffset( x ) );
}

// Create a data buffer:
var xbuf = [ 12.0, 11.0, 10.0, 9.0, 8.0, 7.0, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ];

// Define an array shape:
var xsh = [ 1, 3, 2, 2 ];

// Define the array strides:
var sx = [ 12, 4, 2, 1 ];

// Define the index offset:
var ox = 0;

// Create an ndarray-like object:
var x = {
    'dtype': 'generic',
    'data': xbuf,
    'shape': xsh,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

// Create an ndarray-like object for the sort order:
var sortOrder = {
    'dtype': 'generic',
    'data': [ 1.0 ],
    'shape': [ 1, 3 ],
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};

// Apply strided function:
nullaryStrided1d( wrapper, [ x, sortOrder ], [ 2, 3 ] );

var arr = ndarray2array( x.data, x.shape, x.strides, x.offset, x.order );
// returns [ [ [ [ 9.0, 10.0 ], [ 11.0, 12.0 ] ], [ [ 5.0, 6.0 ], [ 7.0, 8.0 ] ], [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ] ]
```

The function accepts the following arguments:

-   **fcn**: function which will be applied to a one-dimensional subarray.
-   **arrays**: array-like object containing an ndarray followed by any additional ndarray arguments.
-   **dims**: list of dimensions to which to apply a strided array function.
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

-   Any additional ndarray arguments are expected to have the same dimensions as the loop dimensions of the first provided ndarray. When calling the strided array function, any additional ndarray arguments are provided as zero-dimensional ndarray-like objects.

-   The strided array function is expected to have the following signature:

    ```text
    fcn( arrays[, options] )
    ```

    where

    -   **arrays**: array containing a one-dimensional subarray of the first provided ndarray and any additional ndarray arguments as zero-dimensional ndarrays.
    -   **options**: function options (_optional_).

-   The function iterates over ndarray elements according to the memory layout of the first provided ndarray.

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before performing an operation in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
var getData = require( '@stdlib/ndarray/base/data-buffer' );
var getStride = require( '@stdlib/ndarray/base/stride' );
var getOffset = require( '@stdlib/ndarray/base/offset' );
var ndarraylike2scalar = require( '@stdlib/ndarray/base/ndarraylike2scalar' );
var gsorthp = require( '@stdlib/blas/ext/base/gsorthp' ).ndarray;
var nullaryStrided1d = require( '@stdlib/ndarray/base/nullary-strided1d' );

function wrapper( arrays ) {
    var x = arrays[ 0 ];
    var o = arrays[ 1 ];
    return gsorthp( numelDimension( x, 0 ), ndarraylike2scalar( o ), getData( x ), getStride( x, 0 ), getOffset( x ) );
}

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
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );

var sortOrder = {
    'dtype': 'generic',
    'data': [ 1.0 ],
    'shape': [ 2 ],
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};

nullaryStrided1d( wrapper, [ x, sortOrder ], [ 0, 1 ] );

console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
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
