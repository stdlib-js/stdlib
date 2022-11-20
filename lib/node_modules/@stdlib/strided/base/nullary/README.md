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

# Nullary

> Apply a nullary callback and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var nullary = require( '@stdlib/strided/base/nullary' );
```

#### nullary( arrays, shape, strides, fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

nullary( [ x ], [ x.length ], [ 1 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride length for the strided output array.
-   **fcn**: nullary function to apply.

The `shape` and `strides` parameters determine which elements in the strided output array are accessed at runtime. For example, to index the first `N` elements of the strided output array in reverse order,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

nullary( [ x ], [ 3 ], [ -1 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, -4.0, -5.0, -6.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function fill() {
    return 3.0;
}

// Initial arrays...
var x0 = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

nullary( [ x1 ], [ 3 ], [ 1 ], fill );
// x0 => <Float64Array>[ -1.0, 3.0, 3.0, 3.0, -5.0, -6.0 ]
```

#### nullary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a nullary callback and assigns results to elements in a strided output array using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );

nullary.ndarray( [ x ], [ x.length ], [ 1 ], [ 0 ], fill );
// x => <Float64Array>[ 3.0, 3.0, 3.0, 3.0, 3.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting index (i.e., index offset) for the strided output array.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index the last `N` elements in the strided output array,

```javascript
var Float64Array = require( '@stdlib/array/float64' );

function fill() {
    return 3.0;
}

var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

nullary.ndarray( [ x ], [ 3 ], [ -1 ], [ x.length-1 ], fill );
// x => <Float64Array>[ -1.0, -2.0, -3.0, 3.0, 3.0, 3.0 ]
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
var nullary = require( '@stdlib/strided/base/nullary' );

var x = filledarray( 0.0, 10, 'generic' );
console.log( x );

var shape = [ x.length ];
var strides = [ 1 ];
var offsets = [ 0 ];

nullary.ndarray( [ x ], shape, strides, offsets, discreteUniform( -100, 100 ) );
console.log( x );
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
stdlib_strided_<output_data_type>[_as_<callback_return_data_type>]
```

For example,

<!-- run-disable -->

```c
void stdlib_strided_d(...) {...}
```

is a function which accepts one double-precision floating-point strided output array. In other words, the suffix encodes the function type signature.

To support callbacks whose return values are of a different data type than the strided output array data type, the naming convention supports appending an `as` suffix. For example,

<!-- run-disable -->

```c
void stdlib_strided_f_as_d(...) {...}
```

is a function which accepts one single-precision floating-point strided output array. However, the callback returns double-precision floating-point numbers. Accordingly, the output value needs to be cast using the following conversion sequence

```c
// Evaluate the callback:
double out = f();

// Convert the callback return value to single-precision:
y[ i ] = (float)out;
```

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/strided/base/nullary.h"
```

<!-- The following is auto-generated. Do not manually edit. See scripts/loops.js. -->

<!-- loops -->

#### stdlib_strided_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 1 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_c( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include "stdlib/complex/float32.h"
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
stdlib_complex64_t fcn() {
    // ...
}

// Apply the callback:
stdlib_strided_c( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_c_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float fcn() {
    return 3.0f;
}

// Apply the callback:
stdlib_strided_c_as_f( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_c_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_s( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_c_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_s( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_c_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_c_as_z( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include "stdlib/complex/float64.h"
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
stdlib_complex128_t fcn() {
    // ...
}

// Apply the callback:
stdlib_strided_c_as_z( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_c_as_z( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double fcn() {
    return 3.0;
}

// Apply the callback:
stdlib_strided_d( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `double (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float fcn() {
    return 3.0f;
}

// Apply the callback:
stdlib_strided_d_as_f( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_i( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_s( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_s( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_d_as_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 8 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_d_as_u( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_d_as_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float fcn() {
    return 3.0f;
}

// Apply the callback:
stdlib_strided_f( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_f_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double fcn() {
    return 3.0;
}

// Apply the callback:
stdlib_strided_f_as_d( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `double (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_f_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_s( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_f_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_s( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_f_as_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_f_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_f_as_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_i( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_i_as_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_i_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i_as_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_i_as_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_i_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i_as_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_i_as_s( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_i_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i_as_s( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_i_as_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_i_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_i_as_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_k_as_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_k_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_k_as_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_k_as_s( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_k_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_k_as_s( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_s( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 1 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_s( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_t_as_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 2 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_t_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_t_as_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_u( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_u_as_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_u_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_u_as_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_u_as_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 4 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_u_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_u_as_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include "stdlib/complex/float64.h"
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
stdlib_complex128_t fcn() {
    // ...
}

// Apply the callback:
stdlib_strided_z( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `stdlib_complex128_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_b( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_b( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_b( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_c( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include "stdlib/complex/float32.h"
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
stdlib_complex64_t fcn() {
    // ...
}

// Apply the callback:
stdlib_strided_z_as_c( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `stdlib_complex64_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_c( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_d( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
double fcn() {
    return 3.0;
}

// Apply the callback:
stdlib_strided_z_as_d( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `double (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_d( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_f( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
float fcn() {
    return 3.0f;
}

// Apply the callback:
stdlib_strided_z_as_f( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `float (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_f( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_i( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int32_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_i( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_i( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_k( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_k( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_k( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_s( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
int8_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_s( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `int8_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_s( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_t( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint16_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_t( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint16_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_t( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

#### stdlib_strided_z_as_u( \*arrays[], \*shape, \*strides, \*fcn )

Applies a nullary callback and assigns results to elements in a strided output array.

```c
#include <stdint.h>

// Create underlying byte arrays:
uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

// Define a pointer to an array containing pointers to strided arrays:
uint8_t *arrays[] = { out };

// Define the strides:
int64_t strides[] = { 16 };

// Define the number of elements over which to iterate:
int64_t shape[] = { 3 };

// Define a callback:
uint32_t fcn() {
    return 3;
}

// Apply the callback:
stdlib_strided_z_as_u( arrays, shape, strides, (void *)fcn );
```

The function accepts the following arguments:

-   **arrays**: `[inout] uint8_t**` array whose only element is a pointer to a strided output array.
-   **shape**: `[in] int64_t*` array whose only element is the number of elements over which to iterate.
-   **strides**: `[in] int64_t*` array containing strides (in bytes) for each strided array.
-   **fcn**: `[in] void*` a `uint32_t (*f)()` function to apply provided as a `void` pointer.

```c
void stdlib_strided_z_as_u( uint8_t *arrays[], int64_t *shape, int64_t *strides, void *fcn );
```

<!-- ./loops -->

<!-- macros -->

* * *

#### TODO

TODO: document macros

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
#include "stdlib/strided/base/nullary.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

// Define a callback:
static double fill() {
    return 10.0;
}

int main() {
    // Create underlying byte arrays:
    uint8_t out[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };

    // Define a pointer to an array containing pointers to strided arrays:
    uint8_t *arrays[] = { out };

    // Define the strides:
    int64_t strides[] = { 8 }; // 8 bytes per double

    // Define the number of elements over which to iterate:
    int64_t shape[] = { 3 };

    // Apply the callback:
    stdlib_strided_d( arrays, shape, strides, (void *)fill );

    // Print the contents of the output array:
    uint8_t *op1 = out;
    for ( int64_t i = 0; i < shape[0]; i++, op1 += strides[0] ) {
        const double v = *(double *)op1; // cppcheck-suppress invalidPointerCast
        printf( "out[ %"PRId64" ] = %lf\n", i, v );
    }
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

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
