<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# Reciprocal Square Root

> Compute the reciprocal of the principal [square root][square-root] of a double-precision floating-point number.

<section class="intro">

The reciprocal of the principal [square root][square-root] is defined as

<!-- <equation class="equation" label="eq:reciprocal_square_root" align="center" raw="\operatorname{rsqrt}(x)=\frac{1}{\sqrt{x}}" alt="Reciprocal square root"> -->

<div class="equation" align="center" data-raw-text="\operatorname{rsqrt}(x)=\frac{1}{\sqrt{x}}" data-equation="eq:reciprocal_square_root">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@5b8dab9d7f516fcc8e1741900ae1569e95470c73/lib/node_modules/@stdlib/math/base/special/rsqrt/docs/img/equation_reciprocal_square_root.svg" alt="Reciprocal square root">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var rsqrt = require( '@stdlib/math/base/special/rsqrt' );
```

#### rsqrt( x )

Computes the reciprocal (inverse) square root of a double-precision floating-point number.

```javascript
var v = rsqrt( 1.0 );
// returns 1.0

v = rsqrt( 4.0 );
// returns 0.5

v = rsqrt( 100.0 );
// returns 0.1

v = rsqrt( 0.0 );
// returns Infinity

v = rsqrt( NaN );
// returns NaN

v = rsqrt( Infinity );
// returns 0.0
```

For negative numbers, the reciprocal square root is **not** defined.

```javascript
var v = rsqrt( -4.0 );
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
var rsqrt = require( '@stdlib/math/base/special/rsqrt' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'rsqrt(%d) = %d', x, rsqrt( x ) );
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
#include "stdlib/math/base/special/rsqrt.h"
```

#### stdlib_base_rsqrt( x )

Computes the reciprocal (inverse) [square root][square-root] of a double-precision floating-point number.

```c
double y = stdlib_base_rsqrt( 4.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_rsqrt( const double x );
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
#include "stdlib/math/base/special/rsqrt.h"
#include <stdio.h>

int main() {
    double x[] = { 3.14, 9.0, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_rsqrt( x[ i ] );
        printf( "rsqrt(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<section class="links">

[square-root]: https://en.wikipedia.org/wiki/Square_root

</section>

<!-- /.links -->
