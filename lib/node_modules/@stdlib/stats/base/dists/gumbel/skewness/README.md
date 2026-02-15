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

> [Gumbel][gumbel-distribution] distribution [skewness][skewness].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [skewness][skewness] for a [Gumbel][gumbel-distribution] random variable with location `μ` and scale `β` is

<!-- <equation class="equation" label="eq:gumbel_skewness" align="center" raw="\operatorname{skew}\left( X \right) = {\frac{12{\sqrt{6}}\,\zeta(3)}{\pi^{3}}} \approx 1.14" alt="Skewness for a Gumbel distribution."> -->

```math
\mathop{\mathrm{skew}}\left( X \right) = {\frac{12{\sqrt{6}}\,\zeta(3)}{\pi^{3}}} \approx 1.14
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{skew}\left( X \right) = {\frac{12{\sqrt{6}}\,\zeta(3)}{\pi^{3}}} \approx 1.14" data-equation="eq:gumbel_skewness">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/gumbel/skewness/docs/img/equation_gumbel_skewness.svg" alt="Skewness for a Gumbel distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `ζ` is the [Riemann zeta function][zeta].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var skewness = require( '@stdlib/stats/base/dists/gumbel/skewness' );
```

#### skewness( mu, beta )

Returns the [skewness][skewness] for a [Gumbel][gumbel-distribution] distribution with location parameter `mu` and scale parameter `beta`.

```javascript
var y = skewness( 2.0, 1.0 );
// returns ~1.14

y = skewness( 0.0, 1.0 );
// returns ~1.14

y = skewness( -1.0, 4.0 );
// returns ~1.14
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = skewness( NaN, 1.0 );
// returns NaN

y = skewness( 0.0, NaN );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = skewness( 0.0, 0.0 );
// returns NaN

y = skewness( 0.0, -1.0 );
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
var skewness = require( '@stdlib/stats/base/dists/gumbel/skewness' );

var opts = {
    'dtype': 'float64'
};
var beta = uniform( 10, 0.0, 10.0, opts );
var mu = uniform( 10, -5.0, 5.0, opts );

logEachMap( 'µ: %0.4f, β: %0.4f, skew(X;µ,β): %0.4f', mu, beta, skewness );
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
#include "stdlib/stats/base/dists/gumbel/skewness.h"
```

#### stdlib_base_dists_gumbel_skewness( mu, beta )

Returns the skewness for a Gumbel distribution with location `mu` and scale `beta`.

```c
double y = stdlib_base_dists_gumbel_skewness( 0.0, 1.0 );
// returns ~1.14
```

The function accepts the following arguments:

-   **mu**: `[in] double` location parameter.
-   **beta**: `[in] double` scale parameter.

```c
double stdlib_base_dists_gumbel_skewness( const double mu, const double beta );
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
#include "stdlib/stats/base/dists/gumbel/skewness.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double beta;
    double mu;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        mu = random_uniform( -5.0, 5.0 );
        beta = random_uniform( 0.0, 20.0 );
        y = stdlib_base_dists_gumbel_skewness( mu, beta );
        printf( "µ: %lf, β: %lf, Skew(X;µ,β): %lf\n", mu, beta, y );
    s}
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

[gumbel-distribution]: https://en.wikipedia.org/wiki/Gumbel_distribution

[skewness]: https://en.wikipedia.org/wiki/Skewness

[zeta]: https://en.wikipedia.org/wiki/Riemann_zeta_function

</section>

<!-- /.links -->
