<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# inv

> Compute the [multiplicative inverse][multiplicative-inverse] of a double-precision floating-point number.

<section class="intro">

The [multiplicative inverse][multiplicative-inverse] (or **reciprocal**) is defined as

<!-- <equation class="equation" label="eq:multiplicative_inverse" align="center" raw="y = \frac{1}{x}" alt="Multiplicative inverse"> -->

<div class="equation" align="center" data-raw-text="y = \frac{1}{x}" data-equation="eq:multiplicative_inverse">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/inv/docs/img/equation_multiplicative_inverse.svg" alt="Multiplicative inverse">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var inv = require( '@stdlib/math/base/special/inv' );
```

#### inv( x )

Computes the [multiplicative inverse][multiplicative-inverse] of a double-precision floating-point number `x`.

```javascript
var v = inv( -1.0 );
// returns -1.0

v = inv( 2.0 );
// returns 0.5

v = inv( 0.0 );
// returns Infinity

v = inv( -0.0 );
// returns -Infinity

v = inv( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var inv = require( '@stdlib/math/base/special/inv' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*100.0 ) - 50.0;
    console.log( 'inv(%d) = %d', x, inv( x ) );
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
#include "stdlib/math/base/special/inv.h"
```

#### stdlib_base_inv( x )

Computes the multiplicative inverse of a double-precision floating-point number.

```c
double y = stdlib_base_inv( 2.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_inv( const double x );
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
#include "stdlib/math/base/special/inv.h"
#include <stdio.h>

int main() {
    double x[] = { 3.0, 4.0, 5.0, 12.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_inv( x[ i ] );
        printf( "inv(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[multiplicative-inverse]: https://en.wikipedia.org/wiki/Multiplicative_inverse

</section>

<!-- /.links -->
