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

# negaFibonaccif

> Compute the nth [negaFibonacci number][fibonacci-number] as a [single-precision floating-point number][ieee754].

<section class="intro">

The [negaFibonacci numbers][fibonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:negafibonacci_sequence" align="center" raw="0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots" alt="NegaFibonacci sequence"> -->

```math
0, 1, -1, 2, -3, 5, -8, 13, -21, 34, -55, 89, -144, \ldots
```

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:negafibonacci_recurrence_relation" align="center" raw="F_{n-2} = F_{n} - F_{n-1}" alt="NegaFibonacci sequence recurrence relation"> -->

```math
F_{n-2} = F_{n} - F_{n-1}
```

<!-- </equation> -->

which yields

<!-- <equation class="equation" label="eq:negafibonacci_fibonacci" align="center" raw="F_{-n} = (-1)^{n+1} F_n" alt="NegaFibonacci relationship to Fibonacci numbers"> -->

```math
F_{-n} = (-1)^{n+1} F_n
```

<!-- </equation> -->

with seed values `F_0 = 0` and `F_{-1} = 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var negafibonaccif = require( '@stdlib/math/base/special/negafibonaccif' );
```

#### negafibonaccif( n )

Computes the nth [negaFibonacci number][fibonacci-number] as a [single-precision floating-point number][ieee754].

```javascript
var v = negafibonaccif( 0 );
// returns 0

v = negafibonaccif( -1 );
// returns 1

v = negafibonaccif( -2 );
// returns -1

v = negafibonaccif( -3 );
// returns 2

v = negafibonaccif( -36 );
// returns -14930352
```

If `n < -36`, the function returns `NaN`, as larger [negaFibonacci numbers][fibonacci-number] cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = negafibonaccif( -37 );
// returns NaN
```

If not provided a nonpositive integer value, the function returns `NaN`.

```javascript
var v = negafibonaccif( -3.14 );
// returns NaN

v = negafibonaccif( 1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = negafibonaccif( NaN );
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
var negafibonaccif = require( '@stdlib/math/base/special/negafibonaccif' );

var v = linspace( -36, 0, 37 );

logEachMap( 'negafibonaccif(%d) = %0.4f', v, negafibonaccif );
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
#include "stdlib/math/base/special/negafibonaccif.h"
```

#### stdlib_base_negafibonaccif( n )

Computes the nth [negaFibonacci number][fibonacci-number] as a [single-precision floating-point number][ieee754].

```c
float out = stdlib_base_negafibonaccif( 0 );
// returns 0.0f

out = stdlib_base_negafibonaccif( -1 );
// returns 1.0f
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` input value.

```c
float stdlib_base_negafibonaccif( const int32_t n );
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
#include "stdlib/math/base/special/negafibonaccif.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    int32_t i;
    float v;

    for ( i = 0; i > -37; i-- ) {
        v = stdlib_base_negafibonaccif( i );
        printf( "negafibonaccif(%d) = %f\n", i, v );
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
