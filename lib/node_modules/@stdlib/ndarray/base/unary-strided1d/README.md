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

# unaryStrided1d

> Apply a one-dimensional strided array function to a list of specified dimensions in an input ndarray and assign results to a provided output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var unaryStrided1d = require( '@stdlib/ndarray/base/unary-strided1d' );
```

#### unaryStrided1d( fcn, arrays, dims\[, options] )

Applies a one-dimensional strided array function to a list of specified dimensions in an input ndarray and assigns results to a provided output ndarray.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var getStride = require( '@stdlib/ndarray/base/stride' );
var getOffset = require( '@stdlib/ndarray/base/offset' );
var getData = require( '@stdlib/ndarray/base/data-buffer' );
var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
var gcusum = require( '@stdlib/blas/ext/base/gcusum' ).ndarray;

function wrapper( arrays ) {
    var x = arrays[ 0 ];
    var y = arrays[ 1 ];
    var s = arrays[ 2 ];
    return gcusum( numelDimension( x, 0 ), getData( s )[ getOffset( s ) ], getData( x ), getStride( x, 0 ), getOffset( x ), getData( y ), getStride( y, 0 ), getOffset( y ) );
}

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var ybuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Define the array shapes:
var xsh = [ 1, 3, 2, 2 ];
var ysh = [ 1, 3, 2, 2 ];

// Define the array strides:
var sx = [ 12, 4, 2, 1 ];
var sy = [ 12, 4, 2, 1 ];

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

// Create an ndarray-like object for the initial sum:
var initial = {
    'dtype': 'float64',
    'data': new Float64Array( [ 0.0 ] ),
    'shape': [ 1, 3 ],
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};

// Create an output ndarray-like object:
var y = {
    'dtype': 'float64',
    'data': ybuf,
    'shape': ysh,
    'strides': sy,
    'offset': oy,
    'order': 'row-major'
};

// Apply strided function:
unaryStrided1d( wrapper, [ x, y, initial ], [ 2, 3 ] );

var arr = ndarray2array( y.data, y.shape, y.strides, y.offset, y.order );
// returns [ [ [ [ 1.0, 3.0 ], [ 6.0, 10.0 ] ], [ [ 5.0, 11.0 ], [ 18.0, 26.0 ] ], [ [ 9.0, 19.0 ], [ 30.0, 42.0 ] ] ] ]
```

The function accepts the following arguments:

-   **fcn**: function which will be applied to a one-dimensional input subarray and should update a one-dimensional output subarray with results.
-   **arrays**: array-like object containing one input ndarray and one output ndarray, followed by any additional ndarray arguments.
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

-   Any additional ndarray arguments are expected to have the same dimensions as the loop dimensions of the input ndarray. When calling the strided array function, any additional ndarray arguments are provided as zero-dimensional ndarray-like objects.

-   The strided array function is expected to have the following signature:

    ```text
    fcn( arrays[, options] )
    ```

    where

    -   **arrays**: array containing a one-dimensional subarray of the input ndarray, a one-dimensional subarray of the output ndarray, and any additional ndarray arguments as zero-dimensional ndarrays.
    -   **options**: function options (_optional_).

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before performing a reduction in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable max-len -->

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeros = require( '@stdlib/array/base/zeros' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var numelDimension = require( '@stdlib/ndarray/base/numel-dimension' );
var getData = require( '@stdlib/ndarray/base/data-buffer' );
var getStride = require( '@stdlib/ndarray/base/stride' );
var getOffset = require( '@stdlib/ndarray/base/offset' );
var gcusum = require( '@stdlib/blas/ext/base/gcusum' ).ndarray;
var unaryStrided1d = require( '@stdlib/ndarray/base/unary-strided1d' );

function wrapper( arrays ) {
    var x = arrays[ 0 ];
    var y = arrays[ 1 ];
    var s = arrays[ 2 ];
    return gcusum( numelDimension( x, 0 ), getData( s )[ getOffset( s ) ], getData( x ), getStride( x, 0 ), getOffset( x ), getData( y ), getStride( y, 0 ), getOffset( y ) );
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
var initial = {
    'dtype': 'generic',
    'data': [ 0.0 ],
    'shape': [ 1, 2 ],
    'strides': [ 0, 0 ],
    'offset': 0,
    'order': 'row-major'
};
var y = {
    'dtype': 'generic',
    'data': zeros( N ),
    'shape': [ 1, 5, 2 ],
    'strides': [ 10, 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};

unaryStrided1d( wrapper, [ x, y, initial ], [ 1 ] );

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
