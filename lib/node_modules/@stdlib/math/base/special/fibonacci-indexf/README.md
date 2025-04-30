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

# Fibonacci Number Index

> Compute the [Fibonacci number][fibonacci-number] index of a single-precision floating-point number.

<section class="intro">

The [Fibonacci number][fibonacci-number] index is given by

<!-- <equation class="equation" label="eq:fibonacci_number_indexf" align="center" raw="n = \left \lfloor{\log_\varphi \biggl(F \cdot \sqrt{5} + \tfrac{1}{2}\biggr)}\right \rfloor" alt="Formula to compute the Fibonacci number index."> -->

```math
n = \left \lfloor{\log_\varphi \biggl(F \cdot \sqrt{5} + \tfrac{1}{2}\biggr)}\right \rfloor
```

<!-- </equation> -->

where `φ` is the [golden ratio][golden-ratio] and `F > 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var fibonacciIndexf = require( '@stdlib/math/base/special/fibonacci-indexf' );
```

#### fibonacciIndexf( F )

Computes the [Fibonacci number][fibonacci-number] index of a single-precision floating-point number.

```javascript
var n = fibonacciIndexf( 2 );
// returns 3

n = fibonacciIndexf( 3 );
// returns 4

n = fibonacciIndexf( 5 );
// returns 5
```

If provided either a non-integer or `F_n <= 1`, the function returns `NaN`.

```javascript
var n = fibonacciIndexf( -1 );
// returns NaN

n = fibonacciIndexf( 3.14 );
// returns NaN
```

If provided `NaN`, the function returns `NaN`.

```javascript
var n = fibonacciIndexf( NaN );
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
var fibonacciIndexf = require( '@stdlib/math/base/special/fibonacci-indexf' );

var F1;
var F2;
var FN;
var n;
var i;

F1 = 1;
F2 = 1;
for ( i = 3; i < 37; i++ ) {
    FN = F1 + F2;
    F1 = F2;
    F2 = FN;
    n = fibonacciIndexf( FN );
    console.log( 'n(%d) = %d', FN, n );
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
#include "stdlib/math/base/special/fibonacci_indexf.h"
```

#### stdlib_base_fibonacci_indexf( F )

Computes the [Fibonacci number][fibonacci-number] index of a single-precision floating-point number.

```c
float out = stdlib_base_fibonacci_indexf( 2.0f );
// returns 3.0f

out = stdlib_base_fibonacci_indexf( 3.0f );
// returns 4.0f
```

The function accepts the following arguments:

-   **F**: `[in] float` input value.

```c
float stdlib_base_fibonacci_indexf( const float F );
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
#include "stdlib/math/base/special/fibonacci_indexf.h"
#include <stdio.h>

int main( void ) {
    const float x[] = { 2.0f, 3.0f, 5.0f, 8.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_fibonacci_indexf( x[ i ] );
        printf( "fibonacci_indexf(%f) = %f\n", x[ i ], y );
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

[golden-ratio]: https://en.wikipedia.org/wiki/Golden_ratio

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
