<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# stride2offset

> Determine the index offset which specifies the location of the first indexed value in a strided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stride2offset = require( '@stdlib/strided/base/stride2offset' );
```

#### stride2offset( N, stride )

Returns the index offset which specifies the location of the first indexed value in a strided array.

```javascript
var offset = stride2offset( 10, 10 );
// returns 0

offset = stride2offset( 10, -10 );
// returns 90
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var stride2offset = require( '@stdlib/strided/base/stride2offset' );

var opts = {
    'dtype': 'generic'
};

// Define the number of indexed elements:
var N = 100;

// Define a maximum stride length:
var maxStride = 10;

// Create an array of random integers which can accommodate the maximum stride length:
var arr = discreteUniform( N*maxStride, 0, 255, opts );

// Generate random stride lengths:
var strides = discreteUniform( 10, -maxStride, maxStride, opts );

// Resolve values in the data array for the first indexed element based on various stride lengths...
var offset;
var i;
for ( i = 0; i < strides.length; i++ ) {
    offset = stride2offset( N, strides[ i ] );
    console.log( 'stride = %d. arr[%d] = %d.', strides[ i ], offset, arr[ offset ] );
}
```

</section>

<!-- /.examples -->

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
#include "stdlib/strided/base/stride2offset.h"
```

#### stdlib_strided_stride2offset( N, stride )

Returns the index offset which specifies the location of the first indexed value in a strided array.

```c
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>

int64_t offset = stdlib_strided_stride2offset( 10, -10 );
// returns 90
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **stride**: `[in] int64_t` index increment.

```c
int64_t stdlib_strided_stride2offset( int64_t N, int64_t stride );
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
#include "stdlib/strided/base/stride2offset.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    // Specify the number of indexed elements:
    int64_t N = 6;

    // Define a stride:
    int64_t stride = -2;

    // Compute the offset:
    int64_t offset = stdlib_strided_stride2offset( N, stride )

    // Print the results:
    printf( "stride: %"PRId64" => offset: %"PRId64"\n", stride, offset );
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
