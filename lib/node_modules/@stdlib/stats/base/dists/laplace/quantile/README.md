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

> [Laplace][laplace-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Laplace][laplace-distribution] random variable is

<!-- <equation class="equation" label="eq:laplace_quantile_function" align="center" raw="Q(p) = \mu - b\,\operatorname{sgn}(p-0.5)\,\ln(1 - 2|p-0.5|)" alt="Quantile function for a Laplace distribution."> -->

```math
Q(p) = \mu - b\,\mathop{\mathrm{sgn}}(p-0.5)\,\ln(1 - 2|p-0.5|)
```

<!-- <div class="equation" align="center" data-raw-text="Q(p) = \mu - b\,\operatorname{sgn}(p-0.5)\,\ln(1 - 2|p-0.5|)" data-equation="eq:laplace_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/laplace/quantile/docs/img/equation_laplace_quantile_function.svg" alt="Quantile function for a Laplace distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p < 1`, where `mu` is the location parameter and `b > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/laplace/quantile' );
```

#### quantile( p, mu, b )

Evaluates the [quantile function][quantile-function] for a [Laplace][laplace-distribution] distribution with parameters `mu` (location parameter) and `b > 0` (scale parameter).

```javascript
var y = quantile( 0.8, 0.0, 1.0 );
// returns ~0.916

y = quantile( 0.5, 4.0, 2.0 );
// returns 4
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

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 0.0 );
// returns NaN
```

#### quantile.factory( mu, b )

Returns a function for evaluating the [quantile function][quantile-function] of a [Laplace][laplace-distribution] distribution with parameters `mu` and `b > 0`.

```javascript
var myquantile = quantile.factory( 10.0, 2.0 );

var y = myquantile( 0.5 );
// returns 10.0

y = myquantile( 0.8 );
// returns ~11.833
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var quantile = require( '@stdlib/stats/base/dists/laplace/quantile' );

var opts = {
    'dtype': 'float64'
};
var p = uniform( 100, 0.0, 1.0, opts );
var mu = uniform( 100, 0.0, 10.0, opts );
var b = uniform( 100, 0.0, 10.0, opts );

logEachMap( 'p: %0.4f, µ: %0.4f, b: %0.4f, Q(p;µ,b): %0.4f', p, mu, b, quantile );
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
#include "stdlib/stats/base/dists/laplace/quantile.h"
```

#### stdlib_base_dists_laplace_quantile( p, mu, b )

Evaluates the quantile function for a Laplace distribution with location parameter `mu` and scale parameter `b` at a probability `p`.

```c
double out = stdlib_base_dists_laplace_quantile( 0.8, 0.0, 1.0 );
// returns ~0.916
```

The function accepts the following arguments:

-   **p**: `[in] double` probability.
-   **mu**: `[in] double` location parameter.
-   **b**: `[in] double` rate parameter.

```c
double stdlib_base_dists_laplace_quantile( const double p, const double mu, const double b );
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
#include "stdlib/stats/base/dists/laplace/quantile.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double b;
    double p;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        mu = random_uniform( -5.0, 5.0 );
        b = random_uniform( 0.0, 20.0 );
        p = random_uniform( 0.0, 1.0 );
        y = stdlib_base_dists_laplace_quantile( p, mu, b );
        printf( "p: %lf, µ: %lf, b: %lf, Q(p;µ,b): %lf\n", p, mu, b, y );
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

[laplace-distribution]: https://en.wikipedia.org/wiki/Laplace_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
