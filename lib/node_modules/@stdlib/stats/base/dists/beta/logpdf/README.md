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

> [Beta][beta-distribution] distribution logarithm of probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [beta][beta-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_pdf" align="center" raw="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1-x)^{\beta-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a beta distribution."> -->

```math
f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1-x)^{\beta-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\alpha,\beta)= \begin{cases} \frac{\Gamma(\alpha + \beta)}{\Gamma(\alpha) + \Gamma(\beta)}{x^{\alpha-1}(1-x)^{\beta-1}} &amp; \text{ for } x \in (0,1) \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:beta_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/beta/logpdf/docs/img/equation_beta_pdf.svg" alt="Probability density function (PDF) for a beta distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha > 0` is the first shape parameter and `beta > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/beta/logpdf' );
```

#### logpdf( x, alpha, beta )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [beta][beta-distribution]  distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var y = logpdf( 0.5, 0.5, 1.0 );
// returns ~-0.347

y = logpdf( 0.1, 1.0, 1.0 );
// returns 0.0

y = logpdf( 0.8, 4.0, 2.0 );
// returns ~0.717
```

If provided an input value `x` outside the support `[0,1]`, the function returns `-Infinity`.

```javascript
var y = logpdf( -0.1, 1.0, 1.0 );
// returns -Infinity

y = logpdf( 1.1, 1.0, 1.0 );
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

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 0.5, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.5, -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 0.5, 1.0, 0.0 );
// returns NaN

y = logpdf( 0.5, 1.0, -1.0 );
// returns NaN
```

#### logpdf.factory( alpha, beta )

Returns a `function` for evaluating the natural logarithm of the [PDF][pdf] for a [beta][beta-distribution]  distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var mylogPDF = logpdf.factory( 0.5, 0.5 );

var y = mylogPDF( 0.8 );
// returns ~-0.228

y = mylogPDF( 0.3 );
// returns ~-0.364
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
var logpdf = require( '@stdlib/stats/base/dists/beta/logpdf' );

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu();
    alpha = ( randu()*5.0 ) + EPS;
    beta = ( randu()*5.0 ) + EPS;
    y = logpdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, ln(f(x;α,β)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/beta/logpdf.h"
```

#### stdlib_base_dists_beta_logpdf( x, alpha, beta )

Evaluates the natural logarithm of the probability density function (logPDF) for a beta distribution with first shape parameter `alpha` and second shape parameter `beta`.

```c
double y = stdlib_base_dists_beta_logpdf( 0.5, 1.0, 1.0 );
// returns 0.0
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **alpha**: `[in] double` first shape parameter.
-   **beta**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_beta_logpdf( const double x, double alpha, const double beta );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section`
element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/beta/logpdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double alpha;
    double beta;
    double x;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = random_uniform( 0.0, 1.0 );
        alpha = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        beta = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        y = stdlib_base_dists_beta_logpdf( x, alpha, beta );
        printf( "x: %lf, α: %lf, β: %lf, ln(f(x;α,β)): %lf\n", x, alpha, beta, y );
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

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
