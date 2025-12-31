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

# factorial2f

> Evaluate the [double factorial][double-factorial] function as a single-precision floating-point number.

<section class="intro">

The [double factorial][double-factorial] of a number `n`, denoted `n!!`, is defined as the product of all the positive integers up to `n` that have the same parity (odd or even) as `n`.

Thus, for example, `5!!` is `5 * 3 * 1 = 15` and `8!!` is `8 * 6 * 4 * 2 = 384`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var factorial2f = require( '@stdlib/math/base/special/factorial2f' );
```

#### factorial2f( n )

Evaluates the [double factorial][double-factorial] of `n` as a single-precision floating-point number.

```javascript
var v = factorial2f( 3 );
// returns 3

v = factorial2f( 4 );
// returns 8

v = factorial2f( 10 );
// returns 3840
```

If `n > 56`, the function returns `NaN`, as larger [double factorial][double-factorial] values cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = factorial2f( 57 );
// returns Infinity
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = factorial2f( 3.14 );
// returns NaN

v = factorial2f( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = factorial2f( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var factorial2f = require( '@stdlib/math/base/special/factorial2f' );

var x = discreteUniform( 10, 0, 56, {
    'dtype': 'int32'
});

logEachMap( 'factorial2f(%d) = %0.1f', x, factorial2f );
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
#include "stdlib/math/base/special/factorial2f.h"
```

#### stdlib_base_factorial2f( n )

Evaluates the [double factorial][double-factorial] of `n` as a single-precision floating-point number.

```c
float out = stdlib_base_factorial2f( 3.0f );
// returns 3.0f
```

The function accepts the following arguments:

-   **n**: `[in] float` input value.

```c
float stdlib_base_factorial2f( const float n );
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
#include "stdlib/math/base/special/factorial2f.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 1.0f, 10.0f, 50.0f, 56.0f, 57.0f };

    float b;
    int i;
    for ( i = 0; i < 5; i++ ) {
        b = stdlib_base_factorial2f( x[ i ] );
        printf ( "factorial2f(%f) = %f\n", x[ i ], b );
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

[double-factorial]: https://en.wikipedia.org/wiki/Double_factorial

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
