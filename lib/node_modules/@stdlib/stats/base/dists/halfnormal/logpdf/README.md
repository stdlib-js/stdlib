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

# Logarithm of Probability Density Function

> [Half-normal][half-normal-distribution] distribution natural logarithm of [probability density function (PDF)][pdf].

<section class="intro">

The [probability density function][pdf] (PDF) for a [half-normal][half-normal-distribution] random variable is

<!-- <equation class="equation" label="eq:halfnormal_pdf" align="center" raw="f(x;\sigma) = \frac{\sqrt{2}}{\sigma\sqrt{\pi}} e^{-\frac{x^2}{2\sigma^2}}" alt="Probability density function (PDF) for a half-normal distribution."> -->

```math
f(x;\sigma) = \frac{\sqrt{2}}{\sigma\sqrt{\pi}} e^{-\frac{x^2}{2\sigma^2}}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\sigma) = \frac{\sqrt{2}}{\sigma\sqrt{\pi}} e^{-\frac{x^2}{2\sigma^2}}" data-equation="eq:halfnormal_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@main/lib/node_modules/@stdlib/stats/base/dists/halfnormal/logpdf/docs/img/equation_halfnormal_pdf.svg" alt="Probability density function (PDF) for a half-normal distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `x >= 0`, where `sigma > 0` is the scale parameter. For `x < 0`, the PDF is `0`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/halfnormal/logpdf' );
```

#### logpdf( x, sigma )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [half-normal][half-normal-distribution] distribution with parameter `sigma` (scale parameter).

```javascript
var y = logpdf( 0.8, 1.0 );
// returns ~-0.546

y = logpdf( 0.5, 1.0 );
// returns ~-0.351

y = logpdf( 1.2, 2.0 );
// returns ~-1.099
```

If `x < 0`, the function returns `-Infinity`.

```javascript
var y = logpdf( -0.2, 1.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -1.0 );
// returns NaN

y = logpdf( 2.0, 0.0 );
// returns NaN
```

#### logpdf.factory( sigma )

Returns a `function` for evaluating the logarithm of the [PDF][pdf] for a [half-normal][half-normal-distribution] distribution with parameter `sigma` (scale parameter).

```javascript
var mylogpdf = logpdf.factory( 1.0 );

var y = mylogpdf( 0.8 );
// returns ~-0.546

y = mylogpdf( 1.2 );
// returns ~-0.946
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
var logpdf = require( '@stdlib/stats/base/dists/halfnormal/logpdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 25, 0.0, 3.0, opts );
var sigma = uniform( 25, 0.0, 3.0, opts );

logEachMap( 'x: %0.4f, σ: %0.4f, ln(f(x;σ)): %0.4f', x, sigma, logpdf );
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
#include "stdlib/stats/base/dists/halfnormal/logpdf.h"
```

#### stdlib_base_dists_halfnormal_logpdf( x, sigma )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [half-normal][half-normal-distribution] distribution with parameter `sigma` (scale parameter).

```c
double out = stdlib_base_dists_halfnormal_logpdf( 0.8, 1.0 );
// returns ~-0.546
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_halfnormal_logpdf( const double x, const double sigma );
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
#include "stdlib/stats/base/dists/halfnormal/logpdf.h"
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
        sigma = random_uniform( 0.1, 10.0 );
        y = stdlib_base_dists_halfnormal_logpdf( x, sigma );
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

[half-normal-distribution]: https://en.wikipedia.org/wiki/Half-normal_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
