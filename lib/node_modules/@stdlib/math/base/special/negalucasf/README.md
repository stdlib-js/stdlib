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

# negaLucas

> Compute the nth [negaLucas number][lucas-number] in single-precision floating-point format.

<section class="intro">

The [negaLucas numbers][lucas-number] are the integer sequence

<!-- <equation class="equation" label="eq:negalucasf_sequence" align="center" raw="2, -1, 3, -4, 7, -11, 18, -29, 47, -76, 123, -199, 322, \ldots" alt="NegaLucas sequence"> -->

```math
2, -1, 3, -4, 7, -11, 18, -29, 47, -76, 123, -199, 322, \ldots
```

<!-- <div class="equation" align="center" data-raw-text="2, -1, 3, -4, 7, -11, 18, -29, 47, -76, 123, -199, 322, \ldots" data-equation="eq:negalucasf_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/negalucasf/docs/img/equation_negalucas_sequence.svg" alt="NegaLucas sequence">
    <br>
</div> -->

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:negalucasf_recurrence_relation" align="center" raw="L_{n-2} = L_{n} - L_{n-1}" alt="NegaLucas sequence recurrence relation"> -->

```math
L_{n-2} = L_{n} - L_{n-1}
```

<!-- <div class="equation" align="center" data-raw-text="L_{n-2} = L_{n} - L_{n-1}" data-equation="eq:negalucasf_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/negalucasf/docs/img/equation_negalucas_recurrence_relation.svg" alt="NegaLucas sequence recurrence relation">
    <br>
</div> -->

<!-- </equation> -->

which yields

<!-- <equation class="equation" label="eq:negalucasf_lucas" align="center" raw="L_{-n} = (-1)^{n} L_n" alt="NegaLucas relationship to Lucas numbers"> -->

```math
L_{-n} = (-1)^{n} L_n
```

<!-- <div class="equation" align="center" data-raw-text="L_{-n} = (-1)^{n} L_n" data-equation="eq:negalucasf_lucas">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/negalucasf/docs/img/equation_negalucas_lucas.svg" alt="NegaLucas relationship to Lucas numbers">
    <br>
</div> -->

<!-- </equation> -->

with seed values `L_0 = 2` and `L_{-1} = -1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var negalucasf = require( '@stdlib/math/base/special/negalucasf' );
```

#### negalucasf( n )

Computes the nth [negaLucas number][lucas-number] in single-precision floating-point format.

```javascript
var v = negalucasf( 0 );
// returns 2

v = negalucasf( -1 );
// returns -1

v = negalucasf( -2 );
// returns 3

v = negalucasf( -3 );
// returns -4

v = negalucasf( -34 );
// returns 12752043
```

If `n < -34`, the function returns `NaN`, as larger [negaLucas numbers][lucas-number] cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = negalucasf( -35 );
// returns NaN
```

If not provided a nonpositive integer value, the function returns `NaN`.

```javascript
var v = negalucasf( -3.14 );
// returns NaN

v = negalucasf( 1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = negalucasf( NaN );
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
var negalucasf = require( '@stdlib/math/base/special/negalucasf' );

var v;
var i;

for ( i = 0; i > -35; i-- ) {
    v = negalucasf( i );
    console.log( v );
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
#include "stdlib/math/base/special/negalucasf.h"
```

#### stdlib_base_negalucasf( n )

Computes the nth [negaLucas number][lucas-number] in single-precision floating-point format.

```c
float out = stdlib_base_negalucasf( 0 );
// returns 0.0f

out = stdlib_base_negalucasf( -1 );
// returns -1.0f
```

The function accepts the following arguments:

-   **n**: `[in] int32_t` input value.

```c
float stdlib_base_negalucasf( const int32_t n );
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
#include "stdlib/math/base/special/negalucasf.h"
#include <stdio.h>
#include <stdint.h>

int main( void ) {
    int32_t i;
    float v;

    for ( i = 0; i > -35; i-- ) {
        v = stdlib_base_negalucasf( i );
        printf( "negalucasf(%d) = %f\n", i, v );
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

[lucas-number]: https://en.wikipedia.org/wiki/Lucas_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
