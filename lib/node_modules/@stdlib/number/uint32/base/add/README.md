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

# add

> Compute the sum of two unsigned 32-bit integers.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var add = require( '@stdlib/number/uint32/base/add' );
```

#### add( x, y )

Computes the sum of two unsigned 32-bit integers.

```javascript
var v = add( 1>>>0, 5>>>0 );
// returns 6

v = add( 2>>>0, 5>>>0 );
// returns 7

v = add( 0>>>0, 5>>>0 );
// returns 5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function performs C-like addition of two unsigned 32-bit integers, including wraparound semantics.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var add = require( '@stdlib/number/uint32/base/add' );

var opts = {
    'dtype': 'uint32'
};

// Create arrays of random values:
var x = discreteUniform( 100, 0, 50, opts );
var y = discreteUniform( 100, 0, 50, opts );

// Perform element-wise addition:
logEachMap( '%d + %d = %d', x, y, add );
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
#include "stdlib/number/uint32/base/add.h"
```

#### stdlib_base_uint32_add( x, y )

Computes the sum of two unsigned 32-bit integers.

```c
#include <stdint.h>

uint32_t v = stdlib_base_uint32_add( 5, 2 );
// returns 7
```

The function accepts the following arguments:

-   **x**: `[in] uint32_t` first input value.
-   **y**: `[in] uint32_t` second input value.

```c
uint32_t stdlib_base_uint32_add( const uint32_t x, const uint32_t y );
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
#include "stdlib/number/uint32/base/add.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    const uint32_t x[] = { 3, 5, 10, 12 };
    const uint32_t y[] = { 6, 2, 11, 24 };

    uint32_t z;
    int i;
    for ( i = 0; i < 4; i++ ) {
        z = stdlib_base_uint32_add( x[ i ], y[ i ] );
        printf( "%u + %u = %u\n", x[ i ], y[ i ], z );
    }
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
