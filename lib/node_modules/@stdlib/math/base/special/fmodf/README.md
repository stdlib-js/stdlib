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

> Evaluate the [Modulus function][modulus-function] for single-precision floating-point numbers.

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
var fmodf = require( '@stdlib/math/base/special/fmodf' );
```

#### fmodf( x, y )

Evaluates the [Modulus function][modulus-function] for single-precision floating-point numbers.

```javascript
var v = fmodf( 8.0, 3.0 );
// returns 2.0

v = fmodf( 9.0, 3.0 );
// returns 0.0

v = fmodf( 8.9, 3.0 );
// returns ~2.9

v = fmodf( NaN, 3.0 );
// returns NaN

v = fmodf( 5.0, NaN );
// returns NaN

v = fmodf( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var fmodf = require( '@stdlib/math/base/special/fmodf' );

var x = discreteUniform( 10, 0.0, 100.0 );
var y = discreteUniform( 10, -50.0, 50.0 );
var i;

for ( i = 0; i < 10; i++ ) {
    console.log( '%f%%%f = %f', x[ i ], y[ i ], fmodf( x[ i ], y[ i ] ) );
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
#include "stdlib/math/base/special/fmodf.h"
```

#### stdlib_base_fmodf( x, y )

Evaluates the [Modulus function][modulus-function] for single-precision floating-point numbers.

```c
float out = stdlib_base_fmodf( 8.9f, 3.0f );
// returns 2.9f

out = stdlib_base_fmodf( 4.0f, 2.0f );
// returns 0.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` dividend.
-   **y**: `[in] float` divisor.

```c
float stdlib_base_fmodf( const float x, const float y );
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
#include "stdlib/math/base/special/fmodf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float x[ 100 ];
    float y[ 100 ];
    float out;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x[ i ] = ( ( (float)rand() / (float)RAND_MAX ) * 10.0f );
        y[ i ] = ( ( (float)rand() / (float)RAND_MAX ) * 10.0f ) - 5.0f;
    }

    for ( i = 0; i < 100; i++ ) {
        out = stdlib_base_fmodf( x[ i ], y[ i ] );
        printf( "fmodf(%f, %f) = %f\n", x[ i ], y[ i ], out );
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
