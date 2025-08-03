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

# sincf

> Compute the [cardinal sine][sinc] of a single-precision floating-point number (in radians).

<section class="intro">

The normalized [cardinal sine][sinc] function is defined as

<!-- <equation class="equation" label="eq:sinc_function" align="center" raw="\operatorname{sinc}(x) := \begin{cases} \frac {\sin(\pi x)}{\pi x} & \textrm{if}\ x \neq 0 \\ 1 & \textrm{if}\ x = 0 \end{cases}" alt="Sinc function"> -->

```math
\mathop{\mathrm{sinc}}(x) := \begin{cases} \frac {\sin(\pi x)}{\pi x} & \textrm{if}\ x \neq 0 \\ 1 & \textrm{if}\ x = 0 \end{cases}
```

<!-- </equation> -->

for any real number `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var sincf = require( '@stdlib/math/base/special/sincf' );
```

#### sincf( x )

Computes the normalized [cardinal sine][sinc] of a single-precision floating-point number (in radians).

```javascript
var v = sincf( 0.5 );
// returns ~0.637

v = sincf( -1.2 );
// returns ~-0.156

v = sincf( 0.0 );
// returns 1.0

v = sincf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var sincf = require( '@stdlib/math/base/special/sincf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -5.0, 5.0, opts );

logEachMap( 'sincf( %0.4f ) = %0.4f', x, sincf );
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
#include "stdlib/math/base/special/sincf.h"
```

#### stdlib_base_sincf( x )

Computes the normalized [cardinal sine][sinc] of a single-precision floating-point number (in radians).

```c
float y = stdlib_base_sincf( 0.5f );
// returns ~0.637f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_sincf( const float x );
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
#include "stdlib/math/base/special/sincf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.0f, 0.523f, 0.785f, 1.047f, 3.14f };

    float y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_sincf( x[ i ] );
        printf( "sincf(%f) = %f\n", x[ i ], y );
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

[sinc]: https://en.wikipedia.org/wiki/Sinc_function

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
