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

# exponent

> Return an integer corresponding to the unbiased exponent of a [half-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var exponent = require( '@stdlib/number/float16/base/exponent' );
```

#### exponent( x )

Returns an integer corresponding to the unbiased exponent of a [half-precision floating-point number][ieee754].

```javascript
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );

var exp = exponent( toFloat16( 3.14e4 ) ); // => 2^15 ≈ 3.27e4
// returns 15

exp = exponent( toFloat16( 3.14e-4 ) ); // => 2^-12 ≈ 2.44e-4
// returns -12

exp = exponent( toFloat16( -3.14 ) );
// returns 1

exp = exponent( 0.0 );
// returns -15

exp = exponent( NaN );
// returns 16
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pow = require( '@stdlib/math/base/special/pow' );
var toFloat16 = require( '@stdlib/number/float64/base/to-float16' );
var exponent = require( '@stdlib/number/float16/base/exponent' );

var frac;
var exp;
var x;
var e;
var i;

// Generate random numbers and extract their exponents...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = round( randu()*13.0 ) - 7;
    x = frac * pow( 10.0, exp );
    x = toFloat16( x );
    e = exponent( x );
    console.log( 'x: %d. unbiased exponent: %d.', x, e );
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
#include "stdlib/number/float16/base/exponent.h"
```

#### stdlib_base_float16_exponent( x )

Returns an integer corresponding to the unbiased exponent of a [half-precision floating-point number][ieee754].

```c
#include "stdlib/number/float16/ctor.h"
#include <stdint.h>

stdlib_float16_t x = stdlib_float16_from_bits( 51648 ); // => -11.5
int16_t out = stdlib_base_float16_exponent( x );
```

The function accepts the following arguments:

-   **x**: `[in] stdlib_float16_t` input value.

```c
int16_t stdlib_base_float16_exponent( const stdlib_float16_t x );
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
#include "stdlib/number/float16/base/exponent.h"
#include "stdlib/number/float16/ctor.h"
#include "stdlib/number/float32/base/to_float16.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    const float x[] = { 4.0f, 0.0f, -0.0f, 1.0f, -1.0f, 3.14f, -3.14f, 1.0e38f, -1.0e38f, 1.0f/0.0f, -1.0f/0.0f, 0.0f/0.0f };

    stdlib_float16_t v;
    int16_t out;
    int i;
    for ( i = 0; i < 12; i++ ) {
        v = stdlib_base_float32_to_float16( x[ i ] );
        out = stdlib_base_float16_exponent( v );
        printf( "%f => out: %" PRId16 "\n", x[ i ], out );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
