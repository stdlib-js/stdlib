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

# Mode

> [Beta prime][betaprime-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [beta prime][betaprime-distribution] random variable is

<!-- <equation class="equation" label="eq:betaprime_expectation" align="center" raw="\operatorname{mode}(X) = \begin{cases}\frac{\alpha-1}{\beta+1} & \text{ if } \alpha \ge 1 \\ 0 & \text{ otherwise }\end{cases}" alt="Expected value for a beta prime distribution."> -->

```math
\mathop{\mathrm{mode}}(X) = \begin{cases}\frac{\alpha-1}{\beta+1} & \text{ if } \alpha \ge 1 \\ 0 & \text{ otherwise }\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{mode}(X) = \begin{cases}\frac{\alpha-1}{\beta+1} &amp; \text{ if } \alpha \ge 1 \\ 0 &amp; \text{ otherwise }\end{cases}" data-equation="eq:betaprime_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/betaprime/mode/docs/img/equation_betaprime_expectation.svg" alt="Expected value for a beta prime distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `α > 0` is the first shape parameter and `β > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/betaprime/mode' );
```

#### mode( alpha, beta )

Returns the [mode][mode] of a [beta prime][betaprime-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var v = mode( 8.0, 2.0 );
// returns ~2.333

v = mode( 4.0, 12.0 );
// returns ~0.231

v = mode( 1.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mode( NaN, 2.0 );
// returns NaN

v = mode( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = mode( 0.0, 1.0 );
// returns NaN

v = mode( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = mode( 1.0, 0.0 );
// returns NaN

v = mode( 1.0, -1.0 );
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
var mode = require( '@stdlib/stats/base/dists/betaprime/mode' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + EPS;
    v = mode( alpha, beta );
    console.log( 'α: %d, β: %d, mode(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/betaprime/mode.h"
```

#### stdlib_base_dists_betaprime_mode( alpha, beta )

Returns the mode of a beta prime distribution with first shape parameter `alpha` and second shape parameter `beta`.

```c
double y = stdlib_base_dists_betaprime_mode( 1.0, 2.0 );
//returns ~0.0
```

The function accepts the following arguments:

-   **alpha**: `[in] double` first shape parameter.
-   **beta**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_betaprime_mode( const double alpha, const double beta );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section`
element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/betaprime/mode.h"
#include "stdlib/constants/float64/eps.h"
#include <stdio.h>
#include <stdlib.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double alpha;
    double beta;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        alpha = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 10.0 );
        beta = random_uniform( 1.0 + STDLIB_CONSTANT_FLOAT64_EPS, 11.0 );
        y = stdlib_base_dists_betaprime_mode( alpha, beta );
        printf( "α: %1f, β: %1f, Mode(X;α,β): %lf\n", alpha, beta, y );
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

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
