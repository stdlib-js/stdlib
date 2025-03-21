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

# xlogyf

> Compute `x * ln(y)` so that the result is `0` if `x = 0` for single-precision floating-point numbers `x` and `y`.

<section class="usage">

## Usage

```javascript
var xlogyf = require( '@stdlib/math/base/special/xlogyf' );
```

#### xlogyf( x, y )

Computes `x * ln(y)` so that the result is `0` if `x = 0` for single-precision floating-point numbers `x` and `y`.

```javascript
var out = xlogyf( 3.0, 2.0 );
// returns ~2.079

out = xlogyf( 1.5, 5.9 );
// returns ~2.662

out = xlogyf( 0.9, 1.0 );
// returns 0.0

out = xlogyf( 0.0, -2.0 );
// returns 0.0

out = xlogyf( 1.5, NaN );
// returns NaN

out = xlogyf( 0.0, NaN );
// returns NaN

out = xlogyf( NaN, 2.3 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var xlogyf = require( '@stdlib/math/base/special/xlogyf' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = randu();
    if ( x < 0.5 ) {
        x = 0.0;
    }
    y = ( randu() * 20.0 ) - 5.0;
    console.log( 'xlogyf(%d, %d) = %d', x, y, xlogyf( x, y ) );
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
#include "stdlib/math/base/special/xlogyf.h"
```

#### stdlib_base_xlogyf( x, y )

Computes `x * ln(y)` so that the result is `0` if `x = 0` for single-precision floating-point numbers `x` and `y`.

```c
float v = stdlib_base_xlogyf( 3.0f, 2.0f );
// returns ~2.079f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **y**: `[in] float` input value.

```c
float stdlib_base_xlogyf( const float x, const float y );
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
#include "stdlib/math/base/special/xlogyf.h"
#include <stdio.h>
#include <stdlib.h>

int main( void ) {
    float out;
    float x;
    float y;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (float)rand() / (float)RAND_MAX ) * 100.0f;
        y = ( (float)rand() / (float)RAND_MAX ) * 5.0f;
        out = stdlib_base_xlogyf( x, y );
        printf( "xlogyf(%f, %f) = %f\n", x, y, out );
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
