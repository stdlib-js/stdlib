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

> [Arcsine][arcsine-distribution] distribution [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for an [arcsine][arcsine-distribution] random variable is

<!-- <equation class="equation" label="eq:arcsine_pdf" align="center" raw="f(x;a,b)=\begin{cases} {\frac{1}{\pi {\sqrt{(x-a)(b-x)}}}} & \text{for } x \in [a,b] \\ 0 & \text{otherwise} \end{cases}" alt="Probability density function (PDF) for an arcsine distribution."> -->

```math
f(x;a,b)=\begin{cases} {\frac{1}{\pi {\sqrt{(x-a)(b-x)}}}} & \text{for } x \in [a,b] \\ 0 & \text{otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;a,b)=\begin{cases} {\frac{1}{\pi {\sqrt{(x-a)(b-x)}}}} &amp; \text{for } x \in [a,b] \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:arcsine_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/arcsine/pdf/docs/img/equation_arcsine_pdf.svg" alt="Probability density function (PDF) for an arcsine distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support of the distribution. The parameters must satisfy `a < b`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/arcsine/pdf' );
```

#### pdf( x, a, b )

Evaluates the [probability density function][pdf] (PDF) for an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = pdf( 2.0, 0.0, 4.0 );
// returns ~0.159

y = pdf( 5.0, 0.0, 4.0 );
// returns 0.0

y = pdf( 0.25, 0.0, 1.0 );
// returns ~0.735
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 0.0, 1.0 );
// returns NaN

y = pdf( 0.0, NaN, 1.0 );
// returns NaN

y = pdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `a >= b`, the function returns `NaN`.

```javascript
var y = pdf( 2.5, 3.0, 2.0 );
// returns NaN

y = pdf( 2.5, 3.0, 3.0 );
// returns NaN
```

#### pdf.factory( a, b )

Returns a `function` for evaluating the [PDF][pdf] of an [arcsine][arcsine-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myPDF = pdf.factory( 6.0, 7.0 );
var y = myPDF( 7.0 );
// returns Infinity

y = myPDF( 5.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var pdf = require( '@stdlib/stats/base/dists/arcsine/pdf' );

var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    x = ( randu()*20.0 )- 10.0;
    a = ( randu()*20.0 )- 20.0;
    b = a + ( randu()*40.0 );
    y = pdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, f(x;a,b): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

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
#include "stdlib/stats/base/dists/arcsine/pdf.h"
```

#### stdlib_base_dists_arcsine_pdf( x, a, b )

Evaluates the probability density function (PDF) for an arcsine distribution.

```c
double out = stdlib_base_dists_arcsine_pdf( 0.5, 0.0, 4.0 );
// returns ~0.159
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] double` minimum support.
-   **b**: `[in] double` maximum support.

```c
double stdlib_base_dists_arcsine_pdf( const double x, const double a, const double b );
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
#include "stdlib/stats/base/dists/arcsine/pdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double a;
    double b;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( -10.0, 10.0 );
        a = random_uniform( -20.0, 0.0 );
        b = random_uniform( a, a+40.0 );
        y = stdlib_base_dists_arcsine_pdf( x, a, b );
        printf( "x: %lf, a: %lf, b: %lf, f(x;a,b): %lf\n", x, a, b, y );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

</section>

<!-- /.links -->
