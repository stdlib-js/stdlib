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

# toFloat32

> Convert a [half-precision floating-point number][half-precision-floating-point-format] to the nearest [single-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var float16ToFloat32 = require( '@stdlib/number/float16/base/to-float32' );
```

#### float16ToFloat32( x )

Converts a [half-precision floating-point number][half-precision-floating-point-format] to the nearest [single-precision floating-point number][ieee754].

```javascript
var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );

var y = float16ToFloat32( float64ToFloat16( 1.337 ) );
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
var float64ToFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var uniform = require( '@stdlib/random/array/uniform' );
var map = require( '@stdlib/array/base/map' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var pickArguments = require( '@stdlib/utils/pick-arguments' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var float16ToFloat32 = require( '@stdlib/number/float16/base/to-float32' );

// Generate an array of random numbers:
var f64 = uniform( 100, 0.0, 100.0 );

// Convert each value to a half-precision floating-point number:
var f16 = map( f64, naryFunction( float64ToFloat16, 1 ) );

// Convert each half-precision floating-point number to the nearest single-precision floating-point number:
logEachMap( 'float64: %f => float16: %f => float32: %f', f64, f16, pickArguments( float16ToFloat32, [ 1 ] ) );
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
#include "stdlib/number/float16/base/to_float32.h"
```

#### stdlib_base_float16_to_float32( x )

Converts a [half-precision floating-point number][half-precision-floating-point-format] to the nearest [single-precision floating-point number][ieee754].

```c
#include "stdlib/number/float16/ctor.h"

stdlib_float16_t v = stdlib_float16_from_bits( 51648 ); // => -11.5
float x = stdlib_base_float16_to_float32( v );
```

The function accepts the following arguments:

-   **x**: `[in] stdlib_float16_t` half-precision floating-point number.

```c
float stdlib_base_float16_to_float32( const stdlib_float16_t x );
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
#include "stdlib/number/float16/base/to_float32.h"
#include "stdlib/number/float16/ctor.h"
#include <stdint.h>
#include <stdio.h>

int main( void ) {
    const stdlib_float16_t x[] = {
        stdlib_float16_from_bits( 51648 ), // -11.5
        stdlib_float16_from_bits( 18880 )  // 11.5
    };

    float v;
    int i;
    for ( i = 0; i < 2; i++ ) {
        v = stdlib_base_float16_to_float32( x[ i ] );
        printf( "float16 bits: %u => float32: %f\n", stdlib_float16_to_bits( x[ i ] ), v );
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
