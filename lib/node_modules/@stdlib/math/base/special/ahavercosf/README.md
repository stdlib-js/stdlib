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

# ahavercosf

> Compute the [inverse half-value versed cosine][archavercosine] of a single-precision floating point number.

<section class="intro">

The [inverse half-value versed cosine][archavercosine] is defined as

<!-- <equation class="equation" label="eq:archavercosine" align="center" raw="\operatorname{ahavercos}(\theta) = 2 \cdot \arccos(\sqrt{\theta})" alt="Inverse half-value versed cosine."> -->

```math
\mathop{\mathrm{ahavercos}}(\theta) = 2 \cdot \arccos(\sqrt{\theta})
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{ahavercos}(\theta) = 2 \cdot \arccos(\sqrt{\theta})" data-equation="eq:archavercosine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/ahavercos/docs/img/equation_archavercosine.svg" alt="Inverse half-value versed cosine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var ahavercosf = require( '@stdlib/math/base/special/ahavercosf' );
```

#### ahavercosf( x )

Computes the [inverse half-value versed cosine][archavercosine] of a single-precision floating point number (in radians).

```javascript
var v = ahavercosf( 0.0 );
// returns ~3.1416

v = ahavercosf( 1.0 );
// returns 0.0

v = ahavercosf( 0.5 );
// returns ~1.5708
```

If `x < 0`, `x > 1`, or `x` is `NaN`, the function returns `NaN`.

```javascript
var v = ahavercosf( 1.5 );
// returns NaN

v = ahavercosf( -3.14 );
// returns NaN

v = ahavercosf( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var ahavercosf = require( '@stdlib/math/base/special/ahavercosf' );

var x = linspace( 0.0, 1.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( ahavercosf( x[ i ] ) );
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
#include "stdlib/math/base/special/ahavercosf.h"
```

#### stdlib_base_ahavercosf( x )

Computes the [inverse half-value versed cosine][archavercosine] of a single-precision floating-point number (in radians).

```c
float out = stdlib_base_ahavercosf( 0.0f );
// returns ~3.1416f
```

If `x < 0`, `x > 1`, or `x` is `NaN`, the function returns `NaN`.

```c
float out = stdlib_base_ahavercosf( -3.14f );
// returns NaN
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_ahavercosf( const float x );
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
#include "stdlib/math/base/special/ahavercosf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -2.0f, -1.6f, -1.2f, -0.8f, -0.4f, 0.4f, 0.8f, 1.2f, 1.6f, 2.0f };
    
    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_ahavercosf( x[ i ] );
        printf( "ahavercosf(%f) = %f\n", x[ i ], v );
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

[archavercosine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
