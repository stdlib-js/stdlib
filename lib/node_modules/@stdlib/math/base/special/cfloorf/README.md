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

# cfloorf

> Round a single-precision complex floating-point number toward negative infinity.

<section class="usage">

## Usage

```javascript
var cfloorf = require( '@stdlib/math/base/special/cfloorf' );
```

#### cfloorf( z )

Rounds a single-precision complex floating-point number toward negative infinity.

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var real = require( '@stdlib/complex/float32/real' );
var imag = require( '@stdlib/complex/float32/imag' );

var v = cfloorf( new Complex64( -4.2, 5.5 ) );
// returns <Complex64>

var re = real( v );
// returns -5.0

var im = imag( v );
// returns 5.0

v = cfloorf( new Complex64( 9.99999, 0.1 ) );
// returns <Complex64>

re = real( v );
// returns 9.0

im = imag( v );
// returns 0.0

v = cfloorf( new Complex64( 0.0, 0.0 ) );
// returns <Complex64>

re = real( v );
// returns 0.0

im = imag( v );
// returns 0.0

v = cfloorf( new Complex64( NaN, NaN ) );
// returns <Complex64>

re = real( v );
// returns NaN

im = imag( v );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var uniform = require( '@stdlib/random/base/uniform' ).factory;
var cfloorf = require( '@stdlib/math/base/special/cfloorf' );

var rand = uniform( -50.0, 50.0 );
var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex64( rand(), rand() );
    console.log( 'cfloorf(%s) = %s', z, cfloorf( z ) );
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
#include "stdlib/math/base/special/cfloorf.h"
```

#### stdlib_base_cfloorf( z )

Rounds a single-precision complex floating-point number toward negative infinity.

```c
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/real.h"
#include "stdlib/complex/float32/imag.h"

stdlib_complex64_t z = stdlib_complex64( 2.5f, -1.5f );

stdlib_complex64_t out = stdlib_base_cfloorf( z );

float re = stdlib_complex64_real( out );
// returns 2.0f

float im = stdlib_complex64_imag( out );
// returns -2.0f
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` input value.

```c
stdlib_complex64_t stdlib_base_cfloorf( const stdlib_complex64_t z );
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
#include "stdlib/math/base/special/cfloorf.h"
#include "stdlib/complex/float32/ctor.h"
#include "stdlib/complex/float32/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.5f ),
        stdlib_complex64( -3.14f, -1.5f ),
        stdlib_complex64( 0.0f, 0.0f ),
        stdlib_complex64( 0.0f / 0.0f, 0.0f / 0.0f )
    };

    stdlib_complex64_t v;
    stdlib_complex64_t y;
    float re1;
    float im1;
    float re2;
    float im2;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cfloorf( v );
        stdlib_complex64_reim( v, &re1, &im1 );
        stdlib_complex64_reim( y, &re2, &im2 );
        printf( "cfloorf(%f + %fi) = %f + %fi\n", re1, im1, re2, im2 );
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
