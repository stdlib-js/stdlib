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

# Skewness

> [Weibull][weibull-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_skewness" align="center" raw="\operatorname{skew}\left( X \right) = \frac{\Gamma(1+3/k)\lambda^3-3\mu\sigma^2-\mu^3}{\sigma^3}" alt="Skewness for a Weibull distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = \frac{\Gamma(1+3/k)\lambda^3-3\mu\sigma^2-\mu^3}{\sigma^3}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = \frac{\Gamma(1+3/k)\lambda^3-3\mu\sigma^2-\mu^3}{\sigma^3}" data-equation="eq:weibull_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/weibull/skewness/docs/img/equation_weibull_skewness.svg" alt="Skewness for a Weibull distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `Γ` is the gamma function, `μ` denotes the mean of the distribution, and `σ` the standard deviation.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/weibull/skewness' );
```

#### skewness( k, lambda )

Returns the [skewness][skewness] of a [Weibull][weibull-distribution] distribution with parameters `k` (shape parameter) and `lambda` (scale parameter).

```javascript
var v = skewness( 1.0, 1.0 );
// returns 2.0

v = skewness( 4.0, 12.0 );
// returns ~-0.087

v = skewness( 8.0, 2.0 );
// returns ~-0.534
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = skewness( NaN, 2.0 );
// returns NaN

v = skewness( 2.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = skewness( 0.0, 1.0 );
// returns NaN

v = skewness( -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var v = skewness( 1.0, 0.0 );
// returns NaN

v = skewness( 1.0, -1.0 );
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
var EPS = require( '@stdlib/constants/float64/eps' );
var skewness = require( '@stdlib/stats/base/dists/weibull/skewness' );

var opts = {
    'dtype': 'float64'
};
var lambda = uniform( 10, EPS, 10.0, opts );
var k = uniform( 10, EPS, 10.0, opts );

logEachMap( 'k: %0.4f, λ: %0.4f, skew(X;k,λ): %0.4f', k, lambda, skewness );
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
#include "stdlib/stats/base/dists/weibull/skewness.h"
```

#### stdlib_base_dists_weibull_skewness( k, lambda )

Returns the skewness of a Weibull distribution.

```c
double out = stdlib_base_dists_weibull_skewness( 4.0, 12.0 );
// returns ~-0.087
```

The function accepts the following arguments:

-   **k**: `[in] double` shape parameter.
-   **lambda**: `[in] double` scale parameter.

```c
double stdlib_base_dists_weibull_skewness( const double k, const double lambda );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after
the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/weibull/skewness.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        k = random_uniform( 0.1, 10.0 );
        lambda = random_uniform( 0.1, 10.0 );
        y = stdlib_base_dists_weibull_skewness( k, lambda );
        printf( "k: %lf, λ: %lf, skew(X;k,λ): %lf\n", k, lambda, y );
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

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

</section>

<!-- /.links -->
