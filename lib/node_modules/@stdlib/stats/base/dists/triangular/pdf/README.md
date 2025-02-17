<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Probability Density Function

> [Triangular][triangular-distribution] distribution [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [triangular][triangular-distribution] random variable is

<!-- <equation class="equation" label="eq:triangular_pdf" align="center" raw="f(x;a,b,c)=\begin{cases} 0 & \text{for } x < a \\ \frac{2(x-a)}{(b-a)(c-a)} & \text{for } a \le x < c \\ \frac{2}{b-a} & \text{for } x = c \\ \frac{2(b-x)}{(b-a)(b-c)} & \text{for } c < x \le b \\ 0 & \text{for } b < x \end{cases}" alt="Probability density function (PDF) for a triangular distribution."> -->

```math
f(x;a,b,c)=\begin{cases} 0 & \text{for } x < a \\ \frac{2(x-a)}{(b-a)(c-a)} & \text{for } a \le x < c \\ \frac{2}{b-a} & \text{for } x = c \\ \frac{2(b-x)}{(b-a)(b-c)} & \text{for } c < x \le b \\ 0 & \text{for } b < x \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;a,b,c)=\begin{cases} 0 &amp; \text{for } x &lt; a \\ \frac{2(x-a)}{(b-a)(c-a)} &amp; \text{for } a \le x &lt; c \\ \frac{2}{b-a} &amp; \text{for } x = c \\ \frac{2(b-x)}{(b-a)(b-c)} &amp; \text{for } c &lt; x \le b \\ 0 &amp; \text{for } b &lt; x \end{cases}" data-equation="eq:triangular_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/triangular/pdf/docs/img/equation_triangular_pdf.svg" alt="Probability density function (PDF) for a triangular distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the lower limit and `b` is the upper limit and `c` is the mode.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/triangular/pdf' );
```

#### pdf( x, a, b, c )

Evaluates the [probability density function][pdf] (PDF) for a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit), and `c` (mode).

```javascript
var y = pdf( 0.5, -1.0, 1.0, 0.0 );
// returns 0.5

y = pdf( 0.5, -1.0, 1.0, 0.5 );
// returns 1.0

y = pdf( -10.0, -20.0, 0.0, -2.0 );
// returns ~0.056

y = pdf( -2.0, -1.0, 1.0, 0.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0, 1.0, 0.5 );
// returns NaN

y = pdf( 0.0, NaN, 1.0, 0.5 );
// returns NaN

y = pdf( 0.0, 0.0, NaN, 0.5 );
// returns NaN

y = pdf( 2.0, 1.0, 0.0, NaN );
// returns NaN
```

If provided parameters not satisfying `a <= c <= b`, the function returns `NaN`.

```javascript
var y = pdf( 1.0, 1.0, 0.0, 1.5 );
// returns NaN

y = pdf( 1.0, 1.0, 0.0, -1.0 );
// returns NaN

y = pdf( 1.0, 0.0, -1.0, 0.5 );
// returns NaN
```

#### pdf.factory( a, b, c )

Returns a function for evaluating the [probability density function][pdf] (PDF) of a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit) and `c` (mode).

```javascript
var mypdf = pdf.factory( 0.0, 10.0, 5.0 );
var y = mypdf( 2.0 );
// returns 0.08

y = mypdf( 12.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( '@stdlib/stats/base/dists/triangular/pdf' );

var a;
var b;
var c;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    x = randu() * 30.0;
    a = randu() * 10.0;
    b = a + (randu() * 40.0);
    c = a + ((b-a) * randu());
    y = pdf( x, a, b, c );
    console.log( 'x: %d, a: %d, b: %d, c: %d, f(x;a,b,c): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), c.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

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
#include "stdlib/stats/base/dists/triangular/pdf.h"
```

#### stdlib_base_dists_triangular_pdf( x, a, b, c )

Evaluates the [probability density function][pdf] (PDF) of a [triangular][triangular-distribution] distribution with parameters `a` (lower limit), `b` (upper limit), and `c` (mode).

```c
double y = stdlib_base_dists_triangular_pdf( 0.5, -1.0, 1.0, 0.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] double` lower limit.
-   **b**: `[in] double` upper limit.
-   **c**: `[in] double` mode.

```c
double stdlib_base_dists_triangular_pdf( const double x, const double a, const double b, const double c );
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
#include "stdlib/stats/base/dists/triangular/pdf.h"
#include "stdlib/constants/float64/eps.h"
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

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 30.0 );
        a = random_uniform( 0.0, 10.0 );
        b = random_uniform( a+STDLIB_CONSTANT_FLOAT64_EPS, 40.0 );
        c = random_uniform( a, b );
        y = stdlib_base_dists_triangular_pdf( x, a, b, c );
        printf( "x: %lf, a: %lf, b: %lf, c: %lf, f(x;a,b,c): %lf\n", x, a, b, c, y );
    }
}
```

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[triangular-distribution]: https://en.wikipedia.org/wiki/Triangular_distribution

</section>

<!-- /.links -->
