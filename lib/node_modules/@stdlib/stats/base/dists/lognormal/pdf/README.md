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

> [Lognormal][lognormal-distribution] distribution probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [lognormal][lognormal-distribution] random variable is

<!-- <equation class="equation" label="eq:pdf" align="center" raw="f(x;\mu,\sigma) = \frac{1}{x\sqrt{2\pi\sigma^2}} e^{-\frac{\left(\ln x-\mu\right)^2}{2\sigma^2}}" alt="Probability density function (PDF) for a lognormal distribution."> -->

```math
f(x;\mu,\sigma) = \frac{1}{x\sqrt{2\pi\sigma^2}} e^{-\frac{\left(\ln x-\mu\right)^2}{2\sigma^2}}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\mu,\sigma) = \frac{1}{x\sqrt{2\pi\sigma^2}} e^{-\frac{\left(\ln x-\mu\right)^2}{2\sigma^2}}" data-equation="eq:pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/lognormal/pdf/docs/img/equation_pdf.svg" alt="Probability density function (PDF) for a lognormal distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the location parameter and `sigma > 0` is the scale parameter. According to the definition, the _natural logarithm_ of a random variable from a
[lognormal distribution][lognormal-distribution] follows a [normal distribution][normal-distribution].

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats/base/dists/lognormal/pdf' );
```

#### pdf( x, mu, sigma )

Evaluates the [probability density function][pdf] (PDF) for a [lognormal][lognormal-distribution] distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).

```javascript
var y = pdf( 2.0, 0.0, 1.0 );
// returns ~0.157

y = pdf( 1.0, 0.0, 1.0 );
// returns ~0.399

y = pdf( 1.0, 3.0, 1.0 );
// returns ~0.004
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

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, 0.0, -1.0 );
// returns NaN

y = pdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### pdf.factory( mu, sigma )

Returns a function for evaluating the [probability density function][pdf] (PDF) of a [lognormal][lognormal-distribution] distribution with parameters `mu` (location parameter) and `sigma` (scale parameter).

```javascript
var mypdf = pdf.factory( 4.0, 2.0 );
var y = mypdf( 10.0 );
// returns ~0.014

y = mypdf( 2.0 );
// returns ~0.025
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/base/uniform' );
var EPS = require( '@stdlib/constants/float64/eps' );
var pdf = require( '@stdlib/stats/base/dists/lognormal/pdf' );

var sigma;
var mu;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = uniform( 0.1, 10.0 );
    mu = uniform( -5.0, 5.0 );
    sigma = uniform( EPS, 5.0 );
    y = pdf( x, mu, sigma );
    console.log( 'x: %d, µ: %d, σ: %d, f(x;µ,σ): %d', x.toFixed( 4 ), mu.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/lognormal/pdf.h"
```

#### stdlib_base_dists_lognormal_pdf( x, mu, sigma )

Evaluates the [probability density function][pdf] (PDF) of a [lognormal][lognormal-distribution] distribution with parameters input value `x`, location parameter `mu` and scale parameter `sigma`.

```c
double y = stdlib_base_dists_lognormal_pdf( 2.0, 0.0, 1.0 );
// returns ~0.157
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_lognormal_pdf( const double x, const double mu, const double sigma );
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
#include "stdlib/stats/base/dists/lognormal/pdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double mu;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.1, 10.0 );
        mu = random_uniform( -5.0, 5.0 );
        sigma = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        y = stdlib_base_dists_lognormal_pdf( x, mu, sigma );
        printf( "x: %lf, μ: %lf, σ: %lf, f(x;μ,σ): %lf\n", x, mu, sigma, y );
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

[lognormal-distribution]: https://en.wikipedia.org/wiki/Lognormal_distribution

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
