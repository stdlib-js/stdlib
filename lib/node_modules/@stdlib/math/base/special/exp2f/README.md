<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# exp2f

> Base `2` [exponential function][exponential-function] in single-precision floating-point format.

<section class="intro">

The base `2` [exponential function][exponential-function] is defined as

<!-- <equation class="equation" label="eq:base2_exponential_function" align="center" raw="y = 2^x" alt="Base 2 exponential function"> -->

```math
y = 2^x
```

<!-- <div class="equation" align="center" data-raw-text="y = 2^x" data-equation="eq:base2_exponential_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@fd38562ead49148cba5e41f298c4f24ac9948da5/lib/node_modules/@stdlib/math/base/special/exp2f/docs/img/equation_base2_exponential_function.svg" alt="Base 2 exponential function">
    <br>
</div> -->

<!-- </equation> -->

for any real number `x`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var exp2f = require( '@stdlib/math/base/special/exp2f' );
```

#### exp2f( x )

Evaluates the base `2` [exponential function][exponential-function] in single-precision floating-point format.

```javascript
var v = exp2f( 3.0 );
// returns 8.0

v = exp2f( -9.0 );
// returns ~0.002

v = exp2f( 0.0 );
// returns 1.0

v = exp2f( NaN );
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
var exp2f = require( '@stdlib/math/base/special/exp2f' );

var opts = {
    'dtype': 'float32'
};
var x = uniform( 100, -50.0, 50.0, opts );

logEachMap( '2^%0.4f = %0.4f', x, exp2f );
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
#include "stdlib/math/base/special/exp2f.h"
```

#### stdlib_base_exp2f( x )

Evaluates the base `2` [exponential function][exponential-function] in single-precision floating-point format.

```c
float out = stdlib_base_exp2f( 3.0f );
// returns 8.0f

out = stdlib_base_exp2f( -9.0f );
// returns ~0.002f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_exp2f( const float x );
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
#include "stdlib/math/base/special/exp2f.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { -50.0f, -38.9f, -27.8f, -16.7f, -5.6f, 5.6f, 16.7f, 27.8f, 38.9f, 50.0f };

    float v;
    int i;
    for ( i = 0; i < 10; i++ ) {
        v = stdlib_base_exp2f( x[ i ] );
        printf( "2^%f = %f\n", x[ i ], v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

* * *

<section class="references">

## References

-   Tang, Ping-Tak Peter. 1989. "Table-driven implementation of the exponential function in IEEE floating-point arithmetic." _ACM Trans. Math. Softw._ 15 (2). New York, NY, USA: ACM: 144–57. doi:[10.1145/63522.214389][@tang:1989a].

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[exponential-function]: https://en.wikipedia.org/wiki/Exponential_function

[@tang:1989a]: https://doi.org/10.1145/63522.214389

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
