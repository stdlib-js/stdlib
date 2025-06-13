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

# every

> Test whether every element in an ndarray is truthy.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var every = require( '@stdlib/ndarray/base/every' );
```

#### every( arrays )

Tests whether every element in an ndarray is truthy.

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

// Test elements:
var out = every( [ x ] );
// returns true
```

The function accepts the following arguments:

-   **arrays**: array-like object containing an input ndarray.

The provided ndarray should be an `object` with the following properties:

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
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var every = require( '@stdlib/ndarray/base/every' );

var x = {
    'dtype': 'generic',
    'data': bernoulli( 10, 0.9, {
        'dtype': 'generic'
    }),
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );

var out = every( [ x ] );
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
stdlib_ndarray_every_<input_data_type>_<output_data_type>
```

For example,

<!-- run-disable -->

```c
void stdlib_ndarray_every_d_x(...) {...}
```

is a function which accepts one double-precision floating-point input ndarray and one boolean output ndarray.

Function name suffix naming convention for applying a predicate function:

```text
stdlib_ndarray_every_by_<input_data_type>_<output_data_type>[_as_<callback_arg_data_type>_<callback_return_data_type>]
```

For example,

<!-- run-disable -->

```c
void stdlib_ndarray_every_by_d_x(...) {...}
```

is a function which accepts one double-precision floating-point input ndarray and one boolean output ndarray. In other words, the suffix encodes the function type signature.

To support callbacks whose input arguments are of a different data type than the input ndarray data type, the naming convention supports appending an `as` suffix. For example,

<!-- run-disable -->

```c
void stdlib_ndarray_every_by_f_x_as_d_x(...) {...}
```

is a function which accepts one single-precision floating-point input ndarray and one boolean output ndarray. However, the callback accepts double-precision floating-point numbers. Accordingly, the input values need to be cast using the following conversion sequence

```c
#include <stdbool.h>

// Convert each input array element to double-precision:
double in1 = (double)x[ i ];

// Evaluate the callback:
bool out = f( in1 );
```

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/every.h"
```

<!-- The following is auto-generated. Do not manually edit. See scripts/*loops.js. -->

<!-- inline-loops -->

#### stdlib_ndarray_every_b_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_b_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_b_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_c_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_c_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_c_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_d_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_d_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_d_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_f_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_f_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_f_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_i_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_i_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_i_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_k_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_k_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_k_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_s_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_s_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_s_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_t_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_t_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_t_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_u_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_u_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_u_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_x_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_BOOL;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_x_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_x_x( struct ndarray *arrays[], void *data );
```

#### stdlib_ndarray_every_z_x( \*arrays\[], \*data )

Tests whether every element in an input ndarray is truthy.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 32, 16 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Test elements:
int8_t status = stdlib_ndarray_every_z_x( arrays, NULL );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to a zero-dimensional output ndarray.
-   **data**: `[in] void*` function data. This argument is unused and should be a `NULL` pointer.

```c
int8_t stdlib_ndarray_every_z_x( struct ndarray *arrays[], void *data );
```

<!-- ./inline-loops -->

<!-- predicate-loops -->

#### stdlib_ndarray_every_by_b_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const uint8_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_b_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(uint8_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_b_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_b_x_as_c_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex64_t x ) {
    return ( stdlib_complex64_real( x ) == 0.0f && stdlib_complex64_imag( x ) == 0.0f );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_b_x_as_c_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex64_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_b_x_as_c_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_b_x_as_d_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const double x ) {
    return x == 0.0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_b_x_as_d_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(double)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_b_x_as_d_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_b_x_as_f_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const float x ) {
    return x == 0.0f;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_b_x_as_f_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(float)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_b_x_as_f_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_b_x_as_i_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const int32_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_b_x_as_i_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(int32_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_b_x_as_i_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_b_x_as_k_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const int16_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_b_x_as_k_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(int16_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_b_x_as_k_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_b_x_as_t_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const uint16_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_b_x_as_t_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(uint16_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_b_x_as_t_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_b_x_as_u_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const uint32_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_b_x_as_u_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(uint32_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_b_x_as_u_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_b_x_as_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_b_x_as_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_b_x_as_z_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_c_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex64_t x ) {
    return ( stdlib_complex64_real( x ) == 0.0f && stdlib_complex64_imag( x ) == 0.0f );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_c_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex64_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_c_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_c_x_as_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_c_x_as_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_c_x_as_z_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_d_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const double x ) {
    return x == 0.0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_d_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(double)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_d_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_d_x_as_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_d_x_as_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_d_x_as_z_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_f_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const float x ) {
    return x == 0.0f;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_f_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(float)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_f_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_f_x_as_c_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex64_t x ) {
    return ( stdlib_complex64_real( x ) == 0.0f && stdlib_complex64_imag( x ) == 0.0f );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_f_x_as_c_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex64_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_f_x_as_c_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_f_x_as_d_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const double x ) {
    return x == 0.0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_f_x_as_d_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(double)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_f_x_as_d_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_f_x_as_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_f_x_as_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_f_x_as_z_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_i_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const int32_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_i_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(int32_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_i_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_i_x_as_d_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const double x ) {
    return x == 0.0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_i_x_as_d_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(double)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_i_x_as_d_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_i_x_as_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_i_x_as_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_i_x_as_z_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_k_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const int16_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_k_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(int16_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_k_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_k_x_as_c_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex64_t x ) {
    return ( stdlib_complex64_real( x ) == 0.0f && stdlib_complex64_imag( x ) == 0.0f );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_k_x_as_c_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex64_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_k_x_as_c_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_k_x_as_d_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const double x ) {
    return x == 0.0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_k_x_as_d_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(double)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_k_x_as_d_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_k_x_as_f_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const float x ) {
    return x == 0.0f;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_k_x_as_f_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(float)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_k_x_as_f_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_k_x_as_i_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const int32_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_k_x_as_i_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(int32_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_k_x_as_i_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_k_x_as_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_k_x_as_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_k_x_as_z_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_s_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const int8_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_s_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(int8_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_s_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_s_x_as_c_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex64_t x ) {
    return ( stdlib_complex64_real( x ) == 0.0f && stdlib_complex64_imag( x ) == 0.0f );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_s_x_as_c_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex64_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_s_x_as_c_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_s_x_as_d_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const double x ) {
    return x == 0.0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_s_x_as_d_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(double)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_s_x_as_d_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_s_x_as_f_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const float x ) {
    return x == 0.0f;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_s_x_as_f_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(float)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_s_x_as_f_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_s_x_as_i_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const int32_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_s_x_as_i_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(int32_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_s_x_as_i_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_s_x_as_k_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const int16_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_s_x_as_k_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(int16_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_s_x_as_k_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_s_x_as_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_s_x_as_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_s_x_as_z_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_t_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const uint16_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_t_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(uint16_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_t_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_t_x_as_c_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float32/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex64_t x ) {
    return ( stdlib_complex64_real( x ) == 0.0f && stdlib_complex64_imag( x ) == 0.0f );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_t_x_as_c_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex64_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_t_x_as_c_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_t_x_as_d_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const double x ) {
    return x == 0.0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_t_x_as_d_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(double)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_t_x_as_d_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_t_x_as_f_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const float x ) {
    return x == 0.0f;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_t_x_as_f_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(float)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_t_x_as_f_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_t_x_as_i_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const int32_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_t_x_as_i_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(int32_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_t_x_as_i_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_t_x_as_u_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const uint32_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_t_x_as_u_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(uint32_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_t_x_as_u_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_t_x_as_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_t_x_as_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_t_x_as_z_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_u_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const uint32_t x ) {
    return x == 0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_u_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(uint32_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_u_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_u_x_as_d_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const double x ) {
    return x == 0.0;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_u_x_as_d_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(double)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_u_x_as_d_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_u_x_as_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_u_x_as_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_u_x_as_z_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_x_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_BOOL;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const bool x ) {
    return x;
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_x_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(bool)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_x_x( struct ndarray *arrays[], void *fcn );
```

#### stdlib_ndarray_every_by_z_x( \*arrays\[], \*fcn )

Tests whether every element in an input ndarray is truthy according to a predicate function.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shx[] = { 2, 2 };
int64_t *shy = NULL;

// Define the strides:
int64_t sx[] = { 32, 16 };
int64_t sy[] = { 0 };

// Define the index offsets:
int64_t ox = 0;
int64_t oy = 0;

// Define the array order:
enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

// Specify the index mode:
enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

// Specify the subscript index modes:
int8_t submodes[] = { imode };
int64_t nsubmodes = 1;

// Create an input ndarray:
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Define a callback:
static bool fcn( const stdlib_complex128_t x ) {
    return ( stdlib_complex128_real( x ) == 0.0 && stdlib_complex128_imag( x ) == 0.0 );
}

// Test elements:
int8_t status = stdlib_ndarray_every_by_z_x( arrays, (void *)fcn );
if ( status != 0 ) {
    fprintf( stderr, "Error during computation.\n" );
    exit( EXIT_FAILURE );
}

// ...

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
```

The function accepts the following arguments:

-   **arrays**: `[inout] struct ndarray**` array whose first element is a pointer to an input ndarray and whose second element is a pointer to an output ndarray.
-   **fcn**: `[in] void*` a `bool (*f)(stdlib_complex128_t)` predicate function to apply provided as a `void` pointer.

```c
int8_t stdlib_ndarray_every_by_z_x( struct ndarray *arrays[], void *fcn );
```

<!-- ./predicate-loops -->

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
#include "stdlib/ndarray/base/every.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdbool.h>
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

static void print_ndarray_contents( const struct ndarray *x ) {
    int64_t i;
    int8_t s;
    bool v;

    for ( i = 0; i < stdlib_ndarray_length( x ); i++ ) {
        s = stdlib_ndarray_iget_bool( x, i, &v );
        if ( s != 0 ) {
            fprintf( stderr, "Unable to resolve data element.\n" );
            exit( EXIT_FAILURE );
        }
        fprintf( stdout, "data[%"PRId64"] = %s\n", i, ( v ) ? "true" : "false" );
    }
}

static bool fcn( const uint8_t x ) {
    return ( x != 0 );
}

int main( void ) {
    // Define the ndarray data types:
    enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
    enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_BOOL;

    // Create underlying byte arrays:
    uint8_t xbuf[] = { 1, 2, 3, 4, 5, 6, 7, 8 };
    uint8_t ybuf[] = { 0 };

    // Define the number of input array dimensions:
    int64_t ndims = 3;

    // Define the array shapes:
    int64_t shx[] = { 2, 2, 2 };
    int64_t *shy = NULL;

    // Define the strides:
    int64_t sx[] = { 4, 2, 1 };
    int64_t sy[] = { 0 };

    // Define the offsets:
    int64_t ox = 0;
    int64_t oy = 0;

    // Define the array order:
    enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

    // Specify the index mode:
    enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

    // Specify the subscript index modes:
    int8_t submodes[] = { imode };
    int64_t nsubmodes = 1;

    // Create an input ndarray:
    struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shx, sx, ox, order, imode, nsubmodes, submodes );
    if ( x == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Create an output ndarray:
    struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, 0, shy, sy, oy, order, imode, nsubmodes, submodes );
    if ( y == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Define an array containing the ndarrays:
    struct ndarray *arrays[] = { x, y };

    // Test elements:
    int8_t status = stdlib_ndarray_every_by_b_x( arrays, (void *)fcn );
    if ( status != 0 ) {
        fprintf( stderr, "Error during computation.\n" );
        exit( EXIT_FAILURE );
    }

    // Print the results:
    print_ndarray_contents( y );
    fprintf( stdout, "\n" );

    // Free allocated memory:
    stdlib_ndarray_free( x );
    stdlib_ndarray_free( y );
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
