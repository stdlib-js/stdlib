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

# modf

> Decompose a [double-precision floating-point number][ieee754] into integral and fractional parts.

<section class="usage">

## Usage

```javascript
var modf = require( '@stdlib/math/base/special/modf' );
```

#### modf( x )

Decomposes a [double-precision floating-point number][ieee754] into integral and fractional parts, each having the same type and sign as `x`.

```javascript
var parts = modf( 3.14 );
// returns [ 3.0, 0.14000000000000012 ]

parts = modf( +0.0 );
// returns [ +0.0, +0.0 ]

parts = modf( -0.0 );
// returns [ -0.0, -0.0 ]

parts = modf( Infinity );
// returns [ Infinity, +0.0 ]

parts = modf( -Infinity );
// returns [ -Infinity, -0.0 ]

parts = modf( NaN );
// returns [ NaN, NaN ]
```

#### modf.assign( x, out, stride, offset )

Decomposes a [double-precision floating-point number][ieee754] into integral and fractional parts, each having the same type and sign as `x`, and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var out = new Float64Array( 2 );

var parts = modf.assign( 3.14, out, 1, 0 );
// returns <Float64Array>[ 3.0, 0.14000000000000012 ]

var bool = ( parts === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var modf = require( '@stdlib/math/base/special/modf' );

var parts;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*1000.0) - 500.0;
    parts = modf( x );
    console.log( 'modf(%d) => integral: %d. fraction: %d.', x, parts[ 0 ], parts[ 1 ] );
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
#include "stdlib/math/base/special/modf.h"
```

#### stdlib_base_modf( x, integral, frac )

Decomposes a [double-precision floating-point number][ieee754] into integral and fractional parts, each having the same type and sign as `x`.

```c
double integral;
double frac;

stdlib_base_modf( 4.0, &integral, &frac );
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **frac**: `[out] double*` destination for the integral part.
-   **exp**: `[out] double*` destination for the fractional part.

```c
void stdlib_base_modf( const double x, double *integral, double *frac );
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
#include "stdlib/math/base/special/modf.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 4.0, 0.0, -0.0, 1.0, -1.0, 3.14, -3.14, 1.0e308, -1.0e308, 1.0/0.0, -1.0/0.0, 0.0/0.0 };

    double integral;
    double frac;
    int i;
    for ( i = 0; i < 12; i++ ) {
        stdlib_base_modf( x[ i ], &integral, &frac );
        printf( "x: %lf => integral: %lf, frac: %lf\n", x[ i ], integral, frac );
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

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
