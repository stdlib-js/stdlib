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

# tribonaccif

> Compute the nth [Tribonacci number][tribonacci-number] as a [single-precision floating-point number][ieee754].

<section class="intro">

The [Tribonacci numbers][tribonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:tribonacci_sequence" align="center" raw="0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, \ldots" alt="Tribonacci sequence"> -->

```math
0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, \ldots
```

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:tribonacci_recurrence_relation" align="center" raw="F_n = F_{n-1} + F_{n-2} + F_{n-3}" alt="Tribonacci sequence recurrence relation"> -->

```math
F_n = F_{n-1} + F_{n-2} + F_{n-3}
```

<!-- </equation> -->

with seed values `F_0 = 0`, `F_1 = 0`, and `F_2 = 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var tribonaccif = require( '@stdlib/math/base/special/tribonaccif' );
```

#### tribonaccif( n )

Computes the nth [Tribonacci number][tribonacci-number] as a [single-precision floating-point number][ieee754].

```javascript
var v = tribonaccif( 0 );
// returns 0

v = tribonaccif( 1 );
// returns 0

v = tribonaccif( 2 );
// returns 1

v = tribonaccif( 3 );
// returns 1

v = tribonaccif( 30 );
// returns 15902591
```

If `n > 30`, the function returns `NaN`, as larger [Tribonacci numbers][tribonacci-number] cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = tribonaccif( 31 );
// returns NaN
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = tribonaccif( 3.14 );
// returns NaN

v = tribonaccif( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = tribonaccif( NaN );
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
var logEachMap = require( '@stdlib/console/log-each-map' );
var linspace = require( '@stdlib/array/base/linspace' );
var tribonaccif = require( '@stdlib/math/base/special/tribonaccif' );

var v = linspace( 0, 30, 31 );

logEachMap( 'tribonaccif(%d) = %0.4f', v, tribonaccif );
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
#include "stdlib/math/base/special/tribonaccif.h"
```

#### stdlib_base_tribonaccif( n )

Computes the nth [Tribonacci number][tribonacci-number] as a [single-precision floating-point number][ieee754].

```c
float out = stdlib_base_tribonaccif( 0.0f );
// returns 0.0f

out = stdlib_base_tribonaccif( 4.0f );
// returns 2.0f
```

The function accepts the following arguments:

-   **n**: `[in] float` input value.

```c
float stdlib_base_tribonaccif( const float n );
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
#include "stdlib/math/base/special/tribonaccif.h"
#include <stdio.h>

int main( void ) {
    float i;
    float v;

    for ( i = 0.0f; i < 31.0f; i++ ) {
        v = stdlib_base_tribonaccif( i );
        printf( "tribonaccif(%f) = %f\n", i, v );
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

[tribonacci-number]: https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tribonacci_numbers

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
