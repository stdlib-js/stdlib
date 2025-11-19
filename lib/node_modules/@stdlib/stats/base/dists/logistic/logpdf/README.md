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

> [Logistic][logistic-distribution] distribution logarithm of [probability density function (PDF)][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [logistic][logistic-distribution] random variable is

<!-- <equation class="equation" label="eq:logistic_pdf" align="center" raw="f(x; \mu,s) = \frac{e^{-\frac{x-\mu}{s}}} {s\left(1+e^{-\frac{x-\mu}{s}}\right)^2}" alt="Probability density function (PDF) for a logistic distribution."> -->

```math
f(x; \mu,s) = \frac{e^{-\frac{x-\mu}{s}}} {s\left(1+e^{-\frac{x-\mu}{s}}\right)^2}
```

<!-- <div class="equation" align="center" data-raw-text="f(x; \mu,s) = \frac{e^{-\frac{x-\mu}{s}}} {s\left(1+e^{-\frac{x-\mu}{s}}\right)^2}" data-equation="eq:logistic_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/logistic/logpdf/docs/img/equation_logistic_pdf.svg" alt="Probability density function (PDF) for a logistic distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the location parameter and `s` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/logistic/logpdf' );
```

#### logpdf( x, mu, s )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = logpdf( 2.0, 0.0, 1.0 );
// returns ~-2.254

y = logpdf( -1.0, 4.0, 4.0 );
// returns ~-3.14
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 0.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, -1.0 );
// returns NaN
```

If provided `s = 0`, the function evaluates the logarithm of the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = logpdf( 2.0, 8.0, 0.0 );
// returns -Infinity

y = logpdf( 8.0, 8.0, 0.0 );
// returns Infinity
```

#### logpdf.factory( mu, s )

Returns a function for evaluating the logarithm of the [probability density function][pdf] (PDF) of a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 10.0, 2.0 );

var y = mylogpdf( 10.0 );
// returns ~-2.079

y = mylogpdf( 5.0 );
// returns ~-3.351
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
var logpdf = require( '@stdlib/stats/base/dists/logistic/logpdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.0, 10.0, opts );
var mu = uniform( 10, 0.0, 10.0, opts );
var s = uniform( 10, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, µ: %0.4f, s: %0.4f, ln(f(x;µ,s)): %0.4f', x, mu, s, logpdf );
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
#include "stdlib/stats/base/dists/logistic/logpdf.h"
```

#### stdlib_base_dists_logistic_logpdf( x, mu, s )

Evaluates the logarithm of the probability density function (PDF) for a logistic distribution with location parameter `mu` and scale parameter `s` at a value `x`.

```c
double out = stdlib_base_dists_logistic_logpdf( 2.0, 0.0, 1.0 );
// returns ~-2.254
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **s**: `[in] double` scale parameter.

```c
double stdlib_base_dists_logistic_logpdf( const double x, const double mu, const double s );
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
#include "stdlib/stats/base/dists/logistic/logpdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double s;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( -5.0, 5.0 );
        mu = random_uniform( -5.0, 5.0 );
        s = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_logistic_logpdf( x, mu, s );
        printf( "x: %lf, µ: %lf, s: %lf, ln(f(x;µ,s)): %lf\n", x, mu, s, y );
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

[logistic-distribution]: https://en.wikipedia.org/wiki/Logistic_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
