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

# Set High Word

> Set the more significant 32 bits of a [double-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var setHighWord = require( '@stdlib/number/float64/base/set-high-word' );
```

#### setHighWord( x, high )

Sets the more significant 32 bits (higher order word) of a [double-precision floating-point number][ieee754] `x` to a bit sequence represented by an unsigned 32-bit integer `high`. The returned `double` will have the same less significant 32 bits (lower order word) as `x`.

```javascript
var high = 5 >>> 0; // => 0 00000000000 00000000000000000101

var y = setHighWord( 3.14e201, high ); // => 0 00000000000 0000000000000000010110010011110010110101100010000010
// returns 1.18350528745e-313

var PINF = require( '@stdlib/constants/float64/pinf' ); // => 0 11111111111 00000000000000000000 00000000000000000000000000000000

high = 1072693248 >>> 0; // => 0 01111111111 00000000000000000000

// Set the higher order bits of `+infinity` to return `1`:
y = setHighWord( PINF, high ); // => 0 01111111111 0000000000000000000000000000000000000000000000000000
// returns 1.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var pow = require( '@stdlib/math/base/special/pow' );
var round = require( '@stdlib/math/base/special/round' );
var randu = require( '@stdlib/random/base/randu' );
var MAX_UINT32 = require( '@stdlib/constants/uint32/max' );
var setHighWord = require( '@stdlib/number/float64/base/set-high-word' );

var high;
var frac;
var exp;
var x;
var y;
var i;

// Generate a random double-precision floating-point number:
frac = randu() * 10.0;
exp = -round( randu() * 323.0 );
x = frac * pow( 10.0, exp );

// Replace the higher order word of `x` to generate new random numbers having the same lower order word...
for ( i = 0; i < 100; i++ ) {
    high = round( randu()*MAX_UINT32 );
    y = setHighWord( x, high );
    console.log( 'x: %d. new high word: %d. y: %d.', x, high, y );
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
#include "stdlib/number/float64/base/set_high_word.h"
```

#### stdlib_base_float64_set_high_word( high, \*x )

Sets the more significant 32 bits of a double-precision floating-point number.

```c
#include <stdint.h>

uint32_t high = 1074339512;
double x = 0.0;

stdlib_base_float64_set_high_word( high, &x );
```

The function accepts the following arguments:

-   **high**: `[in] uint32_t` higher order word.
-   **x**: `[in-out] double*` reference to (and destination for) a double-precision floating-point number.

```c
void stdlib_base_float64_set_high_word( const uint32_t high, double *x );
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
#include "stdlib/number/float64/base/set_high_word.h"
#include <stdint.h>
#include <stdio.h>

int main() {
    uint32_t high[] = { 1074339512, 1074339513, 1074339514, 1074339515 };
    double x = 3.14;

    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_float64_set_high_word( high[ i ], &x );
        printf( "high: %u => %lf\n", high[ i ], x );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
