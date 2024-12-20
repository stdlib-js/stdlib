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

# Mean

> [Weibull][weibull-distribution] distribution [expected value][expected-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [expected value][expected-value] for a [Weibull][weibull-distribution] random variable is

<!-- <equation class="equation" label="eq:weibull_expectation" align="center" raw="\mathbb{E}\left[ X \right] = \lambda \, \Gamma(1+1/k)" alt="Expected value for a Weibull distribution."> -->

```math
\mathbb{E}\left[ X \right] = \lambda \, \Gamma(1+1/k)
```

<!-- <div class="equation" align="center" data-raw-text="\mathbb{E}\left[ X \right] = \lambda \, \Gamma(1+1/k)" data-equation="eq:weibull_expectation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/weibull/mean/docs/img/equation_weibull_expectation.svg" alt="Expected value for a Weibull distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k > 0` is the shape parameter `λ > 0` is the scale parameter.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mean = require( '@stdlib/stats/base/dists/weibull/mean' );
```

#### mean( k, lambda )

Returns the [expected value][expected-value] of a [Weibull][weibull-distribution] distribution with parameters `k` (shape parameter) and `lambda` (scale parameter).

```javascript
var v = mean( 1.0, 1.0 );
// returns 1.0

v = mean( 4.0, 12.0 );
// returns ~10.877

v = mean( 8.0, 2.0 );
// returns ~1.883
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var v = mean( NaN, 2.0 );
// returns NaN

v = mean( 2.0, NaN );
// returns NaN
```

If provided `k <= 0`, the function returns `NaN`.

```javascript
var v = mean( 0.0, 1.0 );
// returns NaN

v = mean( -1.0, 1.0 );
// returns NaN
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var v = mean( 1.0, 0.0 );
// returns NaN

v = mean( 1.0, -1.0 );
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
var mean = require( '@stdlib/stats/base/dists/weibull/mean' );

var lambda;
var k;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    k = ( randu()*10.0 ) + EPS;
    lambda = ( randu()*10.0 ) + EPS;
    v = mean( k, lambda );
    console.log( 'k: %d, λ: %d, E(X;k,λ): %d', k.toFixed( 4 ), lambda.toFixed( 4 ), v.toFixed( 4 ) );
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
#include "stdlib/stats/base/dists/weibull/mean.h"
```

#### stdlib_base_dists_weibull_mean( k, lambda )

Evaluates the mean for an weibull distribution.

```c
double out = stdlib_base_dists_weibull_mean( 4.0, 12.0 );
// returns ~10.877
```

The function accepts the following arguments:

-   **k**: `[in] double` shape parameter.
-   **λ**: `[in] double` scale parameter.

```c
double stdlib_base_dists_weibull_mean( const double k, const double λ );
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
#include "stdlib/stats/base/dists/weibull/mean.h"
#include "stdlib/constants/float64/eps.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double lambda;
    double k;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        k = random_uniform( 0.0, 10.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
        lambda = random_uniform( 0.0, 10.0 ) + STDLIB_CONSTANT_FLOAT64_EPS;
        y = stdlib_base_dists_weibull_mean( k, lambda );
        printf( "k: %lf, λ: %lf, E(X;k,λ): %lf\n", k, lambda, y );
    }
}
```

</section>

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

[weibull-distribution]: https://en.wikipedia.org/wiki/Weibull_distribution

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

</section>

<!-- /.links -->
