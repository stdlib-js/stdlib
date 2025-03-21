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

# isPow2Uint32

> Test whether an unsigned integer is a power of 2.

<section class="usage">

## Usage

```javascript
var isPow2Uint32 = require( '@stdlib/math/base/assert/uint32-is-pow2' );
```

#### isPow2Uint32( x )

Tests whether `x` is a power of 2.

```javascript
var bool = isPow2Uint32( 2 );
// returns true

bool = isPow2Uint32( 5 );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isPow2Uint32 = require( '@stdlib/math/base/assert/uint32-is-pow2' );

var i;

for ( i = 0; i < 100; i++ ) {
    console.log( 'isPow2( %d ) = %s', i, isPow2Uint32( i ) );
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
#include "stdlib/math/base/assert/uint32_is_pow2.h"
```

#### stdlib_base_uint32_is_pow2( x )

Tests whether an unsigned integer is a power of 2.

```c
#include <stdbool.h>

bool out = stdlib_base_uint32_is_pow2( 5 );
// returns false

out = stdlib_base_uint32_is_pow2( 2 );
// returns true
```

The function accepts the following arguments:

-   **x**: `[in] uint32_t` input value.

```c
bool stdlib_base_uint32_is_pow2( const uint32_t x );
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
#include "stdlib/math/base/assert/uint32_is_pow2.h"
#include <stdio.h>
#include <stdbool.h>
#include <stdint.h>

int main( void ) {
    const uint32_t x[] = { 0, 1, 2, 3, 4, 5, 8, 10, 16, 1024 };
    bool b;
    int i;

    for ( i = 0; i < 9; i++ ) {
        b = stdlib_base_uint32_is_pow2( x[ i ] );
        printf( "Value: %u. is a power of 2? %s.\n", x[ i ], ( b ) ? "True" : "False" );
    }
}
```

</section>s

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
