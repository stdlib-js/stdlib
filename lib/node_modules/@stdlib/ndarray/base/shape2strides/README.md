<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# shape2strides

> Generate a stride array from an array shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
```

#### shape2strides( shape, order )

Generates a stride array from an array shape.

```javascript
var strides = shape2strides( [ 3, 2 ], 'row-major' );
// returns [ 2, 1 ]
```

The `order` parameter specifies whether an array is `row-major` (C-style) or `column-major` (Fortran-style).

```javascript
var strides = shape2strides( [ 3, 2 ], 'column-major' );
// returns [ 1, 3 ]
```

#### shape2strides.assign( shape, order, out )

Generates a stride array from an array shape and assigns results to a provided output array.

```javascript
var shape = [ 3, 2 ];
var strides = [ 0, 0 ];

var out = shape2strides.assign( shape, 'row-major', strides );
// returns [ 2, 1 ]

var bool = ( strides === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );

var strides;
var shape;
var i;

shape = [ 0, 0, 0 ];
for ( i = 0; i < 100; i++ ) {
    shape[ 0 ] = discreteUniform( 1, 10 );
    shape[ 1 ] = discreteUniform( 1, 10 );
    shape[ 2 ] = discreteUniform( 1, 10 );
    strides = shape2strides( shape, 'row-major' );
    console.log( 'shape: %s. strides: %s.', shape.join( 'x' ), strides.join( ', ' ) );
}
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
#include "stdlib/ndarray/base/shape2strides.h"
```

#### stdlib_ndarray_shape2strides( ndims, \*shape, order, \*out )

Generates a stride array from an array shape.

```c
#include "stdlib/ndarray/orders.h"

int64_t ndims = 3;
int64_t shape[] = { 2, 3, 10 };
int64_t out[ 3 ];

stdlib_ndarray_shape2strides( ndims, shape, STDLIB_NDARRAY_ROW_MAJOR, out );
```

The function accepts the following arguments:

-   **ndims**: `[in] int64_t` number of dimensions.
-   **shape**: `[in] int64_t*` array shape (dimensions).
-   **order**: `[in] enum STDLIB_NDARRAY_ORDER` specifies whether an array is row-major (C-style) or column-major (Fortran-style).
-   **out**: `[out] int64_t*` output strides array.

```c
int8_t stdlib_ndarray_shape2strides( int64_t ndims, int64_t *shape, enum STDLIB_NDARRAY_ORDER order, int64_t *out );
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
#include "stdlib/ndarray/base/shape2strides.h"
#include "stdlib/ndarray/orders.h"
#include <stdio.h>
#include <inttypes.h>

int main() {
    int64_t shape[] = { 2, 3, 10 };
    int64_t ndims = 3;
    int64_t out[ 3 ];

    stdlib_ndarray_shape2strides( ndims, shape, STDLIB_NDARRAY_ROW_MAJOR, out );

    int i;
    printf( "strides = { " );
    for ( i = 0; i < ndims; i++ ) {
        printf( "%"PRId64"", out[ i ] );
        if ( i < ndims-1 ) {
            printf( ", " );
        }
    }
    printf( " }\n" );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
