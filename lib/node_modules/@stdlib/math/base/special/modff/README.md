<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# modff

> Decompose a [single-precision floating-point number][ieee754] into integral and fractional parts.

<section class="usage">

## Usage

```javascript
var modff = require( '@stdlib/math/base/special/modff' );
```

#### modff( x )

Decomposes a [single-precision floating-point number][ieee754] into integral and fractional parts, each having the same type and sign as `x`.

```javascript
var parts = modff( 3.14 );
// returns [ 3.0, 0.1400001049041748 ]

parts = modff( +0.0 );
// returns [ +0.0, +0.0 ]

parts = modff( -0.0 );
// returns [ -0.0, -0.0 ]

parts = modff( Infinity );
// returns [ Infinity, +0.0 ]

parts = modff( -Infinity );
// returns [ -Infinity, -0.0 ]

parts = modff( NaN );
// returns [ NaN, NaN ]
```

#### modff.assign( x, out, stride, offset )

Decomposes a [single-precision floating-point number][ieee754] into integral and fractional parts, each having the same type and sign as `x`, and assigns results to a provided output array.

```javascript
var Float32Array = require( '@stdlib/array/float32' );

var out = new Float32Array( 2 );

var parts = modff.assign( 3.14, out, 1, 0 );
// returns <Float32Array>[ 3.0, 0.1400001049041748 ]

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
var f32 = require( '@stdlib/number/float64/base/to-float32' );
var modff = require( '@stdlib/math/base/special/modff' );

var parts;
var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = f32( ( randu()*1000.0 ) - 500.0 );
    parts = modff( x );
    console.log( 'modff(%d) => integral: %d. fraction: %d.', x, parts[ 0 ], parts[ 1 ] );
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
#include "stdlib/math/base/special/modff.h"
```

#### stdlib_base_modff( x, integral, frac )

Decomposes a [single-precision floating-point number][ieee754] into integral and fractional parts, each having the same type and sign as `x`.

```c
float integral;
float frac;

stdlib_base_modff( 4.0f, &integral, &frac );
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **integral**: `[out] float*` destination for the integral part.
-   **frac**: `[out] float*` destination for the fractional part.

```c
void stdlib_base_modff( const float x, float *integral, float *frac );
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
#include "stdlib/math/base/special/modff.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 4.0f, 0.0f, -0.0f, 1.0f, -1.0f, 3.14f, -3.14f, 1.0e38f, -1.0e38f, 1.0f/0.0f, -1.0f/0.0f, 0.0f/0.0f };

    float integral;
    float frac;
    int i;
    for ( i = 0; i < 12; i++ ) {
        stdlib_base_modff( x[ i ], &integral, &frac );
        printf( "x: %f => integral: %f, frac: %f\n", x[ i ], integral, frac );
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
