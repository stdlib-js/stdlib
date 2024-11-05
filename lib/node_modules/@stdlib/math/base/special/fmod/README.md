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

# Modulus Function

> [Modulus function][modulus-function].

<section class="intro">

The [modulus function][modulus-function] is defined as

<!-- <equation class="equation" label="eq:modulus_function" align="center" raw="z = x%y" alt="Modulus function"> -->

```math
z = x%y
```

<!-- </equation> -->

where `x` is the **dividend** and `y` is the **divisor**.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fmod = require( '@stdlib/math/base/special/fmod' );
```

#### fmod( x, y )

Evaluates the [modulus function][modulus-function].

```javascript
var v = fmod( 8.0, 3.0 );
// returns 2.0

v = fmod( 9.0, 3.0 );
// returns 0.0

v = fmod( 8.9, 3.0 );
// returns 2.9

v = fmod( NaN, 3.0 );
// returns NaN

v = fmod( 5.0, NaN );
// returns NaN

v = fmod( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var fmod = require( '@stdlib/math/base/special/fmod' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 10.0 );
    y = round( randu() * 10.0 ) - 5.0;
    console.log( '%d%%%d = %d', x, y, fmod( x, y ) );
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
#include "stdlib/math/base/special/fmod.h"
```

#### stdlib_base_fmod( x, y )

Evaluates the modulus function.

```c
double out = stdlib_base_fmod( 8.9, 3.0 );
// returns 2.9

out = stdlib_base_fmod( 4.0, 2.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` dividend.
-   **y**: `[in] double` divisor.

```c
double stdlib_base_fmod( const double x, const double y );
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
#include "stdlib/math/base/special/fmod.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    double out;
    double x;
    double y;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( ( (double)rand() / (double)RAND_MAX ) * 10.0 );
        y = ( ( (double)rand() / (double)RAND_MAX ) * 10.0 ) - 5.0;
        out = stdlib_base_fmod( x, y );
        printf( "fmod(%lf, %lf) = %lf\n", x, y, out );
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

[modulus-function]: https://en.wikipedia.org/wiki/Remainder

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
