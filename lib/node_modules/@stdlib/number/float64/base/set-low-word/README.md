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

# Set Low Word

> Set the less significant 32 bits of a [double-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var setLowWord = require( '@stdlib/number/float64/base/set-low-word' );
```

#### setLowWord( x, low )

Sets the less significant 32 bits (lower order word) of a [double-precision floating-point number][ieee754] `x` to a bit sequence represented by an unsigned 32-bit integer `low`. The returned `double` will have the same more significant 32 bits (higher order word) as `x`.

```javascript
var low = 5 >>> 0; // => 00000000000000000000000000000101

var x = 3.14e201; // => 0 11010011100 01001000001011000011 10010011110010110101100010000010

var y = setLowWord( x, low ); // => 0 11010011100 01001000001011000011 00000000000000000000000000000101
// returns 3.139998651394392e+201
```

Setting the lower order bits of `NaN` or positive or negative `infinity` will return `NaN`, as `NaN` is [defined][ieee754] as a `double` whose exponent bit sequence is all ones and whose fraction can be any bit sequence **except** all zeros. Positive and negative `infinity` are [defined][ieee754] as `doubles` with an exponent bit sequence equal to all ones and a fraction equal to all zeros. Hence, changing the less significant bits of positive and negative `infinity` converts each value to `NaN`.

```javascript
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );

var low = 12345678;

var y = setLowWord( PINF, low );
// returns NaN

y = setLowWord( NINF, low );
// returns NaN

y = setLowWord( NaN, low );
// returns NaN
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
var setLowWord = require( '@stdlib/number/float64/base/set-low-word' );

var frac;
var exp;
var low;
var x;
var y;
var i;

// Generate a random double-precision floating-point number:
frac = randu() * 10.0;
exp = -round( randu() * 323.0 );
x = frac * pow( 10.0, exp );

// Replace the lower order word of `x` to generate new random numbers having the same higher order word...
for ( i = 0; i < 100; i++ ) {
    low = round( randu()*MAX_UINT32 );
    y = setLowWord( x, low );
    console.log( 'x: %d. new low word: %d. y: %d.', x, low, y );
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
#include "stdlib/number/float64/base/set_low_word.h"
```

#### stdlib_base_float64_set_low_word( low, \*x )

Sets the less significant 32 bits of a double-precision floating-point number.

```c
#include <stdint.h>

uint32_t low = 1374389537;
double x = 3.14;

stdlib_base_float64_set_low_word( low, &x );
```

The function accepts the following arguments:

-   **low**: `[in] uint32_t` lower order word.
-   **x**: `[in-out] double*` reference to (and destination for) a double-precision floating-point number.

```c
void stdlib_base_float64_set_low_word( const uint32_t low, double *x );
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
#include "stdlib/number/float64/base/set_low_word.h"
#include <stdint.h>
#include <stdio.h>

int main() {
    uint32_t low[] = { 1374389535, 1374389545, 1374389555, 1374389565 };
    double x = 3.14;

    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_float64_set_low_word( low[ i ], &x );
        printf( "low: %u => %.15lf\n", low[ i ], x );
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
