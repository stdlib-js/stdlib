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

# Logarithm of Cumulative Distribution Function

> Evaluate the natural logarithm of the [cumulative distribution function][cdf] for an [exponential][exponential-distribution] distribution.

<section class="intro">

The [cumulative distribution function][cdf] for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_cdf" align="center" raw="F(x;\lambda) = \begin{cases} 1-e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}" alt="Cumulative distribution function for an exponential distribution."> -->

```math
F(x;\lambda) = \begin{cases} 1-e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\lambda) = \begin{cases} 1-e^{-\lambda x} &amp; x \ge 0 \\ 0 &amp; x &lt; 0 \end{cases}" data-equation="eq:exponential_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/logcdf/docs/img/equation_exponential_cdf.svg" alt="Cumulative distribution function for an exponential distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/exponential/logcdf' );
```

#### logcdf( x, lambda )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] for an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var y = logcdf( 2.0, 0.3 );
// returns ~-0.796

y = logcdf( 10.0, 0.3 );
// returns ~-0.051
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0 );
// returns NaN

y = logcdf( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -1.0 );
// returns NaN
```

#### logcdf.factory( lambda )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function (CDF)][cdf] for an exponential distribution with rate parameter `lambda`.

```javascript
var mylogcdf = logcdf.factory( 0.1 );

var y = mylogcdf( 8.0 );
// returns ~-0.597

y = mylogcdf( 2.0 );
// returns ~-1.708

y = mylogcdf( 0.0 );
// returns -Infinity
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
var logcdf = require( '@stdlib/stats/base/dists/exponential/logcdf' );

var lambda;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    lambda = randu() * 10.0;
    y = logcdf( x, lambda );
    console.log( 'x: %d, λ: %d, ln(F(x;λ)): %d', x, lambda, y );
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
#include "stdlib/stats/base/dists/exponential/cdf.h"
```

#### stdlib_base_dists_exponential_cdf( x, lambda )

Evaluates the natural logarithm of the [cumulative distribution function (CDF)][cdf] for an exponential distribution with rate parameter `lambda`.

```c
double out = stdlib_base_dists_exponential_logcdf( 2.0, 0.1 );
// returns ~-1.708
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **lambda**: `[in] double` rate parameter.

```c
double stdlib_base_dists_exponential_logcdf( const double x, const double lambda );
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
#include "stdlib/stats/base/dists/exponential/logcdf.h"
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
        y = stdlib_base_dists_exponential_logcdf( x, lambda );
        printf( "x: %lf, λ: %lf, ln(F(x;λ)): %lf\n", x, lambda, y );
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

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

</section>

<!-- /.links -->
