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

# lnf

> Evaluate the [natural logarithm][natural-logarithm] of a single-precision floating-point number.

<section class="usage">

## Usage

```javascript
var lnf = require( '@stdlib/math/base/special/lnf' );
```

#### lnf( x )

Evaluates the [natural logarithm][natural-logarithm] of a single-precision floating-point number.

```javascript
var v = lnf( 4.0 );
// returns ~1.386

v = lnf( 0.0 );
// returns -Infinity

v = lnf( Infinity );
// returns Infinity

v = lnf( NaN );
// returns NaN
```

For negative numbers, the [natural logarithm][natural-logarithm] is **not** defined.

```javascript
var v = lnf( -4.0 );
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
var lnf = require( '@stdlib/math/base/special/lnf' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu() * 100.0 );
    console.log( 'lnf(%d) = %d', x, lnf( x ) );
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
#include "stdlib/math/base/special/lnf.h"
```

#### stdlib_base_lnf( x )

Evaluates the [natural logarithm][natural-logarithm] of a single-precision floating-point number.

```c
float v = stdlib_base_lnf( 2.0f );
// returns ~0.693f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.

```c
float stdlib_base_lnf( const float x );
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
#include "stdlib/math/base/special/lnf.h"
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    float out;
    float x;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (float)rand() / (float)RAND_MAX ) * 100.0f;
        out = stdlib_base_lnf( x );
        printf( "lnf(%f) = %f\n", x, out );
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

[natural-logarithm]: https://en.wikipedia.org/wiki/Natural_logarithm

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
