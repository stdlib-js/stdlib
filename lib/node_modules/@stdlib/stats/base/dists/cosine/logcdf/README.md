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

> Evaluate the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [raised cosine][cosine-distribution] distribution.

<section class="intro">

The [cumulative distribution function][cdf] for a [raised cosine][cosine-distribution] random variable is

<!-- <equation class="equation" label="eq:cosine_cdf" align="center" raw="F(x;\mu ,s)=\begin{cases} 0 & \text{ for } x < \mu - s \\ {\frac {1}{2}}\left[1\!+\!{\frac {x\!-\!\mu }{s}}\!+\!{\frac {1}{\pi }}\sin \left({\frac {x\!-\!\mu }{s}}\,\pi \right)\right] & \text{ for } \mu - s \le x \le \mu + s \\ 1 & \text{ for } x > \mu + s \end{cases}" alt="Cumulative distribution function for a raised cosine distribution."> -->

```math
F(x;\mu ,s)=\begin{cases} 0 & \text{ for } x < \mu - s \\ {\frac {1}{2}}\left[1\!+\!{\frac {x\!-\!\mu }{s}}\!+\!{\frac {1}{\pi }}\sin \left({\frac {x\!-\!\mu }{s}}\,\pi \right)\right] & \text{ for } \mu - s \le x \le \mu + s \\ 1 & \text{ for } x > \mu + s \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\mu ,s)=\begin{cases} 0 &amp; \text{ for } x &lt; \mu - s \\ {\frac {1}{2}}\left[1\!+\!{\frac {x\!-\!\mu }{s}}\!+\!{\frac {1}{\pi }}\sin \left({\frac {x\!-\!\mu }{s}}\,\pi \right)\right] &amp; \text{ for } \mu - s \le x \le \mu + s \\ 1 &amp; \text{ for } x &gt; \mu + s \end{cases}" data-equation="eq:cosine_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/cosine/logcdf/docs/img/equation_cosine_cdf.svg" alt="Cumulative distribution function for a raised cosine distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the location parameter and `s > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logcdf = require( '@stdlib/stats/base/dists/cosine/logcdf' );
```

#### logcdf( x, mu, s )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [raised cosine][cosine-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = logcdf( 2.0, 0.0, 3.0 );
// returns ~-0.029

y = logcdf( 0.0, 0.0, 1.0 );
// returns ~-0.693

y = logcdf( -1.0, 4.0, 2.0 );
// returns -Infinity
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

If provided `s < 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.0, -1.0 );
// returns NaN
```

If provided `s = 0`, the function evaluates the logarithm of the [CDF][cdf] for a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = logcdf( 2.0, 8.0, 0.0 );
// returns -Infinity

y = logcdf( 8.0, 8.0, 0.0 );
// returns 0.0

y = logcdf( 10.0, 8.0, 0.0 );
// returns 0.0
```

#### logcdf.factory( mu, s )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] of a [raised cosine][cosine-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mylogcdf = logcdf.factory( 10.0, 2.0 );

var y = mylogcdf( 10.0 );
// returns ~-0.693

y = mylogcdf( 8.0 );
// returns -Infinity

y = mylogcdf( 12.0 );
// returns 0.0
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
var logcdf = require( '@stdlib/stats/base/dists/cosine/logcdf' );

var mu;
var s;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    mu = randu() * 10.0;
    s = randu() * 10.0;
    y = logcdf( x, mu, s );
    console.log( 'x: %d, µ: %d, s: %d, ln(F(x;µ,s)): %d', x, mu, s, y );
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
#include "stdlib/stats/base/dists/cosine/logcdf.h"
```

#### stdlib_base_dists_cosine_logcdf( x, mu, s )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [raised cosine][cosine-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```c
double out = stdlib_base_dists_cosine_logcdf( 0.5, 0.0, 1.0 );
// returns ~0.909
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **mu**: `[in] double` location parameter.
-   **s**: `[in] double` scale parameter.

```c
double stdlib_base_dists_cosine_logcdf( const double x, const double mu, const double s );
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
#include "stdlib/stats/base/dists/cosine/cdf.h"
#include "stdlib/constants/float64/eps.h"
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

    for ( i = 0; i < 10; i++ ) {
        x = random_uniform( -50.0, 50.0 );
        mu = random_uniform( -50.0, 50.0 );
        s = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
        y = stdlib_base_dists_cosine_logcdf( x, mu, s );
        printf( "x: %lf, µ: %lf, s: %lf, ln(F(x;µ,s)): %lf\n", x, mu, s , y );
    }

    return 0;
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

[cosine-distribution]: https://en.wikipedia.org/wiki/Raised_cosine_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
