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

# cxsa

> Subtract a scalar constant from each element in a one-dimensional single-precision complex floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cxsa = require( '@stdlib/blas/ext/base/ndarray/cxsa' );
```

#### cxsa( arrays )

Subtracts a scalar constant from each element in a one-dimensional single-precision complex floating-point ndarray.

```javascript
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Complex64Vector( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

var alpha = scalar2ndarray( new Complex64( 5.0, 0.0 ), {
    'dtype': 'complex64'
});

cxsa( [ x, alpha ] );
// x => <ndarray>[ <Complex64>[ -7.0, 1.0 ], <Complex64>[ -2.0, -5.0 ], <Complex64>[ -1.0, 0.0 ], <Complex64>[ -6.0, -3.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a zero-dimensional ndarray containing the scalar constant to subtract.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The input ndarray is modified **in-place** (i.e., the input ndarray is **mutated**).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cxsa = require( '@stdlib/blas/ext/base/ndarray/cxsa' );

var opts = {
    'dtype': 'float32'
};

var x = new Complex64Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( x ) );

var alpha = scalar2ndarray( new Complex64( 5.0, -3.0 ), {
    'dtype': 'complex64'
});
console.log( 'Alpha:', ndarraylike2scalar( alpha ) );

cxsa( [ x, alpha ] );
console.log( ndarray2array( x ) );
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
#include "stdlib/blas/ext/base/ndarray/cxsa.h"
```

#### stdlib_blas_ext_cxsa( arrays )

Subtracts a scalar constant from each element in a one-dimensional single-precision complex floating-point ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>

// Create an ndarray:
float data[] = { -2.0f, 1.0f, 3.0f, -5.0f };
int64_t shape[] = { 2 };
int64_t strides[] = { STDLIB_NDARRAY_COMPLEX64_BYTES_PER_ELEMENT };
int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX64, (uint8_t *)data, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );

// Create an ndarray containing the scalar constant to subtract:
const float adata[] = { 5.0f, 0.0f };
int64_t astrides[] = { 0 };

struct ndarray *alpha = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX64, (uint8_t *)adata, 0, NULL, astrides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );

// Perform computation:
const struct ndarray *arrays[] = { x, alpha };
stdlib_blas_ext_cxsa( arrays );

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( alpha );
```

The function accepts the following arguments:

-   **arrays**: `[in] struct ndarray**` list containing the following ndarrays:

    -   `[inout] struct ndarray*` a one-dimensional input ndarray.
    -   `[in] struct ndarray*` a zero-dimensional ndarray containing the scalar constant to subtract.

```c
void stdlib_blas_ext_cxsa( const struct ndarray *arrays[] );
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
#include "stdlib/blas/ext/base/ndarray/cxsa.h"
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
    float data[] = { -2.0f, 1.0f, 3.0f, -5.0f };

    // Specify the number of array dimensions:
    const int64_t ndims = 1;

    // Specify the array shape:
    int64_t shape[] = { 2 };

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

    // Create a data buffer for an ndarray containing the scalar constant to subtract:
    const float adata[] = { 5.0f, 0.0f };

    // Specify the array strides for a zero-dimensional ndarray:
    int64_t astrides[] = { 0 };

    // Create an ndarray containing the scalar constant to subtract:
    struct ndarray *alpha = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX64, (uint8_t *)adata, 0, NULL, astrides, 0, order, imode, nsubmodes, submodes );
    if ( x == NULL || alpha == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( 1 );
    }

    // Define a list of ndarrays:
    const struct ndarray *arrays[] = { x, alpha };

    // Perform computation:
    stdlib_blas_ext_cxsa( arrays );

    // Print the result:
    stdlib_complex64_t *v = (stdlib_complex64_t *)data;
    for ( int i = 0; i < 2; i++ ) {
        printf( "x[ %i ] = %f + %fi\n", i, stdlib_complex64_real( v[ i ] ), stdlib_complex64_imag( v[ i ] ) );
    }

    // Free allocated memory:
    stdlib_ndarray_free( x );
    stdlib_ndarray_free( alpha );
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
