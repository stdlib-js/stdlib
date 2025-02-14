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

> Evaluate the natural logarithm of the probability density function (PDF) for an [exponential][exponential-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_pdf" align="center" raw="f(x;\lambda) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}" alt="Probability density function (PDF) for a Exponential distribution."> -->

```math
f(x;\lambda) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;\lambda) = \begin{cases} \lambda e^{-\lambda x} &amp; x \ge 0 \\ 0 &amp; x &lt; 0 \end{cases}" data-equation="eq:exponential_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/logpdf/docs/img/equation_exponential_pdf.svg" alt="Probability density function (PDF) for a Exponential distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats/base/dists/exponential/logpdf' );
```

#### logpdf( x, lambda )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var y = logpdf( 2.0, 0.3 );
// returns ~-1.804

y = logpdf( 2.0, 1.0 );
// returns ~-2.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 0.0 );
// returns NaN

y = logpdf( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -1.0 );
// returns NaN
```

#### logpdf.factory( lambda )

Returns a function for evaluating the natural logarithm of the probability density function ([PDF][pdf]) for an exponential distribution with rate parameter `lambda`.

```javascript
var mylogpdf = logpdf.factory( 0.1 );

var y = mylogpdf( 8.0 );
// returns ~-3.103

y = mylogpdf( 5.0 );
// returns ~-2.803
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
var logpdf = require( '@stdlib/stats/base/dists/exponential/logpdf' );

var lambda;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    y = logpdf( x, lambda );
    console.log( 'x: %d, λ: %d, ln(f(x;λ)): %d', x, lambda, y );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

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
#include "stdlib/stats/base/dists/exponential/logpdf.h"
```

#### stdlib_base_dists_exponential_logpdf( x, lambda )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```c
double out = stdlib_base_dists_exponential_logpdf( 2.0, 0.7 );
// returns ~0.173
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **lambda**: `[in] double` rate parameter.

```c
double stdlib_base_dists_exponential_logpdf( const double x, const double lambda );
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
#include "stdlib/stats/base/dists/exponential/logpdf.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 100.0 );
        lambda = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 100.0 );
        y = stdlib_base_dists_exponential_logpdf( x, lambda );
        printf( "x: %lf, λ: %lf, ln(f(x;λ)): %lf\n", x, lambda, y );
    }
}
```

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

</section>

<!-- /.links -->
