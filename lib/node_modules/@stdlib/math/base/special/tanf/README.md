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

# Tangent

> Evaluate the [tangent][tangent] of a single-precision floating-point number (in radians).

<section class="intro">

The [tangent][tangent] is defined as

<!-- <equation class="equation" label="eq:tangent" align="center" raw="\tan x = \frac{\sin x}{\cos x}" alt="Tangent definition."> -->

```math
\tan x = \frac{\sin x}{\cos x}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var tanf = require( '@stdlib/math/base/special/tanf' );
```

#### tanf( x )

Evaluates the [tangent][tangent] of a single-precision floating-point number (in radians).

```javascript
var v = tanf( 0.0 );
// returns ~0.0

v = tanf( -3.141592653589793/4.0 );
// returns ~-1.0

v = tanf( 3.141592653589793/4.0 );
// returns ~1.0

v = tanf( NaN );
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
var PI = require( '@stdlib/constants/float32/pi' );
var tanf = require( '@stdlib/math/base/special/tanf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -PI/2.0, PI/2.0, opts );

logEachMap( 'tanf(%0.4f) = %0.4f', x, tanf );
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
#include "stdlib/math/base/special/tanf.h"
```

#### stdlib_base_tanf( x )

Evaluates the [tangent][tangent] of a single-precision floating-point number (in radians).

```c
float y = stdlib_base_tanf( -3.141592653589793f / 4.0f );
// returns ~-1.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_tanf( const float x );
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
#include "stdlib/math/base/special/tanf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 0.0f, 0.523f, 0.785f, 1.047f, 3.14f };

    float y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_tanf( x[ i ] );
        printf( "tanf(%f) = %f\n", x[ i ], y );
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

[tangent]: http://mathworld.wolfram.com/Tangent.html

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
