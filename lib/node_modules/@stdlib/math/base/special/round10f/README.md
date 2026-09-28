<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# round10f

> Round a single-precision floating-point number to the nearest power of 10 on a linear scale.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var round10f = require( '@stdlib/math/base/special/round10f' );
```

#### round10f( x )

Rounds a single-precision floating-point number to the nearest power of `10` on a linear scale.

```javascript
var v = round10f( -4.2 );
// returns -1.0

v = round10f( -4.5 );
// returns -1.0

v = round10f( -4.6 );
// returns -1.0

v = round10f( 9.99999 );
// returns 10.0

v = round10f( 9.5 );
// returns 10.0

v = round10f( 13.0 );
// returns 10.0

v = round10f( -13.0 );
// returns -10.0

v = round10f( 0.0 );
// returns 0.0

v = round10f( -0.0 );
// returns -0.0

v = round10f( Infinity );
// returns Infinity

v = round10f( -Infinity );
// returns -Infinity

v = round10f( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var round10f = require( '@stdlib/math/base/special/round10f' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'x: %0.4f. Rounded: %0.4f.', x, round10f );
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
#include "stdlib/math/base/special/round10f.h"
```

#### stdlib_base_round10f( x )

Rounds a single-precision floating-point number to the nearest power of `10` on a linear scale.

```c
float out = stdlib_base_round10f( 3.14f );
// returns 1.0f

out = stdlib_base_round10f( 13.0f );
// returns 10.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_round10f( const float x );
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
#include "stdlib/math/base/special/round10f.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -5.0f, -3.89f, -2.78f, -1.67f, -0.56f, 0.56f, 1.67f, 2.78f, 3.89f, 5.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_round10f( x[ i ] );
        printf( "round10f(%f) = %f\n", x[ i ], v );
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
