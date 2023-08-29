<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# cnegf

> Negate a single-precision complex floating-point number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var cnegf = require( '@stdlib/math/base/ops/cnegf' );
```

#### cnegf( z )

Negates a single-precision complex floating-point number.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );

var z = new Complex64( -4.0, 5.0 );

var out = cnegf( z );
// returns <Complex64>

var re = realf( out );
// returns 4.0

var im = imagf( out );
// returns -5.0

z = new Complex64( 0.0, 0.0 );

out = cnegf( z );
// returns <Complex64>

re = realf( out );
// returns -0.0

im = imagf( out );
// returns -0.0

z = new Complex64( NaN, NaN );

out = cnegf( z );
// returns <Complex64>

re = realf( out );
// returns NaN

im = imagf( out );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var cnegf = require( '@stdlib/math/base/ops/cnegf' );

function randomComplex() {
    var re = discreteUniform( -50, 50 );
    var im = discreteUniform( -50, 50 );
    return new Complex64( re, im );
}

var z;
var o;
var i;

for ( i = 0; i < 100; i++ ) {
    z = randomComplex();
    o = cnegf( z );
    console.log( 'negate(%s) = %s', z.toString(), o.toString() );
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
#include "stdlib/math/base/ops/cnegf.h"
```

#### stdlib_base_cnegf( z )

Negates a single-precision complex floating-point number.

```c
#include "stdlib/complex/float32.h"
#include "stdlib/complex/realf.h"
#include "stdlib/complex/imagf.h"

stdlib_complex64_t z = stdlib_complex64( 3.0f, -2.0f );
stdlib_complex64_t out = stdlib_base_cnegf( z );

float re = stdlib_realf( out );
// returns -3.0f

float im = stdlib_imagf( out );
// returns 2.0f
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex64_t` input value.

```c
stdlib_complex64_t stdlib_base_cnegf( const stdlib_complex64_t z );
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
#include "stdlib/math/base/ops/cnegf.h"
#include "stdlib/complex/float32.h"
#include "stdlib/complex/reimf.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex64_t x[] = {
        stdlib_complex64( 3.14f, 1.5f ),
        stdlib_complex64( -3.14f, 1.5f ),
        stdlib_complex64( 0.0f, -0.0f ),
        stdlib_complex64( 0.0f/0.0f, 0.0f/0.0f )
    };

    stdlib_complex64_t v;
    stdlib_complex64_t y;
    float re;
    float im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        stdlib_reimf( v, &re, &im );
        printf( "z = %f + %fi\n", re, im );

        y = stdlib_base_cnegf( v );
        stdlib_reimf( y, &re, &im );
        printf( "cnegf(z) = %f + %fi\n", re, im );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
