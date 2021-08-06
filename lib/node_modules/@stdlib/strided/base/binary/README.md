<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Binary

> Apply a binary callback to strided input array elements and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var binary = require( '@stdlib/strided/base/binary' );
```

#### binary( arrays, shape, strides, fcn )

Applies a binary callback to strided input array elements and assigns results to elements in a strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function add( x, y ) {
    return x + y;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

binary( [ x, y, z ], [ x.length ], [ 1, 1, 1 ], add );
// z => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing two strided input arrays and one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride lengths for the strided input and output arrays.
-   **fcn**: binary function to apply.

The `shape` and `strides` parameters determine which elements in the strided input and output arrays are accessed at runtime. For example, to index every other value in the strided input arrays and to index the first `N` elements of the strided output array in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function add( x, y ) {
    return x + y;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = 3;

binary( [ x, y, z ], [ N ], [ 2, 2, -1 ], add );
// z => <Float64Array>[ 10.0, 6.0, 2.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function add( x, y ) {
    return x + y;
}

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = 3;

binary( [ x1, y1, z1 ], [ N ], [ -2, -2, 1 ], add );
// z0 => <Float64Array>[ 0.0, 0.0, 0.0, 12.0, 8.0, 4.0 ]
```

#### binary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a binary callback to strided input array elements and assigns results to elements in a strided output array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function add( x, y ) {
    return x + y;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

binary.ndarray( [ x, y, z ], [ x.length ], [ 1, 1, 1 ], [ 0, 0, 0 ], add );
// z => <Float64Array>[ 2.0, 4.0, 6.0, 8.0, 10.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting indices (i.e., index offsets) for the strided input and output arrays.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index every other value in the strided input arrays starting from the second value and to index the last `N` elements in the strided output array,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function add( x, y ) {
    return x + y;
}

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = 3;

binary.ndarray( [ x, y, z ], [ N ], [ 2, 2, -1 ], [ 1, 1, z.length-1 ], add );
// z => <Float64Array>[ 0.0, 0.0, 0.0, 12.0, 8.0, 4.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
var binary = require( '@stdlib/strided/base/binary' );

function add( x, y ) {
    return x + y;
}

var N = 10;

var x = filledarray( 0.0, N, 'generic' );
gfillBy( x.length, x, 1, discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarray( 0.0, N, 'generic' );
gfillBy( y.length, y, 1, discreteUniform( -100, 100 ) );
console.log( y );

var z = filledarray( 0.0, N, 'generic' );
console.log( z );

var shape = [ N ];
var strides = [ 1, 1, -1 ];
var offsets = [ 0, 0, N-1 ];

binary.ndarray( [ x, y, z ], shape, strides, offsets, add );
console.log( z );
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

-   **d**: `float64` (double-precision floating-point number).
-   **f**: `float32` (single-precision floating-point number).
-   **s**: `int8` (signed 8-bit integer).
-   **b**: `uint8` (unsigned 8-bit integer).
-   **k**: `int16` (signed 16-bit integer).
-   **t**: `uint16` (unsigned 16-bit integer).
-   **i**: `int32` (signed 32-bit integer).
-   **u**: `uint32` (unsigned 32-bit integer).
-   **l**: `int64` (signed 64-bit integer).
-   **v**: `uint64` (unsigned 64-bit integer).

Function name suffix naming convention:

```text
stdlib_strided_<input_data_types>_<output_data_type>[_as_<callback_arg_data_types>_<callback_return_data_type>]
```

For example,

```c
void stdlib_strided_dd_d(...) {...}
```

is a function which accepts two double-precision floating-point strided input arrays and one double-precision floating-point strided output array. In other words, the suffix encodes the function type signature.

To support callbacks whose input arguments and/or return values are of a different data type than the strided input and/or output array data types, the naming convention supports appending an `as` suffix. For example,

```c
void stdlib_strided_ff_f_as_dd_d(...) {...}
```

is a function which accepts two single-precision floating-point strided input arrays and one single-precision floating-point strided output array. However, the callback accepts and returns double-precision floating-point numbers. Accordingly, the input and output values need to be cast using the following conversion sequence

```c
// Convert each input array element to double-precision:
double dx1i = (double)fx1[ i ];
double dx2i = (double)fx2[ i ];

// Evaluate the callback:
double dyi = f( dx1i, dx2i );

// Convert the callback return value to single-precision:
fy[ i ] = (float)dyi;
```

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/strided/base/binary.h"
```

#### BinaryFcnFloat32

Function type for a function accepting and returning single-precision floating-point numbers.

```c
typedef float BinaryFcnFloat32( const float x, const float y );
```

A `BinaryFcnFloat32` function should accept the following arguments:

-   **x**: `[in] float` single-precision floating-point number.
-   **y**: `[in] float` single-precision floating-point number.

The function should return a single-precision floating-point number.

#### BinaryFcnFloat64

Function type for a function which accepts and returns double-precision floating-point numbers.

```c
typedef double BinaryFcnFloat64( const double x, const double y );
```

A `BinaryFcnFloat64` function should accept the following arguments:

-   **x**: `[in] double` double-precision floating-point number.
-   **y**: `[in] double` double-precision floating-point number.

The function should return a double-precision floating-point number.

#### BinaryFcnInt64

Function type for a function which accepts and returns signed 64-bit integers.

```c
typedef int64_t BinaryFcnInt64( const int64_t x, const int64_t y );
```

A `BinaryFcnInt64` function should accept the following arguments:

-   **x**: `[in] int64_t` signed 64-bit integer.
-   **y**: `[in] int64_t` signed 64-bit integer.

The function should return a signed 64-bit integer.

#### BinaryFcnUint64

Function type for a function which accepts and returns unsigned 64-bit integers.

```c
typedef uint64_t BinaryFcnUint64( const uint64_t x, const uint64_t y );
```

A `BinaryFcnUint64` function should accept the following arguments:

-   **x**: `[in] uint64_t` unsigned 64-bit integer.
-   **y**: `[in] uint64_t` unsigned 64-bit integer.

The function should return an unsigned 64-bit integer.

#### BinaryFcnInt32

Function type for a function which accepts and returns signed 32-bit integers.

```c
typedef int32_t BinaryFcnInt32( const int32_t x, const int32_t y );
```

A `BinaryFcnInt32` function should accept the following arguments:

-   **x**: `[in] int32_t` signed 32-bit integer.
-   **y**: `[in] int32_t` signed 32-bit integer.

The function should return a signed 32-bit integer.

#### BinaryFcnUint32

Function type for a function which accepts and returns unsigned 32-bit integers.

```c
typedef uint32_t BinaryFcnUint32( const uint32_t x, const uint32_t y );
```

A `BinaryFcnUint32` function should accept the following arguments:

-   **x**: `[in] uint32_t` unsigned 32-bit integer.
-   **y**: `[in] uint32_t` unsigned 32-bit integer.

The function should return an unsigned 32-bit integer.

#### BinaryFcnInt16

Function type for a function which accepts and returns signed 16-bit integers.

```c
typedef int16_t BinaryFcnInt16( const int16_t x, const int16_t y );
```

A `BinaryFcnInt16` function should accept the following arguments:

-   **x**: `[in] int16_t` signed 16-bit integer.
-   **y**: `[in] int16_t` signed 16-bit integer.

The function should return a signed 16-bit integer.

#### BinaryFcnUint16

Function type for a function which accepts and returns unsigned 16-bit integers.

```c
typedef uint16_t BinaryFcnUint16( const uint16_t x, const uint16_t y );
```

A `BinaryFcnUint16` function should accept the following arguments:

-   **x**: `[in] uint16_t` unsigned 16-bit integer.
-   **y**: `[in] uint16_t` unsigned 16-bit integer.

The function should return an unsigned 16-bit integer.

#### BinaryFcnInt8

Function type for a function which accepts and returns signed 8-bit integers.

```c
typedef int8_t BinaryFcnInt8( const int8_t x, const int8_t y );
```

A `BinaryFcnInt8` function should accept the following arguments:

-   **x**: `[in] int8_t` signed 8-bit integer.
-   **y**: `[in] int8_t` signed 8-bit integer.

The function should return a signed 8-bit integer.

#### BinaryFcnUint8

Function type for a function which accepts and returns unsigned 8-bit integers.

```c
typedef uint8_t BinaryFcnUint8( const uint8_t x, const uint8_t y );
```

A `BinaryFcnUint8` function should accept the following arguments:

-   **x**: `[in] uint8_t` unsigned 8-bit integer.
-   **y**: `[in] uint8_t` unsigned 8-bit integer.

The function should return an unsigned 8-bit integer.

<!-- NOTE: keep the following in alphabetical order -->

* * *

#### stdlib_strided_bb_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 8-bit integers to unsigned 8-bit integer strided input arrays and assigns results to elements in an unsigned 8-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 1 }; // 1 byte per uint8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t add( uint8_t x, uint8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_b( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 8-bit integers to unsigned 8-bit integer strided input arrays, casts the callback's unsigned 8-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 8 }; // 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t add( uint8_t x, uint8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_d_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to unsigned 8-bit integer strided input arrays and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 8 }; // 1 byte per uint8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_d_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_d_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 8-bit integers to unsigned 8-bit integer strided input arrays, casts the callback's unsigned 8-bit integer return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t add( uint8_t x, uint8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_f( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_f_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to unsigned 8-bit integer strided input arrays, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_f_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_f_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_f_as_ff_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning single-precision floating-point numbers to unsigned 8-bit integer strided input arrays and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float add( float x, float y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_f_as_ff_f( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_f_as_ff_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 8-bit integers to unsigned 8-bit integer strided input arrays, casts the callback's unsigned 8-bit integer return value to a signed 32-bit integer, and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t add( uint8_t x, uint8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_i( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_i_as_ii_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 32-bit integers to unsigned 8-bit integer strided input arrays and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t add( int32_t x, int32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_i_as_ii_i( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_i_as_ii_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 8-bit integers to unsigned 8-bit integer strided input arrays, casts the callback's unsigned 8-bit integer return value to a signed 16-bit integer, and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per uint8, 2 bytes per int16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t add( uint8_t x, uint8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_k( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_k_as_kk_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 16-bit integers to unsigned 8-bit integer strided input arrays and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per uint8, 2 bytes per int16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t add( int16_t x, int16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_k_as_kk_k( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_k_as_kk_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 8-bit integers to unsigned 8-bit integer strided input arrays, casts the callback's unsigned 8-bit integer return value to an unsigned 16-bit integer, and assigns results to elements in an unsigned 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per uint8, 2 bytes per uint16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t add( uint8_t x, uint8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_t( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_t_as_tt_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 16-bit integers to unsigned 8-bit integer strided input arrays and assigns results to elements in an unsigned 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per uint8, 2 bytes per uint16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t add( uint16_t x, uint16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_t_as_tt_t( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_t_as_tt_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 8-bit integers to unsigned 8-bit integer strided input arrays, casts the callback's unsigned 8-bit integer return value to an unsigned 32-bit integer, and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t add( uint8_t x, uint8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_u( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_bb_u_as_uu_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 32-bit integers to unsigned 8-bit integer strided input arrays and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per uint8, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t add( uint32_t x, uint32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_bb_u_as_uu_u( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_bb_u_as_uu_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to double-precision floating-point strided input arrays and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 8, 8, 8 }; // 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ff_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning single-precision floating-point numbers to single-precision floating-point strided input arrays and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 4, 4, 4 }; // 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float add( float x, float y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ff_f( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ff_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ff_f_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to single-precision floating-point strided input arrays, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 4, 4, 4 }; // 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ff_f_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ff_f_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ii_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 32-bit integers to signed 32-bit integer strided input arrays, casts the callback's signed 32-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 4, 4, 8 }; // 4 bytes per int32, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t add( int32_t x, int32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ii_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ii_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ii_d_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to signed 32-bit integer strided input arrays and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 4, 4, 8 }; // 4 bytes per int32, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ii_d_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ii_d_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ii_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 32-bit integers to signed 32-bit integer strided input arrays and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 4, 4, 4 }; // 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t add( int32_t x, int32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ii_i( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ii_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_kk_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 16-bit integers to signed 16-bit integer strided input arrays, casts the callback's signed 16-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 8 }; // 2 bytes per int16, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t add( int16_t x, int16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_kk_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_kk_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_kk_d_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to signed 16-bit integer strided input arrays and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 8 }; // 2 bytes per int16, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_kk_d_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_kk_d_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_kk_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 16-bit integers to signed 16-bit integer strided input arrays, casts the callback's signed 16-bit integer return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per int16, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t add( int16_t x, int16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_kk_f( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_kk_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_kk_f_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to signed 16-bit integer strided input arrays, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per int16, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_kk_f_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_kk_f_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_kk_f_as_ff_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning single-precision floating-point numbers to signed 16-bit integer strided input arrays and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per int16, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float add( float x, float y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_kk_f_as_ff_f( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_kk_f_as_ff_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_kk_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 16-bit integers to signed 16-bit integer strided input arrays, casts the callback's signed 16-bit integer return value to a signed 32-bit integer, and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per int16, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t add( int16_t x, int16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_kk_i( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_kk_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_kk_i_as_ii_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 32-bit integers to signed 16-bit integer strided input arrays and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per int16, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t add( int32_t x, int32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_kk_i_as_ii_i( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_kk_i_as_ii_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_kk_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 16-bit integers to signed 16-bit integer strided input arrays and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 2 }; // 2 bytes per int16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t add( int16_t x, int16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_kk_k( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_kk_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 8-bit integers to signed 8-bit integer strided input arrays, casts the callback's signed 8-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 8 }; // 1 byte per int8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t add( int8_t x, int8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_d_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to signed 8-bit integer strided input arrays and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 8 }; // 1 byte per int8, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_d_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_d_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 8-bit integers to signed 8-bit integer strided input arrays, casts the callback's signed 8-bit integer return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t add( int8_t x, int8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_f( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_f_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to signed 8-bit integer strided input arrays, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_f_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_f_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_f_as_ff_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning single-precision floating-point numbers to signed 8-bit integer strided input arrays and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float add( float x, float y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_f_as_ff_f( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_f_as_ff_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 8-bit integers to signed 8-bit integer strided input arrays, casts the callback's signed 8-bit integer return value to a signed 32-bit integer, and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t add( int8_t x, int8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_i( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_i_as_ii_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 32-bit integers to signed 8-bit integer strided input arrays and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 4 }; // 1 byte per int8, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t add( int32_t x, int32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_i_as_ii_i( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_i_as_ii_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 8-bit integers to signed 8-bit integer strided input arrays, casts the callback's signed 8-bit integer return value to a signed 16-bit integer, and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per int8, 2 bytes per int16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t add( int8_t x, int8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_k( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_k_as_kk_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 16-bit integers to signed 8-bit integer strided input arrays and assigns results to elements in a signed 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 2 }; // 1 byte per int8, 2 bytes per int16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t add( int16_t x, int16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_k_as_kk_k( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_k_as_kk_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_ss_s( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 8-bit integers to signed 8-bit integer strided input arrays and assigns results to elements in a signed 8-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0 };
uint8_t y[] = { 0, 0, 0 };
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 1, 1, 1 }; // 1 byte per int8

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t add( int8_t x, int8_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_ss_s( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt8` function to apply provided as a `void` pointer.

```c
void stdlib_strided_ss_s( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 16-bit integers to unsigned 16-bit integer strided input arrays, casts the callback's unsigned 16-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 8 }; // 2 bytes per uint16, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t add( uint16_t x, uint16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_d_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to unsigned 16-bit integer strided input arrays and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 8 }; // 2 bytes per uint16, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_d_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_d_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 16-bit integers to unsigned 16-bit integer strided input arrays, casts the callback's unsigned 16-bit integer return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per uint16, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t add( uint16_t x, uint16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_f( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_f_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to unsigned 16-bit integer strided input arrays, casts the callback's double-precision floating-point return value to a single-precision floating-point number, and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per uint16, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_f_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_f_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_f_as_ff_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning single-precision floating-point numbers to unsigned 16-bit integer strided input arrays and assigns results to elements in a single-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per uint16, 4 bytes per float

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float add( float x, float y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_f_as_ff_f( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_f_as_ff_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 16-bit integers to unsigned 16-bit integer strided input arrays, casts the callback's unsigned 16-bit integer return value to a signed 32-bit integer, and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per uint16, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t add( uint16_t x, uint16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_i( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_i_as_ii_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning signed 32-bit integers to unsigned 16-bit integer strided input arrays and assigns results to elements in a signed 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per uint16, 4 bytes per int32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t add( int32_t x, int32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_i_as_ii_i( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnInt32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_i_as_ii_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 16-bit integers to unsigned 16-bit integer strided input arrays and assigns results to elements in an unsigned 16-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 2 }; // 2 bytes per uint16

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t add( uint16_t x, uint16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_t( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 16-bit integers to unsigned 16-bit integer strided input arrays, casts the callback's unsigned 16-bit integer return value to an unsigned 32-bit integer, and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per uint16, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t add( uint16_t x, uint16_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_u( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint16` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_tt_u_as_uu_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 32-bit integers to unsigned 16-bit integer strided input arrays and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 2, 2, 4 }; // 2 bytes per uint16, 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t add( uint32_t x, uint32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_tt_u_as_uu_u( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_tt_u_as_uu_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_uu_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 32-bit integers to unsigned 32-bit integer strided input arrays, casts the callback's unsigned 32-bit integer return value to a double-precision floating-point number, and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 4, 4, 8 }; // 4 bytes per uint32, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t add( uint32_t x, uint32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_uu_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_uu_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_uu_d_as_dd_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning double-precision floating-point numbers to unsigned 32-bit integer strided input arrays and assigns results to elements in a double-precision floating-point strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 4, 4, 8 }; // 4 bytes per uint32, 8 bytes per double

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double add( double x, double y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_uu_d_as_dd_d( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnFloat64` function to apply provided as a `void` pointer.

```c
void stdlib_strided_uu_d_as_dd_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_uu_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a binary callback accepting and returning unsigned 32-bit integers to unsigned 32-bit integer strided input arrays and assigns results to elements in an unsigned 32-bit integer strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t x[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t y[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { x, y, out };

// Define the strides:
int64_t strides[] = { 4, 4, 4 }; // 4 bytes per uint32

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t add( uint32_t x, uint32_t y ) {
    return x + y;
}

// Apply the callback:
stdlib_strided_uu_u( arrays, shape, strides, (void *)add );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `BinaryFcnUint32` function to apply provided as a `void` pointer.

```c
void stdlib_strided_uu_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

<!-- macros -->

* * *

#### STDLIB_STRIDED_BINARY_LOOP_PREAMBLE

Macro containing the preamble for a loop which operates on strided array elements.

```c
STDLIB_STRIDED_BINARY_LOOP_PREMABLE {
    // Loop body...
}
```

The macro expects the following variables to be defined:

-   **arrays**: `uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array.
-   **shape**: `int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `int64_t*` array containing strides (in bytes) for each strided array.

The macro defines the following variables:

-   **ip1**: `uint8_t*` pointer to the first indexed element of the first input strided array.
-   **ip2**: `uint8_t*` pointer to the first indexed element of the second input strided array.
-   **op1**: `uint8_t*` pointer to the first indexed element of the output strided array.
-   **is1**: `int64_t` index increment for the first input strided array.
-   **is2**: `int64_t` index increment for the second input strided array.
-   **os1**: `int64_t` index increment for the output strided array.
-   **n**: `int64_t` number of indexed elements.
-   **i**: `int64_t` loop counter.

```c
#define STDLIB_STRIDED_BINARY_LOOP_PREAMBLE                \
    uint8_t *ip1 = arrays[ 0 ];                            \
    uint8_t *ip2 = arrays[ 1 ];                            \
    uint8_t *op1 = arrays[ 2 ];                            \
    int64_t is1 = strides[ 0 ];                            \
    int64_t is2 = strides[ 1 ];                            \
    int64_t os1 = strides[ 2 ];                            \
    int64_t n = shape[ 0 ];                                \
    int64_t i;                                             \
    if ( n <= 0 ) {                                        \
        return;                                            \
    }                                                      \
    if ( is1 < 0 ) {                                       \
        ip1 += (1-n) * is1;                                \
    }                                                      \
    if ( is2 < 0 ) {                                       \
        ip2 += (1-n) * is2;                                \
    }                                                      \
    if ( os1 < 0 ) {                                       \
        op1 += (1-n) * os1;                                \
    }                                                      \
    for ( i = 0; i < n; i++, ip1 += is1, ip2 += is2, op1 += os1 )
```

#### STDLIB_STRIDED_BINARY_LOOP_TWO_OUT_PREAMBLE

Macro containing the preamble for a loop which operates on strided array elements and updates two strided output arrays.

```c
STDLIB_STRIDED_BINARY_LOOP_TWO_OUT_PREAMBLE {
    // Loop body...
}
```

The macro expects the following variables to be defined:

-   **arrays**: `uint8_t**` array whose first two elements are pointers to strided input arrays and whose last element is a pointer to a strided output array.
-   **shape**: `int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `int64_t*` array containing strides (in bytes) for each strided array.

The macro defines the following variables:

-   **ip1**: `uint8_t*` pointer to the first indexed element of the first input strided array.
-   **ip2**: `uint8_t*` pointer to the first indexed element of the second input strided array.
-   **op1**: `uint8_t*` pointer to the first indexed element of the first output strided array.
-   **op2**: `uint8_t*` pointer to the first indexed element of the second output strided array.
-   **is1**: `int64_t` index increment for the first input strided array.
-   **is2**: `int64_t` index increment for the second input strided array.
-   **os1**: `int64_t` index increment for the first output strided array.
-   **os2**: `int64_t` index increment for the second output strided array.
-   **n**: `int64_t` number of indexed elements.
-   **i**: `int64_t` loop counter.

```c
#define STDLIB_STRIDED_BINARY_LOOP_TWO_OUT_PREAMBLE        \
    uint8_t *ip1 = arrays[ 0 ];                            \
    uint8_t *ip2 = arrays[ 1 ];                            \
    uint8_t *op1 = arrays[ 2 ];                            \
    uint8_t *op2 = arrays[ 3 ];                            \
    int64_t is1 = strides[ 0 ];                            \
    int64_t is2 = strides[ 1 ];                            \
    int64_t os1 = strides[ 2 ];                            \
    int64_t os2 = strides[ 3 ];                            \
    int64_t n = shape[ 0 ];                                \
    int64_t i;                                             \
    if ( n <= 0 ) {                                        \
        return;                                            \
    }                                                      \
    if ( is1 < 0 ) {                                       \
        ip1 += (1-n) * is1;                                \
    }                                                      \
    if ( is2 < 0 ) {                                       \
        ip2 += (1-n) * is2;                                \
    }                                                      \
    if ( os1 < 0 ) {                                       \
        op1 += (1-n) * os1;                                \
    }                                                      \
    if ( os2 < 0 ) {                                       \
        op2 += (1-n) * os2;                                \
    }                                                      \
    for ( i = 0; i < n; i++, ip1 += is1, ip2 += is2, op1 += os1, op2 += os2 )
```

#### STDLIB_STRIDED_BINARY_LOOP_INLINE( tin, tout, expr )

Macro for a binary loop which inlines an expression.

```c
STDLIB_STRIDED_BINARY_LOOP_INLINE( double, double, *out = in1 * in1 )
```

The macro expects the following arguments:

-   **tin**: input strided array element type.
-   **tout**: output strided array element type.
-   **expr**: expression to inline.

In addition to the variables defined by the `STDLIB_STRIDED_BINARY_LOOP_PREAMBLE` macro, the macro defines the following variables:

-   **in1**: `<tin>` first input strided array element.
-   **in2**: `<tin>` second input strided array element.
-   **out**: `<tout>*` pointer to an output strided array element.

The macro expects a provided expression to operate on `in1` and `in2` and to store the result via `*out`.

```c
#define STDLIB_STRIDED_BINARY_LOOP_INLINE( tin, tout, expr )       \
    STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                          \
        const tin in1 = *(tin *)ip1;                               \
        const tin in2 = *(tin *)ip2;                               \
        tout *out = (tout *)op1;                                   \
        expr;                                                      \
    }
```

#### STDLIB_STRIDED_BINARY_LOOP_CLBK( tin, tout )

Macro for a binary loop which invokes a callback.

```c
STDLIB_STRIDED_BINARY_LOOP_CLBK( double, double )
```

The macro expects the following arguments:

-   **tin**: input strided array element data type.
-   **tout**: output strided array element data type.

In addition to the variables expected by `STDLIB_STRIDED_BINARY_LOOP_PREAMBLE`, the macro expects the following variables to be defined:

-   **f**: binary callback. 

In addition to the variables defined by the `STDLIB_STRIDED_BINARY_LOOP_PREAMBLE`, the macro defines the following variables:

-   **x**: `<tin>` first input strided array element.
-   **y**: `<tin>` second input strided array element.

```c
#define STDLIB_STRIDED_BINARY_LOOP_CLBK( tin, tout )       \
    STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                  \
        const tin x = *(tin *)ip1;                         \
        const tin y = *(tin *)ip2;                         \
        *(tout *)op1 = (tout)f( x, y );                    \
    }
```

#### STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST( tin, tout, fin )

Macro for a binary loop which invokes a callback requiring arguments be explicitly cast to a different type.

```c
STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST( float, float, double )
```

The macro expects the following arguments:

-   **tin**: input strided array element data type.
-   **tout**: output strided array element data type.
-   **fin**: callback argument data type.

In addition to the variables expected by `STDLIB_STRIDED_BINARY_LOOP_PREAMBLE`, the macro expects the following variables to be defined:

-   **f**: binary callback. 

In addition to the variables defined by the `STDLIB_STRIDED_BINARY_LOOP_PREAMBLE`, the macro defines the following variables:

-   **x**: `<tin>` first input strided array element.
-   **y**: `<tin>` second input strided array element.

```c
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_ARG_CAST( tin, tout, fin ) \
    STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                          \
        const tin x = *(tin *)ip1;                                 \
        const tin y = *(tin *)ip2;                                 \
        *(tout *)op1 = (tout)f( (fin)x, (fin)y );                  \
    }
```

#### STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED( tin1, tin2, tout )

Macro for a binary loop which invokes a callback while operating on mixed (typed) strided input arrays.

```c
STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED( double, uint32_t, double )
```

The macro expects the following arguments:

-   **tin1**: first input strided array element data type.
-   **tin2**: second input strided array element data type.
-   **tout**: output strided array element data type.

In addition to the variables expected by `STDLIB_STRIDED_BINARY_LOOP_PREAMBLE`, the macro expects the following variables to be defined:

-   **f**: binary callback. 

In addition to the variables defined by the `STDLIB_STRIDED_BINARY_LOOP_PREAMBLE`, the macro defines the following variables:

-   **x**: `<tin1>` first input strided array element.
-   **y**: `<tin2>` second input strided array element.

```c
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED( tin1, tin2, tout )  \
    STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                          \
        const tin1 x = *(tin1 *)ip1;                               \
        const tin2 y = *(tin2 *)ip2;                               \
        *(tout *)op1 = (tout)f( x, y );                            \
    }
```

#### STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST( tin1, tin2, tout, fin1, fin2 )

Macro for a binary loop which invokes a callback requiring arguments be explicitly cast to a different type while operating on mixed (typed) strided input arrays.

```c
STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST( float, uint16_t, double, uint32_t, float )
```

The macro expects the following arguments:

-   **tin1**: first input strided array element data type.
-   **tin2**: second input strided array element data type.
-   **tout**: output strided array element data type.
-   **fin1**: first callback argument data type.
-   **fin2**: second callback argument data type.

In addition to the variables expected by `STDLIB_STRIDED_BINARY_LOOP_PREAMBLE`, the macro expects the following variables to be defined:

-   **f**: binary callback. 

In addition to the variables defined by the `STDLIB_STRIDED_BINARY_LOOP_PREAMBLE`, the macro defines the following variables:

-   **x**: `<tin1>` first input strided array element.
-   **y**: `<tin2>` second input strided array element.

```c
#define STDLIB_STRIDED_BINARY_LOOP_CLBK_MIXED_ARG_CAST( tin1, tin2, tout, fin1, fin2 ) \
    STDLIB_STRIDED_BINARY_LOOP_PREAMBLE {                                              \
        const tin1 x = *(tin1 *)ip1;                                                   \
        const tin2 y = *(tin2 *)ip2;                                                   \
        *(tout *)op1 = (tout)f( (fin1)x, (fin2)y );                                    \
    }
```

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
#include "stdlib/strided/base/binary.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static double add( double x, double y ) {
    return x + y;
}

int main() {
    // Create underlying byte arrays:
    uint8_t x[] = { 1, 4, 7 };
    uint8_t y[] = { 101, 104, 107 };
    uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

    // Define a pointer to an array containing pointers to strided arrays:
    uint8_t *arrays[] = { x, y, out };

    // Define the strides:
    int64_t strides[] = { 1, 1, 8 }; // 1 byte per uint8, 8 bytes per double

    // Define the number of elements over which to iterate:
    int64_t shape[] = { 3 };

    // Apply the callback:
    stdlib_strided_bb_d_as_dd_d( arrays, shape, strides, (void *)add );

    // Print the contents of the output array:
    uint8_t *op1 = out;
    for ( int64_t i = 0; i < shape[0]; i++, op1 += strides[2] ) {
        const double v = *(double *)op1;
        printf( "out[ %"PRId64" ] = %lf\n", i, v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
