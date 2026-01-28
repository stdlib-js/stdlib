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

# Logarithm of Probability Mass Function

> [Geometric][geometric-distribution] distribution logarithm of [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [geometric][geometric-distribution] random variable is defined as

<!-- <equation class="equation" label="eq:geometric_pmf" align="center" raw="\Pr(X = x) = \begin{cases}(1-p)^{x}\,p & \text{ for } x=0,1,2,\ldots \\ 0 & \text{ otherwise } \end{cases}" alt="Probability mass function (PMF) for a geometric distribution."> -->

```math
\Pr(X = x) = \begin{cases}(1-p)^{x}\,p & \text{ for } x=0,1,2,\ldots \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\Pr(X = x) = \begin{cases}(1-p)^{x}\,p &amp; \text{ for } x=0,1,2,\ldots \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:geometric_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/logpmf/docs/img/equation_geometric_pmf.svg" alt="Probability mass function (PMF) for a geometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `0 <= p <= 1` is the success probability. The random variable `X` denotes the number of failures until the first success in a sequence of independent Bernoulli trials.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var logpmf = require( '@stdlib/stats/base/dists/geometric/logpmf' );
```

#### logpmf( x, p )

Evaluates the logarithm of the [probability mass function][pmf] (PMF) of a [geometric][geometric-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var y = logpmf( 4.0, 0.3 );
// returns ~-2.631

y = logpmf( 2.0, 0.7 );
// returns ~-2.765

y = logpmf( -1.0, 0.5 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, 0.0 );
// returns NaN

y = logpmf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, -1.0 );
// returns NaN

y = logpmf( 2.0, 1.5 );
// returns NaN
```

#### logpmf.factory( p )

Returns a function for evaluating the logarithm of the [probability mass function][pmf] (PMF) of a [geometric][geometric-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var mylogpmf = logpmf.factory( 0.5 );
var y = mylogpmf( 3.0 );
// returns ~-2.773

y = mylogpmf( 1.0 );
// returns ~-1.386
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpmf` or `logcdf` functions is preferable to manually computing the logarithm of the `pmf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var logpmf = require( '@stdlib/stats/base/dists/geometric/logpmf' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 10, 0.0, 1.0, opts );
var x = discreteUniform( 10, 0, 5, opts );

logEachMap( 'x: %d, p: %0.4f, ln( P( X = x; p ) ): %0.4f', x, p, logpmf );
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
#include "stdlib/stats/base/dists/geometric/logpmf.h"
```

#### stdlib_base_dists_geometric_logpmf( x, p )

Evaluates the logarithm of the [probability mass function][pmf] (PMF) of the [geometric][geometric-distribution] distribution with success probability `0 <= p <= 1`.

```c
double out = stdlib_base_dists_geometric_logpmf( 4.0, 0.3 );
// returns ~-2.631
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **p**: `[in] double` probability of success.

```c
double stdlib_base_dists_geometric_logpmf( const double x, const double p );
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
#include "stdlib/stats/base/dists/geometric/logpmf.h"
#include "stdlib/math/base/special/round.h"
#include <stdlib.h>
#include <stdio.h>
#include <math.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double p;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = stdlib_base_round( random_uniform( 0.0, 40.0 ) );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_geometric_logpmf( x, p );
        printf( "x: %lf, p: %lf, ln(P(X=x;p)): %lf\n", x, p, y );
    }
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

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
