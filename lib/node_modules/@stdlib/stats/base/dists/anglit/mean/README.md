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

# Mean

> [Anglit][anglit-distribution] distribution [expected value][mean].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [mean][mean] of an [Anglit][anglit-distribution] random variable with location parameter `mu` and scale parameter `sigma` is

<!-- <equation class="equation" label="eq:anglit_mean" align="center" raw="\mathbb{E}\left[ X \right] = \mu" alt="Mean for an Anglit distribution."> -->

```math
\mathbb{E}\left[ X \right] = \mu
```

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/anglit/mean' );
```

#### mean( mu, sigma )

Returns the [expected value][mean] of an [Anglit][anglit-distribution] distribution with location parameter `mu` and scale parameter `sigma`.

```javascript
var y = mean( 2.0, 1.0 );
// returns 2.0

y = mean( 0.0, 1.0 );
// returns 0.0

y = mean( -1.0, 4.0 );
// returns -1.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = mean( NaN, 1.0 );
// returns NaN

y = mean( 0.0, NaN );
// returns NaN
```

If provided `sigma <= 0`, the function returns `NaN`.

```javascript
var y = mean( 0.0, 0.0 );
// returns NaN

y = mean( 0.0, -1.0 );
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
var mean = require( '@stdlib/stats/base/dists/anglit/mean' );

var opts = {
    'dtype': 'float64'
};
var mu = uniform( 10, -5.0, 5.0, opts );
var sigma = uniform( 10, 0.1, 20.0, opts );

logEachMap( 'µ: %lf, σ: %lf, E(X;µ,σ): %lf', mu, sigma, mean );
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
#include "stdlib/stats/base/dists/anglit/mean.h"
```

#### stdlib_base_dists_anglit_mean( mu, sigma )

Returns the [expected value][mean] of an [Anglit][anglit-distribution] distribution with location parameter `mu` and scale parameter `sigma`.

```c
double out = stdlib_base_dists_anglit_mean( 2.0, 1.0 );
// returns 2.0
```

The function accepts the following arguments:

-   **mu**: `[in] double` location parameter.
-   **sigma**: `[in] double` scale parameter.

```c
double stdlib_base_dists_anglit_mean( const double mu, const double sigma );
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
#include "stdlib/stats/base/dists/anglit/mean.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double sigma;
    double mu;
    double y;
    int i;

    for ( i = 0; i < 10; i++ ) {
        mu = random_uniform( -5.0, 5.0 );
        sigma = random_uniform( 0.1, 20.0 );
        y = stdlib_base_dists_anglit_mean( mu, sigma );
        printf( "µ: %lf, σ: %lf, E(X;µ,σ): %lf\n", mu, sigma, y );
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

[anglit-distribution]: https://en.wikipedia.org/wiki/Anglit_distribution

[mean]: https://en.wikipedia.org/wiki/Mean

</section>

<!-- /.links -->
