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

> Evaluate the natural logarithm of the [probability density function][pdf] (PDF) for a [Pareto (Type I)][pareto-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [Pareto (Type I)][pareto-distribution] random variable is

<!-- <equation class="equation" label="eq:pareto_type1_pdf" align="center" raw="f(x;\alpha,\beta) = \begin{cases} \frac{\alpha\,\beta^\alpha}{x^{\alpha+1}} & \text{ for }x\ge \beta \\ 0 & \text{otherwise} \end{cases}" alt="Probability density function (PDF) for a Pareto (Type I) distribution."> -->

```math
f(x;\alpha,\beta) = \begin{cases} \frac{\alpha\,\beta^\alpha}{x^{\alpha+1}} & \text{ for }x\ge \beta \\ 0 & \text{otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\alpha,\beta) = \begin{cases} \frac{\alpha\,\beta^\alpha}{x^{\alpha+1}} &amp; \text{ for }x\ge \beta \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:pareto_type1_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/logpdf/docs/img/equation_pareto_type1_pdf.svg" alt="Probability density function (PDF) for a Pareto (Type I) distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha > 0` is the shape parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/pareto-type1/logpdf' );
```

#### logpdf( x, alpha, beta )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var y = logpdf( 4.0, 1.0, 1.0 );
// returns ~-2.773

y = logpdf( 20.0, 1.0, 10.0 );
// returns ~-3.689

y = logpdf( 7.0, 2.0, 6.0 );
// returns ~-1.561

y = logpdf( 7.0, 6.0, 3.0 );
// returns ~-5.238

y = logpdf( 1.0, 4.0, 2.0 );
// returns -Infinity

y = logpdf( 1.5, 4.0, 2.0 );
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
var y = logpdf( 2.0, -1.0, 0.5 );
// returns NaN

y = logpdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.5, -1.0 );
// returns NaN

y = logpdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### logpdf.factory( alpha, beta )

Returns a function for evaluating the natural logarithm of the [probability density function][pdf] (PDF) (CDF) of a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 0.5, 0.5 );
var y = mylogpdf( 0.8 );
// returns ~-0.705

y = mylogpdf( 2.0 );
// returns ~-2.079
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
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var logpdf = require( '@stdlib/stats/base/dists/pareto-type1/logpdf' );

var opts = {
    'dtype': 'float64'
};
var alpha = uniform( 10, 0.0, 4.0, opts );
var beta = uniform( 10, 0.0, 4.0, opts );
var x = uniform( 10, 0.0, 8.0, opts );

logEachMap( 'x: %0.4f, α: %0.4f, β: %0.4f, ln(f(x;α,β)): %0.4f', x, alpha, beta, logpdf );
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
#include "stdlib/stats/base/dists/pareto-type1/logpdf.h"
```

#### stdlib_base_dists_pareto_type1_logpdf( x, alpha, beta )

Evaluates the natural logarithm of the probability density function (PDF) for a Pareto (Type I) distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```c
double y = stdlib_base_dists_pareto_type1_logpdf( 4.0, 1.0, 1.0 );
// returns ~-2.773
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **alpha**: `[in] double` shape parameter.
-   **beta**: `[in] double` scale parameter.

```c
double stdlib_base_dists_pareto_type1_logpdf( const double x, const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/pareto-type1/logpdf.h"
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

    for ( i = 0; i < 25; i++ ) {
        alpha = random_uniform( 0.0, 8.0 );
        beta = random_uniform( 0.0, 4.0 );
        x = random_uniform( 0.0, 4.0 );
        y = stdlib_base_dists_pareto_type1_logpdf( x, alpha, beta );
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

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
