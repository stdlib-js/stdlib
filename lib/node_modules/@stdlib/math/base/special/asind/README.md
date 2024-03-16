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

# asind

> Compute the [arcsine][arcsine] in degrees of a double-precision floating-point number.

<section class="usage">

## Usage

```javascript
var asind = require( '@stdlib/math/base/special/asind' );
```

#### asind( x )

Computes the [arcsine][arcsine] (in degrees) of a double-precision floating-point number.

```javascript
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var v = asind( 0.0 );
// returns 0.0

v = asind( 0.5 );
// returns ~30.0

v = asind( sqrt( 2.0 ) / 2.0 );
// returns ~45.0

v = asind( sqrt( 3.0 ) / 2.0 );
// returns ~60.0

v = asind( NaN );
// returns NaN
```

The domain of `x` is restricted to `[-1,1]`. If `|x| > 1`, the function returns `NaN`.

```javascript
var v = asind( -3.14 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var asind = require( '@stdlib/math/base/special/asind' );

var x = linspace( -1.0, 1.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( asind( x[ i ] ) );
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
#include "stdlib/math/base/special/asind.h"
```

#### stdlib_base_asind( x )

Computes the [arcsine][arcsine] (in degrees) of a double-precision floating-point number.

```c
double out = stdlib_base_asind( 0.0 );
// returns 0.0

out = stdlib_base_asind( 0.5 );
// returns ~30.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_asind( const double x );
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
#include "stdlib/math/base/special/asind.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 1.0, 1.45, 1.89, 2.33, 2.78, 3.22, 3.66, 4.11, 4.55, 5.0 };
    
    double v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_asind( x[ i ] );
        printf( "asind(%lf) = %lf\n", x[ i ], v );
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

[arcsine]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
