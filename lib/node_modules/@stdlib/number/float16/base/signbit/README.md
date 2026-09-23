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

# signbit

> Return a boolean indicating if the sign bit for a [half-precision floating-point number][ieee754] is on (true) or off (false).

<section class="usage">

## Usage

```javascript
var signbit = require( '@stdlib/number/float16/base/signbit' );
```

#### signbit( x )

Returns a boolean indicating if the sign bit for a [half-precision floating-point number][ieee754] is on (`true`) or off (`false`).

```javascript
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );

var bool = signbit( toFloat16( 4.0 ) );
// returns false

bool = signbit( toFloat16( -5.960464477539063e-8 ) );
// returns true

bool = signbit( 0.0 );
// returns false

bool = signbit( -0.0 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var uniform = require( '@stdlib/random/array/uniform' );
var map = require( '@stdlib/array/base/map' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var signbit = require( '@stdlib/number/float16/base/signbit' );

// Create an array of random half-precision floating-point numbers:
var x = map( uniform( 100, -50.0, 50.0 ), toFloat16 );

// Determine whether the sign bit is on or off for each number:
logEachMap( 'x: %0.4f => %s', x, signbit );
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
#include "stdlib/number/float16/base/signbit.h"
```

#### stdlib_base_float16_signbit( x )

Returns an integer indicating whether the sign bit for a half-precision floating-point number is on (`1`) or off (`0`).

```c
#include "stdlib/number/float16/ctor.h"
#include <stdint.h>

stdlib_float16_t x = stdlib_float16_from_bits( 51648 ); // => -11.5
int8_t out = stdlib_base_float16_signbit( x );
```

The function accepts the following arguments:

-   **x**: `[in] stdlib_float16_t` input value.

```c
int8_t stdlib_base_float16_signbit( const stdlib_float16_t x );
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
#include "stdlib/number/float16/base/signbit.h"
#include "stdlib/number/float16/ctor.h"
#include "stdlib/number/float32/base/to_float16.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, -0.0f, 4.0f, 1.0f, -1.0f, 1.0e38f, -1.0e38f };

    stdlib_float16_t v;
    int8_t out;
    int i;
    for ( i = 0; i < 9; i++ ) {
        v = stdlib_base_float32_to_float16( x[ i ] );
        out = stdlib_base_float16_signbit( v );
        printf( "%f => signbit: %" PRId8 "\n", x[ i ], out );
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

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
