<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Round

> Round a single-precision floating-point number to the nearest integer.

<section class="usage">

## Usage

```javascript
var roundf = require( '@stdlib/math/base/special/roundf' );
```

#### roundf( x )

Rounds a single-precision floating-point number to the nearest `integer`.

```javascript
var v = roundf( -4.2 );
// returns -4.0

v = roundf( -4.5 );
// returns -4.0

v = roundf( -4.6 );
// returns -5.0

v = roundf( 9.99999 );
// returns 10.0

v = roundf( 9.5 );
// returns 10.0

v = roundf( 9.2 );
// returns 9.0

v = roundf( 0.0 );
// returns 0.0

v = roundf( -0.0 );
// returns -0.0

v = roundf( Infinity );
// returns Infinity

v = roundf( -Infinity );
// returns -Infinity

v = roundf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Ties are rounded toward positive infinity.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var roundf = require( '@stdlib/math/base/special/roundf' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu() * 100.0 ) - 50.0;
    console.log( 'Value: %d. Rounded: %d.', x, roundf( x ) );
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
#include "stdlib/math/base/special/roundf.h"
```

#### stdlib_base_roundf( x )

Rounds a single-precision floating-point number to the nearest `integer`.

```c
float out = stdlib_base_roundf( -4.2f );
// returns -4.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_roundf( const float x );
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
#include "stdlib/math/base/special/roundf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -5.0f, -3.89f, -2.78f, -1.67f, -0.56f, 0.56f, 1.67f, 2.78f, 3.89f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_roundf( x[ i ] );
        printf( "roundf(%f) = %f\n", x[ i ], v );
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

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
