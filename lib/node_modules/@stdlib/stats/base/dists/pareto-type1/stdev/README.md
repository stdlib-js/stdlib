<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

> [Pareto (Type I)][pareto-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [Pareto (Type I)][pareto-distribution] random variable is

<!-- <equation class="equation" label="eq:pareto_type1_stdev" align="center" raw="\operatorname{SD}\left( X \right) = \begin{cases} \infty & \text{for }\alpha\in(0,2] \\ \sqrt{ \frac{\beta^2\alpha}{(\alpha-1)^2(\alpha-2)} } & \text{for }\alpha>2 \end{cases}" alt="Standard deviation for a Pareto (Type I) distribution."> -->

```math
\mathop{\mathrm{SD}}\left( X \right) = \begin{cases} \infty & \text{for }\alpha\in(0,2] \\ \sqrt{ \frac{\beta^2\alpha}{(\alpha-1)^2(\alpha-2)} } & \text{for }\alpha>2 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{SD}\left( X \right) = \begin{cases} \infty &amp; \text{for }\alpha\in(0,2] \\ \sqrt{ \frac{\beta^2\alpha}{(\alpha-1)^2(\alpha-2)} } &amp; \text{for }\alpha&gt;2 \end{cases}" data-equation="eq:pareto_type1_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e1fbdee688c5409e4cc6b0cd06d90b1cd2abd67c/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/stdev/docs/img/equation_pareto_type1_stdev.svg" alt="Standard deviation for a Pareto (Type I) distribution.">
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
var stdev = require( '@stdlib/stats/base/dists/pareto-type1/stdev' );
```

#### stdev( alpha, beta )

Returns the [standard deviation][standard-deviation] of a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var v = stdev( 2.5, 1.0 );
// returns ~1.491

v = stdev( 4.0, 12.0 );
// returns ~5.657

v = stdev( 8.0, 2.0 );
// returns ~0.33
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = stdev( NaN, 2.0 );
// returns NaN

v = stdev( 2.0, NaN );
// returns NaN
```

If provided `0 < alpha <= 2`, the function returns `+Infinity`.

```javascript
var v = stdev( 0.5, 2.0 );
// returns Infinity

v = stdev( 1.5, 1.0 );
// returns Infinity
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var v = stdev( 0.0, 1.0 );
// returns NaN

v = stdev( -1.0, 1.0 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var v = stdev( 1.0, 0.0 );
// returns NaN

v = stdev( 1.0, -1.0 );
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
var stdev = require( '@stdlib/stats/base/dists/pareto-type1/stdev' );

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
#include "stdlib/stats/base/dists/pareto-type1/stdev.h"
```

#### stdlib_base_dists_pareto_type1_stdev( alpha, beta )

Returns the standard deviation of a Pareto (Type I) distribution.

```c
double out = stdlib_base_dists_pareto_type1_stdev( 2.5, 1.0 );
// returns ~1.491
```

The function accepts the following arguments:

-   **alpha**: `[in] double` first shape parameter.
-   **beta**: `[in] double` second shape parameter.

```c
double stdlib_base_dists_pareto_type1_stdev( const double alpha, const double beta );
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
#include "stdlib/stats/base/dists/pareto-type1/stdev.h"
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
        y = stdlib_base_dists_pareto_type1_stdev( alpha, beta );
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

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
