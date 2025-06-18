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

> [Lévy][levy-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [Lévy][levy-distribution] random variable is

<!-- <equation class="equation" label="eq:levy_quantile_function" align="center" raw="Q(p;\mu,c)= \mu + \frac{c}{2 \cdot \operatorname{erfcinv}(p)^2}" alt="Quantile function for a Lévy distribution."> -->

```math
Q(p;\mu,c)= \mu + \frac{c}{2 \cdot \mathop{\mathrm{erfcinv}}(p)^2}
```

<!-- <div class="equation" align="center" data-raw-text="Q(p;\mu,c)= \mu + \frac{c}{2 \cdot \operatorname{erfcinv}(p)^2}" data-equation="eq:levy_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/levy/quantile/docs/img/equation_levy_quantile_function.svg" alt="Quantile function for a Lévy distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `0 <= p < 1`, where `µ` is the location parameter and `c > 0` is the scale parameter.

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats/base/dists/levy/quantile' );
```

#### quantile( p, mu, c )

Evaluates the [quantile function][quantile-function] for a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c` (scale parameter).

```javascript
var y = quantile( 0.5, 0.0, 1.0 );
// returns ~2.198

y = quantile( 0.2, 4.0, 2.0 );
// returns ~5.218
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

If provided `c <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 0.0, -1.0 );
// returns NaN

y = quantile( 0.4, 0.0, 0.0 );
// returns NaN
```

#### quantile.factory( mu, c )

Returns a function for evaluating the [quantile function][quantile-function] of a [Lévy][levy-distribution] distribution with parameters `mu` and `c`.

```javascript
var myQuantile = quantile.factory( 10.0, 2.0 );

var y = myQuantile( 0.2 );
// returns ~11.218

y = myQuantile( 0.8 );
// returns ~41.16
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var quantile = require( '@stdlib/stats/base/dists/levy/quantile' );

var mu;
var c;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    mu = randu() * 10.0;
    c = randu() * 10.0;
    y = quantile( p, mu, c );
    console.log( 'p: %d, µ: %d, c: %d, Q(p;µ,c): %d', p, mu, c, y );
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
#include "stdlib/stats/base/dists/levy/quantile.h"
```

#### stdlib_base_dists_levy_quantile( p, mu, c )

Evaluates the [quantile function][quantile-function] for a [Lévy][levy-distribution] distribution with parameters `mu` (location parameter) and `c` (scale parameter).

```c
double out = stdlib_base_dists_levy_quantile( 0.8, 0.0, 1.0 );
// returns ~15.58
```

The function accepts the following arguments:

-   **p**: `[in] double` probability.
-   **mu**: `[in] double` location parameter.
-   **c**: `[in] double` scale parameter.

```c
double stdlib_base_dists_levy_quantile( const double p, const double mu, const double c );
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
#include "stdlib/stats/base/dists/levy/quantile.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double mu;
    double p;
    double c;
    double y;
    int i;
    for ( i = 0; i < 25; i++ ) {
        p = random_uniform( 0.0, 1.0 );
        mu = random_uniform( 0.0, 10.0 );
        c = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_levy_quantile( p, mu, c );
        printf( "p: %lf, µ: %lf, c: %lf, Q(p;µ,c): %lf\n", p, mu, c, y );
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

[levy-distribution]: https://en.wikipedia.org/wiki/L%C3%A9vy_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
