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

# lucasf

> Compute the nth [Lucas number][lucas-number] as a single-precision floating-point number.

<section class="intro">

The [Lucas numbers][lucas-number] are the integer sequence

<!-- <equation class="equation" label="eq:lucas_sequence" align="center" raw="2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots" alt="Lucas sequence"> -->

```math
2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, \ldots
```

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:lucas_recurrence_relation" align="center" raw="L_n = \begin{cases}2 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} & \textrm{if}\ n > 1\end{cases}" alt="Lucas sequence recurrence relation"> -->

```math
L_n = \begin{cases}2 & \textrm{if}\ n = 0\\1 & \textrm{if}\ n = 1\\L_{n-1} + L_{n-2} & \textrm{if}\ n > 1\end{cases}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var lucasf = require( '@stdlib/math/base/special/lucasf' );
```

#### lucasf( n )

Computes the nth [Lucas number][lucas-number] as a single-precision floating-point number.

```javascript
var v = lucasf( 0 );
// returns 2

v = lucasf( 1 );
// returns 1

v = lucasf( 2 );
// returns 3

v = lucasf( 3 );
// returns 4

v = lucasf( 34 );
// returns 12752043
```

If `n > 34`, the function returns `NaN`, as larger [Lucas numbers][lucas-number] cannot be safely represented in [single-precision floating-point format][ieee754].

```javascript
var v = lucasf( 35 );
// returns NaN
```

If not provided a nonnegative integer value, the function returns `NaN`.

```javascript
var v = lucasf( 3.14 );
// returns NaN

v = lucasf( -1 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var v = lucasf( NaN );
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
var lucasf = require( '@stdlib/math/base/special/lucasf' );

var x = discreteUniform( 10, 0, 34, {
    'dtype': 'int32'
});

logEachMap( 'lucasf(%d) = %0.1f', x, lucasf );
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
#include "stdlib/math/base/special/lucasf.h"
```

#### stdlib_base_lucasf( n )

Computes the nth [Lucas number][lucas-number] as a single-precision floating-point number.

```c
float out = stdlib_base_lucasf( 0.0f );
// returns 2.0f

out = stdlib_base_lucasf( 1.0f );
// returns 1.0f
```

The function accepts the following arguments:

-   **n**: `[in] float` input value.

```c
float stdlib_base_lucasf( const float n );
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
#include "stdlib/math/base/special/lucasf.h"
#include <stdio.h>

int main( void ) {
    float i;
    float v;

    for ( i = 0.0f; i < 35.0f; i++ ) {
        v = stdlib_base_lucasf( i );
        printf( "lucasf(%f) = %f\n", i, v );
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
