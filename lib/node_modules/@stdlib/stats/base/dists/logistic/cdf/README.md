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

# Cumulative Distribution Function

> [Logistic][logistic-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [logistic][logistic-distribution] random variable is

<!-- <equation class="equation" label="eq:logistic_cdf" align="center" raw="F(x; \mu, s) = \frac{1}{1+e^{-\frac{x-\mu}{s}}}" alt="Cumulative distribution function for a logistic distribution."> -->

```math
F(x; \mu, s) = \frac{1}{1+e^{-\frac{x-\mu}{s}}}
```

<!-- <div class="equation" align="center" data-raw-text="F(x; \mu, s) = \frac{1}{1+e^{-\frac{x-\mu}{s}}}" data-equation="eq:logistic_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/logistic/cdf/docs/img/equation_logistic_cdf.svg" alt="Cumulative distribution function for a logistic distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the location parameter and `s > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/logistic/cdf' );
```

#### cdf( x, mu, s )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = cdf( 2.0, 0.0, 1.0 );
// returns ~0.881

y = cdf( 0.0, 0.0, 1.0 );
// returns 0.5

y = cdf( -1.0, 4.0, 2.0 );
// returns ~0.076
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 0.0, 1.0 );
// returns NaN

y = cdf( 0.0, NaN, 1.0 );
// returns NaN

y = cdf( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, 0.0, -1.0 );
// returns NaN
```

If provided `s = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = cdf( 2.0, 8.0, 0.0 );
// returns 0.0

y = cdf( 8.0, 8.0, 0.0 );
// returns 1.0

y = cdf( 10.0, 8.0, 0.0 );
// returns 1.0
```

#### cdf.factory( mu, s )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var mycdf = cdf.factory( 10.0, 2.0 );

var y = mycdf( 10.0 );
// returns 0.5

y = mycdf( 8.0 );
// returns ~0.269
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cdf = require( '@stdlib/stats/base/dists/logistic/cdf' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.0, 10.0, opts );
var mu = uniform( 10, 0.0, 10.0, opts );
var s = uniform( 10, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, µ: %0.4f, s: %0.4f, F(x;µ,s): %0.4f', x, mu, s, cdf );
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
#include "stdlib/stats/base/dists/logistic/cdf.h"
```

#### stdlib_base_dists_logistic_cdf( x, mu, s )

Evaluates the [cumulative distribution function][cdf] (CDF) for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```c
double out = stdlib_base_dists_logistic_cdf( 2.0, 0.0, 1.0 );
// returns ~0.881
```

The function accepts the following arguments:

-   **x**: `[in] double` value parameter.
-   **mu**: `[in] double` location parameter.
-   **s**: `[in] double` scale parameter.

```c
double stdlib_base_dists_logistic_cdf( const double x, const double mu, const double s );
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
#include "stdlib/stats/base/dists/logistic/cdf.h"
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
        mu = random_uniform( 0.0, 10.0 );
        s = random_uniform( 0.0, 10.0 );
        x = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_logistic_cdf( x, mu, s );
        printf( "x: %lf, µ: %lf, s: %lf, F(x;µ,s): %lf\n", x, mu, s, y );
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

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
