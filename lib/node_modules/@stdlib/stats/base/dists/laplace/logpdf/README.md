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

> [Laplace][laplace-distribution] distribution logarithm of probability density function (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [Laplace][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_pdf" align="center" raw="f(x\mid\mu,b) = \frac{1}{2b} \exp \left( -\frac{|x-\mu|}{b} \right)" alt="Probability density function (PDF) for a Laplace distribution."> -->

```math
f(x\mid\mu,b) = \frac{1}{2b} \exp \left( -\frac{|x-\mu|}{b} \right)
```

<!-- <div class="equation" align="center" data-raw-text="f(x\mid\mu,b) = \frac{1}{2b} \exp \left( -\frac{|x-\mu|}{b} \right)" data-equation="eq:laplace_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/laplace/logpdf/docs/img/equation_laplace_pdf.svg" alt="Probability density function (PDF) for a Laplace distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the location parameter and `b > 0` is the scale parameter (also called diversity).

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/laplace/logpdf' );
```

#### logpdf( x, mu, b )

Evaluates the logarithm of the [probability density function][pdf] (PDF) for a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var y = logpdf( 2.0, 0.0, 1.0 );
// returns ~-2.693

y = logpdf( -1.0, 2.0, 3.0 );
// returns ~-2.792

y = logpdf( 2.5, 2.0, 3.0 );
// returns ~-1.958
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

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logpdf( 2.0, 8.0, 0.0 );
// returns NaN
```

#### logpdf.factory( mu, b )

Returns a `function` for evaluating the logarithm of the [PDF][pdf] for a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 10.0, 2.0 );

var y = mylogpdf( 10.0 );
// returns ~-1.386

y = mylogpdf( 5.0 );
// returns ~-3.886

y = mylogpdf( 12.0 );
// returns ~-2.386
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
var logpdf = require( '@stdlib/stats/base/dists/laplace/logpdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 10.0, opts );
var mu = uniform( 100, 0.0, 10.0, opts );
var b = uniform( 100, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, µ: %0.4f, b: %0.4f, ln(f(x;µ,b)): %0.4f', x, mu, b, logpdf );
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
#include "stdlib/stats/base/dists/laplace/logpdf.h"
```

#### stdlib_base_dists_laplace_logpdf( x, mu, b )

Evaluates the logarithm of the probability density function (PDF) for a Laplace distribution with location parameter `mu` and scale parameter `b` at a value `x`.

```c
double out = stdlib_base_dists_laplace_logpdf( 2.0, 0.0, 1.0 );
// returns ~-2.693
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **b**: `[in] double` rate parameter.

```c
double stdlib_base_dists_laplace_logpdf( const double x, const double mu, const double b );
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
#include "stdlib/stats/base/dists/laplace/logpdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double b;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        mu = random_uniform( -5.0, 5.0 );
        b = random_uniform( 0.0, 20.0 );
        x = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_laplace_logpdf( x, mu, b );
        printf( "x: %lf, µ: %lf, b: %lf, ln(f(x;µ,b)): %lf\n", x, mu, b, y );
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

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
