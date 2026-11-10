<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

> [Log-logistic][log-logistic-distribution] distribution [probability density function (PDF)][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [log-logistic][log-logistic-distribution] random variable is

<!-- <equation class="equation" label="eq:log_logistic_pdf" align="center" raw="f(x;\alpha,\beta) = \frac{\dfrac{\beta}{\alpha}\left(\dfrac{x}{\alpha}\right)^{\beta-1}}{\left(1+\left(\dfrac{x}{\alpha}\right)^{\beta}\right)^{2}}" alt="Probability density function (PDF) for a log-logistic distribution."> -->

```math
f(x;\alpha,\beta) = \frac{\dfrac{\beta}{\alpha}\left(\dfrac{x}{\alpha}\right)^{\beta-1}}{\left(1+\left(\dfrac{x}{\alpha}\right)^{\beta}\right)^{2}}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\alpha,\beta) = \frac{\dfrac{\beta}{\alpha}\left(\dfrac{x}{\alpha}\right)^{\beta-1}}{\left(1+\left(\dfrac{x}{\alpha}\right)^{\beta}\right)^{2}}" data-equation="eq:log_logistic_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@.../lib/node_modules/@stdlib/stats/base/dists/log-logistic/pdf/docs/img/equation_log_logistic_pdf.svg" alt="Probability density function (PDF) for a log-logistic distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `alpha` is the scale parameter and `beta` is the shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/log-logistic/pdf' );
```

#### pdf( x, alpha, beta )

Evaluates the [probability density function][pdf] (PDF) for a [log-logistic][log-logistic-distribution] distribution with parameters `alpha` (scale parameter) and `beta` (shape parameter) at a value `x`.

```javascript
var y = pdf( 2.0, 1.0, 1.0 );
// returns ~0.111

y = pdf( 4.0, 2.0, 3.0 );
// returns ~0.074
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0, 1.0 );
// returns NaN

y = pdf( 1.0, NaN, 1.0 );
// returns NaN

y = pdf( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### pdf.factory( alpha, beta )

Returns a function for evaluating the [probability density function][pdf] (PDF) of a [log-logistic][log-logistic-distribution] distribution with parameters `alpha` (scale parameter) and `beta` (shape parameter).

```javascript
var myPdf = pdf.factory( 1.0, 1.0 );

var y = myPdf( 2.0 );
// returns ~0.111

y = myPdf( -1.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var pdf = require( '@stdlib/stats/base/dists/log-logistic/pdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.1, 10.0, opts );
var alpha = uniform( 10, 0.1, 10.0, opts );
var beta = uniform( 10, 0.1, 10.0, opts );

logEachMap( 'x: %0.4f, α: %0.4f, β: %0.4f, f(x;α,β): %0.4f', x, alpha, beta, pdf );
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
#include "stdlib/stats/base/dists/log-logistic/pdf.h"
```

#### stdlib_base_dists_log_logistic_pdf( x, alpha, beta )

Evaluates the [probability density function][pdf] (PDF) for a [log-logistic][log-logistic-distribution] distribution with parameters `alpha` (scale parameter) and `beta` (shape parameter) at a value `x`.

```c
double out = stdlib_base_dists_log_logistic_pdf( 2.0, 1.0, 1.0 );
// returns ~0.111
```

The function accepts the following arguments:

-   **x**: `[in] double` input parameter.
-   **alpha**: `[in] double` scale parameter.
-   **beta**: `[in] double` shape parameter.

```c
double stdlib_base_dists_log_logistic_pdf( const double x, const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/log-logistic/pdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max-min ) );
}

int main( void ) {
    double alpha;
    double beta;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.1, 10.0 );
        alpha = random_uniform( 0.1, 10.0 );
        beta = random_uniform( 0.1, 10.0 );
        y = stdlib_base_dists_log_logistic_pdf( x, alpha, beta );
        printf( "x: %lf, α: %lf, β: %lf, f(x;α,β): %lf\n", x, alpha, beta, y );
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

[log-logistic-distribution]: https://en.wikipedia.org/wiki/Log-logistic_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
