<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# Assign

> Assign elements in an input ndarray to elements in an output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var assign = require( '@stdlib/ndarray/base/assign' );
```

#### assign( arrays )

Assign elements in an input ndarray to elements in an output ndarray.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create data buffers:
var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );
var ybuf = new Float64Array( 6 );

// Define the shape of the input and output arrays:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];
var sy = [ 2, 2, 1 ];

// Define the index offsets:
var ox = 1;
var oy = 0;

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

// Copy elements:
assign( [ x, y ] );

console.log( y.data );
// => <Float64Array>[ 2.0, 3.0, 6.0, 7.0, 10.0, 11.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one input ndarray and one output ndarray.

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

-   For very high-dimensional ndarrays which are non-contiguous, one should consider copying the underlying data to contiguous memory before assigning elements in order to achieve better performance.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var filledarrayBy = require( '@stdlib/array/filled-by' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var assign = require( '@stdlib/ndarray/base/assign' );

var N = 10;
var shape = [ 5, 2 ];
var x = {
    'dtype': 'generic',
    'data': filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) ),
    'shape': shape,
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var y = {
    'dtype': 'generic',
    'data': filledarray( 0, N, 'generic' ),
    'shape': shape.slice(),
    'strides': shape2strides( shape, 'column-major' ),
    'offset': 0,
    'order': 'column-major'
};

assign( [ x, y ] );
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
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
stdlib_ndarray_assign_<input_data_type>_<output_data_type>
```

For example,

<!-- run-disable -->

```c
void stdlib_ndarray_assign_d_d(...) {...}
```

is a function which accepts one double-precision floating-point input ndarray and one double-precision floating-point output ndarray. In other words, the suffix encodes the function type signature.

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/assign.h"
```

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- loops -->

#### stdlib_ndarray_assign_b_b( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT8;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 2, 1 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_b_b( arrays );
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

```c
int8_t stdlib_ndarray_assign_b_b( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_b_c( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_b_c( arrays );
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

```c
int8_t stdlib_ndarray_assign_b_c( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_b_d( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_b_d( arrays );
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

```c
int8_t stdlib_ndarray_assign_b_d( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_b_f( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_b_f( arrays );
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

```c
int8_t stdlib_ndarray_assign_b_f( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_b_i( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_b_i( arrays );
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

```c
int8_t stdlib_ndarray_assign_b_i( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_b_k( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_b_k( arrays );
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

```c
int8_t stdlib_ndarray_assign_b_k( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_b_t( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_b_t( arrays );
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

```c
int8_t stdlib_ndarray_assign_b_t( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_b_u( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_b_u( arrays );
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

```c
int8_t stdlib_ndarray_assign_b_u( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_b_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_b_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_b_z( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_c_c( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_c_c( arrays );
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

```c
int8_t stdlib_ndarray_assign_c_c( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_c_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_c_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_c_z( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_d_c( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_d_c( arrays );
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

```c
int8_t stdlib_ndarray_assign_d_c( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_d_d( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_d_d( arrays );
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

```c
int8_t stdlib_ndarray_assign_d_d( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_d_f( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_d_f( arrays );
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

```c
int8_t stdlib_ndarray_assign_d_f( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_d_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT64;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 16, 8 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_d_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_d_z( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_f_c( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_f_c( arrays );
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

```c
int8_t stdlib_ndarray_assign_f_c( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_f_d( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_f_d( arrays );
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

```c
int8_t stdlib_ndarray_assign_f_d( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_f_f( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_f_f( arrays );
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

```c
int8_t stdlib_ndarray_assign_f_f( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_f_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_FLOAT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_f_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_f_z( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_i_d( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_i_d( arrays );
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

```c
int8_t stdlib_ndarray_assign_i_d( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_i_i( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_i_i( arrays );
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

```c
int8_t stdlib_ndarray_assign_i_i( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_i_u( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_i_u( arrays );
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

```c
int8_t stdlib_ndarray_assign_i_u( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_i_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_i_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_i_z( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_k_c( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_k_c( arrays );
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

```c
int8_t stdlib_ndarray_assign_k_c( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_k_d( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_k_d( arrays );
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

```c
int8_t stdlib_ndarray_assign_k_d( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_k_f( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_k_f( arrays );
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

```c
int8_t stdlib_ndarray_assign_k_f( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_k_i( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_k_i( arrays );
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

```c
int8_t stdlib_ndarray_assign_k_i( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_k_k( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 4, 2 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_k_k( arrays );
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

```c
int8_t stdlib_ndarray_assign_k_k( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_k_t( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 4, 2 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_k_t( arrays );
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

```c
int8_t stdlib_ndarray_assign_k_t( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_k_u( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_k_u( arrays );
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

```c
int8_t stdlib_ndarray_assign_k_u( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_k_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_k_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_k_z( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_b( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT8;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 2, 1 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_b( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_b( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_c( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_c( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_c( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_d( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_d( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_d( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_f( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_f( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_f( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_i( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_i( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_i( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_k( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_k( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_k( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_s( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT8;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 2, 1 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_s( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_s( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_t( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 4, 2 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_t( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_t( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_u( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_u( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_u( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_s_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_INT8;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 2, 1 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_s_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_s_z( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_t_c( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_t_c( arrays );
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

```c
int8_t stdlib_ndarray_assign_t_c( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_t_d( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_t_d( arrays );
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

```c
int8_t stdlib_ndarray_assign_t_d( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_t_f( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_t_f( arrays );
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

```c
int8_t stdlib_ndarray_assign_t_f( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_t_i( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_INT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_t_i( arrays );
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

```c
int8_t stdlib_ndarray_assign_t_i( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_t_t( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT16;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 4, 2 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_t_t( arrays );
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

```c
int8_t stdlib_ndarray_assign_t_t( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_t_u( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_t_u( arrays );
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

```c
int8_t stdlib_ndarray_assign_t_u( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_t_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT16;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 4, 2 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_t_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_t_z( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_u_d( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_FLOAT64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_u_d( arrays );
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

```c
int8_t stdlib_ndarray_assign_u_d( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_u_u( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_UINT32;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 8, 4 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_u_u( arrays );
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

```c
int8_t stdlib_ndarray_assign_u_u( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_u_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_UINT32;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 8, 4 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_u_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_u_z( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_z_c( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX64;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };
int64_t sy[] = { 16, 8 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_z_c( arrays );
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

```c
int8_t stdlib_ndarray_assign_z_c( struct ndarray *arrays[] );
```

#### stdlib_ndarray_assign_z_z( \*arrays\[] )

Assigns elements in an input ndarray to elements in an output ndarray.

```c
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/ctor.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

// Define the ndarray data types:
enum STDLIB_NDARRAY_DTYPE xdtype = STDLIB_NDARRAY_COMPLEX128;
enum STDLIB_NDARRAY_DTYPE ydtype = STDLIB_NDARRAY_COMPLEX128;

// Create underlying byte arrays:
uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define the number of dimensions:
int64_t ndims = 2;

// Define the array shapes:
int64_t shape[] = { 2, 2 };

// Define the strides:
int64_t sx[] = { 32, 16 };
int64_t sy[] = { 32, 16 };

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
struct ndarray *x = stdlib_ndarray_allocate( xdtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
if ( x == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an output ndarray:
struct ndarray *y = stdlib_ndarray_allocate( ydtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
if ( y == NULL ) {
    fprintf( stderr, "Error allocating memory.\n" );
    exit( EXIT_FAILURE );
}

// Create an array containing the ndarrays:
struct ndarray *arrays[] = { x, y };

// Copy elements:
int8_t status = stdlib_ndarray_assign_z_z( arrays );
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

```c
int8_t stdlib_ndarray_assign_z_z( struct ndarray *arrays[] );
```

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
#include "stdlib/ndarray/base/assign.h"
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

int main( void ) {
    // Define the ndarray data type:
    enum STDLIB_NDARRAY_DTYPE dtype = STDLIB_NDARRAY_FLOAT64;

    // Create underlying byte arrays:
    uint8_t xbuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
    uint8_t ybuf[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

    // Define the number of dimensions:
    int64_t ndims = 3;

    // Define the array shapes:
    int64_t shape[] = { 2, 2, 2 };

    // Define the strides:
    int64_t sx[] = { 32, 16, 8 };
    int64_t sy[] = { 32, 16, 8 };

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
    struct ndarray *x = stdlib_ndarray_allocate( dtype, xbuf, ndims, shape, sx, ox, order, imode, nsubmodes, submodes );
    if ( x == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Create an output ndarray:
    struct ndarray *y = stdlib_ndarray_allocate( dtype, ybuf, ndims, shape, sy, oy, order, imode, nsubmodes, submodes );
    if ( y == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( EXIT_FAILURE );
    }

    // Define an array containing the ndarrays:
    struct ndarray *arrays[] = { x, y };

    // Copy elements:
    int8_t status = stdlib_ndarray_assign_d_d( arrays );
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
