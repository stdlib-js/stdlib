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

# Variance

> [Beta prime][betaprime-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [beta prime][betaprime-distribution] random variable with first shape parameter `α` and second shape parameter `β` is

<!-- <equation class="equation" label="eq:betaprime_variance" align="center" raw="\operatorname{Var}\left( X \right) = \frac{\alpha(\alpha +\beta -1)}{(\beta-2)(\beta-1)^{2}}" alt="Variance for a beta prime distribution."> -->

```math
\mathop{\mathrm{Var}}\left( X \right) = \frac{\alpha(\alpha +\beta -1)}{(\beta-2)(\beta-1)^{2}}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Var}\left( X \right) = \frac{\alpha(\alpha +\beta -1)}{(\beta-2)(\beta-1)^{2}}" data-equation="eq:betaprime_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/betaprime/variance/docs/img/equation_betaprime_variance.svg" alt="Variance for a beta prime distribution.">
    <br>
</div> -->

<!-- </equation> -->

when `α > 0` and `β > 2`. Otherwise, the variance is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/betaprime/variance' );
```

#### variance( alpha, beta )

Returns the [variance][variance] of a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var v = variance( 1.0, 3.0 );
// returns ~0.75

v = variance( 4.0, 12.0 );
// returns ~0.05

v = variance( 8.0, 2.5 );
// returns ~67.556
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = variance( NaN, 2.0 );
// returns NaN

v = variance( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = variance( 0.0, 1.0 );
// returns NaN

v = variance( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 2`, the function returns `NaN`.

```javascript
var v = variance( 1.0, 2.0 );
// returns NaN

v = variance( 1.0, 0.0 );
// returns NaN

v = variance( 1.0, -1.0 );
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
var randu = require( '@stdlib/random/base/randu' );
var EPS = require( '@stdlib/constants/float64/eps' );
var variance = require( '@stdlib/stats/base/dists/betaprime/variance' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + 2.0 + EPS;
    v = variance( alpha, beta );
    console.log( 'α: %d, β: %d, Var(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/betaprime/variance.h"
```

#### stdlib_base_dists_betaprime_variance( alpha, beta )

Returns the variance of a beta prime distribution.

```c
double out = stdlib_base_dists_betaprime_variance( 1.0, 3.0 );
// returns ~0.75
```

The function accepts the following arguments:

-   **alpha**: `[in] double` first shape parameter.
-   **beta**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_betaprime_variance( const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/betaprime/variance.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v * ( max - min ) );
}

int main( void ) {
    double alpha;
    double beta;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        alpha = random_uniform( 0.0, 20.0 );
        beta = random_uniform( 2.0, 22.0 );
        y = stdlib_base_dists_betaprime_variance( alpha, beta );
        printf( "α: %lf, β: %lf, Var(X;α,β): %lf", alpha, beta, y );
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

[betaprime-distribution]: https://en.wikipedia.org/wiki/Beta_prime_distribution

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
