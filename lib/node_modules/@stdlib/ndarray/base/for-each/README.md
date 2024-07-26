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

# forEach

> Invoke a callback function once for each ndarray element.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var forEach = require( '@stdlib/ndarray/base/for-each' );
```

#### forEach( arrays, fcn\[, thisArg] )

Invokes a callback function once for each ndarray element.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var log = require( '@stdlib/console/log' );

// Create data buffers:
var xbuf = new Float64Array( 12 );

// Define the shape of the array:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 1;

// Create an ndarray-like object:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

// Apply the callback function:
forEach( [ x ], naryFunction( log, 1 ) );
```

The function accepts the following arguments:

-   **arrays**: array-like object containing an ndarray.
-   **fcn**: callback to apply.
-   **thisArg**: callback execution context.

The callback function is provided the following arguments:

-   **value**: current array element.
-   **indices**: current array element indices.
-   **arr**: the input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The provided ndarray should be an `object` with the following properties:

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
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var log = require( '@stdlib/console/log' );
var forEach = require( '@stdlib/ndarray/base/for-each' );

var x = {
    'dtype': 'generic',
    'data': zeroTo( 10 ),
    'shape': [ 5, 2 ],
    'strides': [ -2, 1 ],
    'offset': 8,
    'order': 'row-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

x = {
    'dtype': 'generic',
    'data': zeroTo( 10 ),
    'shape': [ 5, 2 ],
    'strides': [ 1, -5 ],
    'offset': 5,
    'order': 'column-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

x = {
    'dtype': 'generic',
    'data': zeroTo( 18 ),
    'shape': [ 2, 3, 3 ],
    'strides': [ 9, 3, 1 ],
    'offset': 0,
    'order': 'row-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );

x = {
    'dtype': 'generic',
    'data': zeroTo( 18 ),
    'shape': [ 2, 3, 3 ],
    'strides': [ -1, -2, -6 ],
    'offset': 17,
    'order': 'column-major'
};

log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
forEach( [ x ], naryFunction( log, 2 ) );
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
