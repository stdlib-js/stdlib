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

# significandf

> Return an integer corresponding to the significand of a [single-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var significandf = require( '@stdlib/number/float32/base/significand' );
```

#### significandf( x )

Returns an integer corresponding to the significand of a [single-precision floating-point number][ieee754].

```javascript
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );

var s = significandf( toFloat32( 3.14e34 ) ); // => 10000011000010001110111
// returns 4293751

s = significandf( toFloat32( 3.14e-34 ) ); // => 10100001011000001010101
// returns 5288021

s = significandf( toFloat32( -3.14 ) ); // => 10010001111010111000011
// returns 4781507

s = significandf( 0.0 ); // => 00000000000000000000000
// returns 0

s = significandf( NaN ); // => 10000000000000000000000
// returns 4194304
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
var toFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var significandf = require( '@stdlib/number/float32/base/significand' );

var frac;
var exp;
var x;
var s;
var i;

// Generate random numbers and extract their significands...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = round( randu()*44.0 ) - 22;
    x = frac * pow( 10.0, exp );
    x = toFloat32( x );
    s = significandf( x );
    console.log( 'x: %d. significand: %d.', x, s );
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
#include "stdlib/number/float32/base/significand.h"
```

#### stdlib_base_float32_significand( x )

Returns an integer `y` corresponding to the significand of a single-precision floating-point number `x`.

```c
#include <stdint.h>

int32_t y;
stdlib_base_float32_significand( 3.14f );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
int32_t stdlib_base_float32_significand( const float x );
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
#include "stdlib/number/float32/base/significand.h"
#include <stdint.h>
#include <stdio.h>
#include <inttypes.h>

int main( void ) {
    float x[] = { 4.0f, 0.0f, -0.0f, 1.0f, -1.0f, 3.14f, -3.14f, 1.0e38f, -1.0e38f, 1.0f/0.0f, -1.0f/0.0f, 0.0f/0.0f };

    int32_t out;
    int i;
    for ( i = 0; i < 12; i++ ) {
        out = stdlib_base_float32_significand( x[ i ] );
        printf( "%f => %" PRId32 "\n", x[ i ], out );
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
