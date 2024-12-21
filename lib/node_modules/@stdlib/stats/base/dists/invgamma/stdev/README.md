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

# Standard Deviation

> [Inverse gamma][invgamma-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for an [inverse gamma][invgamma-distribution] random variable with shape parameter `α` and rate parameter `β` is

<!-- <equation class="equation" label="eq:invgamma_stdev" align="center" raw="\sigma = \frac{\beta}{(\alpha-1)\sqrt{\alpha-2}}" alt="Standard deviation for an inverse gamma distribution."> -->

```math
\sigma = \frac{\beta}{(\alpha-1)\sqrt{\alpha-2}}
```

<!-- <div class="equation" align="center" data-raw-text="\sigma = \frac{\beta}{(\alpha-1)\sqrt{\alpha-2}}" data-equation="eq:invgamma_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/invgamma/stdev/docs/img/equation_invgamma_stdev.svg" alt="Standard deviation for an inverse gamma distribution.">
    <br>
</div> -->

<!-- </equation> -->

when `α > 2`. Otherwise, the standard deviation is not defined.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats/base/dists/invgamma/stdev' );
```

#### stdev( alpha, beta )

Returns the [standard deviation][standard-deviation] of a [inverse gamma][invgamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```javascript
var v = stdev( 7.0, 7.0 );
// returns ~0.522

v = stdev( 4.0, 12.0 );
// returns ~2.828

v = stdev( 8.0, 2.0 );
// returns ~0.117
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = stdev( NaN, 2.0 );
// returns NaN

v = stdev( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 2`, the function returns `NaN`.

```javascript
var v = stdev( 1.0, 1.0 );
// returns NaN

v = stdev( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = stdev( 3.0, 0.0 );
// returns NaN

v = stdev( 3.0, -1.0 );
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
var stdev = require( '@stdlib/stats/base/dists/invgamma/stdev' );

var alpha;
var beta;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*10.0 ) + EPS;
    beta = ( randu()*10.0 ) + EPS;
    v = stdev( alpha, beta );
    console.log( 'α: %d, β: %d, SD(X;α,β): %d', alpha.toFixed( 4 ), beta.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/invgamma/stdev.h"
```

#### stdlib_base_dists_invgamma_stdev( alpha, beta )

Evaluates the [standard deviation][standard-deviation] of a [inverse gamma][invgamma-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (rate parameter).

```c
double out = stdlib_base_dists_invgamma_stdev( 3.0, 5.0 );
// returns ~2.5
```

The function accepts the following arguments:

-   **alpha**: `[in] double` shape parameter.
-   **beta**: `[in] double` rate parameter.

```c
double stdlib_base_dists_invgamma_stdev( const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/invgamma/stdev.h"
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
        alpha = random_uniform( 0.0, 10.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
        beta = random_uniform( 0.0, 10.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
        y = stdlib_base_dists_invgamma_stdev( alpha, beta );
        printf( "α: %lf, β: %lf, SD(X;α,β): %lf\n", alpha, beta, y );
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

[invgamma-distribution]: https://en.wikipedia.org/wiki/Inverse-gamma_distribution

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
