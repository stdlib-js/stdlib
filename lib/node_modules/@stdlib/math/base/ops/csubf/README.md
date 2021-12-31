<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# csubf

> Subtract two single-precision complex floating-point numbers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var csubf = require( '@stdlib/math/base/ops/csubf' );
```

#### csubf( z1, z2 )

Subtracts two single-precision complex floating-point numbers.

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var real = require( '@stdlib/complex/real' );
var imag = require( '@stdlib/complex/imag' );

var z1 = new Complex64( 5.0, 3.0 );
var z2 = new Complex64( -2.0, 1.0 );

var v = csubf( z1, z2 );
// returns <Complex64>

var re = real( v );
// returns 7.0

var im = imag( v );
// returns 2.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex/float32' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var csubf = require( '@stdlib/math/base/ops/csubf' );

var rand;
var z1;
var z2;
var z3;
var i;

rand = discreteUniform( -50, 50 );
for ( i = 0; i < 100; i++ ) {
    z1 = new Complex64( rand(), rand() );
    z2 = new Complex64( rand(), rand() );
    z3 = csubf( z1, z2 );
    console.log( '(%s) - (%s) = %s', z1.toString(), z2.toString(), z3.toString() );
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
#include "stdlib/math/base/ops/csubf.h"
```

#### stdlib_base_csubf( z1, z2 )

Subtracts two single-precision complex floating-point numbers.

```c
#include <complex.h>

float complex z1 = 5.0f + 3.0f*I;
float complex z2 = -2.0f + 1.0f*I;

float complex out = stdlib_base_csubf( z1, z2 );
// returns 7.0f+2.0f*I
```

The function accepts the following arguments:

-   **z1**: `[in] float complex` input value.
-   **z2**: `[in] float complex` input value.

```c
float complex stdlib_base_csubf( const float complex z1, const float complex z2 );
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
#include "stdlib/math/base/ops/csubf.h"
#include <stdio.h>
#include <complex.h>

int main() {
    float complex x[] = { 3.14f+1.5f*I, -3.14f-1.5f*I, 0.0f+0.0f*I, 0.0f/0.0f+0.0f/0.0f*I };

    float complex v;
    float complex y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        v = x[ i ];
        y = stdlib_base_csubf( v, v );
        printf( "z = %f + %fi\ncsubf(z, z) = %f + %fi\n", crealf( v ), cimagf( v ), crealf( y ), cimagf( y ) );
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

</section>

<!-- /.links -->
