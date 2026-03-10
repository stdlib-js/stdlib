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

> [Wald][wald-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [Wald][wald-distribution] random variable is

<!-- <equation class="equation" label="eq:wald_pdf" align="center" raw="f(x;\mu,\lambda) = \sqrt{\frac{\lambda}{2\pi x^3}}\, e^{-\frac{\lambda(x-\mu)^2}{2\mu^2 x}}" alt="Probability density function (PDF) for a Wald distribution."> -->

```math
f(x;\mu,\lambda) = \sqrt{\frac{\lambda}{2\pi x^3}}\, e^{-\frac{\lambda(x-\mu)^2}{2\mu^2 x}}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\mu,\lambda) = \sqrt{\frac{\lambda}{2\pi x^3}}\, e^{-\frac{\lambda(x-\mu)^2}{2\mu^2 x}}" data-equation="eq:wald_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/wald/pdf/docs/img/equation_wald_pdf.svg" alt="Probability density function (PDF) for a Wald distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `µ > 0` is the mean and `λ > 0` is the shape parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/wald/pdf' );
```

#### pdf( x, mu, lambda )

Evaluates the [probability density function][pdf] (PDF) for a [Wald][wald-distribution] distribution with parameters `mu` (mean) and `lambda` (shape parameter).

```javascript
var y = pdf( 2.0, 1.0, 1.0 );
// returns ~0.110

y = pdf( 0.5, 2.0, 3.0 );
// returns ~0.362
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

If provided `mu <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0.0, 1.0 );
// returns NaN

y = pdf( 2.0, -1.0, 1.0 );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 1.0, -1.0 );
// returns NaN
```

If provided `lambda = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = pdf( 2.0, 1.0, 0.0 );
// returns 0.0

y = pdf( 1.0, 1.0, 0.0 );
// returns Infinity
```

If provided `x <= 0`, the function returns `0.0`.

```javascript
var y = pdf( 0.0, 1.0, 1.0 );
// returns 0.0

y = pdf( -1.0, 1.0, 1.0 );
// returns 0.0
```

#### pdf.factory( mu, lambda )

Partially applies `mu` and `lambda` to create a reusable function for evaluating the PDF.

```javascript
var mypdf = pdf.factory( 1.0, 1.0 );

var y = mypdf( 2.0 );
// returns ~0.110

y = mypdf( 0.5 );
// returns ~0.879
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pdf = require( '@stdlib/stats/base/dists/wald/pdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, EPS, 10.0, opts );
var mu = uniform( 10, EPS, 10.0, opts );
var lambda = uniform( 10, EPS, 20.0, opts );

logEachMap( 'x: %0.4f, µ: %0.4f, λ: %0.4f, f(x;µ,λ): %0.4f', x, mu, lambda, pdf );
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
#include "stdlib/stats/base/dists/wald/pdf.h"
```

#### stdlib_base_dists_wald_pdf( x, mu, lambda )

Evaluates the [probability density function][pdf] (PDF) for a [Wald][wald-distribution] distribution with parameters `mu` (mean) and `lambda` (shape parameter).

```c
double y = stdlib_base_dists_wald_pdf( 2.0, 1.0, 1.0 );
// returns ~0.110
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` mean.
-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_wald_pdf( const double x, const double mu, const double lambda );
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
#include "stdlib/stats/base/dists/wald/pdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double mu;
    double x;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        mu = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
        lambda = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
        y = stdlib_base_dists_wald_pdf( x, mu, lambda );
        printf( "x: %lf, µ: %lf, λ: %lf, f(x;µ,λ): %lf\n", x, mu, lambda, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[wald-distribution]: https://en.wikipedia.org/wiki/Inverse_Gaussian_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
