<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

> [Anglit][anglit-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for an [anglit][anglit-distribution] random variable is

```math
Q(p;\mu,\sigma) = \mu + \sigma\left( \sin^{-1}(\sqrt{p}) - \frac{\pi}{4} \right)
```

for `0 <= p <= 1`, where `μ` is the location parameter and `σ` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/anglit/quantile' );
```

#### quantile( p, mu, sigma )

Evaluates the [quantile function][quantile-function] for an [anglit][anglit-distribution] distribution with location parameter `mu` and scale parameter `sigma`.

```javascript
var y = quantile( 0.8, 0.0, 1.0 );
// returns ~0.322

y = quantile( 0.5, 4.0, 2.0 );
// returns 4.0
```

If provided a cumulative probability `p` outside the interval `[0,1]`, the function returns `NaN`.

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

y = quantile( 0.2, NaN, 1.0 );
// returns NaN

y = quantile( 0.2, 0.0, NaN );
// returns NaN
```

If provided `sigma < 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN
```

If `sigma` equals `0`, the function evaluates a degenerate distribution centered at `mu`.

```javascript
var y = quantile( 0.9, 3.0, 0.0 );
// returns 3.0
```

#### quantile.factory( mu, sigma )

Returns a function for evaluating the [quantile function][quantile-function] of an [anglit][anglit-distribution] distribution with location parameter `mu` and scale parameter `sigma`.

```javascript
var myQuantile = quantile.factory( 4.0, 2.0 );

var y = myQuantile( 0.2 );
// returns ~3.356

y = myQuantile( 0.9 );
// returns ~4.927
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var quantile = require( '@stdlib/stats/base/dists/anglit/quantile' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 10, 0.0, 1.0, opts );
var mu = uniform( 10, -5.0, 5.0, opts );
var sigma = uniform( 10, 0.0, 5.0, opts );

logEachMap( 'p: %lf, µ: %lf, σ: %lf, Q(p;µ,σ): %lf', p, mu, sigma, quantile );
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
#include "stdlib/stats/base/dists/anglit/quantile.h"
```

#### stdlib_base_dists_anglit_quantile( p, mu, sigma )

Evaluates the [quantile function][quantile-function] for an [anglit][anglit-distribution] distribution with location parameter `mu` and scale parameter `sigma`.

```c
double out = stdlib_base_dists_anglit_quantile( 0.8, 0.0, 1.0 );
// returns ~0.322
```

The function accepts the following arguments:

-   **p**: `[in] double` cumulative probability.
-   **mu**: `[in] double` location parameter.
-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_anglit_quantile( const double p, const double mu, const double sigma );
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
#include "stdlib/stats/base/dists/anglit/quantile.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double mu;
    double p;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        mu = random_uniform( -5.0, 5.0 );
        sigma = random_uniform( 0.0, 5.0 );
        y = stdlib_base_dists_anglit_quantile( p, mu, sigma );
        printf( "p: %lf, µ: %lf, σ: %lf, Q(p;µ,σ): %lf\n", p, mu, sigma, y );
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

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[anglit-distribution]: https://en.wikipedia.org/wiki/Anglit_distribution

</section>

<!-- /.links -->
