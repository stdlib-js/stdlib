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

> [Poisson][poisson-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Poisson][poisson-distribution] random variable is

<!-- <equation class="equation" label="eq:poisson_cdf" align="center" raw="F(x;\lambda) = \begin{cases} 0 & \text{ for } x \le 0 \\ e^{-\lambda} \sum_{i=0}^{\lfloor x\rfloor} \frac{\lambda^i}{i!} & \text{ for } x > 0 \end{cases}" alt="Cumulative distribution function for a Poisson distribution."> -->

```math
F(x;\lambda) = \begin{cases} 0 & \text{ for } x \le 0 \\ e^{-\lambda} \sum_{i=0}^{\lfloor x\rfloor} \frac{\lambda^i}{i!} & \text{ for } x > 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\lambda) = \begin{cases} 0 &amp; \text{ for } x \le 0 \\ e^{-\lambda} \sum_{i=0}^{\lfloor x\rfloor} \frac{\lambda^i}{i!} &amp; \text{ for } x &gt; 0 \end{cases}" data-equation="eq:poisson_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/poisson/cdf/docs/img/equation_poisson_cdf.svg" alt="Cumulative distribution function for a Poisson distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `lambda` is the mean parameter. Internally, the module evaluates the CDF by evaluating the upper regularized gamma function at input values `lambda` and `floor( x ) + 1`.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/poisson/cdf' );
```

#### cdf( x, lambda )

Evaluates the [cumulative distribution function][cdf] for a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var y = cdf( 2.0, 0.5 );
// returns ~0.986

y = cdf( 2.0, 10.0 );
// returns ~0.003

y = cdf( -1.0, 4.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = cdf( NaN, 1.0 );
// returns NaN

y = cdf( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN
```

If provided `lambda = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( -2.0, 0.0 );
// returns 0.0

y = cdf( 0.0, 0.0 );
// returns 1.0

y = cdf( 10.0, 0.0 );
// returns 1.0
```

#### cdf.factory( lambda )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```javascript
var mycdf = cdf.factory( 5.0 );
var y = mycdf( 3.0 );
// returns ~0.265

y = mycdf( 8.0 );
// returns ~0.932
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cdf = require( '@stdlib/stats/base/dists/poisson/cdf' );

var opts = {
    'dtype': 'float64'
};
var lambda = uniform( 10, 0.0, 10.0, opts );
var x = uniform( 10, 0.0, 10.0, opts );

logEachMap( 'x: %0.4f, λ: %0.4f, F(x;λ): %0.4f', x, lambda, cdf );
```

</section>

<!-- /.examples -->

* * *

<section class="c">

## C APIs

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/poisson/cdf.h"
```

#### stdlib_base_dists_poisson_cdf( x, lambda )

Evaluates the [cumulative distribution function][cdf] for a [Poisson][poisson-distribution] distribution with mean parameter `lambda`.

```c
double out = stdlib_base_dists_poisson_cdf( 2.0, 0.5 );
// returns ~0.986

out = stdlib_base_dists_poisson_cdf( 2.0, 10.0 );
// returns ~0.003
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **lambda**: `[in] double` mean parameter.

```c
double stdlib_base_dists_poisson_cdf( const double x, const double lambda );
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/poisson/cdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( double min, double max ) {
    double scale = rand() / (double) RAND_MAX;
    return min + ( scale * ( max - min ) );
}

int main( void ) {
    double lambda;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        lambda = random_uniform( 0.1, 20.0 );
        y = stdlib_base_dists_poisson_cdf( x, lambda );
        printf( "x: %lf, λ: %lf, F(x;λ): %lf\n", x, lambda, y );
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

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[poisson-distribution]: https://en.wikipedia.org/wiki/Poisson_distribution

</section>

<!-- /.links -->
