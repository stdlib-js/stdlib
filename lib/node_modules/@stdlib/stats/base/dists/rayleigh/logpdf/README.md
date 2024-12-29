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

> [Rayleigh][rayleigh-distribution] distribution logarithm of [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_pdf" align="center" raw="f(x;\sigma) = \begin{cases} \frac{x}{\sigma^2} e^{-x^2/(2\sigma^2)} &amp; \text{ for } x \ge 0 \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a Rayleigh distribution."> -->

```math
f(x;\sigma) = \begin{cases} \frac{x}{\sigma^2} e^{-x^2/(2\sigma^2)} &amp; \text{ for } x \ge 0 \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\sigma) = \begin{cases} \frac{x}{\sigma^2} e^{-x^2/(2\sigma^2)} &amp;amp; \text{ for } x \ge 0 \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:rayleigh_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/logpdf/docs/img/equation_rayleigh_pdf.svg" alt="Probability density function (PDF) for a Rayleigh distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `sigma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/rayleigh/logpdf' );
```

#### logpdf( x, sigma )

Evaluates the logarithm of the [probability density function][pdf] for a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```javascript
var y = logpdf( 0.3, 1.0 );
// returns ~-1.249

y = logpdf( 2.0, 0.8 );
// returns ~-1.986

y = logpdf( -1.0, 0.5 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN );
// returns NaN
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -1.0 );
// returns NaN
```

If provided `sigma = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logpdf( -2.0, 0.0 );
// returns -Infinity

y = logpdf( 0.0, 0.0 );
// returns +Infinity

y = logpdf( 2.0, 0.0 );
// returns -Infinity
```

#### logpdf.factory( sigma )

Returns a function for evaluating the logarithm of the [probability density function][pdf] (PDF) of a [Rayleigh][rayleigh-distribution] distribution with parameter `sigma` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 4.0 );

var y = mylogpdf( 6.0 );
// returns ~-2.106

y = mylogpdf( 4.0 );
// returns ~-1.886
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
var logpdf = require( '@stdlib/stats/base/dists/rayleigh/logpdf' );

var sigma;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    sigma = randu() * 10.0;
    y = logpdf( x, sigma );
    console.log( 'x: %d, σ: %d, f(x;σ): %d', x.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/rayleigh/logpdf.h"
```

#### stdlib_base_dists_rayleigh_logpdf( x, sigma )

Evaluates the logarithm of the probability density function (PDF) for a Rayleigh distribution.

```c
double out = stdlib_base_dists_rayleigh_logpdf( 0.3, 1.0 );
// returns ~-1.249
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_rayleigh_logpdf( const double x, const double sigma );
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
#include "stdlib/stats/base/dists/rayleigh/logpdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        sigma = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_rayleigh_logpdf( x, sigma );
        printf( "x: %lf, σ: %lf, ln(f(x;σ)): %lf\n", x, sigma, y );
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

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

</section>

<!-- /.links -->
