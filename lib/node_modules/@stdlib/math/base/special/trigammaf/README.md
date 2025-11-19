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

# Trigamma

> [Trigamma][trigamma-function] function for a single-precision floating-point number.

<section class="intro">

The [trigamma function][trigamma-function] `ψ^(1)` is the derivative of the [digamma function][digamma-function].

<!-- <equation class="equation" label="eq:trigamma_function" align="center" raw="\psi^{(1)}(x) =\frac{d}{dx} \Psi(x) = \sum_{k=0}^\infty \frac{1}{(k+x)^2}" alt="Trigamma function"> -->

```math
\psi^{(1)}(x) =\frac{d}{dx} \Psi(x) = \sum_{k=0}^\infty \frac{1}{(k+x)^2}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var trigammaf = require( '@stdlib/math/base/special/trigammaf' );
```

#### trigammaf( x )

Evaluates the [trigamma function][trigamma-function] for a single-precision floating-point number.

```javascript
var v = trigammaf( -2.5 );
// returns ~9.539

v = trigammaf( 1.0 );
// returns ~1.645

v = trigammaf( 10.0 );
// returns ~0.105
```

If `x` is `0` or a negative `integer`, the function returns `NaN`.

```javascript
var v = trigammaf( 0.0 );
// returns NaN

v = trigammaf( -1.0 );
// returns NaN

v = trigammaf( -2.0 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = trigammaf( NaN );
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
var trigammaf = require( '@stdlib/math/base/special/trigammaf' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( 'x: %0.4f, ψ^(1)(x): %0.4f', x, trigammaf );
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
#include "stdlib/math/base/special/trigammaf.h"
```

#### stdlib_base_trigammaf( x )

Evaluates the [trigamma function][trigamma-function] for a single-precision floating-point number.

```c
float out = stdlib_base_trigammaf( -2.5f );
// returns ~9.539f

out = stdlib_base_trigammaf( 1.0f );
// returns ~1.645f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_trigammaf( const float x );
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
#include "stdlib/math/base/special/trigammaf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 4.0f, -1.5f, -0.5f, 0.5f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_trigammaf( x[ i ] );
        printf( "x: %f, ψ^(1)(x): %f\n", x[ i ], y );
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

[trigamma-function]: https://en.wikipedia.org/wiki/Trigamma_function

[digamma-function]: https://en.wikipedia.org/wiki/Digamma_function

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
