<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# broadcastShapes

> Broadcast array shapes to a single shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var broadcastShapes = require( '@stdlib/ndarray/base/broadcast-shapes' );
```

#### broadcastShapes( shapes )

Broadcasts array shapes to a single shape.

```javascript
var sh1 = [ 8, 1, 6, 1 ];
var sh2 = [ 7, 1, 5 ];

var sh = broadcastShapes( [ sh1, sh2 ] );
// returns [ 8, 7, 6, 5 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When operating on two arrays, the function compares their shapes element-wise, beginning with the trailing (i.e., rightmost) dimension. The following are examples of compatible shapes and their corresponding broadcasted shape:

    ```text
    A      (4d array):  8 x 1 x 6 x 1
    B      (3d array):      7 x 1 x 5
    ---------------------------------
    Result (4d array):  8 x 7 x 6 x 5

    A      (2d array):  5 x 4
    B      (1d array):      1
    -------------------------
    Result (2d array):  5 x 4

    A      (2d array):  5 x 4
    B      (1d array):      4
    -------------------------
    Result (2d array):  5 x 4

    A      (3d array):  15 x 3 x 5
    B      (3d array):  15 x 1 x 5
    ------------------------------
    Result (3d array):  15 x 3 x 5

    A      (3d array):  15 x 3 x 5
    B      (2d array):       3 x 5
    ------------------------------
    Result (3d array):  15 x 3 x 5

    A      (3d array):  15 x 3 x 5
    B      (2d array):       3 x 1
    ------------------------------
    Result (3d array):  15 x 3 x 5

    A      (5d array):  8 x 1 x 1 x 6 x 1
    B      (4d array):      1 x 7 x 1 x 5
    C      (5d array):  8 x 4 x 1 x 6 x 5
    -------------------------------------
    Result (5d array):  8 x 4 x 7 x 6 x 5

    A      (5d array):  8 x 1 x 1 x 6 x 1
    B      (1d array):                  0
    -------------------------------------
    Result (5d array):  8 x 1 x 1 x 6 x 0

    A      (5d array):  8 x 0 x 1 x 6 x 1
    B      (2d array):              6 x 5
    -------------------------------------
    Result (5d array):  8 x 0 x 1 x 6 x 5

    A      (5d array):  8 x 1 x 1 x 6 x 1
    B      (5d array):  8 x 0 x 1 x 6 x 1
    -------------------------------------
    Result (5d array):  8 x 0 x 1 x 6 x 1

    A      (3d array):  3 x 2 x 1
    B      (0d array):
    -----------------------------
    Result (3d array):  3 x 2 x 1

    A      (0d array):
    B      (3d array):  3 x 2 x 1
    -----------------------------
    Result (3d array):  3 x 2 x 1
    ```

    As demonstrated above, arrays are not required to have the same number of dimensions in order to be broadcast compatible. Array shapes with fewer dimensions are implicitly prepended with singleton dimensions (i.e., dimensions equal to `1`). Accordingly, the following example

    ```text
    A      (2d array):  5 x 4
    B      (1d array):      4
    -------------------------
    Result (2d array):  5 x 4
    ```

    is equivalent to

    ```text
    A      (2d array):  5 x 4
    B      (2d array):  1 x 4
    -------------------------
    Result (2d array):  5 x 4
    ```

    Similarly, a zero-dimensional array is expanded (by prepending singleton dimensions) from

    ```text
    A      (3d array):  3 x 2 x 1
    B      (0d array):
    -----------------------------
    Result (3d array):  3 x 2 x 1
    ```

    to

    ```text
    A      (3d array):  3 x 2 x 1
    B      (3d array):  1 x 1 x 1
    -----------------------------
    Result (3d array):  3 x 2 x 1
    ```

    Stated otherwise, every array has implicit leading dimensions of size `1`. During broadcasting, a `3 x 4` matrix is the same as a `3 x 4 x 1 x 1 x 1` multidimensional array.

-   Two respective dimensions in two shape arrays are compatible if

    1.  the dimensions are equal.
    2.  one dimension is `1`.

    The two aforementioned rules apply to empty arrays or arrays that have a dimension of size `0`. For unequal dimensions, the size of the dimension which is not `1` determines the size of the output shape dimension.

    Accordingly, dimensions of size `0` must be paired with a dimension of size `0` or `1`. In such cases, by the rules above, the size of the corresponding output shape dimension is `0`.

-   The function returns `null` if provided incompatible shapes (i.e., shapes which cannot be broadcast with one another).

    ```javascript
    var sh1 = [ 3, 2 ];
    var sh2 = [ 2, 3 ];

    var sh = broadcastShapes( [ sh1, sh2 ] );
    // returns null
    ```

    The following are examples of array shapes which are **not** compatible and do **not** broadcast:

    ```text
    A      (1d array):  3
    B      (1d array):  4                   # dimension does not match

    A      (2d array):      2 x 1
    B      (3d array):  8 x 4 x 3           # second dimension does not match

    A      (3d array):  15 x 3 x 5
    B      (2d array):  15 x 3              # singleton dimensions can only be prepended, not appended

    A      (5d array):  8 x 8 x 1 x 6 x 1
    B      (5d array):  8 x 0 x 1 x 6 x 1   # second dimension does not match
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lpad = require( '@stdlib/string/left-pad' );
var broadcastShapes = require( '@stdlib/ndarray/base/broadcast-shapes' );

var shapes;
var out;
var sh;
var i;
var j;

function shape2string( shape ) {
    return lpad( shape.join( ' x ' ), 20, ' ' );
}

shapes = [
    [ [ 1, 2 ], [ 2 ] ],
    [ [ 1, 1 ], [ 3, 4 ] ],
    [ [ 6, 7 ], [ 5, 6, 1 ], [ 7 ], [ 5, 1, 7 ] ],
    [ [ 1, 3 ], [ 3, 1 ] ],
    [ [ 1 ], [ 3 ] ],
    [ [ 2 ], [ 3, 2 ] ],
    [ [ 2, 3 ], [ 2, 3 ], [ 2, 3 ], [ 2, 3 ] ],
    [ [ 1, 2 ], [ 1, 2 ] ]
];

for ( i = 0; i < shapes.length; i++ ) {
    sh = shapes[ i ];
    for ( j = 0; j < sh.length; j++ ) {
        console.log( shape2string( sh[ j ] ) );
    }
    console.log( lpad( '', 20, '-' ) );

    out = broadcastShapes( sh );
    console.log( shape2string( out )+'\n' );
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
#include "stdlib/ndarray/base/broadcast_shapes.h"
```

#### stdlib_ndarray_broadcast_shapes( M, \*\*shapes, \*ndims, \*out )

Broadcasts array shapes to a single shape.

```c
#include "stdlib/ndarray/base/broadcast_shapes.h"
#include <stdint.h>

int64_t N1 = 4;
int64_t sh1[] = { 8, 1, 6, 1 };

int64_t N2 = 3;
int64_t sh2[] = { 7, 1, 5 };

int64_t ndims[] = { N1, N2 };
int64_t *shapes[] = { sh1, sh2 };

int64_t out[] = { 0, 0, 0, 0 };
int8_t status = stdlib_ndarray_broadcast_shapes( 2, shapes, ndims, out );
if ( status != 0 ) {
    // Handle error...
}
```

The function accepts the following arguments:

-   **M**: `[in] int64_t` number of shape arrays.
-   **shapes**: `[in] int64_t**` array of shape arrays (dimensions).
-   **ndims**: `[in] int64_t*` number of dimensions for each respective shape array.
-   **out**: `[out] int64_t*` output shape array.

```c
int8_t stdlib_ndarray_broadcast_shapes( const int64_t M, const int64_t *shapes[], const int64_t ndims[], int64_t *out );
```

If successful, the function returns `0`; otherwise, the function returns `-1` (e.g., due to incompatible shapes).

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   Even if the function is unsuccessful, the function may still overwrite elements in the output array before returning. In other words, do not assume that providing incompatible shapes is a no-op with regard to the output array.

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/ndarray/base/broadcast_shapes.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    int64_t N1 = 4;
    int64_t sh1[] = { 8, 1, 6, 1 };

    int64_t N2 = 3;
    int64_t sh2[] = { 7, 1, 5 };

    int64_t ndims[] = { N1, N2 };
    int64_t *shapes[] = { sh1, sh2 };

    int64_t out[] = { 0, 0, 0, 0 };
    int8_t status = stdlib_ndarray_broadcast_shapes( 2, shapes, ndims, out );
    if ( status != 0 ) {
        printf( "incompatible shapes\n" );
        return 1;
    }
    int64_t i;
    printf( "shape = ( " );
    for ( i = 0; i < N1; i++ ) {
        printf( "%"PRId64"", out[ i ] );
        if ( i < N1-1 ) {
            printf( ", " );
        }
    }
    printf( " )\n" );
    return 0;
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

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
