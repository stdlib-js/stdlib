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

# some

> Test whether at least `n` elements in an ndarray are truthy.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var some = require( '@stdlib/ndarray/base/some' );
```

#### some( arrays )

Tests whether at least `n` elements in an ndarray are truthy.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

// Create a data buffer:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 0.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Define the shape of the input array:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 0;

// Create an input ndarray-like object:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

// Define the success criterion:
var n = scalar2ndarray( 3, {
    'dtype': 'generic'
});

// Test elements:
var out = some( [ x, n ] );
// returns true
```

The function accepts the following arguments:

-   **arrays**: array-like object containing an input ndarray and a zero-dimensional ndarray specifying the minimum number of elements in the input ndarray that must be truthy.

Each provided ndarray should be an object with the following properties:

-   **dtype**: data type.
-   **data**: data buffer.
-   **shape**: dimensions.
-   **strides**: stride lengths.
-   **offset**: index offset.
-   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before performing the operation in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var some = require( '@stdlib/ndarray/base/some' );

var x = {
    'dtype': 'generic',
    'data': discreteUniform( 10, -2, 10, {
        'dtype': 'generic'
    }),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );

var n = scalar2ndarray( 5, {
    'dtype': 'generic'
});

var out = some( [ x, n ] );
console.log( out );
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
