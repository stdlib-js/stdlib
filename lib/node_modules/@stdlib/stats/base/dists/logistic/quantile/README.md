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

# Quantile Function

> [Logistic][logistic-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [logistic][logistic-distribution] random variable is

<!-- <equation class="equation" label="eq:logistic_quantile_function" align="center" raw="Q(p;\mu,s)= \mu + s \ln \left( \frac{p}{1-p} \right )" alt="Quantile function for a logistic distribution."> -->

```math
Q(p;\mu,s)= \mu + s \ln \left( \frac{p}{1-p} \right )
```

<!-- <div class="equation" align="center" data-raw-text="Q(p;\mu,s)= \mu + s \ln \left( \frac{p}{1-p} \right )" data-equation="eq:logistic_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/logistic/quantile/docs/img/equation_logistic_quantile_function.svg" alt="Quantile function for a logistic distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p < 1`, where `µ` is the location parameter and `s > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/logistic/quantile' );
```

#### quantile( p, mu, s )

Evaluates the [quantile function][quantile-function] for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```javascript
var y = quantile( 0.5, 0.0, 1.0 );
// returns 0.0

y = quantile( 0.2, 4.0, 2.0 );
// returns ~1.227
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0.0, 1.0 );
// returns NaN

y = quantile( -0.1, 0.0, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

If provided `s < 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN
```

If provided `s = 0`, the function evaluates the [quantile function][quantile-function] of a [degenerate distribution][degenerate-distribution] centered at `mu`.

```javascript
var y = quantile( 0.3, 8.0, 0.0 );
// returns 8.0

y = quantile( 0.9, 8.0, 0.0 );
// returns 8.0
```

#### quantile.factory( mu, s )

Returns a function for evaluating the [quantile function][quantile-function] of a [logistic][logistic-distribution] distribution with parameters `mu` and `s`.

```javascript
var myQuantile = quantile.factory( 10.0, 2.0 );

var y = myQuantile( 0.2 );
// returns ~7.227

y = myQuantile( 0.8 );
// returns ~12.773
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var quantile = require( '@stdlib/stats/base/dists/logistic/quantile' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 10, 0.0, 1.0, opts );
var mu = uniform( 10, 0.0, 10.0, opts );
var s = uniform( 10, 0.0, 10.0, opts );

logEachMap( 'p: %0.4f, µ: %0.4f, s: %0.4f, Q(p;µ,s): %0.4f', p, mu, s, quantile );
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
#include "stdlib/stats/base/dists/logistic/quantile.h"
```

#### stdlib_base_dists_logistic_quantile( p, mu, s )

Evaluates the [quantile function][quantile-function] for a [logistic][logistic-distribution] distribution with parameters `mu` (location parameter) and `s` (scale parameter).

```c
double out = stdlib_base_dists_logistic_quantile( 0.8, 0.0, 1.0 );
// returns ~1.386
```

The function accepts the following arguments:

-   **p**: `[in] double` input probability.
-   **mu**: `[in] double` location parameter.
-   **s**: `[in] double` scale parameter.

```c
double stdlib_base_dists_logistic_quantile( const double p, const double mu, const double s );
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
#include "stdlib/stats/base/dists/logistic/quantile.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max-min ) );
}

int main( void ) {
    double mu;
    double p;
    double s;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        mu = random_uniform( -5.0, 5.0 );
        s = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_logistic_quantile( p, mu, s );
        printf( "p:: %lf, µ:: %lf, s: %lf, Q(p;µ,s): %lf\n", p, mu, s, y );
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

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
