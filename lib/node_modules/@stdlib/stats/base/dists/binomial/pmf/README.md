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

> [Binomial][binomial-distribution] distribution probability mass function (PMF).

<section class="intro">

The [probability mass function][pmf] (PMF) for a [binomial][binomial-distribution] random variable is

<!-- <equation class="equation" label="eq:binomial_pmf" align="center" raw="f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}" alt="Probability mass function (PMF) for a binomial distribution."> -->

```math
f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} & \text{ for } x = 0,1,2,\ldots \\ 0 & \text{ otherwise} \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;n,p)=P(X=x;n,p)=\begin{cases} \textstyle {n \choose x}\, p^x (1-p)^{n-x} &amp; \text{ for } x = 0,1,2,\ldots \\ 0 &amp; \text{ otherwise} \end{cases}" data-equation="eq:binomial_pmf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/binomial/pmf/docs/img/equation_binomial_pmf.svg" alt="Probability mass function (PMF) for a binomial distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `n` is the number of trials and `0 <= p <= 1` is the success probability.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var pmf = require( '@stdlib/stats/base/dists/binomial/pmf' );
```

#### pmf( x, n, p )

Evaluates the [probability mass function][pmf] (PMF) for a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var y = pmf( 3.0, 20, 0.2 );
// returns ~0.205

y = pmf( 21.0, 20, 0.2 );
// returns 0.0

y = pmf( 5.0, 10, 0.4 );
// returns ~0.201

y = pmf( 0.0, 10, 0.4 );
// returns ~0.006
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pmf( NaN, 20, 0.5 );
// returns NaN

y = pmf( 0.0, NaN, 0.5 );
// returns NaN

y = pmf( 0.0, 20, NaN );
// returns NaN
```

If provided a number of trials `n` which is not a nonnegative integer, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 1.5, 0.5 );
// returns NaN

y = pmf( 2.0, -2.0, 0.5 );
// returns NaN
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var y = pmf( 2.0, 20, -1.0 );
// returns NaN

y = pmf( 2.0, 20, 1.5 );
// returns NaN
```

#### pmf.factory( n, p )

Returns a function for evaluating the [probability mass function][pmf] (PMF) of a [binomial][binomial-distribution] distribution with number of trials `n` and success probability `p`.

```javascript
var mypmf = pmf.factory( 10, 0.5 );

var y = mypmf( 3.0 );
// returns ~0.117

y = mypmf( 5.0 );
// returns ~0.246
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var pmf = require( '@stdlib/stats/base/dists/binomial/pmf' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 20, opts );
var n = discreteUniform( 10, 0, 100, opts );
var p = uniform( 10, 0.0, 1.0, opts );

logEachMap( 'x: %0.4f, n: %0.4f, p: %0.4f, P(X = x;n,p): %0.4f', x, n, p, pmf );
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
#include "stdlib/stats/base/dists/binomial/pmf.h"
```

#### stdlib_base_dists_binomial_pmf( x, n, p )

Evaluates the probability mass function (PMF) for a binomial distribution with number of trials `n` and success probability `p` at a value `x`.

```c
double out = stdlib_base_dists_binomial_pmf( 3.0, 20, 0.2 );
// returns ~0.205
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **n**: `[in] int32_t` number of trials.
-   **p**: `[in] double` success probability.

```c
double stdlib_base_dists_binomial_pmf( const double x, const int32_t n, const double p );
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
#include "stdlib/stats/base/dists/binomial/pmf.h"
#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

static int32_t random_int( const int32_t min, const int32_t max ) {
    return min + (int32_t)( random_uniform( 0.0, 1.0 ) * ( max - min + 1 ) );
}

int main( void ) {
    int32_t n;
    double p;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        n = random_int( 1, 20 );
        x = random_uniform( 0.0, (double)n );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_binomial_pmf( x, n, p );
        printf( "x: %.4f, n: %d, p: %.4f, P(X = x;n,p): %.4f\n", x, n, p, y );
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

[binomial-distribution]: https://en.wikipedia.org/wiki/Binomial_distribution

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
