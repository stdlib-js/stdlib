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

> [Beta][beta-distribution] distribution [mode][mode].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mode][mode] for a [beta][beta-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_mode" align="center" raw="\operatorname{mode}\left( X \right) = \frac{\alpha-1}{\alpha+\beta-2}" alt="Mode for a beta distribution."> -->

```math
\mathop{\mathrm{mode}}\left( X \right) = \frac{\alpha-1}{\alpha+\beta-2}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{mode}\left( X \right) = \frac{\alpha-1}{\alpha+\beta-2}" data-equation="eq:beta_mode">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/beta/mode/docs/img/equation_beta_mode.svg" alt="Mode for a beta distribution.">
    <br>
</div> -->

<!-- </equation> -->

for `α > 1` and `β > 1`. For other values of first shape parameter `α` and second shape parameter `β`, the mode is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mode = require( '@stdlib/stats/base/dists/beta/mode' );
```

#### mode( alpha, beta )

Returns the [mode][mode] of a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```javascript
var v = mode( 2.5, 1.5 );
// returns 0.75

v = mode( 4.0, 12.0 );
// returns ~0.214

v = mode( 8.0, 2.0 );
// returns 0.875
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mode( NaN, 2.0 );
// returns NaN

v = mode( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 1`, the function returns `NaN`.

```javascript
var v = mode( 0.5, 1.0 );
// returns NaN

v = mode( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 1`, the function returns `NaN`.

```javascript
var v = mode( 1.0, 0.5 );
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
var mode = require( '@stdlib/stats/base/dists/beta/mode' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + 1.0 + EPS;
    beta = ( randu()*10.0 ) + 1.0 + EPS;
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
#include "stdlib/stats/base/dists/beta/mode.h"
```

#### stdlib_base_dists_beta_mode( alpha, beta )

Returns the [mode][mode] of a [beta][beta-distribution] distribution with parameters `alpha` (first shape parameter) and `beta` (second shape parameter).

```c
double out = stdlib_base_dists_beta_mode( 4.0, 12.0 );
// returns ~0.214
```

The function accepts the following arguments:

-   **alpha**: `[in] double` first shape parameter.
-   **beta**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_beta_mode( const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/beta/mode.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double alpha;
    double beta;
    double y;
    int i;
    for ( i = 0; i < 25; i++ ) {
        alpha = random_uniform( 0.0, 10.0 ) + 1.0 + STDLIB_CONSTANT_FLOAT64_EPS;
        beta = random_uniform( 0.0, 10.0 ) + 1.0 + STDLIB_CONSTANT_FLOAT64_EPS;
        y = stdlib_base_dists_beta_mode( alpha, beta );
        printf( "alpha: %lf, beta: %lf, mode(X;alpha,beta): %lf\n", alpha, beta, y );
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

[beta-distribution]: https://en.wikipedia.org/wiki/Beta_distribution

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

</section>

<!-- /.links -->
