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

# Median

> [Lognormal][lognormal-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [lognormal][lognormal-distribution] random variable with location parameter `μ` and scale parameter `σ > 0` is

<!-- <equation class="equation" label="eq:lognormal_median" align="center" raw="\operatorname{Median}\left( X \right) = \exp(\mu)" alt="Median for a lognormal distribution."> -->

```math
\mathop{\mathrm{Median}}\left( X \right) = \exp(\mu)
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Median}\left( X \right) = \exp(\mu)" data-equation="eq:lognormal_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/lognormal/median/docs/img/equation_lognormal_median.svg" alt="Median for a lognormal distribution.">
    <br>
</div> -->

<!-- </equation> -->

According to the definition, the _natural logarithm_ of a random variable from a
[lognormal distribution][lognormal-distribution] follows a [normal distribution][normal-distribution].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var median = require( '@stdlib/stats/base/dists/lognormal/median' );
```

#### median( mu, sigma )

Returns the [median][median] for a [lognormal][lognormal-distribution] distribution with location `mu` and scale `sigma`.

```javascript
var y = median( 2.0, 1.0 );
// returns ~7.389

y = median( 0.0, 1.0 );
// returns 1.0

y = median( -1.0, 4.0 );
// returns ~0.368
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = median( NaN, 1.0 );
// returns NaN

y = median( 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = median( 0.0, 0.0 );
// returns NaN

y = median( 0.0, -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var median = require( '@stdlib/stats/base/dists/lognormal/median' );

var opts = {
    'dtype': 'float64'
};
var mu = uniform( 10, -5.0, 5.0, opts );
var sigma = uniform( 10, 0.0, 20.0, opts );

logEachMap( 'µ: %0.4f, σ: %0.4f, Median(X;µ,σ): %0.4f', mu, sigma, median );
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
#include "stdlib/stats/base/dists/lognormal/median.h"
```

#### stdlib_base_dists_lognormal_median( mu, sigma )

Returns the median for a lognormal distribution with location `mu` and scale `sigma`.

```c
double out = stdlib_base_dists_lognormal_median( 0.0, 1.0 );
// returns 1.0
```

The function accepts the following arguments:

-   **mu**: `[in] double` location parameter.
-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_lognormal_median( const double mu, const double sigma );
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
#include "stdlib/stats/base/dists/lognormal/median.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double mu;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        mu = random_uniform( -5.0, 5.0 );
        sigma = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_lognormal_median( mu, sigma );
        printf( "µ: %.4f, σ: %.4f, Median(X;µ,σ): %.4f\n", mu, sigma, y );
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

[lognormal-distribution]: https://en.wikipedia.org/wiki/Log-normal_distribution

[normal-distribution]: https://en.wikipedia.org/wiki/Normal_distribution

[median]: https://en.wikipedia.org/wiki/Median

</section>

<!-- /.links -->
