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

# toFloat16

> Convert a [single-precision floating-point number][ieee754] to the nearest [half-precision floating-point number][half-precision-floating-point-format].

<section class="usage">

## Usage

```javascript
var float32ToFloat16 = require( '@stdlib/number/float32/base/to-float16' );
```

#### float32ToFloat16( x )

Converts a [single-precision floating-point number][ieee754] to the nearest [half-precision floating-point number][half-precision-floating-point-format].

```javascript
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );

var y = float32ToFloat16( float64ToFloat32( 1.337 ) );
// returns 1.3369140625
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
var uniform = require( '@stdlib/random/array/uniform' );
var pickArguments = require( '@stdlib/utils/pick-arguments' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var float32ToFloat16 = require( '@stdlib/number/float32/base/to-float16' );

// Generate an array of random numbers:
var f32 = uniform( 100, 0.0, 100.0, {
    'dtype': 'float32'
});

// Convert each single-precision floating-point number to the nearest half-precision floating-point number:
logEachMap( 'float32: %f => float16: %f', f32, pickArguments( float32ToFloat16, [ 1 ] ) );
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
#include "stdlib/number/float32/base/to_float16.h"
```

#### stdlib_base_float32_to_float16( x )

Converts a [single-precision floating-point number][ieee754] to the nearest [half-precision floating-point number][half-precision-floating-point-format].

```c
#include "stdlib/number/float16/ctor.h"

stdlib_float16_t x = stdlib_base_float32_to_float16( 3.14f );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
stdlib_float16_t stdlib_base_float32_to_float16( const float x );
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
#include "stdlib/number/float32/base/to_float16.h"
#include "stdlib/number/float16/ctor.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.14f, -3.14f, 0.0f, 0.0f/0.0f };

    stdlib_float16_t v;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = stdlib_base_float32_to_float16( x[ i ] );
        printf( "%f => uint16: %d\n", x[ i ], stdlib_float16_to_bits( v ) );
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

[half-precision-floating-point-format]: https://en.wikipedia.org/wiki/Half-precision_floating-point_format

</section>

<!-- /.links -->
