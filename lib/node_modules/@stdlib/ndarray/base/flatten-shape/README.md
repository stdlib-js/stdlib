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

# flattenShape

> Flatten a shape to a specified depth.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var flattenShape = require( '@stdlib/ndarray/base/flatten-shape' );
```

#### flattenShape( shape, depth )

Flattens a shape to a specified depth.

```javascript
var sh = flattenShape( [ 3, 2 ], 1 );
// returns [ 6 ]
```

The function accepts the following parameters:

-   **shape**: array shape.
-   **depth**: maximum depth to flatten.

#### flattenShape.assign( shape, depth, out )

Flattens a shape to a specified depth and assigns results to a provided output array.

```javascript
var sh = [ 0 ];

var out = flattenShape.assign( [ 3, 2 ], 1, sh );
// returns [ 6 ]

var bool = ( sh === out );
// returns true
```

The function accepts the following parameters:

-   **shape**: array shape.
-   **depth**: maximum depth to flatten.
-   **out**: output array.

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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zip = require( '@stdlib/array/base/zip' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var flattenShape = require( '@stdlib/ndarray/base/flatten-shape' );

var opts = {
    'dtype': 'int32'
};
var d1 = discreteUniform( 100, 1, 10, opts );
var d2 = discreteUniform( d1.length, 1, 10, opts );
var d3 = discreteUniform( d1.length, 1, 10, opts );
var d4 = discreteUniform( d1.length, 1, 10, opts );

var depths = discreteUniform( d1.length, 0, 3, opts );
var shapes = zip( [ d1, d2, d3, d4 ] );

logEachMap( 'shape: (%s). depth: %d. flattened: (%s).', shapes, depths, flattenShape );
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
#include "stdlib/ndarray/base/flatten_shape.h"
```

#### stdlib_ndarray_flatten_shape( ndims, \*shape, depth, \*out )

Flattens a shape to a specified depth.

```c
const int64_t ndims = 3;
const int64_t shape[] = { 2, 3, 10 };
int64_t out[ 1 ];

stdlib_ndarray_flatten_shape( ndims, shape, 2, out );
```

The function accepts the following arguments:

-   **ndims**: `[in] int64_t` number of dimensions.
-   **shape**: `[in] int64_t*` array shape (dimensions).
-   **depth**: `[in] int64_t` maximum depth to flatten.
-   **out**: `[out] int64_t*` output array.

```c
int8_t stdlib_ndarray_flatten_shape( const int64_t ndims, const int64_t *shape, const int64_t depth, int64_t *out );
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
#include "stdlib/ndarray/base/flatten_shape.h"
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    const int64_t shape[] = { 2, 3, 4, 10 };
    const int64_t ndims = 4;
    const int64_t depth = 2;
    int64_t out[ 2 ];

    stdlib_ndarray_flatten_shape( ndims, shape, depth, out );

    int i;
    printf( "shape = ( " );
    for ( i = 0; i < ndims-depth; i++ ) {
        printf( "%"PRId64"", out[ i ] );
        if ( i < ndims-depth-1 ) {
            printf( ", " );
        }
    }
    printf( " )\n" );
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
