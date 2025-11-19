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

> [Bernoulli][bernoulli-distribution] distribution [probability mass function][pmf] (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [Bernoulli][bernoulli-distribution] random variable is defined as

<!-- <equation class="equation" label="eq:bernoulli_pmf" align="center" raw="\Pr(X = x) = \begin{cases} 1-p & \text{ for } x = 0 \\ p & \text{ for } x = 1 \\ 0 & \text{ otherwise } \end{cases}" alt="Probability mass function (PMF) for a Bernoulli distribution."> -->

```math
\Pr(X = x) = \begin{cases} 1-p & \text{ for } x = 0 \\ p & \text{ for } x = 1 \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\Pr(X = x) = \begin{cases} 1-p &amp; \text{ for } x = 0 \\ p &amp; \text{ for } x = 1 \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:bernoulli_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/bernoulli/pmf/docs/img/equation_bernoulli_pmf.svg" alt="Probability mass function (PMF) for a Bernoulli distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats/base/dists/bernoulli/pmf' );
```

#### pmf( x, p )

Evaluates the [probability mass function][pmf] (PMF) of a [Bernoulli][bernoulli-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var y = pmf( 1.0, 0.3 );
// returns 0.3

y = pmf( 0.0, 0.3 );
// returns 0.7

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
var y = pmf( 0.0, -1.0 );
// returns NaN

y = pmf( 0.0, 1.5 );
// returns NaN
```

#### pmf.factory( p )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [Bernoulli][bernoulli-distribution] distribution with success probability `0 <= p <= 1`.

```javascript
var mypmf = pmf.factory( 0.8 );
var y = mypmf( 0.0 );
// returns 0.2

y = mypmf( 0.5 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var pmf = require( '@stdlib/stats/base/dists/bernoulli/pmf' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 25, 0.0, 1.0, opts );
var x = discreteUniform( p.length, 0, 1 );

logEachMap( 'x: %d, p: %0.4f, P( X = x; p ): %0.4f', x, p, pmf );
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
#include "stdlib/stats/base/dists/bernoulli/pmf.h"
```

#### stdlib_base_dists_bernoulli_pmf( x, p )

Evaluates the [probability mass function][pmf] (PMF) of a [Bernoulli][bernoulli-distribution] distribution with success probability `0 <= p <= 1`.

```c
double y = stdlib_base_dists_bernoulli_pmf( 1.0, 0.3 );
// returns 0.3
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_bernoulli_pmf( const double x, const double p );
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
#include "stdlib/stats/base/dists/bernoulli/pmf.h"
#include "stdlib/math/base/special/round.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double p;
    double x;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        x = stdlib_base_round( random_uniform( 0.0, 2.0 ) );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_bernoulli_pmf( x, p );
        printf( "x: %lf, p: %lf, P( X = x; p ): %lf\n", x, p, y );
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

[bernoulli-distribution]: https://en.wikipedia.org/wiki/Bernoulli_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
