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

# aversinf

> Compute the [inverse versed sine][inverse-versed-sine] of a single-precision floating-point number (in radians).

<section class="intro">

The [inverse versed sine][inverse-versed-sine] is defined as

<!-- <equation class="equation" label="eq:arcversine" align="center" raw="\operatorname{aversinf}(\theta) = \arccos(1-\theta)" alt="Inverse versed sine."> -->

```math
\mathop{\mathrm{aversinf}}(\theta) = \arccos(1-\theta)
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var aversinf = require( '@stdlib/math/base/special/aversinf' );
```

#### aversinf( x )

Computes the [inverse versed sine][inverse-versed-sine] of a single-precision floating-point number (in radians).

```javascript
var v = aversinf( 0.0 );
// returns 0.0

v = aversinf( 3.141592653589793 / 2.0 );
// returns ~2.1783

v = aversinf( 3.141592653589793 / 6.0 );
// returns ~1.0742
```

If `x < 0`, `x > 2`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = aversinf( -1.0 );
// returns NaN

v = aversinf( 3.14 );
// returns NaN

v = aversinf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var aversinf = require( '@stdlib/math/base/special/aversinf' );

var x = linspace( 0.0, 2.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( aversinf( x[ i ] ) );
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
#include "stdlib/math/base/special/aversinf.h"
```

#### stdlib_base_aversinf( x )

Computes the [inverse versed sine][inverse-versed-sine] of a single-precision floating-point number (in radians).

```c
float out = stdlib_base_aversinf( 3.141592653589793f / 2.0f );
// returns ~2.1783f
```

If `x < 0`, `x > 2`, or `x` is `NaN`, the function returns `NaN`.

```c
float out = stdlib_base_aversinf( 3.141592653589793f );
// returns NaN
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_aversinf( const float x );
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
#include "stdlib/math/base/special/aversinf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -2.5f, -2.0f, -1.5f, -1.0f, -0.5f, 0.5f, 1.0f, 1.5f, 2.0f, 2.5f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_aversinf( x[ i ] );
        printf( "aversinf(%f) = %f\n", x[ i ], v );
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

[inverse-versed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
