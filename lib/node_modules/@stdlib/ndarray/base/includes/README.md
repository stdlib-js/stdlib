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

# includes

> Test whether an ndarray contains a specified value.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var includes = require( '@stdlib/ndarray/base/includes' );
```

#### includes( arrays )

Tests whether an ndarray contains a specified value.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create a data buffer:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Define the shape of the input array:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 0;

// Create the input ndarray-like object:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

// Create the search element ndarray-like object:
var searchElement = {
    'dtype': 'float64',
    'data': new Float64Array( [ 6.0 ] ),
    'shape': [],
    'strides': [ 0 ],
    'offset': 0,
    'order': 'row-major'
};

// Perform reduction:
var out = includes( [ x, searchElement ] );
// returns true
```

The function accepts the following arguments:

-   **arrays**: array-like object containing an input ndarray and a zero-dimensional search element ndarray.

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
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var includes = require( '@stdlib/ndarray/base/includes' );

var x = {
    'dtype': 'generic',
    'data': discreteUniform( 10, 0, 10, {
        'dtype': 'generic'
    }),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );

var v = {
    'dtype': x.dtype,
    'data': [ 1 ],
    'shape': [],
    'strides': [ 0 ],
    'offset': 0,
    'order': x.order
};
console.log( 'Search element: %d', v.data[ 0 ] );

var out = includes( [ x, v ] );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

Character codes for data types:

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- charcodes -->

-   **x**: `bool` (boolean).
-   **z**: `complex128` (double-precision floating-point complex number).
-   **c**: `complex64` (single-precision floating-point complex number).
-   **f**: `float32` (single-precision floating-point number).
-   **d**: `float64` (double-precision floating-point number).
-   **k**: `int16` (signed 16-bit integer).
-   **i**: `int32` (signed 32-bit integer).
-   **s**: `int8` (signed 8-bit integer).
-   **t**: `uint16` (unsigned 16-bit integer).
-   **u**: `uint32` (unsigned 32-bit integer).
-   **b**: `uint8` (unsigned 8-bit integer).

<!-- ./charcodes -->

Function name suffix naming convention:

```text
stdlib_ndarray_includes_<input_data_type><search_element_data_type>_<output_data_type>[_as_<input_cast_data_type><search_element_cast_data_type>_<output_data_type>]
```

For example,

<!-- run-disable -->

```c
void stdlib_ndarray_includes_dd_x(...) {...}
```

is a function which accepts one double-precision floating-point input ndarray, a double-precision floating-point search element ndarray, and one boolean output ndarray.

TODO: document casting convention

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/includes.h"
```

<!-- The following is auto-generated. Do not manually edit. See scripts/*loops.js. -->

<!-- loops -->

<!-- ./loops -->

<!-- macros -->

<!-- TODO: consider documenting macros -->

<!-- ./macros -->

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

* * *

<section class="examples">

### Examples

```c
// TODO
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<section class="links">

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
