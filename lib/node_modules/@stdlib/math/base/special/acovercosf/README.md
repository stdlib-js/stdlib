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

# Arccovercosine

> Compute the [inverse coversed cosine][inverse-coversed-cosine] of a single-precision floating-point number (in radians).

<section class="intro">

The [inverse coversed cosine][inverse-coversed-cosine] is defined as

<!-- <equation class="equation" label="eq:arccovercosine" align="center" raw="\operatorname{acovercos}(\theta) = \arcsin(1+\theta)" alt="Inverse coversed cosine."> -->

```math
\mathop{\mathrm{acovercos}}(\theta) = \arcsin(1+\theta)
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var acovercosf = require( '@stdlib/math/base/special/acovercosf' );
```

#### acovercosf( x )

Computes the [inverse coversed cosine][inverse-coversed-cosine] of a single-precision floating-point number.

```javascript
var v = acovercosf( 0.0 );
// returns ~1.5708

v = acovercosf( -3.141592653589793 / 2.0 );
// returns ~-0.6075

v = acovercosf( -3.141592653589793 / 6.0 );
// returns ~0.4966
```

If `x < -2`, `x > 0`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = acovercosf( 1.0 );
// returns NaN

v = acovercosf( -3.14 );
// returns NaN

v = acovercosf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var acovercosf = require( '@stdlib/math/base/special/acovercosf' );

var x = linspace( -2.0, 0.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( acovercosf( x[ i ] ) );
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
#include "stdlib/math/base/special/acovercosf.h"
```

#### stdlib_base_acovercosf( x )

Computes the [inverse coversed cosine][inverse-coversed-cosine] of a single-precision floating-point number.

```c
float out = stdlib_base_acovercosf( -3.141592653589793f / 2.0f );
// returns ~-0.6075f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_acovercosf( const float x );
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
#include "stdlib/math/base/special/acovercosf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -2.0f, -1.80f, -1.78f, -1.67f, -0.56f, -0.27f, -1.67f, -0.78f, -1.89f, 0.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_acovercosf( x[ i ] );
        printf( "acovercosf(%f) = %f\n", x[ i ], v );
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

[inverse-coversed-cosine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
