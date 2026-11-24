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

# Entropy

> [Pareto (Type I)][pareto-distribution] distribution [differential entropy][entropy].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [differential entropy][entropy] (in [nats][nats]) for a [Pareto (Type I)][pareto-distribution] random variable is

<!-- <equation class="equation" label="eq:pareto_type1_entropy" align="center" raw="h\left( X \right) =  \ln\left(\left({\frac{\beta}{\alpha}}\right) \, e^{1+{\tfrac{1}{\alpha }}}\right)" alt="Differential entropy for a Pareto (Type I) distribution."> -->

```math
h\left( X \right) =  \ln\left(\left({\frac{\beta}{\alpha}}\right) \, e^{1+{\tfrac{1}{\alpha }}}\right)
```

<!-- <div class="equation" align="center" data-raw-text="h\left( X \right) =  \ln\left(\left({\frac{\beta}{\alpha}}\right) \, e^{1+{\tfrac{1}{\alpha }}}\right)" data-equation="eq:pareto_type1_entropy">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/entropy/docs/img/equation_pareto_type1_entropy.svg" alt="Differential entropy for a Pareto (Type I) distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `α > 0` is the shape parameter and `β > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var entropy = require( '@stdlib/stats/base/dists/pareto-type1/entropy' );
```

#### entropy( alpha, beta )

Returns the [differential entropy][entropy] of a [Pareto (Type I)][pareto-distribution] distribution with parameters shape parameter `alpha` and scale parameter `beta` (in [nats][nats]).

```javascript
var v = entropy( 2.0, 1.0 );
// returns ~0.807

v = entropy( 4.0, 12.0 );
// returns ~2.349

v = entropy( 8.0, 2.0 );
// returns ~-0.261
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = entropy( NaN, 2.0 );
// returns NaN

v = entropy( 2.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 0.0, 1.0 );
// returns NaN

v = entropy( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = entropy( 1.0, 0.0 );
// returns NaN

v = entropy( 1.0, -1.0 );
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
var EPS = require( '@stdlib/constants/float64/eps' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var entropy = require( '@stdlib/stats/base/dists/pareto-type1/entropy' );

var opts = {
    'dtype': 'float64'
};
var alpha = uniform( 10, EPS, 10.0, opts );
var beta = uniform( 10, EPS, 10.0, opts );

logEachMap( 'α: %0.4f, β: %0.4f, h(X;α,β): %0.4f', alpha, beta, entropy );
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
#include "stdlib/stats/base/dists/pareto-type1/entropy.h"
```

#### stdlib_base_dists_pareto_type1_entropy( alpha, beta )

Returns the differential entropy of a Pareto (Type I) distribution.

```c
double out = stdlib_base_dists_pareto_type1_entropy( 4.0, 12.0 );
// returns ~2.349
```

The function accepts the following arguments:

-   **alpha**: `[in] double` shape parameter.
-   **beta**: `[in] double` scale parameter.

```c
double stdlib_base_dists_pareto_type1_entropy( const double alpha, const double beta );

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
#include "stdlib/stats/base/dists/pareto-type1/entropy.h"
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
        alpha = random_uniform( 0.0, 10.0 );
        beta = random_uniform( 0.0, 10.0 );
        y = stdlib_base_dists_pareto_type1_entropy( alpha, beta );
        printf( "α: %lf, β: %lf, h(X;α,β): %lf\n", alpha, beta, y );
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

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[nats]: https://en.wikipedia.org/wiki/Nat_%28unit%29

</section>

<!-- /.links -->
