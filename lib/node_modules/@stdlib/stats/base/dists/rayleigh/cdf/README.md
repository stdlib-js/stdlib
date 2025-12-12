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

> [Rayleigh][rayleigh-distribution] distribution [cumulative distribution function][cdf].

<section class="intro">

The [cumulative distribution function][cdf] for a [Rayleigh][rayleigh-distribution] random variable is

<!-- <equation class="equation" label="eq:rayleigh_cdf" align="center" raw="F(x;\sigma) = \begin{cases} 0 & \text{ for } x < 0 \\ 1 - e^{-x^2/2\sigma^2} & \text{ for } x \ge 0 \end{cases}" alt="Cumulative distribution function for a Rayleigh distribution."> -->

```math
F(x;\sigma) = \begin{cases} 0 & \text{ for } x < 0 \\ 1 - e^{-x^2/2\sigma^2} & \text{ for } x \ge 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\sigma) = \begin{cases} 0 &amp; \text{ for } x &lt; 0 \\ 1 - e^{-x^2/2\sigma^2} &amp; \text{ for } x \ge 0 \end{cases}" data-equation="eq:rayleigh_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/rayleigh/cdf/docs/img/equation_rayleigh_cdf.svg" alt="Cumulative distribution function for a Rayleigh distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `sigma > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var cdf = require( '@stdlib/stats/base/dists/rayleigh/cdf' );
```

#### cdf( x, sigma )

Evaluates the [cumulative distribution function][cdf] for a [Rayleigh][rayleigh-distribution] distribution with scale parameter `sigma`.

```javascript
var y = cdf( 2.0, 3.0 );
// returns ~0.199

y = cdf( 1.0, 2.0 );
// returns ~0.118

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

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = cdf( 2.0, -1.0 );
// returns NaN
```

If provided `sigma = 0`, the function evaluates the [CDF][cdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = cdf( -2.0, 0.0 );
// returns 0.0

y = cdf( 0.0, 0.0 );
// returns 1.0

y = cdf( 2.0, 0.0 );
// returns 1.0
```

#### cdf.factory( sigma )

Returns a function for evaluating the [cumulative distribution function][cdf] of a [Rayleigh][rayleigh-distribution] distribution with parameter `sigma` (scale parameter).

```javascript
var myCDF = cdf.factory( 0.5 );
var y = myCDF( 1.0 );
// returns ~0.865

y = myCDF( 0.5 );
// returns ~0.393
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var cdf = require( '@stdlib/stats/base/dists/rayleigh/cdf' );

var sigma;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 10.0;
    sigma = randu() * 10.0;
    y = cdf( x, sigma );
    console.log( 'x: %d, σ: %d, F(x;σ): %d', x.toFixed( 4 ), sigma.toFixed( 4 ), y.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/rayleigh/cdf.h"
```

#### stdlib_base_dists_rayleigh_cdf( x, sigma )

Evaluates the cumulative distribution function (CDF) for a Rayleigh distribution.

```c
double out = stdlib_base_dists_rayleigh_cdf( 2.0, 3.0 );
// returns ~0.199
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_rayleigh_cdf( const double x, const double sigma );
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
#include "stdlib/stats/base/dists/rayleigh/cdf.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double x;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = random_uniform( 0.0, 10.0 );
        sigma = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_rayleigh_cdf( x, sigma );
        printf( "x: %lf, σ: %lf, F(x;σ): %lf\n", x, sigma, y );
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

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[rayleigh-distribution]: https://en.wikipedia.org/wiki/Rayleigh_distribution

</section>

<!-- /.links -->
