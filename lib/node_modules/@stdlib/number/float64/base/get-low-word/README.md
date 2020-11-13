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

# Low Word

> Return an unsigned 32-bit integer corresponding to the less significant 32 bits of a [double-precision floating-point number][ieee754].

<section class="usage">

## Usage

```javascript
var getLowWord = require( '@stdlib/number/float64/base/get-low-word' );
```

#### getLowWord( x )

Returns an unsigned 32-bit `integer` corresponding to the less significant 32 bits of a [double-precision floating-point number][ieee754].

```javascript
var w = getLowWord( 3.14e201 ); // => 10010011110010110101100010000010
// returns 2479577218
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
var getLowWord = require( '@stdlib/number/float64/base/get-low-word' );

var frac;
var exp;
var w;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    frac = randu() * 10.0;
    exp = -floor( randu()*324.0 );
    x = frac * pow( 10.0, exp );
    w = getLowWord( x );
    console.log( 'x: %d. low word: %d.', x, w );
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
#include "stdlib/number/float64/base/get_low_word.h"
```

#### stdlib_base_float64_get_low_word( x, \*low )

Extracts the unsigned 32-bit integer corresponding to the less significant 32 bits of a double-precision floating-point number.

```c
#include <stdint.h>

uint32_t low;
stdlib_base_float64_get_low_word( 3.14, &low );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **low**: `[out] uint32_t*` destination for lower order word.

```c
void stdlib_base_float64_get_low_word( const double x, uint32_t *low );
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
#include "stdlib/number/float64/base/get_low_word.h"
#include <stdint.h>
#include <stdio.h>

int main() {
    double x[] = { 3.14, -3.14, 0.0, 0.0/0.0 };

    uint32_t low;
    int i;
    for ( i = 0; i < 4; i++ ) {
        stdlib_base_float64_get_low_word( x[ i ], &low );
        printf( "%lf => low: %u\n", x[ i ], low );
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
