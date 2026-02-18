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

# Variance

> [Wald][wald-distribution] distribution [variance][variance].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [variance][variance] for a [Wald][wald-distribution] random variable with mean `μ` and shape parameter `λ > 0` is

<!-- <equation class="equation" label="eq:wald_variance" align="center" raw="\operatorname{Var}\left[ X \right] = \frac{\mu^{3}}{\lambda}" alt="Variance for a Wald distribution."> -->

```math
\operatorname{Var}\left[ X \right] = \frac{\mu^{3}}{\lambda}
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var variance = require( '@stdlib/stats/base/dists/wald/variance' );
```

#### variance( mu, lambda )

Returns the [variance][variance] for a [Wald][wald-distribution] distribution with parameters `mu` (mean) and `lambda` (shape parameter).

```javascript
var y = variance( 2.0, 1.0 );
// returns 8.0

y = variance( 0.0, 1.0 );
// returns NaN

y = variance( 4.0, -1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = variance( NaN, 1.0 );
// returns NaN

y = variance( 0.0, NaN );
// returns NaN
```

If provided `mu <= 0` or `lambda <= 0`, the function returns `NaN`.

```javascript
var y = variance( 0.0, 0.0 );
// returns NaN

y = variance( 0.0, -1.0 );
// returns NaN

y = variance( -1.0, 0.0 );
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
var EPS = require( '@stdlib/constants/float64/eps' );
var variance = require( '@stdlib/stats/base/dists/wald/variance' );

var opts = {
    'dtype': 'float64'
};
var mu = uniform( 10, EPS, 10.0, opts );
var lambda = uniform( 10, EPS, 20.0, opts );

logEachMap( 'µ: %0.4f, λ: %0.4f, Var(X;µ,λ): %0.4f', mu, lambda, variance );
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
#include "stdlib/stats/base/dists/wald/variance.h"
```

#### stdlib_base_dists_wald_variance( mu, lambda )

Returns the [variance][variance] for a [Wald][wald-distribution] distribution with mean `mu` and shape parameter `lambda`.

```c
double out = stdlib_base_dists_wald_variance( 2.0, 1.0 );
// returns 8.0
```

The function accepts the following arguments:

-   **mu**: `[in] double` mean.
-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_wald_variance( const double mu, const double lambda );
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
#include "stdlib/stats/base/dists/wald/variance.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double mu;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        mu = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 5.0 );
        lambda = random_uniform( STDLIB_CONSTANT_FLOAT64_EPS, 20.0 );
        y = stdlib_base_dists_wald_variance( mu, lambda );
        printf( "µ: %.4f, λ: %.4f, Var(X;µ,λ): %.4f\n", mu, lambda, y );
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

[wald-distribution]: https://en.wikipedia.org/wiki/Inverse_Gaussian_distribution

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->

