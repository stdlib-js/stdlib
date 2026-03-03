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

# dmean

> Compute the [arithmetic mean][arithmetic-mean] of a one-dimensional double-precision floating-point ndarray.

<section class="intro">

The [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\mu = \frac{1}{n} \sum_{i=0}^{n-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@42d8f64d805113ab899c79c7c39d6c6bac7fe25c/lib/node_modules/@stdlib/stats/base/ndarray/mean/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var dmean = require( '@stdlib/stats/base/ndarray/dmean' );
```

#### dmean( arrays )

Computes the [arithmetic mean][arithmetic-mean] of a one-dimensional double-precision floating-point ndarray.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );

var xbuf = new Float64Array( [ 1.0, 3.0, 4.0, 2.0 ] );
var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );

var v = dmean( [ x ] );
// returns 2.5
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty one-dimensional ndarray, the function returns `NaN`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var dmean = require( '@stdlib/stats/base/ndarray/dmean' );

var xbuf = discreteUniform( 10, -50, 50, {
    'dtype': 'float64'
});
var x = new ndarray( 'float64', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var v = dmean( [ x ] );
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
#include "stdlib/stats/base/ndarray/dmean.h"
```

#### stdlib_stats_dmean( arrays )

Computes the [arithmetic mean][arithmetic-mean] of a one-dimensional double-precision floating-point ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>

// Create an ndarray:
const double data[] = { 1.0, 2.0, 3.0, 4.0 };
int64_t shape[] = { 4 };
int64_t strides[] = { STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT };
int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT64, (uint8_t *)data, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );

// Compute the arithmetic mean:
const struct ndarray *arrays[] = { x };
double v = stdlib_stats_dmean( arrays );
// returns 2.5

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[in] struct ndarray**` list containing a one-dimensional input ndarray.

```c
double stdlib_stats_dmean( const struct ndarray *arrays[] );
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
#include "stdlib/stats/base/ndarray/dmean.h"
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
   const double data[] = { 1.0, -2.0, 3.0, -4.0, 5.0, -6.0, 7.0, -8.0 };

   // Specify the number of array dimensions:
   const int64_t ndims = 1;

   // Specify the array shape:
   int64_t shape[] = { 4 };

   // Specify the array strides:
   int64_t strides[] = { 2*STDLIB_NDARRAY_FLOAT64_BYTES_PER_ELEMENT };

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
   struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT64, (uint8_t *)data, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
   if ( x == NULL ) {
      fprintf( stderr, "Error allocating memory.\n" );
      exit( 1 );
   }

   // Define a list of ndarrays:
   const struct ndarray *arrays[] = { x };

   // Compute the arithmetic mean:
   double v = stdlib_stats_dmean( arrays );

   // Print the result:
   printf( "mean: %lf\n", v );

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

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

</section>

<!-- /.links -->
