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

# Logarithm of Probability Density Function

> Evaluate the natural logarithm of the [probability density function][pdf] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable is

<!-- <equation class="equation" label="eq:kumaraswamy_pdf" align="center" raw="f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a Kumaraswamy's double bounded distribution."> -->

```math
f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} &amp; \text{ for } x \in (0,1) \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:kumaraswamy_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/logpdf/docs/img/equation_kumaraswamy_pdf.svg" alt="Probability density function (PDF) for a Kumaraswamy's double bounded distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a > 0` is the first shape parameter and `b > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/kumaraswamy/logpdf' );
```

#### logpdf( x, a, b )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var y = logpdf( 0.5, 1.0, 1.0 );
// returns 0.0

y = logpdf( 0.5, 2.0, 4.0 );
// returns ~0.523

y = logpdf( 0.2, 2.0, 2.0 );
// returns ~-0.264

y = logpdf( 0.8, 4.0, 4.0 );
// returns ~0.522

y = logpdf( -0.5, 4.0, 2.0 );
// returns -Infinity

y = logpdf( -Infinity, 4.0, 2.0 );
// returns -Infinity

y = logpdf( 1.5, 4.0, 2.0 );
// returns -Infinity

y = logpdf( +Infinity, 4.0, 2.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -1.0, 0.5 );
// returns NaN

y = logpdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.5, -1.0 );
// returns NaN

y = logpdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### logpdf.factory( a, b )

Returns a function for evaluating the natural logarithm of the [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var mylogpdf = logpdf.factory( 0.5, 0.5 );

var y = mylogpdf( 0.8 );
// returns ~-0.151

y = mylogpdf( 0.3 );
// returns ~-0.388
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var logpdf = require( '@stdlib/stats/base/dists/kumaraswamy/logpdf' );

var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu();
    a = ( randu()*5.0 ) + EPS;
    b = ( randu()*5.0 ) + EPS;
    y = logpdf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, ln(f(x;a,b)): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/kumaraswamy/logpdf.h"
```

#### stdlib_base_dists_kumaraswamy_logpdf( x, a, b )

Evaluates the natural logarithm of the probability distribution function (PDF) for a Kumaraswamy's double bounded distribution.

```c
double out = stdlib_base_dists_kumaraswamy_logpdf( 0.5, 1.0, 1.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **a**: `[in] double` first shape parameter.
-   **b**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_kumaraswamy_logpdf( const double x, const double a, const double b );
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
#include "stdlib/stats/base/dists/kumaraswamy/logpdf.h"
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
        x = random_uniform( 0, 1.0 );
        a = random_uniform( 0, 5.0 );
        b = random_uniform( 0, 5.0 );
        y = stdlib_base_dists_kumaraswamy_logpdf( x, a, b );
        printf( "x: %lf, a: %lf, b: %lf, ln(f(x;a,b)): %lf\n", x, a, b, y );
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

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
