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

> [Laplace][laplace-distribution] distribution logarithm of [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Laplace][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_cdf" align="center" raw="F(x;\mu,b) =\tfrac{1}{2} + \tfrac{1}{2} \operatorname{sgn}(x-\mu) \left(1-\exp \left(-\frac{|x-\mu|}{b} \right ) \right )" alt="Cumulative distribution function for a Laplace distribution."> -->

```math
F(x;\mu,b) =\tfrac{1}{2} + \tfrac{1}{2} \mathop{\mathrm{sgn}}(x-\mu) \left(1-\exp \left(-\frac{|x-\mu|}{b} \right ) \right )
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\mu,b) =\tfrac{1}{2} + \tfrac{1}{2} \operatorname{sgn}(x-\mu) \left(1-\exp \left(-\frac{|x-\mu|}{b} \right ) \right )" data-equation="eq:laplace_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/laplace/logcdf/docs/img/equation_laplace_cdf.svg" alt="Cumulative distribution function for a Laplace distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/laplace/logcdf' );
```

#### logcdf( x, mu, b )

Evaluates the logarithm of the [cumulative distribution function][cdf] (CDF) for a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var y = logcdf( 2.0, 0.0, 1.0 );
// returns ~-0.07

y = logcdf( 5.0, 10.0, 3.0 );
// returns ~-2.36
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 0.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.0, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.0, 0.0 );
// returns NaN
```

#### logcdf.factory( mu, b )

Returns a function for evaluating the logarithm of the [cumulative distribution function][cdf] of a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var mylogcdf = logcdf.factory( 3.0, 1.5 );

var y = mylogcdf( 1.0 );
// returns ~-2.026

y = mylogcdf( 4.0 );
// returns ~-0.297
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
var logcdf = require( '@stdlib/stats/base/dists/laplace/logcdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, 10.0, opts );
var mu = uniform( 100, 0.0, 10.0, opts );
var b = uniform( 100, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, µ: %0.4f, b: %0.4f, ln(F(x;µ,b)): %0.4f', x, mu, b, logcdf );
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
#include "stdlib/stats/base/dists/laplace/logcdf.h"
```

#### stdlib_base_dists_laplace_logcdf( x, mu, b )

Evaluates the logarithm of the cumulative distribution function (CDF) for a Laplace distribution with location parameter `mu` and scale parameter `b` at a value `x`.

```c
double out = stdlib_base_dists_laplace_logcdf( 2.0, 0.0, 1.0 );
// returns ~-0.07
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **b**: `[in] double` rate parameter.

```c
double stdlib_base_dists_laplace_logcdf( const double x, const double mu, const double b );
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
#include "stdlib/stats/base/dists/laplace/logcdf.h"
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
        y = stdlib_base_dists_laplace_logcdf( x, mu, b );
        printf( "x: %lf, µ: %lf, b: %lf, ln(F(x;µ,b)): %lf\n", x, mu, b, y );
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

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

</section>

<!-- /.links -->
