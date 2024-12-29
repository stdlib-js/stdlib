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

> [Weibull][weibull-distribution] distribution logarithm of [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_weibull_pdf" align="center" raw="f(x;\lambda,k) = \begin{cases} \frac{k}{\lambda}\left (\frac{x}{\lambda} \right)^{k-1}e^{-(x/\lambda)^k} & x \geq 0 \\ 0 & x < 0\end{cases}" alt="Probability density function (PDF) for a Weibull distribution."> -->

```math
f(x;\lambda,k) = \begin{cases} \frac{k}{\lambda}\left (\frac{x}{\lambda} \right)^{k-1}e^{-(x/\lambda)^k} & x \geq 0 \\ 0 & x < 0\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\lambda,k) = \begin{cases} \frac{k}{\lambda}\left (\frac{x}{\lambda} \right)^{k-1}e^{-(x/\lambda)^k} &amp; x \geq 0 \\ 0 &amp; x &lt; 0\end{cases}" data-equation="eq:weibull_weibull_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/weibull/logpdf/docs/img/equation_weibull_weibull_pdf.svg" alt="Probability density function (PDF) for a Weibull distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `lambda > 0` and `k > 0` are the respective [scale][scale] and [shape][shape] parameters of the distribution.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/weibull/logpdf' );
```

#### logpdf( x, k, lambda )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var y = logpdf( 2.0, 1.0, 0.5 );
// returns ~-3.307

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

If provided `k <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, 1.0 );
// returns NaN

y = logpdf( 2.0, -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 1.0, 0.0 );
// returns NaN

y = logpdf( 2.0, 1.0, -1.0 );
// returns NaN
```

#### logpdf.factory( k, lambda )

Returns a `function` for evaluating the logarithm of the [PDF][pdf] for a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```javascript
var mylogpdf = logpdf.factory( 2.0, 10.0 );

var y = mylogpdf( 12.0 );
// returns ~-2.867

y = mylogpdf( 5.0 );
// returns ~-2.553
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
var logpdf = require( '@stdlib/stats/base/dists/weibull/logpdf' );

var lambda;
var k;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    k = randu() * 10.0;
    y = logpdf( x, k, lambda );
    console.log( 'x: %d, k: %d, λ: %d, ln(f(x;k,λ)): %d', x.toFixed( 4 ), k.toFixed( 4 ), lambda.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/weibull/logpdf.h"
```

#### stdlib_base_dists_weibull_logpdf( x, k, lambda )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [Weibull][weibull-distribution] distribution with [shape parameter][shape] `k` and [scale parameter][scale] `lambda`.

```c
double out = stdlib_base_dists_weibull_logpdf( 2.0, 1.0, 0.5 );
// returns ~3.307
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **k**: `[in] double` scale parameter.
-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_weibull_logpdf( const double x, const double k, const double lambda );
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
#include "stdlib/stats/base/dists/weibull/logpdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double x;
    double k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        lambda = random_uniform( 0.0, 10.0 );
        k = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_weibull_logpdf( x, k, lambda );
        printf( "x: %lf, k: %lf, λ: %lf, ln(f(x;k,λ)): %lf\n", x, k, lambda, y );
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

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[shape]: https://en.wikipedia.org/wiki/Shape_parameter

[scale]: https://en.wikipedia.org/wiki/Scale_parameter

</section>

<!-- /.links -->
