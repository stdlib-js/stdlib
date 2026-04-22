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

# csum

> Compute the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var csum = require( '@stdlib/blas/ext/base/ndarray/csum' );
```

#### csum( arrays )

Computes the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Complex64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
var x = new ndarray( 'complex64', xbuf, [ 2 ], [ 1 ], 0, 'row-major' );

var v = csum( [ x ] );
// returns <Complex64>[ 5.0, 5.0 ]
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `0.0 + 0.0i`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Array = require( '@stdlib/array/complex64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var csum = require( '@stdlib/blas/ext/base/ndarray/csum' );

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'float32'
});
xbuf = new Complex64Array( xbuf );

var x = new ndarray( 'complex64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var v = csum( [ x ] );
console.log( v );
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
#include "stdlib/blas/ext/base/ndarray/csum.h"
```

#### stdlib_blas_ext_csum( arrays )

Computes the sum of all elements in a one-dimensional single-precision complex floating-point ndarray.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include <stdint.h>

// Create an ndarray:
const float data[] = { 1.0f, 2.0f, 3.0f, 4.0f };
int64_t shape[] = { 2 };
int64_t strides[] = { STDLIB_NDARRAY_COMPLEX64_BYTES_PER_ELEMENT };
int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX64, (uint8_t *)data, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );

// Compute the sum:
const struct ndarray *arrays[] = { x };
stdlib_complex64_t v = stdlib_blas_ext_csum( arrays );

float re = stdlib_complex64_real( v );
// returns 4.0f

float im = stdlib_complex64_imag( v );
// returns 6.0f

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[in] struct ndarray**` list containing a one-dimensional input ndarray.

```c
stdlib_complex64_t stdlib_blas_ext_csum( const struct ndarray *arrays[] );
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
#include "stdlib/blas/ext/base/ndarray/csum.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    // Create a data buffer:
    const float data[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

    // Specify the number of array dimensions:
    const int64_t ndims = 1;

    // Specify the array shape:
    int64_t shape[] = { 4 };

    // Specify the array strides:
    int64_t strides[] = { STDLIB_NDARRAY_COMPLEX64_BYTES_PER_ELEMENT };

    // Specify the byte offset:
    const int64_t offset = 0;

    // Specify the array order:
    const enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

    // Specify the index mode:
    const enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

    // Specify the subscript index modes:
    int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };
    const int64_t nsubmodes = 1;

    // Create an ndarray:
    struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX64, (uint8_t *)data, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
    if ( x == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( 1 );
    }

    // Define a list of ndarrays:
    const struct ndarray *arrays[] = { x };

    // Compute the sum:
    stdlib_complex64_t v = stdlib_blas_ext_csum( arrays );

    // Print the result:
    printf( "sum: %f + %fi\n", stdlib_complex64_real( v ), stdlib_complex64_imag( v ) );

    // Free allocated memory:
    stdlib_ndarray_free( x );
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
