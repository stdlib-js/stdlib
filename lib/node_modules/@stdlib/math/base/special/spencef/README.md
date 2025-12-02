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

# spencef

> [Spence's function][spence] (the dilogarithm) for a single-precision floating-point number.

<section class="intro">

The dilogarithm is defined as

<!-- <equation class="equation" label="eq:dilogarithm" align="center" raw="\operatorname{Li}_{2}(z) = -\int_{0}^{z}{\ln(1-u) \over u}\,du{\text{, }}z\in \mathbb {C}" alt="Dilogarithm."> -->

```math
\mathop{\mathrm{Li}}_{2}(z) = -\int_{0}^{z}{\ln(1-u) \over u}\,du{\text{, }}z\in \mathbb {C}
```

<!-- </equation> -->

or also alternatively as

<!-- <equation class="equation" label="eq:dilogarithm_alt" align="center" raw="\int _{1}^{v}{\frac {\ln t}{1-t}}dt=\operatorname {Li} _{2}(1-v)." alt="Alternative definition of dilogarithm."> -->

```math
\int _{1}^{v}{\frac {\ln t}{1-t}}dt=\operatorname {Li} _{2}(1-v).
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var spencef = require( '@stdlib/math/base/special/spencef' );
```

#### spencef( x )

Evaluates [Spence's function][spence] (the dilogarithm) for a single-precision floating-point number.

```javascript
var v = spencef( 3.0 );
// returns ~-1.437

v = spencef( 0.0 );
// returns ~1.645

v = spencef( NaN );
// returns NaN
```

For negative numbers, the dilogarithm is **not** defined.

```javascript
var v = spencef( -4.0 );
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
var spencef = require( '@stdlib/math/base/special/spencef' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, 0.0, 100.0, opts );

logEachMap( 'spencef(%0.4f) = %0.4f', x, spencef );
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
#include "stdlib/math/base/special/spencef.h"
```

#### stdlib_base_spencef( x )

Evaluates [Spence's function][spence] (the dilogarithm) for a single-precision floating-point number.

```c
float out = stdlib_base_spencef( 3.0f );
// returns ~-1.437f

out = stdlib_base_spencef( 0.0f );
// returns ~1.645f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_spencef( const float x );
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
#include "stdlib/math/base/special/spencef.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 3.0f, 9.0f, 0.0f, -10.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_spencef( x[ i ] );
        printf( "spencef(%f) = %f\n", x[ i ], y );
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

[spence]: https://en.wikipedia.org/wiki/Spence%27s_function

</section>

<!-- /.links -->
