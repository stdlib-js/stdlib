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

# Gaussian hypergeometric function

> Evaluates the [Gaussian hypergeometric function][hypergeometric-function].

<section class="intro">

The [Gaussian hypergeometric function][hypergeometric-function] is defined for `|x| < 1` by the power series:

<!-- <equation class="equation" label="eq:hypergeometric_function" align="center" raw="{}_2F_1(a, b; c; x) = \sum_{n=0}^{\infty} \frac{(a)_n (b)_n}{(c)_n} \frac{x^n}{n!} = 1 + \frac{a b}{c} x + \frac{a(a+1) b(b+1)}{c(c+1)} \frac{x^2}{2!} + \frac{a(a+1)(a+2) b(b+1)(b+2)}{c(c+1)(c+2)} \frac{x^3}{3!} + \cdots" alt="Gaussian hypergeometric function."> -->

```math
{}_2F_1(a, b; c; x) = \sum_{n=0}^{\infty} \frac{(a)_n (b)_n}{(c)_n} \frac{x^n}{n!} = 1 + \frac{a b}{c} x + \frac{a(a+1) b(b+1)}{c(c+1)} \frac{x^2}{2!} + \frac{a(a+1)(a+2) b(b+1)(b+2)}{c(c+1)(c+2)} \frac{x^3}{3!} + \cdots
```

<!-- <div class="equation" align="center" data-raw-text="{}_2F_1(a, b; c; x) = \sum_{n=0}^{\infty} \frac{(a)_n (b)_n}{(c)_n} \frac{x^n}{n!} = 1 + \frac{a b}{c} x + \frac{a(a+1) b(b+1)}{c(c+1)} \frac{x^2}{2!} + \frac{a(a+1)(a+2) b(b+1)(b+2)}{c(c+1)(c+2)} \frac{x^3}{3!} + \cdots" data-equation="eq:hypergeometric_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/hyp2f1/docs/img/equation_hypergeometric_function.svg" alt="Gaussian hypergeometric function.">
    <br>
</div> -->

<!-- </equation> -->

and is undefined (or infinite) if `c` equals a non-positive integer.

Here `(q)ₙ` is the (rising) [Pochhammer symbol][pochhammer-symbol], which is defined by:

<!-- <equation class="equation" label="eq:pochhammer_symbol" align="center" raw="(q)_n = \begin{cases} 1 & n = 0 \\ q(q+1) \cdots (q+n-1) & n > 0 \end{cases}" alt="Pochhammer symbol."> -->

```math
(q)_n = \begin{cases} 1 & n = 0 \\ q(q+1) \cdots (q+n-1) & n > 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="(q)_n = \begin{cases} 1 & n = 0 \\ q(q+1) \cdots (q+n-1) & n > 0 \end{cases}" data-equation="eq:pochhammer_symbol">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/hyp2f1/docs/img/equation_pochhammer_symbol.svg" alt="Pochhammer symbol.">
    <br>
</div> -->

<!-- </equation> -->

For `|x| >= 1`, the function can be [analytically continued][analytic-continuation] using functional identities and transformation formulas.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var hyp2f1 = require( '@stdlib/math/base/special/hyp2f1' );
```

#### hyp2f1( a, b, c, x )

Evaluates the [Gaussian hypergeometric function][hypergeometric-function].

```javascript
var v = hyp2f1( 1.0, 1.0, 1.0, 0.0 );
// returns 1.0

v = hyp2f1( 10.0, 7.4, -1.8, -0.99 );
// returns ~0.423

v = hyp2f1( 3.0, 4.0, 7.0, 1.0 );
// returns +Infinity

v = hyp2f1( NaN, 3.0, 2.0, 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var hyp2f1 = require( '@stdlib/math/base/special/hyp2f1' );

var a = linspace( -50.0, 50.0, 100 );
var b = linspace( -50.0, 50.0, 100 );
var c = linspace( -50.0, 50.0, 100 );
var x = linspace( -50.0, 50.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'a: %d, b: %d, c: %d, x: %d, 2F1(a,b;c;x): %d', a[ i ], b[ i ], c[ i ], x[ i ], hyp2f1( a[ i ], b[ i ], c[ i ], x[ i ] ) );
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
#include "stdlib/math/base/special/hyp2f1.h"
```

#### stdlib_base_hyp2f1( a, b, c, x )

Evaluates the [Gaussian hypergeometric function][hypergeometric-function].

```c
double out = stdlib_base_hyp2f1( 1.0, 1.0, 1.0, 0.0 );
// returns 1.0

out = stdlib_base_hyp2f1( 10.0, 7.4, -1.8, -0.99 );
// returns ~0.423
```

The function accepts the following arguments:

-   **a**: `[in] double` input value.
-   **b**: `[in] double` input value.
-   **c**: `[in] double` input value.
-   **x**: `[in] double` input value.

```c
double stdlib_base_hyp2f1( const double a, const double b, const double c, const double x );
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
#include "stdlib/math/base/special/hyp2f1.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double a;
    double b;
    double c;
    double x;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        a = random_uniform( -50.0, 50.0 );
        b = random_uniform( -50.0, 50.0 );
        c = random_uniform( -50.0, 50.0 );
        x = random_uniform( -50.0, 50.0 );
        y = stdlib_base_hyp2f1( a, b, c, x );
        printf( "a: %lf, b: %lf, c: %lf, x: %lf, 2F1(a,b;c;x): %lf\n", a, b, c, x, y );
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

[hypergeometric-function]: https://en.wikipedia.org/wiki/Hypergeometric_function

[pochhammer-symbol]: https://en.wikipedia.org/wiki/Falling_and_rising_factorials

[analytic-continuation]: https://en.wikipedia.org/wiki/Analytic_continuation

</section>

<!-- /.links -->
