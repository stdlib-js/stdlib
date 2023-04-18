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

# exp

> Evaluate the [exponential][exponential-function] function for a double-precision complex floating-point number.

<section class="intro">

The [exponential][exponential-function] function of a complex number is defined as

<!-- <equation class="equation" label="eq:cexp_function" align="center" raw="\operatorname{exp}(z) = e^{x + i y} = (\exp{x}) (\cos(y) + i \sin(y))" alt="Complex exponential function"> -->

```math
\operatorname{exp}(z) = e^{x + i y} = (\exp{x}) (\cos(y) + i \sin(y))
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{exp}(z) = e^{x + i y} = (\exp{x}) (\cos(y) + i \sin(y))" data-equation="eq:cexp_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d4edb68b52a6c646be5683023c5a24890300727f/lib/node_modules/@stdlib/math/base/special/cexp/docs/img/equation_cexp_function.svg" alt="Complex exponential function">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cexp = require( '@stdlib/math/base/special/cexp' );
```

#### cexp( z )

Evaluates the [exponential][exponential-function] function for a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );

var v = cexp( new Complex128( 0.0, 0.0 ) );
// returns <Complex128>

var re = real( v );
// returns 1.0

var im = imag( v );
// returns 0.0

v = cexp( new Complex128( 0.0, 1.0 ) );
// returns <Complex128>

re = real( v );
// returns ~0.540

im = imag( v );
// returns ~0.841
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var cexp = require( '@stdlib/math/base/special/cexp' );

function randomComplex() {
    var re = discreteUniform( -50, 50 );
    var im = discreteUniform( -50, 50 );
    return new Complex128( re, im );
}

var z1;
var z2;
var i;
for ( i = 0; i < 100; i++ ) {
    z1 = randomComplex();
    z2 = cexp( z1 );
    console.log( 'cexp(%s) = %s', z1.toString(), z2.toString() );
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
#include "stdlib/math/base/special/cexp.h"
```

#### stdlib_base_cexp( z )

Evaluates the [exponential][exponential-function] function for a double-precision complex floating-point number.

```c
#include "stdlib/complex/float64.h"
#include "stdlib/complex/real.h"
#include "stdlib/complex/imag.h"

stdlib_complex128_t z = stdlib_complex128( 0.0, 0.0 );
stdlib_complex128_t out = stdlib_base_cexp( z );

double re = stdlib_real( out );
// returns 1.0

double im = stdlib_imag( out );
// returns 0.0
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_cexp( const stdlib_complex128_t z );
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
#include "stdlib/math/base/special/cexp.h"
#include "stdlib/complex/float64.h"
#include "stdlib/complex/reim.h"
#include <stdio.h>

int main( void ) {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.5 ),
        stdlib_complex128( -3.14, -1.5 ),
        stdlib_complex128( 0.0, 0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    stdlib_complex128_t v;
    stdlib_complex128_t y;
    double re1;
    double im1;
    double re2;
    double im2;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_cexp( v );
        stdlib_reim( v, &re1, &im1 );
        stdlib_reim( y, &re2, &im2 );
        printf( "cexp(%lf + %lfi) = %lf + %lfi\n", re1, im1, re2, im2 );
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

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

</section>

<!-- /.links -->
