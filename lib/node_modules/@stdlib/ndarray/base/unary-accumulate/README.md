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

# accumulateUnary

> Perform a reduction over elements in an input ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var accumulateUnary = require( '@stdlib/ndarray/base/unary-accumulate' );
```

#### accumulateUnary( arrays, initial, clbk )

Performs a reduction over elements in an input ndarray.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function add( acc, x ) {
    return acc + x;
}

// Create a data buffer:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Define the shape of the input array:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];

// Define the index offset:
var ox = 1;

// Create the input ndarray-like object:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};

// Compute the sum:
var v = accumulateUnary( [ x ], 0.0, add );
// returns 39.0
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input ndarray.
-   **initial**: initial value.
-   **clbk**: callback function to apply.

Each provided ndarray should be an object with the following properties:

-   **dtype**: data type.
-   **data**: data buffer.
-   **shape**: dimensions.
-   **strides**: stride lengths.
-   **offset**: index offset.
-   **order**: specifies whether an ndarray is row-major (C-style) or column major (Fortran-style).

The callback is invoked with two arguments:

-   **acc**: the current accumulated value. The first time the callback is invoked, `acc` is equal to the initial value.
-   **value**: the current element.

After each callback invocation, the callback return value is subsequently used as the accumulated value for the next callback invocation.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before applying an accumulator in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var add = require( '@stdlib/math/base/ops/add' );
var accumulateUnary = require( '@stdlib/ndarray/base/unary-accumulate' );

var N = 10;
var x = {
    'dtype': 'generic',
    'data': discreteUniform( N, -100, 100, {
        'dtype': 'generic'
    }),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};

var sum = accumulateUnary( [ x ], 0.0, add );
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );

console.log( 'sum: %d', sum );
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
-   **c**: `complex64` (single-precision floating-point complex number).
-   **z**: `complex128` (double-precision floating-point complex number).
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
stdlib_ndarray_<accumulation_data_type><input_data_type>_<output_data_type>[_as_<callback_arg1_data_type><callback_arg2_data_type>_<callback_return_data_type>]
```

For example,

<!-- run-disable -->

```c
void stdlib_ndarray_accumulate_dd_d(...) {...}
```

is a function which performs accumulation in double-precision and accepts one double-precision floating-point input ndarray and one double-precision floating-point output ndarray. In other words, the suffix encodes the function type signature.

To support callbacks whose input arguments and/or return values are of a different data type than the input and/or output ndarray data types, the naming convention supports appending an `as` suffix. For example,

<!-- run-disable -->

```c
void stdlib_ndarray_accumulate_ff_f_as_dd_d(...) {...}
```

is a function which performs accumulation in single-precision and accepts one single-precision floating-point input ndarray and one single-precision floating-point output ndarray. However, the callback accepts and returns double-precision floating-point numbers. Accordingly, the input and output values need to be cast using the following conversion sequence

```c
// Convert the current accumulated value to double-precision:
double curr = (double)acc;

// Convert each input array element to double-precision:
double in1 = (double)x[ i ];

// Evaluate the callback:
double out = f( curr, in1 );

// Convert the callback return value to single-precision:
acc = (float)out;
```

The accumulation data type and the output ndarray data type should **always** be the same.

The callback is invoked with two arguments:

-   **acc**: the current accumulated value. The first time the callback is invoked, this argument is equal to the initial value.
-   **value**: the current element.

After each callback invocation, the callback return value is subsequently used as the accumulated value for the next callback invocation.

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/unary_accumulate.h"
```

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- loops -->

<!-- ./loops -->

<!-- macros -->

<!-- TODO: consider documenting macros -->

<!-- ./macros -->

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

* * *

### Notes

-   The initial value and output ndarrays are assumed to be zero-dimensional ndarrays.

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

* * *

<section class="examples">

### Examples

```c
#include "stdlib/ndarray/base/unary_accumulate.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

static void print_ndarray_contents( const struct ndarray *x ) {
    int64_t i;
    int8_t s;
    double v;

    for ( i = 0; i < stdlib_ndarray_length( x ); i++ ) {
        s = stdlib_ndarray_iget_float64( x, i, &v );
        if ( s != 0 ) {
            fprintf( stderr, "Unable to resolve data element.\n" );
            exit( EXIT_FAILURE );
        }
        fprintf( stdout, "data[%"PRId64"] = %lf\n", i, v );
    }
}

static double add( const double acc, const double x ) {
    return acc + x;
}

int main( void ) {
    // Define the ndarray data type:
    enum STDLIB_NDARRAY_DTYPE dtype = STDLIB_NDARRAY_FLOAT64;

    // Create underlying byte arrays:
    double xvalues[] = { 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 };
    double ivalues[] = { 0.0 };
    double ovalues[] = { 0.0 };

    uint8_t *xbuf = (uint8_t *)xvalues;
    uint8_t *ibuf = (uint8_t *)ivalues;
    uint8_t *obuf = (uint8_t *)ovalues;

    // Define the number of dimensions:
    int64_t ndims = 3;

    // Define the array shapes:
    int64_t xsh[] = { 2, 2, 2 };
    int64_t ish[] = {};
    int64_t osh[] = {};

    // Define the strides:
    int64_t sx[] = { 32, 16, 8 };
    int64_t si[] = { 0 };
    int64_t so[] = { 0 };

    // Define the offsets:
    int64_t ox = 0;
    int64_t oi = 0;
    int64_t oo = 0;

    // Define the array order:
    enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

    // Specify the index mode:
    enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

    // Specify the subscript index modes:
    int8_t submodes[] = { imode };
    int64_t nsubmodes = 1;

    // Create an input ndarray:
    struct ndarray *x = stdlib_ndarray_allocate( dtype, xbuf, ndims, xsh, sx, ox, order, imode, nsubmodes, submodes );
    if ( x == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Create an initial value zero-dimensional ndarray:
    struct ndarray *initial = stdlib_ndarray_allocate( dtype, ibuf, ndims, ish, si, oi, order, imode, nsubmodes, submodes );
    if ( initial == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Create an output zero-dimensional ndarray:
    struct ndarray *out = stdlib_ndarray_allocate( dtype, obuf, ndims, osh, so, oo, order, imode, nsubmodes, submodes );
    if ( out == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Define an array containing the ndarrays:
    struct ndarray *arrays[] = { x, initial, out };

    // Apply the callback:
    int8_t status = stdlib_ndarray_accumulate_dd_d( arrays, (void *)add );
    if ( status != 0 ) {
        fprintf( stderr, "Error during computation.\n" );
        exit( EXIT_FAILURE );
    }

    // Print the results:
    print_ndarray_contents( out );
    fprintf( stdout, "\n" );

    // Free allocated memory:
    stdlib_ndarray_free( x );
    stdlib_ndarray_free( initial );
    stdlib_ndarray_free( out );
}
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
