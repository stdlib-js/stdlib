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

# ccis

> Evaluate the [cis][cis] function for a double-precision complex floating-point number.

<section class="intro">

The [cis][cis] function is defined as

<!-- <equation class="equation" label="eq:cis_function" align="center" raw="\operatorname{cis}(z) = e^{iz} = \cos(z) + i \sin(z)" alt="cis function"> -->

```math
\mathop{\mathrm{cis}}(z) = e^{iz} = \cos(z) + i \sin(z)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{cis}(z) = e^{iz} = \cos(z) + i \sin(z)" data-equation="eq:cis_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@d4edb68b52a6c646be5683023c5a24890300727f/lib/node_modules/@stdlib/math/base/special/ccis/docs/img/equation_cis_function.svg" alt="cis function">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ccis = require( '@stdlib/math/base/special/ccis' );
```

#### ccis( z )

Evaluates the [cis][cis] function for a double-precision complex floating-point number.

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );

var z = new Complex128( 0.0, 0.0 );

var v = ccis( z );
// returns <Complex128>

var re = real( v );
// returns 1.0

var im = imag( v );
// returns 0.0

z = new Complex128( 1.0, 0.0 );

v = ccis( z );
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
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var uniform = require( '@stdlib/random/base/uniform' );
var ccis = require( '@stdlib/math/base/special/ccis' );

var z1;
var z2;
var i;

for ( i = 0; i < 100; i++ ) {
    z1 = new Complex128( uniform( -50.0, 50.0 ), uniform( -50.0, 50.0 ) );
    z2 = ccis( z1 );
    console.log( 'ccis(%s) = %s', z1.toString(), z2.toString() );
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
#include "stdlib/math/base/special/ccis.h"
```

#### stdlib_base_ccis( z )

Evaluates the [cis][cis] function for a double-precision complex floating-point number.

```c
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/real.h"
#include "stdlib/complex/float64/imag.h"

stdlib_complex128_t z = stdlib_complex128( 0.0, 0.0 );

stdlib_complex128_t out = stdlib_base_ccis( z );

double re = stdlib_complex128_real( out );
// returns 1.0

double im = stdlib_complex128_imag( out );
// returns 0.0
```

The function accepts the following arguments:

-   **z**: `[in] stdlib_complex128_t` input value.

```c
stdlib_complex128_t stdlib_base_ccis( const stdlib_complex128_t z );
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
#include "stdlib/math/base/special/ccis.h"
#include "stdlib/complex/float64/ctor.h"
#include "stdlib/complex/float64/reim.h"
#include <stdio.h>

int main() {
    const stdlib_complex128_t x[] = {
        stdlib_complex128( 3.14, 1.5 ),
        stdlib_complex128( -3.14, 1.5 ),
        stdlib_complex128( 0.0, -0.0 ),
        stdlib_complex128( 0.0/0.0, 0.0/0.0 )
    };

    stdlib_complex128_t v;
    stdlib_complex128_t y;
    double re;
    double im;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        stdlib_complex128_reim( v, &re, &im );
        printf( "z = %lf + %lfi\n", re, im );

        y = stdlib_base_ccis( v );
        stdlib_complex128_reim( y, &re, &im );
        printf( "ccis(z) = %lf + %lfi\n", re, im );
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

[cis]: https://en.wikipedia.org/wiki/Cis_%28mathematics%29

</section>

<!-- /.links -->
