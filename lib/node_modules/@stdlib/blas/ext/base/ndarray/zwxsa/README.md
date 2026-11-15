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

# zwxsa

> Subtract a scalar constant from each element in an input one-dimensional double-precision complex floating-point ndarray and assign the results to elements in a one-dimensional double-precision complex floating-point output ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var zwxsa = require( '@stdlib/blas/ext/base/ndarray/zwxsa' );
```

#### zwxsa( arrays )

Subtracts a scalar constant from each element in an input one-dimensional double-precision complex floating-point ndarray and assigns the results to elements in a one-dimensional double-precision complex floating-point output ndarray.

```javascript
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );

var x = new Complex128Vector( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );
var w = new Complex128Vector( 4 );

var alpha = scalar2ndarray( new Complex128( 5.0, 0.0 ), {
    'dtype': 'complex128'
});

zwxsa( [ x, w, alpha ] );
// w => <ndarray>[ <Complex128>[ -7.0, 1.0 ], <Complex128>[ -2.0, -5.0 ], <Complex128>[ -1.0, 0.0 ], <Complex128>[ -6.0, -3.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional output ndarray.
    -   a zero-dimensional ndarray containing the scalar constant to subtract.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex128Vector = require( '@stdlib/ndarray/vector/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zwxsa = require( '@stdlib/blas/ext/base/ndarray/zwxsa' );

var opts = {
    'dtype': 'float64'
};

var x = new Complex128Vector( discreteUniform( 20, -100, 100, opts ) );
console.log( ndarray2array( x ) );

var w = new Complex128Vector( 10 );
console.log( ndarray2array( w ) );

var alpha = scalar2ndarray( new Complex128( 5.0, -3.0 ), {
    'dtype': 'complex128'
});
console.log( 'Alpha:', ndarraylike2scalar( alpha ) );

zwxsa( [ x, w, alpha ] );
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
#include "stdlib/blas/ext/base/ndarray/zwxsa.h"
```

#### stdlib_blas_ext_zwxsa( arrays )

Subtracts a scalar constant from each element in an input one-dimensional double-precision complex floating-point ndarray and assigns the results to elements in a one-dimensional double-precision complex floating-point output ndarray.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>

// Create ndarrays:
const double dataX[] = { -2.0, 1.0, 3.0, -5.0 };
double dataW[] = { 0.0, 0.0, 0.0, 0.0 };
int64_t shape[] = { 2 };
int64_t strides[] = { STDLIB_NDARRAY_COMPLEX128_BYTES_PER_ELEMENT };
int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataX, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );
struct ndarray *w = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataW, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );

// Create an ndarray containing the scalar constant to subtract:
const double adata[] = { 5.0, 0.0 };
int64_t astrides[] = { 0 };

struct ndarray *alpha = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)adata, 0, NULL, astrides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );

// Perform computation:
const struct ndarray *arrays[] = { x, w, alpha };
stdlib_blas_ext_zwxsa( arrays );

// Free allocated memory:
stdlib_ndarray_free( x );
stdlib_ndarray_free( w );
stdlib_ndarray_free( alpha );
```

The function accepts the following arguments:

-   **arrays**: `[in] struct ndarray**` list containing the following ndarrays:

    -   `[in] struct ndarray*` a one-dimensional input ndarray.
    -   `[out] struct ndarray*` a one-dimensional output ndarray.
    -   `[in] struct ndarray*` a zero-dimensional ndarray containing the scalar constant to subtract.

```c
void stdlib_blas_ext_zwxsa( const struct ndarray *arrays[] );
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
#include "stdlib/blas/ext/base/ndarray/zwxsa.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"
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
    const double dataX[] = { -2.0, 1.0, 3.0, -5.0 };
    double dataW[] = { 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of array dimensions:
    const int64_t ndims = 1;

    // Specify the array shape:
    int64_t shape[] = { 2 };

    // Specify the array strides:
    int64_t strides[] = { STDLIB_NDARRAY_COMPLEX128_BYTES_PER_ELEMENT };

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
    struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataX, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );

    struct ndarray *w = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)dataW, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );

    // Create a data buffer for an ndarray containing the scalar constant to subtract:
    const double adata[] = { 5.0, 0.0 };

    // Specify the array strides for a zero-dimensional ndarray:
    int64_t astrides[] = { 0 };

    // Create an ndarray containing the scalar constant to subtract:
    struct ndarray *alpha = stdlib_ndarray_allocate( STDLIB_NDARRAY_COMPLEX128, (uint8_t *)adata, 0, NULL, astrides, 0, order, imode, nsubmodes, submodes );
    if ( x == NULL || w == NULL || alpha == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( 1 );
    }

    // Define a list of ndarrays:
    const struct ndarray *arrays[] = { x, w, alpha };

    // Perform computation:
    stdlib_blas_ext_zwxsa( arrays );

    // Print the result:
    const stdlib_complex128_t *v = (const stdlib_complex128_t *)dataW;
    for ( int i = 0; i < 2; i++ ) {
        printf( "w[ %i ] = %lf + %lfi\n", i, stdlib_complex128_real( v[ i ] ), stdlib_complex128_imag( v[ i ] ) );
    }

    // Free allocated memory:
    stdlib_ndarray_free( x );
    stdlib_ndarray_free( w );
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
