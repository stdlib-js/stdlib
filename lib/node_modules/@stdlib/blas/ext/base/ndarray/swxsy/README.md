<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# swxsy

> Subtract elements of a second one-dimensional single-precision floating-point ndarray from the corresponding elements of a first one-dimensional single-precision floating-point ndarray and assign the results to elements in a third one-dimensional single-precision floating-point ndarray.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:wxsy" align="center" raw="\mathbf{w} = \mathbf{x} - \mathbf{y}" alt="Equation for wxsy operation."> -->

```math
\mathbf{w} = \mathbf{x} - \mathbf{y}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{w} = \mathbf{x} - \mathbf{y}" data-equation="eq:wxsy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7a67bd3e5cb80df7208ba3a63e118e9bdf6b5afa/lib/node_modules/@stdlib/blas/ext/base/ndarray/swxsy/docs/img/equation_wxsy.svg" alt="Equation for wxsy operation.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var swxsy = require( '@stdlib/blas/ext/base/ndarray/swxsy' );
```

#### swxsy( arrays )

Subtracts elements of a second one-dimensional single-precision floating-point ndarray from the corresponding elements of a first one-dimensional single-precision floating-point ndarray and assigns the results to elements in a third one-dimensional single-precision floating-point ndarray.

```javascript
var Float32Vector = require( '@stdlib/ndarray/vector/float32' );

var x = new Float32Vector( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Vector( [ 5.0, 4.0, 3.0, 2.0, 1.0 ] );
var w = new Float32Vector( 5 );

swxsy( [ x, y, w ] );
// w => <ndarray>[ -4.0, -2.0, 0.0, 2.0, 4.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   first one-dimensional input ndarray.
    -   second one-dimensional input ndarray.
    -   a one-dimensional output ndarray.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var swxsy = require( '@stdlib/blas/ext/base/ndarray/swxsy' );

var opts = {
    'dtype': 'float32'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var y = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( y ) );

var w = discreteUniform( [ 10 ], -100, 100, opts );

swxsy( [ x, y, w ] );
console.log( ndarray2array( w ) );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/ndarray/swxsy.h"
```

#### stdlib_blas_ext_swxsy( arrays )

Subtracts elements of a second one-dimensional single-precision floating-point ndarray from the corresponding elements of a first one-dimensional single-precision floating-point ndarray and assigns the results to elements in a third one-dimensional single-precision floating-point ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>

// Create ndarrays:
const float dataX[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f };
const float dataY[] = { 5.0f, 4.0f, 3.0f, 2.0f, 1.0f };
float dataW[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };
int64_t shape[] = { 5 };
int64_t strides[] = { STDLIB_NDARRAY_FLOAT32_BYTES_PER_ELEMENT };
int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT32, (uint8_t *)dataX, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );
struct ndarray *y = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT32, (uint8_t *)dataY, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );
struct ndarray *w = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT32, (uint8_t *)dataW, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );

// Perform computation:
const struct ndarray *arrays[] = { x, y, w };
stdlib_blas_ext_swxsy( arrays );

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( y );
stdlib_ndarray_free( w );
```

The function accepts the following arguments:

-   **arrays**: `[in] struct ndarray**` list containing the following ndarrays:

    -   `[in] struct ndarray*` first one-dimensional input ndarray.
    -   `[in] struct ndarray*` second one-dimensional input ndarray.
    -   `[out] struct ndarray*` a one-dimensional output ndarray.

```c
void stdlib_blas_ext_swxsy( const struct ndarray *arrays[] );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/ndarray/swxsy.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    // Create data buffers:
    const float dataX[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f };
    const float dataY[] = { 5.0f, 4.0f, 3.0f, 2.0f, 1.0f };
    float dataW[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of array dimensions:
    const int64_t ndims = 1;

    // Specify the array shape:
    int64_t shape[] = { 5 };

    // Specify the array strides:
    int64_t strides[] = { STDLIB_NDARRAY_FLOAT32_BYTES_PER_ELEMENT };

    // Specify the byte offset:
    const int64_t offset = 0;

    // Specify the array order:
    const enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

    // Specify the index mode:
    const enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

    // Specify the subscript index modes:
    int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };
    const int64_t nsubmodes = 1;

    // Create ndarrays:
    struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT32, (uint8_t *)dataX, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
    struct ndarray *y = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT32, (uint8_t *)dataY, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
    struct ndarray *w = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT32, (uint8_t *)dataW, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );

    if ( x == NULL || y == NULL || w == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( 1 );
    }

    // Define a list of ndarrays:
    const struct ndarray *arrays[] = { x, y, w };

    // Perform computation:
    stdlib_blas_ext_swxsy( arrays );

    // Print the result:
    for ( int i = 0; i < 5; i++ ) {
        printf( "w[ %i ] = %f\n", i, dataW[ i ] );
    }

    // Free allocated memory:
    stdlib_ndarray_free( x );
    stdlib_ndarray_free( y );
    stdlib_ndarray_free( w );
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

</section>

<!-- /.links -->
