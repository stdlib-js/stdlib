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

> [Gamma][gamma-distribution] distribution logarithm of probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [gamma][gamma-distribution] random variable is

<!-- <equation class="equation" label="eq:gamma_pdf" align="center" raw="f(x;\alpha,\beta)=\frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha \,-\, 1} e^{- \beta x }" alt="Probability density function (PDF) for a Gamma distribution."> -->

```math
f(x;\alpha,\beta)=\frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha \,-\, 1} e^{- \beta x }
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\alpha,\beta)=\frac{\beta^\alpha}{\Gamma(\alpha)} x^{\alpha \,-\, 1} e^{- \beta x }" data-equation="eq:gamma_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gamma/logpdf/docs/img/equation_gamma_pdf.svg" alt="Probability density function (PDF) for a Gamma distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `α > 0` is the shape parameter and `β > 0` is the rate parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/gamma/logpdf' );
```

#### logpdf( x, alpha, beta )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [gamma][gamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var y = logpdf( 2.0, 0.5, 1.0 );
// returns ~-2.919

y = logpdf( 0.1, 1.0, 1.0 );
// returns ~-0.1

y = logpdf( -1.0, 4.0, 2.0 );
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

If provided `alpha < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -0.5, 1.0 );
// returns NaN
```

If provided `alpha = 0`, the function evaluates the logarithm of the [PDF][pdf] for a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logpdf( 2.0, 0.0, 2.0 );
// returns -Infinity

y = logpdf( 0.0, 0.0, 2.0 );
// returns Infinity
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 1.0, 0.0 );
// returns NaN

y = logpdf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### logpdf.factory( alpha, beta )

Returns a `function` for evaluating the natural logarithm of the [PDF][pdf] for a [gamma][gamma-distribution]  distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var mylogpdf = logpdf.factory( 3.0, 1.5 );

var y = mylogpdf( 1.0 );
// returns ~-0.977

y = mylogpdf( 4.0 );
// returns ~-2.704
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var logpdf = require( '@stdlib/stats/base/dists/gamma/logpdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.0, 3.0, opts );
var alpha = uniform( 10, 0.0, 5.0, opts );
var beta = uniform( 10, 0.0, 5.0, opts );

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
#include "stdlib/stats/base/dists/gamma/logpdf.h"
```

#### stdlib_base_dists_gamma_logpdf( x, alpha, beta )

Evaluates the logarithm of the probability density function (PDF) for a gamma distribution with shape parameter `alpha` and rate parameter `beta` at a value `x`.

```c
double out = stdlib_base_dists_gamma_logpdf( 2.0, 0.5, 1.0 );
// returns ~-2.919
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` shape parameter.
-   **b**: `[in] double` rate parameter.

```c
double stdlib_base_dists_gamma_logpdf( const double x, const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/gamma/logpdf.h"
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
        x = random_uniform( 0.0, 10.0 ) - 5.0;
        alpha = random_uniform( 0.0, 20.0 );
        beta = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_gamma_logpdf( x, alpha, beta );
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

[gamma-distribution]: https://en.wikipedia.org/wiki/Gamma_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
