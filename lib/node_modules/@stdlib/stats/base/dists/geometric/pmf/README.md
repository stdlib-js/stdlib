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

# Probability Mass Function

> [Geometric][geometric-distribution] distribution [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [geometric][geometric-distribution] random variable is defined as

<!-- <equation class="equation" label="eq:geometric_pmf" align="center" raw="\Pr(X = x) = \begin{cases}(1-p)^{x}\,p & \text{ for } x=0,1,2,\ldots \\ 0 & \text{ otherwise } \end{cases}" alt="Probability mass function (PMF) for a geometric distribution."> -->

```math
\Pr(X = x) = \begin{cases}(1-p)^{x}\,p & \text{ for } x=0,1,2,\ldots \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\Pr(X = x) = \begin{cases}(1-p)^{x}\,p &amp; \text{ for } x=0,1,2,\ldots \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:geometric_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/pmf/docs/img/equation_geometric_pmf.svg" alt="Probability mass function (PMF) for a geometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `0 <= p <= 1` is the success probability. The random variable `X` denotes the number of failures until the first success in a sequence of independent Bernoulli trials.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats/base/dists/geometric/pmf' );
```

#### pmf( x, p )

Evaluates the [probability mass function][pmf] (PMF) of a [geometric][geometric-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var y = pmf( 4.0, 0.3 );
// returns ~0.072

y = pmf( 2.0, 0.7 );
// returns ~0.063

y = pmf( -1.0, 0.5 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, 0.0 );
// returns NaN

y = pmf( 0.0, NaN );
// returns NaN
```

If provided a success probability `p` outside of the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = pmf( 2.0, -1.0 );
// returns NaN

y = pmf( 2.0, 1.5 );
// returns NaN
```

#### pmf.factory( p )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [geometric][geometric-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var mypmf = pmf.factory( 0.5 );
var y = mypmf( 3.0 );
// returns 0.0625

y = mypmf( 1.0 );
// returns 0.25
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var pmf = require( '@stdlib/stats/base/dists/geometric/pmf' );

var p;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = round( randu() * 5.0 );
    p = randu();
    y = pmf( x, p );
    console.log( 'x: %d, p: %d, P( X = x; p ): %d', x, p.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/geometric/pmf.h"
```

#### stdlib_base_dists_geometric_pmf( x, p )

Evaluates the [probability mass function][pmf] (PMF) of a [geometric][geometric-distribution] distribution with success probability `0 <= p <= 1`.

```c
double out = stdlib_base_dists_geometric_pmf( 4.0, 0.3 );
// returns ~0.072
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **p**: `[in] double` probability of success.

```c
double stdlib_base_dists_geometric_pmf( const double x, const double p );
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
#include "stdlib/stats/base/dists/geometric/pmf.h"
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
        x = stdlib_base_round( random_uniform( 0, 40 ) );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_geometric_pmf( x, p );
        printf( "x: %lf, p: %lf, P(X=x;p): %lf\n", x, p, y );
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

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
