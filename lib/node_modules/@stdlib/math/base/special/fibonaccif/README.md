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

# Fibonaccif

> Compute the nth [Fibonacci number][fibonacci-number] as a single-precision floating-point number.

<section class="intro">

The [Fibonacci numbers][fibonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:fibonacci_sequence" align="center" raw="0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots" alt="Fibonacci sequence"> -->

```math
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots
```

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:fibonacci_recurrence_relation" align="center" raw="F_n = F_{n-1} + F_{n-2}" alt="Fibonacci sequence recurrence relation"> -->

```math
F_n = F_{n-1} + F_{n-2}
```

<!-- </equation> -->

with seed values `F_0 = 0` and `F_1 = 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fibonaccif = require( '@stdlib/math/base/special/fibonaccif' );
```

#### fibonaccif( n )

Computes the nth [Fibonacci number][fibonacci-number] as a single-precision floating-point number.

```javascript
var v = fibonaccif( 0 );
// returns 0

v = fibonaccif( 1 );
// returns 1

v = fibonaccif( 2 );
// returns 1

v = fibonaccif( 3 );
// returns 2

v = fibonaccif( 36 );
// returns 14930352
```

If `n > 36`, the function returns `NaN`, as larger [Fibonacci numbers][fibonacci-number] cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = fibonaccif( 37 );
// returns NaN
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = fibonaccif( 3.14 );
// returns NaN

v = fibonaccif( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = fibonaccif( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var fibonaccif = require( '@stdlib/math/base/special/fibonaccif' );

var x = discreteUniform( 10, 0, 36 );

logEachMap( 'fibonaccif(%d) = %0.1f', x, fibonaccif );
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
#include "stdlib/math/base/special/fibonaccif.h"
```

#### stdlib_base_fibonaccif( n )

Computes the nth [Fibonacci number][fibonacci-number] as a single-precision floating-point number.

```c
float out = stdlib_base_fibonaccif( 0 );
// returns 0.0f

out = stdlib_base_fibonaccif( 1 );
// returns 1.0f
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` input value.

```c
float stdlib_base_fibonaccif( const int32_t n );
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
#include "stdlib/math/base/special/fibonaccif.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    int32_t i;
    float v;

    for ( i = 0; i < 37; i++ ) {
        v = stdlib_base_fibonaccif( i );
        printf( "fibonaccif(%d) = %f\n", i, v );
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

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
