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

# ind2sub

> Convert a linear index to an array of subscripts.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var ind2sub = require( '@stdlib/ndarray/base/ind2sub' );
```

#### ind2sub( shape, strides, offset, order, idx, mode )

Converts a linear index to an array of subscripts.

```javascript
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

var subscripts = ind2sub( shape, strides, offset, order, 1, 'throw' );
// returns [ 0, 1 ]
```

The function supports the following `modes`:

-   `throw`: specifies that the function should throw an error when a linear index exceeds array dimensions.
-   `wrap`: specifies that the function should wrap around a linear index exceeding array dimensions using modulo arithmetic.
-   `clamp`: specifies that the function should set a linear index exceeding array dimensions to either `0` (minimum linear index) or the maximum linear index.

```javascript
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

var idx = ind2sub( shape, strides, offset, order, -2, 'wrap' );
// returns [ 1, 0 ]

idx = ind2sub( shape, strides, offset, order, 10, 'clamp' );
// returns [ 1, 1 ]
```

The `order` parameter specifies whether an array is `row-major` (C-style) or `column-major` (Fortran-style).

```javascript
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ 1, 2 ];
var offset = 0;

var idx = ind2sub( shape, strides, offset, order, 2, 'throw' );
// returns [ 0, 1 ]
```

#### ind2sub.assign( shape, strides, offset, order, idx, mode, out )

Converts a linear index to an array of subscripts and assigns results to a provided output array.

```javascript
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

var out = [ 0, 0 ];
var subscripts = ind2sub.assign( shape, strides, offset, order, 1, 'throw', out );
// returns [ 0, 1 ]

var bool = ( subscripts === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When provided a stride array containing negative strides, if an `offset` is greater than `0`, the function interprets the linear index as an index into the underlying data buffer for the array, thus returning subscripts from the perspective of that buffer. If an `offset` is equal to `0`, the function treats the linear index as an index into an array view, thus returning subscripts from the perspective of that view.

    ```text
    Dims: 2x2
    Buffer: [ 1, 2, 3, 4 ]

    View = [ a00, a01,
             a10, a11 ]

    Strides: 2,1
    Offset: 0

    View = [ 1, 2,
             3, 4 ]

    Strides: 2,-1
    Offset: 1

    View = [ 2, 1,
             4, 3 ]

    Strides: -2,1
    Offset: 2

    View = [ 3, 4,
             1, 2 ]

    Strides: -2,-1
    Offset: 3

    View = [ 4, 3,
             2, 1 ]
    ```

    ```javascript
    var shape = [ 2, 2 ];
    var order = 'row-major';
    var strides = [ -2, 1 ];
    var offset = 2;
    var mode = 'throw';

    // From the perspective of a view...
    var s = ind2sub( shape, strides, 0, order, 0, mode );
    // returns [ 0, 0 ]

    s = ind2sub( shape, strides, 0, order, 1, mode );
    // returns [ 0, 1 ]

    s = ind2sub( shape, strides, 0, order, 2, mode );
    // returns [ 1, 0 ]

    s = ind2sub( shape, strides, 0, order, 3, mode );
    // returns [ 1, 1 ]

    // From the perspective of an underlying buffer...
    s = ind2sub( shape, strides, offset, order, 0, mode );
    // returns [ 1, 0 ]

    s = ind2sub( shape, strides, offset, order, 1, mode );
    // returns [ 1, 1 ]

    s = ind2sub( shape, strides, offset, order, 2, mode );
    // returns [ 0, 0 ]

    s = ind2sub( shape, strides, offset, order, 3, mode );
    // returns [ 0, 1 ]
    ```

    In short, from the perspective of a view, view data is always ordered.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var strides2offset = require( '@stdlib/ndarray/base/strides2offset' );
var numel = require( '@stdlib/ndarray/base/numel' );
var randu = require( '@stdlib/random/base/randu' );
var abs = require( '@stdlib/math/base/special/abs' );
var ind2sub = require( '@stdlib/ndarray/base/ind2sub' );

// Specify array characteristics:
var shape = [ 3, 3, 3 ];
var order = 'row-major';

// Compute array meta data:
var ndims = shape.length;
var strides = shape2strides( shape, order );
var len = numel( shape );

// Determine stride indices to be used for formatting how views are displayed...
var s0;
var s1;
if ( order === 'column-major' ) {
    s0 = ndims - 1;
    s1 = s0 - 1;
} else { // row-major
    s0 = 0;
    s1 = s0 + 1;
}

// Initialize a linear array...
var arr = [];
var i;
for ( i = 0; i < len; i++ ) {
    arr.push( 0 );
}

// Generate random views and display the mapping of elements in the linear array to view subscripts...
var offset;
var row;
var j;
var s;
for ( i = 0; i < 20; i++ ) {
    // Randomly flip the sign of one of the strides...
    j = discreteUniform( 0, ndims-1 );
    strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;
    offset = strides2offset( shape, strides );

    // Print view meta data...
    console.log( '' );
    console.log( 'Dimensions: %s.', shape.join( 'x' ) );
    console.log( 'Strides: %s.', strides.join( ',' ) );
    console.log( 'View (subscripts):' );

    // Print the mapping of elements in the linear array to view subscripts...
    row = '  ';
    for ( j = 0; j < len; j++ ) {
        s = ind2sub( shape, strides, offset, order, j, 'throw' );
        row += '(' + s.join( ',' ) + ')';
        if ( ndims === 1 && j === len-1 ) {
            console.log( row );
        } else if ( ndims === 2 && (j+1)%abs( strides[ s0 ] ) === 0 ) {
            console.log( row );
            row = '  ';
        } else if ( ndims > 2 && (j+1)%abs( strides[ s1 ] ) === 0 ) {
            console.log( row );
            if ( (j+1)%abs( strides[ s0 ] ) === 0 ) {
                console.log( '' );
            }
            row = '  ';
        } else {
            row += ', ';
        }
    }
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
#include "stdlib/ndarray/base/ind2sub.h"
```

<!-- lint disable maximum-heading-length -->

#### stdlib_ndarray_ind2sub( ndims, \*shape, \*strides, offset, order, idx, mode, \*out )

Computes the minimum and maximum linear indices in an underlying data buffer accessible to an array view.

```c
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>

int64_t ndims = 2;
int64_t shape[] = { 3, 3 };
int64_t strides[] = { -3, 1 };
int64_t offset = 6;

int64_t out[ 2 ];

int8_t status = stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, 7, STDLIB_NDARRAY_INDEX_ERROR, out );
if ( status == -1 ) {
    // Handle error...
}
```

The function accepts the following arguments:

-   **ndims**: `[in] int64_t` number of dimensions.
-   **shape**: `[in] int64_t*` array shape (dimensions).
-   **strides**: `[in] int64_t*` array strides.
-   **offset**: `[in] int64_t` index offset.
-   **order**: `[in] enum STDLIB_NDARRAY_ORDER` specifies whether an array is row-major (C-style) or column-major (Fortran-style).
-   **idx**: `[in] int64_t` linear index in an array view.
-   **mode**: `[in] enum STDLIB_NDARRAY_INDEX_MODE` specifies how to handle a linear index which exceeds array dimensions.
-   **out**: `[out] int64_t*` output array.

```c
int8_t stdlib_ndarray_ind2sub( int64_t ndims, int64_t *shape, int64_t *strides, int64_t offset, enum STDLIB_NDARRAY_ORDER order, int64_t idx, enum STDLIB_NDARRAY_INDEX_MODE mode, int64_t *out );
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
#include "stdlib/ndarray/base/ind2sub.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main() {
    int64_t ndims = 2;
    int64_t shape[] = { 3, 3 };
    int64_t strides[] = { -3, 1 };
    int64_t offset = 6;

    int64_t out[ 2 ];

    stdlib_ndarray_ind2sub( ndims, shape, strides, offset, STDLIB_NDARRAY_ROW_MAJOR, 7, STDLIB_NDARRAY_INDEX_ERROR, out );

    int i;
    printf( "subscripts = { " );
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
