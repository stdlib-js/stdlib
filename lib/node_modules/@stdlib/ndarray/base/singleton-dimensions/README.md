<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# Singleton Dimensions

> Return the number of singleton dimensions.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var singletonDimensions = require( '@stdlib/ndarray/base/singleton-dimensions' );
```

#### singletonDimensions( shape )

Returns number of singleton dimensions.

```javascript
var n = singletonDimensions( [ 3, 1, 3 ] );
// returns 1
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A singleton dimension is a dimension whose size is equal to `1`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var singletonDimensions = require( '@stdlib/ndarray/base/singleton-dimensions' );

var shape;
var n;
var i;

shape = [ 0, 0, 0 ];
for ( i = 0; i < 100; i++ ) {
    shape[ 0 ] = discreteUniform( 1, 5 );
    shape[ 1 ] = discreteUniform( 1, 5 );
    shape[ 2 ] = discreteUniform( 1, 5 );
    n = singletonDimensions( shape );
    console.log( 'shape: %s. singleton dimensions: %d.', shape.join( 'x' ), n );
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
#include "stdlib/ndarray/base/singleton_dimensions.h"
```

#### stdlib_ndarray_singleton_dimensions( ndims, \*shape )

Returns the number of singleton dimensions.

```c
int64_t ndims = 2;
int64_t shape[] = { 10, 1 };

int64_t n = stdlib_ndarray_singleton_dimensions( ndims, shape );
// returns 1
```

The function accepts the following arguments:

-   **ndims**: `[in] int64_t` number of dimensions.
-   **shape**: `[in] int64_t*` array shape.

```c
int64_t stdlib_ndarray_singleton_dimensions( int64_t ndims, int64_t *shape );
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
#include "stdlib/ndarray/base/singleton_dimensions.h"
#include <stdio.h>
#include <inttypes.h>

int main() {
    int64_t shape[] = { 10, 3, 1, 1, 5 };

    int64_t n = stdlib_ndarray_singleton_dimensions( 5, shape );
    printf( "shape: %"PRId64"x%"PRId64"x%"PRId64"x%"PRId64"x%"PRId64". singleton dimensions: %"PRId64"\n", shape[ 0 ], shape[ 1 ], shape[ 2 ], shape[ 3 ], shape[ 4 ], n );
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
