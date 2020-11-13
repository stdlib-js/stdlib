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

# Words

> Split a [double-precision floating-point number][ieee754] into a higher order word and a lower order word.

<section class="usage">

## Usage

```javascript
var toWords = require( '@stdlib/number/float64/base/to-words' );
```

#### toWords( \[out,] x )

Splits a [double-precision floating-point number][ieee754] into a higher order word (unsigned 32-bit `integer`) and a lower order word (unsigned 32-bit `integer`).

```javascript
var w = toWords( 3.14e201 );
// returns [ 1774486211, 2479577218 ]
```

By default, the function returns an `array` containing two elements: a higher order word and a lower order word. The lower order word contains the less significant bits, while the higher order word contains the more significant bits and includes the exponent and sign.

```javascript
var w = toWords( 3.14e201 );
// returns [ 1774486211, 2479577218 ]

var high = w[ 0 ];
// returns 1774486211

var low = w[ 1 ];
// returns 2479577218
```

To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Uint32Array = require( '@stdlib/array/uint32' );

var out = new Uint32Array( 2 );

var w = toWords( out, 3.14e201 );
// returns <Uint32Array>[ 1774486211, 2479577218 ]

var bool = ( w === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var floor = require( '@stdlib/math/base/special/floor' );
var randu = require( '@stdlib/random/base/randu' );
var pow = require( '@stdlib/math/base/special/pow' );
var toWords = require( '@stdlib/number/float64/base/to-words' );

var frac;
var exp;
var w;
var x;
var i;

// Generate random numbers and split into words...
for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = -floor( randu()*324.0 );
    x = frac * pow( 10.0, exp );
    w = toWords( x );
    console.log( 'x: %d. higher: %d. lower: %d.', x, w[ 0 ], w[ 1 ] );
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
#include "stdlib/number/float64/base/to_words.h"
```

#### stdlib_base_float64_to_words( x, \*high, \*low )

Splits a double-precision floating-point number into a higher order word and a lower order word.

```c
#include <stdint.h>

uint32_t high;
uint32_t low;

stdlib_base_float64_to_words( 3.14, &high, &low );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **high**: `[out] uint32_t*` destination for higher order word.
-   **low**: `[out] uint32_t*` destination for lower order word.

```c
void stdlib_base_float64_to_words( const double x, uint32_t *high, uint32_t *low );
```

#### stdlib_base_float64_words_t

An opaque type definition for a union for converting between a double-precision floating-point number and two unsigned 32-bit integers.

```c
#include <stdint.h>

stdlib_base_float64_words_t w;

// Assign a double-precision floating-point number:
w.value = 3.14;

// Extract the high and low words:
uint32_t high = w.words.high;
uint32_t low = w.words.low;
```

The union has the following members:

-   **value**: `double` double-precision floating-point number.

-   **words**: `struct` struct having the following members:

    -   **high**: `uint32_t` higher order word.
    -   **low**: `uint32_t` lower order word.

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
#include "stdlib/number/float64/base/to_words.h"
#include <stdint.h>
#include <stdio.h>

int main() {
    double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    uint32_t high;
    uint32_t low;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_float64_to_words( x[ i ], &high, &low );
        printf( "%lf => high: %u, low: %u\n", x[ i ], high, low );
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
