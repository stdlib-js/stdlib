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

# clipIndex

> Clip an index to the interval `[0,max]`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var clipIndex = require( '@stdlib/ndarray/base/clip-index' );
```

#### clipIndex( idx, max )

Clips an index to the interval `[0,max]`.

```javascript
var idx = clipIndex( 2, 10 );
// returns 2

idx = clipIndex( -5, 10 );
// returns 5
```

If provided an out-of-bounds index, the function clips the index to the nearest interval bound.

```javascript
var idx = clipIndex( 15, 10 );
// returns 10

idx = clipIndex( -15, 10 );
// returns 0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Negative indices are normalized according to `max + idx`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var clipIndex = require( '@stdlib/ndarray/base/clip-index' );

var idx = discreteUniform( 100, -20, 20, {
    'dtype': 'generic'
});

logEachMap( '%d => [0,%d] => %d', idx, 10, clipIndex );
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
#include "stdlib/ndarray/base/clip_index.h"
```

#### stdlib_ndarray_clip_index( idx, max )

Clips an index to the interval `[0,max]`.

```c
#include <stdint.h>

int64_t idx = stdlib_ndarray_clip_index( -2, 8 );
// returns 6
```

The function accepts the following arguments:

-   **idx**: `[in] int64_t` index.
-   **max**: `[in] int64_t` maximum index.

```c
int64_t stdlib_ndarray_clip_index( const int64_t idx, const int64_t max );
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
#include "stdlib/ndarray/base/clip_index.h"
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    const int64_t idx[] = { -2, 8, 11, 4 };

    int64_t out;
    int i;
    for ( i = 0; i < 4; i++ ) {
        out = stdlib_ndarray_clip_index( idx[ i ], 10 );
        printf( "clip_index(%" PRId64 ", 10) => %" PRId64 "\n", idx[ i ], out );
    }
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
